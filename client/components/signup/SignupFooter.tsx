const SignupFooter = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">TaleTree Inc.</h4>
            <p className="text-gray-300 text-sm">
              149 Barrow St, Floor 2nd, New York, NY 10014, USA
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Server Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Follow us</h5>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            2024, TaleTree Inc. All rights reserved. | Email:
            contact@taletree.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SignupFooter;
