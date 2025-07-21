import React from "react";

interface MagicalPortalProps {
  children?: React.ReactNode;
  className?: string;
}

// Magical dust particles scattered around and inside portal
const MagicalDust = ({ x, y, size = 1, opacity = 0.7 }: { x: number; y: number; size?: number; opacity?: number }) => (
  <div
    className="absolute rounded-full animate-pulse"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: '#FFD700',
      boxShadow: `0 0 ${size * 3}px #FFD700`,
      opacity,
    }}
  />
);

// Four-pointed glowing star
const FourPointedStar = ({ x, y, size = 16 }: { x: number; y: number; size?: number }) => (
  <div
    className="absolute animate-pulse"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)',
    }}
  >
    {/* Vertical ray */}
    <div
      className="absolute bg-yellow-300"
      style={{
        width: '2px',
        height: `${size}px`,
        left: '50%',
        top: '0',
        transform: 'translateX(-50%)',
        boxShadow: `0 0 ${size}px #FFD700, 0 0 ${size * 2}px #FFB800`,
      }}
    />
    {/* Horizontal ray */}
    <div
      className="absolute bg-yellow-300"
      style={{
        width: `${size}px`,
        height: '2px',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        boxShadow: `0 0 ${size}px #FFD700, 0 0 ${size * 2}px #FFB800`,
      }}
    />
    {/* Center point */}
    <div
      className="absolute bg-yellow-100 rounded-full"
      style={{
        width: '4px',
        height: '4px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 8px #FFFFFF, 0 0 16px #FFD700',
      }}
    />
  </div>
);

export const MagicalPortal: React.FC<MagicalPortalProps> = ({ children, className = "" }) => {
  // Scattered dust positions - inside and around portal
  const dustParticles = [
    // Inside portal
    { x: 45, y: 30, size: 1.5, opacity: 0.8 },
    { x: 55, y: 45, size: 1, opacity: 0.6 },
    { x: 35, y: 50, size: 1.2, opacity: 0.7 },
    { x: 65, y: 35, size: 1, opacity: 0.5 },
    { x: 40, y: 65, size: 1.8, opacity: 0.9 },
    { x: 60, y: 60, size: 1, opacity: 0.6 },
    { x: 50, y: 25, size: 1.3, opacity: 0.7 },
    { x: 30, y: 40, size: 1, opacity: 0.5 },
    { x: 70, y: 55, size: 1.4, opacity: 0.8 },
    
    // Around portal
    { x: 15, y: 20, size: 2, opacity: 0.9 },
    { x: 85, y: 25, size: 1.5, opacity: 0.7 },
    { x: 10, y: 50, size: 1.8, opacity: 0.8 },
    { x: 90, y: 45, size: 1.2, opacity: 0.6 },
    { x: 20, y: 80, size: 2.2, opacity: 1 },
    { x: 80, y: 75, size: 1.6, opacity: 0.8 },
    { x: 5, y: 70, size: 1.4, opacity: 0.7 },
    { x: 95, y: 65, size: 1.3, opacity: 0.6 },
    { x: 25, y: 10, size: 1.7, opacity: 0.8 },
    { x: 75, y: 15, size: 1.1, opacity: 0.5 },
    { x: 12, y: 35, size: 1.5, opacity: 0.7 },
    { x: 88, y: 60, size: 1.9, opacity: 0.9 },
  ];

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Dark magical background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 30%, rgba(138, 43, 226, 0.3) 0%, transparent 70%),
            radial-gradient(circle at 75% 70%, rgba(75, 0, 130, 0.2) 0%, transparent 70%),
            linear-gradient(180deg, #1A0C2A 0%, #0f0520 50%, #1A0C2A 100%)
          `
        }}
      />

      {/* Scattered magical dust particles */}
      {dustParticles.map((dust, index) => (
        <MagicalDust
          key={`dust-${index}`}
          x={dust.x}
          y={dust.y}
          size={dust.size}
          opacity={dust.opacity}
        />
      ))}

      {/* Two main four-pointed stars */}
      <FourPointedStar x={22} y={35} size={20} />
      <FourPointedStar x={78} y={75} size={18} />

      {/* Portal container */}
      <div className="relative">
        {/* Outer soft diffuse glow - Layer 1 (Largest, most diffuse) */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse at center,
                rgba(255, 215, 0, 0.15) 0%,
                rgba(255, 184, 0, 0.12) 20%,
                rgba(255, 165, 0, 0.08) 35%,
                rgba(254, 207, 77, 0.05) 50%,
                rgba(255, 140, 0, 0.03) 70%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(40px)',
            transform: 'scale(2.0)',
          }}
        />

        {/* Outer soft diffuse glow - Layer 2 (Medium) */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse at center,
                rgba(255, 215, 0, 0.25) 0%,
                rgba(255, 184, 0, 0.18) 25%,
                rgba(255, 165, 0, 0.12) 45%,
                rgba(254, 207, 77, 0.08) 65%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(30px)',
            transform: 'scale(1.6)',
            animationDelay: '0.5s',
          }}
        />

        {/* Outer soft diffuse glow - Layer 3 (Closer to portal) */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse at center,
                rgba(255, 215, 0, 0.35) 0%,
                rgba(255, 184, 0, 0.25) 30%,
                rgba(255, 165, 0, 0.15) 55%,
                rgba(254, 207, 77, 0.1) 75%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(20px)',
            transform: 'scale(1.3)',
            animationDelay: '1s',
          }}
        />

        {/* Subtle aura around edges */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse at center,
                transparent 60%,
                rgba(255, 215, 0, 0.08) 70%,
                rgba(255, 184, 0, 0.06) 80%,
                rgba(255, 165, 0, 0.04) 90%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(50px)',
            transform: 'scale(2.5)',
            animationDelay: '1.5s',
          }}
        />

        {/* Main portal shape */}
        <div
          className="relative"
          style={{
            width: '300px',
            height: '400px',
            borderRadius: '150px 150px 20px 20px',
            background: `
              linear-gradient(180deg,
                rgba(26, 12, 42, 0.95) 0%,
                rgba(26, 12, 42, 0.98) 30%,
                rgba(15, 5, 32, 1) 70%,
                rgba(0, 0, 0, 1) 100%
              )
            `,
            border: '6px solid transparent',
            boxShadow: `
              inset 0 0 0 6px #FFD700,
              0 0 30px #FFD700,
              0 0 60px #FFB800,
              0 0 90px rgba(254, 207, 77, 0.5),
              inset 0 0 30px rgba(255, 215, 0, 0.2)
            `,
          }}
        >
          {/* Inner glow gradient */}
          <div
            className="absolute inset-2 animate-pulse"
            style={{
              borderRadius: '147px 147px 17px 17px',
              background: `
                radial-gradient(ellipse at center top,
                  rgba(255, 215, 0, 0.1) 0%,
                  rgba(255, 184, 0, 0.05) 30%,
                  transparent 70%
                )
              `,
            }}
          />

          {/* Pulsing border animation */}
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              borderRadius: '150px 150px 20px 20px',
              border: '2px solid transparent',
              background: `
                linear-gradient(45deg, #FFD700, #FFB800, #FECF4D, #FFD700) border-box
              `,
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'subtract',
            }}
          />

          {/* Content area */}
          <div 
            className="absolute inset-8 flex items-center justify-center"
            style={{
              borderRadius: '135px 135px 12px 12px',
            }}
          >
            {children}
          </div>

          {/* Additional inner magical dust */}
          <MagicalDust x={25} y={20} size={1} opacity={0.4} />
          <MagicalDust x={75} y={30} size={1.2} opacity={0.6} />
          <MagicalDust x={35} y={75} size={0.8} opacity={0.5} />
          <MagicalDust x={65} y={80} size={1.1} opacity={0.7} />
          <MagicalDust x={50} y={40} size={0.9} opacity={0.4} />
          <MagicalDust x={40} y={55} size={1.3} opacity={0.8} />
          <MagicalDust x={60} y={25} size={0.7} opacity={0.3} />
        </div>

        {/* Dreamy ambient glow - Final layer */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse at center,
                transparent 50%,
                rgba(255, 215, 0, 0.06) 65%,
                rgba(255, 184, 0, 0.04) 80%,
                rgba(254, 207, 77, 0.02) 90%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(60px)',
            transform: 'scale(1.8)',
            animationDelay: '2s',
          }}
        />

        {/* Soft edge aura */}
        <div
          className="absolute inset-0"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse at center,
                transparent 70%,
                rgba(255, 215, 0, 0.03) 85%,
                rgba(255, 184, 0, 0.02) 95%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(80px)',
            transform: 'scale(3.0)',
          }}
        />
      </div>

      {/* Additional scattered sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small twinkling particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              backgroundColor: '#FECF4D',
              boxShadow: '0 0 4px #FFD700',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MagicalPortal;
