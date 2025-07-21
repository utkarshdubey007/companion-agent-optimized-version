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

      {/* Large glowing 4-point star sparkles */}
      {/* Top-left sparkle */}
      <div
        className="absolute"
        style={{
          left: '20%',
          top: '20%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          {/* Main diamond star shape */}
          <div
            className="absolute animate-pulse transform rotate-45"
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#FFD700',
              borderRadius: '2px',
              filter: 'blur(1px)',
              boxShadow: `
                0 0 20px #FFD700,
                0 0 40px #FFD700,
                0 0 60px rgba(255, 215, 0, 0.5),
                inset 0 0 8px rgba(255, 255, 255, 0.3)
              `,
              animationDuration: '3s',
            }}
          />
          {/* Outer glow effect */}
          <div
            className="absolute transform rotate-45"
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'rgba(255, 215, 0, 0.3)',
              borderRadius: '3px',
              filter: 'blur(4px)',
              left: '-2px',
              top: '-2px',
              animation: 'starGlow 4s ease-in-out infinite',
            }}
          />
          {/* Center bright point */}
          <div
            className="absolute transform rotate-45"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#FFFFFF',
              borderRadius: '1px',
              left: '4px',
              top: '4px',
              opacity: '0.8',
              animation: 'starPulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Bottom-right sparkle */}
      <div
        className="absolute"
        style={{
          right: '22%',
          bottom: '22%',
          transform: 'translate(50%, 50%)',
        }}
      >
        <div className="relative">
          {/* Main diamond star shape */}
          <div
            className="absolute animate-pulse transform rotate-45"
            style={{
              width: '14px',
              height: '14px',
              backgroundColor: '#FFD700',
              borderRadius: '2px',
              filter: 'blur(1px)',
              boxShadow: `
                0 0 18px #FFD700,
                0 0 36px #FFD700,
                0 0 54px rgba(255, 215, 0, 0.4),
                inset 0 0 6px rgba(255, 255, 255, 0.4)
              `,
              animationDuration: '3.5s',
              animationDelay: '1s',
            }}
          />
          {/* Outer glow effect */}
          <div
            className="absolute transform rotate-45"
            style={{
              width: '18px',
              height: '18px',
              backgroundColor: 'rgba(255, 215, 0, 0.25)',
              borderRadius: '3px',
              filter: 'blur(3px)',
              left: '-2px',
              top: '-2px',
              animation: 'starGlow 4.5s ease-in-out infinite',
              animationDelay: '1.5s',
            }}
          />
          {/* Center bright point */}
          <div
            className="absolute transform rotate-45"
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#FFFFFF',
              borderRadius: '1px',
              left: '4px',
              top: '4px',
              opacity: '0.9',
              animation: 'starPulse 2.5s ease-in-out infinite',
              animationDelay: '0.5s',
            }}
          />
        </div>
      </div>

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
                rgba(255, 179, 0, 0.12) 20%,
                rgba(255, 167, 38, 0.08) 35%,
                rgba(255, 138, 0, 0.05) 50%,
                rgba(255, 111, 0, 0.03) 70%,
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
                rgba(255, 179, 0, 0.20) 25%,
                rgba(255, 167, 38, 0.15) 45%,
                rgba(255, 138, 0, 0.10) 65%,
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
                rgba(255, 215, 0, 0.40) 0%,
                rgba(255, 179, 0, 0.30) 30%,
                rgba(255, 167, 38, 0.20) 55%,
                rgba(255, 138, 0, 0.12) 75%,
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

        {/* Main portal shape with enhanced double-layered border */}
        <div
          className="relative portal-main"
          style={{
            width: '300px',
            height: '400px',
            borderRadius: '150px 150px 20px 20px',
            background: `
              radial-gradient(ellipse at center,
                rgba(0, 0, 0, 1) 0%,
                rgba(8, 4, 16, 0.98) 15%,
                rgba(15, 8, 30, 0.95) 30%,
                rgba(26, 12, 42, 0.9) 50%,
                rgba(35, 18, 60, 0.85) 70%,
                rgba(45, 25, 75, 0.8) 85%,
                rgba(55, 30, 90, 0.75) 100%
              )
            `,
            border: '4px solid #FFB300',
            boxShadow: `
              inset 0 0 0 2px #FFD700,
              inset 0 0 80px rgba(0, 0, 0, 0.8),
              inset 0 0 120px rgba(0, 0, 0, 0.6),
              inset 20px 20px 60px rgba(0, 0, 0, 0.4),
              inset -20px -20px 60px rgba(0, 0, 0, 0.4),
              inset 0 40px 80px rgba(0, 0, 0, 0.5),
              0 0 20px rgba(255, 215, 0, 0.9),
              0 0 40px rgba(255, 179, 0, 0.7),
              0 0 60px rgba(255, 167, 38, 0.5),
              0 0 80px rgba(255, 138, 0, 0.3),
              inset 0 0 30px rgba(255, 215, 0, 0.08)
            `,
          }}
        >
          {/* Depth enhancement layer */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '150px 150px 20px 20px',
              background: `
                radial-gradient(ellipse at center,
                  transparent 0%,
                  transparent 20%,
                  rgba(0, 0, 0, 0.1) 40%,
                  rgba(0, 0, 0, 0.3) 70%,
                  rgba(0, 0, 0, 0.5) 90%,
                  rgba(0, 0, 0, 0.7) 100%
                )
              `,
            }}
          />

          {/* Tunnel depth illusion */}
          <div
            className="absolute inset-4"
            style={{
              borderRadius: '146px 146px 16px 16px',
              background: `
                radial-gradient(ellipse at center,
                  transparent 0%,
                  rgba(0, 0, 0, 0.2) 30%,
                  rgba(0, 0, 0, 0.4) 60%,
                  rgba(0, 0, 0, 0.6) 80%,
                  rgba(0, 0, 0, 0.8) 100%
                )
              `,
            }}
          />

          {/* Edge illumination with golden-orange blend */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '150px 150px 20px 20px',
              background: `
                radial-gradient(ellipse at center,
                  transparent 60%,
                  rgba(255, 215, 0, 0.05) 70%,
                  rgba(255, 179, 0, 0.08) 80%,
                  rgba(255, 167, 38, 0.12) 90%,
                  rgba(255, 138, 0, 0.15) 100%
                )
              `,
            }}
          />
          {/* Inner glow gradient - blends with dark fill */}
          <div
            className="absolute inset-2 animate-pulse"
            style={{
              borderRadius: '147px 147px 17px 17px',
              background: `
                radial-gradient(ellipse at center,
                  transparent 40%,
                  rgba(255, 215, 0, 0.08) 60%,
                  rgba(255, 184, 0, 0.12) 75%,
                  rgba(254, 207, 77, 0.15) 85%,
                  rgba(255, 140, 0, 0.1) 95%,
                  transparent 100%
                )
              `,
            }}
          />

          {/* Subtle edge transition for smooth blending */}
          <div
            className="absolute inset-1"
            style={{
              borderRadius: '148px 148px 18px 18px',
              background: `
                radial-gradient(ellipse at center,
                  transparent 50%,
                  rgba(45, 25, 75, 0.3) 75%,
                  rgba(35, 18, 60, 0.5) 90%,
                  rgba(26, 12, 42, 0.7) 100%
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

      {/* Large number of magical glowing particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dense magical particle field */}
        {Array.from({ length: 80 }, (_, i) => {
          const size = Math.random() * 3 + 1; // 1px to 4px
          const colors = ['#FFD700', '#FFB800', '#FECF4D', '#FF8C00', '#FFA500'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const animations = ['animate-ping', 'animate-pulse', ''];
          const animation = animations[Math.floor(Math.random() * animations.length)];
          const x = Math.random() * 100;
          const y = Math.random() * 100;

          return (
            <div
              key={`magical-particle-${i}`}
              className={`absolute rounded-full ${animation}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 3}px ${color}, 0 0 ${size * 6}px ${color}40`,
                filter: `blur(${size * 0.2}px)`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.6 + Math.random() * 0.4,
              }}
            />
          );
        })}

        {/* Extra dense particles inside portal area */}
        {Array.from({ length: 40 }, (_, i) => {
          const size = Math.random() * 2.5 + 0.8; // 0.8px to 3.3px
          const colors = ['#FFD700', '#FFEB3B', '#FFC107', '#FFB800'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          // Position within portal bounds (roughly center 30% of screen)
          const x = 35 + Math.random() * 30;
          const y = 25 + Math.random() * 50;

          return (
            <div
              key={`portal-particle-${i}`}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 4}px ${color}80, 0 0 ${size * 8}px ${color}40`,
                filter: `blur(${size * 0.3}px)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 2.5}s`,
                opacity: 0.4 + Math.random() * 0.5,
              }}
            />
          );
        })}

        {/* Shimmering particles with scale animation */}
        {Array.from({ length: 35 }, (_, i) => {
          const size = Math.random() * 2 + 1; // 1px to 3px
          const colors = ['#FFD700', '#FF8C00', '#FFA500', '#FFAB00'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const x = Math.random() * 100;
          const y = Math.random() * 100;

          return (
            <div
              key={`shimmer-particle-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 3}px ${color}90, inset 0 0 ${size}px rgba(255,255,255,0.3)`,
                filter: `blur(${size * 0.25}px)`,
                animation: `magicalShimmer ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.5 + Math.random() * 0.4,
              }}
            />
          );
        })}

        {/* Twinkling micro particles */}
        {Array.from({ length: 60 }, (_, i) => {
          const size = Math.random() * 1.5 + 0.5; // 0.5px to 2px
          const colors = ['#FFEB3B', '#FFF176', '#FFD54F', '#FFCA28'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const x = Math.random() * 100;
          const y = Math.random() * 100;

          return (
            <div
              key={`twinkle-micro-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
                animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: 0.3 + Math.random() * 0.6,
              }}
            />
          );
        })}
      </div>

      {/* Custom keyframe animations and portal border styles */}
      <style>{`
        @keyframes magicalShimmer {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.9;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          25% {
            opacity: 0.8;
            transform: scale(1.1);
          }
          75% {
            opacity: 0.6;
            transform: scale(0.9);
          }
        }

        @keyframes starGlow {
          0%, 100% {
            opacity: 0.3;
            transform: rotate(45deg) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: rotate(45deg) scale(1.2);
          }
        }

        @keyframes starPulse {
          0%, 100% {
            opacity: 0.6;
            transform: rotate(45deg) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: rotate(45deg) scale(1.1);
          }
        }

        @keyframes portalGlow {
          0%, 100% {
            box-shadow:
              0 0 30px rgba(255, 204, 0, 0.5),
              0 0 50px rgba(255, 204, 0, 0.3),
              0 0 80px rgba(255, 204, 0, 0.2);
            opacity: 0.8;
          }
          50% {
            box-shadow:
              0 0 40px rgba(255, 204, 0, 0.8),
              0 0 70px rgba(255, 204, 0, 0.5),
              0 0 100px rgba(255, 204, 0, 0.3);
            opacity: 1;
          }
        }

        .portal-main::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border-radius: 158px 158px 28px 28px;
          background: transparent;
          border: 2px solid rgba(255, 215, 0, 0.6);
          box-shadow:
            0 0 40px rgba(255, 204, 0, 0.5),
            0 0 60px rgba(255, 204, 0, 0.3),
            inset 0 0 20px rgba(255, 215, 0, 0.2);
          animation: portalGlow 3s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        .portal-main::after {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border-radius: 165px 165px 35px 35px;
          background: transparent;
          box-shadow:
            0 0 60px rgba(255, 204, 0, 0.4),
            0 0 90px rgba(255, 204, 0, 0.2),
            0 0 120px rgba(255, 204, 0, 0.1);
          filter: blur(3px);
          animation: portalGlow 4s ease-in-out infinite;
          animation-delay: 1s;
          pointer-events: none;
          z-index: -2;
        }
      `}</style>
    </div>
  );
};

export default MagicalPortal;
