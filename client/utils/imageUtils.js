import heic2any from 'heic2any';
import ImageBlobReduce from 'image-blob-reduce';
import Pica from "pica";

function handleNonHeicImages(file) {
  return new Promise((resolve, reject) => {
    compressImage(file)
      .then((image) => {
        const metaData = {
          name: file.name,
          lastModifiedDate: file.lastModifiedDate,
          type: file.type,
          size: file.size,
        };
        const currFile = new File([image], metaData.name, metaData);
        const imageFile = addImagePreviewToFile(currFile);
        resolve(imageFile);
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      }
      );
  });
}

function addImagePreviewToFile(file) {
  return Object.assign(file, {
    preview: URL.createObjectURL(file),
  });
}

function handleHeic(file) {
  return new Promise((resolve, reject) => {
    heic2any({
      blob: file,
      toType: 'image/jpeg',
    })
      .then((conversionResult) => {
        return compressImage(conversionResult);
      })
      .then((blob) => {
        const metaData = {
          name: file.name + '.jpeg',
          lastModifiedDate: file.lastModifiedDate,
          type: blob.type,
          size: blob.size,
        };
        const currFile = new File([blob], metaData.name, metaData);
        const imageFile = addImagePreviewToFile(currFile);
        resolve(imageFile);
      })
      .catch((e) => {
        console.log(e)
        reject(e);
      });
  });
}

function compressImage(file) {
  const pica = Pica({ features: ["js", "wasm", "cib"] });
  const imageBlobReduce = ImageBlobReduce;
  const reducer = new imageBlobReduce({ pica });
  return new Promise((resolve, reject) => {
    reducer
      .toBlob(file, {
        max: 800, // Reduced from 1080 to 800 for smaller file sizes
        quality: 0.8, // Added quality setting (80% quality)
        unsharpAmount: 80,
        unsharpRadius: 0.6,
        unsharpThreshold: 2,
      })
      .then((blob) => {
        console.log(`Image compressed: ${(file.size / 1024 / 1024).toFixed(2)}MB → ${(blob.size / 1024 / 1024).toFixed(2)}MB (${((1 - blob.size / file.size) * 100).toFixed(1)}% reduction)`);
        resolve(blob)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      });
  });
}

function getImagePromise(file) {
  try {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    let imagePromise;
    if (fileExtension === 'heic') {
      imagePromise = handleHeic(file);
    } else {
      imagePromise = handleNonHeicImages(file);
    }
    return imagePromise;
  } catch (error) {
    console.log(error)
  }
}

const convertImageToBinary = (file) => {
  // Create a new FileReader instance
  const image = new Image();
  image.setAttribute('crossorigin', 'anonymous');
  image.src = file;

  // Event handler for image load
  return new Promise((resolve, reject) => {
    image.onload = () => {
      // Create a canvas to draw the image
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);

      // Convert the canvas content to Blob
      canvas.toBlob((blob) => {
        // Use the blob as needed (e.g., send to server)
        const myFile = new File([blob], 'image.jpeg', {
          type: 'image/jpeg',
        });
        resolve(myFile)
      });
    }
  })
}

export const imageUtils = {
  getImagePromise,
  convertImageToBinary
};
