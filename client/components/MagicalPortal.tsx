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
      {/* Rich velvety background - Deep purple center to warm amber edges */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center,
              #000000 0%,
              #0d0519 15%,
              #1a0b2e 30%,
              #2b1549 45%,
              #3d1f5c 60%,
              #5d2d6f 75%,
              #8b4b7f 85%,
              #b8698a 92%,
              #d18a6b 96%,
              #e6a34a 98%,
              #f5c85f 100%
            )
          `
        }}
      />

      {/* Secondary warm gradient layer for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%,
              rgba(186, 85, 211, 0.15) 0%,
              rgba(123, 104, 238, 0.12) 25%,
              transparent 60%
            ),
            radial-gradient(circle at 70% 80%,
              rgba(255, 140, 0, 0.1) 0%,
              rgba(255, 165, 0, 0.08) 30%,
              transparent 65%
            )
          `
        }}
      />

      {/* Soft magical haze overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center,
              transparent 0%,
              transparent 30%,
              rgba(138, 43, 226, 0.05) 50%,
              rgba(75, 0, 130, 0.08) 70%,
              rgba(25, 25, 112, 0.12) 85%,
              rgba(0, 0, 0, 0.2) 100%
            )
          `
        }}
      />

      {/* Ambient background stars - Small glowing dots */}
      {Array.from({ length: 25 }, (_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 0.5; // 0.5px to 2.5px
        const colors = ['#FFD700', '#DDA0DD', '#E6E6FA', '#F0E68C', '#DA70D6'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 4;

        return (
          <div
            key={`ambient-star-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              opacity: 0.3 + Math.random() * 0.4,
              animation: `ambientTwinkle ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              filter: `blur(${size * 0.1}px)`,
            }}
          />
        );
      })}

      {/* Larger ambient stars with purple hues */}
      {Array.from({ length: 8 }, (_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1; // 1px to 4px
        const purpleColors = ['#DDA0DD', '#DA70D6', '#BA55D3', '#9370DB', '#8A2BE2'];
        const color = purpleColors[Math.floor(Math.random() * purpleColors.length)];
        const delay = Math.random() * 6;
        const duration = 4 + Math.random() * 3;

        return (
          <div
            key={`ambient-purple-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: `0 0 ${size * 6}px ${color}60, 0 0 ${size * 12}px ${color}30`,
              opacity: 0.2 + Math.random() * 0.3,
              animation: `ambientGlow ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              filter: `blur(${size * 0.15}px)`,
            }}
          />
        );
      })}

      {/* Distant cosmic glow effects */}
      {Array.from({ length: 4 }, (_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 8 + 4; // 4px to 12px
        const cosmicColors = ['#4169E1', '#6495ED', '#87CEEB', '#B0C4DE'];
        const color = cosmicColors[Math.floor(Math.random() * cosmicColors.length)];
        const delay = Math.random() * 8;

        return (
          <div
            key={`cosmic-glow-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, ${color}40 0%, ${color}20 30%, transparent 70%)`,
              opacity: 0.1 + Math.random() * 0.2,
              animation: `cosmicPulse ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              filter: `blur(${size * 0.3}px)`,
            }}
          />
        );
      })}

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
        {/* Soft ambient golden-orange aura - Layer 1 (Wide diffusion) */}
        <div
          className="absolute inset-0"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse 120% 150% at center 30%,
                rgba(255, 215, 0, 0.08) 0%,
                rgba(255, 179, 0, 0.06) 15%,
                rgba(255, 167, 38, 0.04) 30%,
                rgba(255, 138, 0, 0.03) 45%,
                rgba(255, 111, 0, 0.02) 60%,
                rgba(255, 95, 31, 0.01) 75%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(60px)',
            transform: 'scale(3.5)',
            opacity: 0.7,
          }}
        />

        {/* Warm misty glow - Layer 2 (Medium diffusion) */}
        <div
          className="absolute inset-0"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse 100% 120% at center 25%,
                rgba(255, 215, 0, 0.12) 0%,
                rgba(255, 179, 0, 0.09) 20%,
                rgba(255, 167, 38, 0.07) 35%,
                rgba(255, 138, 0, 0.05) 50%,
                rgba(255, 111, 0, 0.03) 65%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(45px)',
            transform: 'scale(2.8)',
            opacity: 0.6,
            animation: 'softBreathing 8s ease-in-out infinite',
          }}
        />

        {/* Dreamy close aura - Layer 3 (Closer to portal) */}
        <div
          className="absolute inset-0"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse 80% 100% at center 20%,
                rgba(255, 215, 0, 0.18) 0%,
                rgba(255, 179, 0, 0.14) 25%,
                rgba(255, 167, 38, 0.10) 45%,
                rgba(255, 138, 0, 0.07) 65%,
                rgba(255, 111, 0, 0.04) 80%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(35px)',
            transform: 'scale(2.2)',
            animation: 'softBreathing 6s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* Organic ambient haze */}
        <div
          className="absolute inset-0"
          style={{
            width: '300px',
            height: '400px',
            background: `
              radial-gradient(ellipse 150% 180% at center 15%,
                transparent 40%,
                rgba(255, 215, 0, 0.04) 55%,
                rgba(255, 179, 0, 0.03) 70%,
                rgba(255, 167, 38, 0.02) 80%,
                rgba(255, 138, 0, 0.015) 90%,
                transparent 100%
              )
            `,
            borderRadius: '150px 150px 20px 20px',
            filter: 'blur(80px)',
            transform: 'scale(4.0)',
            opacity: 0.5,
          }}
        />

        {/* Outer glowing border ring - diffuses outward */}
        <div
          className="absolute portal-outer-ring"
          style={{
            width: '320px',
            height: '420px',
            left: '-10px',
            top: '-10px',
            borderRadius: '160px 160px 30px 30px',
            background: `
              linear-gradient(135deg,
                rgba(255, 215, 0, 0.15) 0%,
                rgba(255, 179, 0, 0.12) 25%,
                rgba(255, 167, 38, 0.10) 50%,
                rgba(255, 138, 0, 0.08) 75%,
                rgba(255, 111, 0, 0.06) 100%
              )
            `,
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
            boxShadow: `
              inset 0 0 0 2px rgba(255, 215, 0, 0.4),
              0 0 40px rgba(255, 215, 0, 0.3),
              0 0 70px rgba(255, 179, 0, 0.25),
              0 0 100px rgba(255, 167, 38, 0.2),
              0 0 140px rgba(255, 138, 0, 0.15)
            `,
            animation: 'outerRingGlow 6s ease-in-out infinite',
          }}
        />

        {/* Inner defined border ring - glows inward */}
        <div
          className="absolute portal-inner-ring"
          style={{
            width: '310px',
            height: '410px',
            left: '-5px',
            top: '-5px',
            borderRadius: '155px 155px 25px 25px',
            background: `
              linear-gradient(120deg,
                rgba(255, 215, 0, 0.25) 0%,
                rgba(255, 179, 0, 0.20) 30%,
                rgba(255, 167, 38, 0.18) 60%,
                rgba(255, 138, 0, 0.15) 100%
              )
            `,
            border: '1px solid transparent',
            backgroundClip: 'padding-box',
            boxShadow: `
              inset 0 0 0 1px rgba(255, 215, 0, 0.6),
              inset 0 0 20px rgba(255, 215, 0, 0.2),
              inset 0 0 40px rgba(255, 179, 0, 0.15),
              inset 0 0 60px rgba(255, 167, 38, 0.1),
              0 0 25px rgba(255, 215, 0, 0.4),
              0 0 50px rgba(255, 179, 0, 0.3)
            `,
            animation: 'innerRingGlow 4s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />

        {/* Main portal body with magical void depth */}
        <div
          className="relative portal-main"
          style={{
            width: '300px',
            height: '400px',
            borderRadius: '150px 150px 20px 20px',
            background: `
              radial-gradient(ellipse 85% 90% at center 40%,
                rgba(255, 215, 0, 0.15) 0%,
                rgba(255, 179, 0, 0.12) 8%,
                rgba(186, 85, 211, 0.1) 16%,
                rgba(138, 43, 226, 0.08) 24%,
                rgba(75, 0, 130, 0.06) 32%,
                rgba(45, 25, 75, 0.04) 42%,
                rgba(25, 12, 42, 0.02) 52%,
                rgba(8, 4, 16, 0.01) 62%,
                rgba(0, 0, 0, 0.95) 72%,
                rgba(0, 0, 0, 1) 85%,
                rgba(0, 0, 0, 1) 100%
              )
            `,
            border: 'none',
            boxShadow: `
              inset 0 0 40px rgba(255, 215, 0, 0.08),
              inset 0 0 80px rgba(138, 43, 226, 0.06),
              inset 0 0 120px rgba(75, 0, 130, 0.04),
              inset 0 0 160px rgba(0, 0, 0, 0.8),
              inset 0 0 200px rgba(0, 0, 0, 0.9),
              inset 20px 20px 100px rgba(0, 0, 0, 0.7),
              inset -20px -20px 100px rgba(0, 0, 0, 0.7),
              inset 0 60px 120px rgba(0, 0, 0, 0.8)
            `,
          }}
        >
          {/* Magical void depth layers */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '150px 150px 20px 20px',
              background: `
                radial-gradient(ellipse 70% 80% at center 35%,
                  rgba(255, 215, 0, 0.12) 0%,
                  rgba(186, 85, 211, 0.08) 15%,
                  rgba(138, 43, 226, 0.06) 30%,
                  rgba(75, 0, 130, 0.04) 45%,
                  rgba(25, 12, 42, 0.02) 60%,
                  rgba(0, 0, 0, 0.8) 75%,
                  rgba(0, 0, 0, 1) 100%
                )
              `,
              animation: 'voidPulse 8s ease-in-out infinite',
            }}
          />

          {/* Deep void core */}
          <div
            className="absolute inset-6"
            style={{
              borderRadius: '144px 144px 14px 14px',
              background: `
                radial-gradient(ellipse 60% 70% at center 30%,
                  rgba(75, 0, 130, 0.08) 0%,
                  rgba(45, 25, 75, 0.06) 20%,
                  rgba(25, 12, 42, 0.04) 40%,
                  rgba(8, 4, 16, 0.02) 60%,
                  rgba(0, 0, 0, 0.95) 80%,
                  rgba(0, 0, 0, 1) 100%
                )
              `,
              boxShadow: `
                inset 0 0 60px rgba(0, 0, 0, 0.9),
                inset 0 0 100px rgba(0, 0, 0, 0.8),
                inset 0 30px 80px rgba(0, 0, 0, 0.7)
              `,
              animation: 'deepVoidPulse 6s ease-in-out infinite',
              animationDelay: '2s',
            }}
          />

          {/* Infinite depth illusion */}
          <div
            className="absolute inset-12"
            style={{
              borderRadius: '138px 138px 8px 8px',
              background: `
                radial-gradient(ellipse 50% 60% at center 25%,
                  rgba(25, 12, 42, 0.06) 0%,
                  rgba(8, 4, 16, 0.04) 30%,
                  rgba(0, 0, 0, 0.9) 60%,
                  rgba(0, 0, 0, 1) 100%
                )
              `,
              boxShadow: `
                inset 0 0 80px rgba(0, 0, 0, 1),
                inset 0 0 120px rgba(0, 0, 0, 1),
                inset 0 20px 60px rgba(0, 0, 0, 0.9)
              `,
              animation: 'infiniteDepth 10s ease-in-out infinite',
              animationDelay: '1s',
            }}
          />

          {/* Gradient transition between rings - creates nested tunnel effect */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '150px 150px 20px 20px',
              background: `
                radial-gradient(ellipse at center,
                  transparent 50%,
                  rgba(255, 215, 0, 0.08) 65%,
                  rgba(255, 179, 0, 0.12) 75%,
                  rgba(255, 167, 38, 0.15) 85%,
                  rgba(255, 138, 0, 0.18) 95%,
                  rgba(255, 111, 0, 0.20) 100%
                )
              `,
              animation: 'tunnelGlow 5s ease-in-out infinite',
              animationDelay: '0.5s',
            }}
          />

          {/* Light refraction effect */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '150px 150px 20px 20px',
              background: `
                conic-gradient(from 0deg at center,
                  rgba(255, 215, 0, 0.1) 0deg,
                  rgba(255, 179, 0, 0.08) 90deg,
                  rgba(255, 167, 38, 0.06) 180deg,
                  rgba(255, 138, 0, 0.08) 270deg,
                  rgba(255, 215, 0, 0.1) 360deg
                )
              `,
              opacity: 0.6,
              animation: 'lightRefraction 8s linear infinite',
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
          const colors = ['#FFD700', '#FFB300', '#FFA726', '#FF8C00', '#FF7043'];
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
          const colors = ['#FFD700', '#FFB300', '#FFA726', '#FF8F00'];
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

        @keyframes ambientTwinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.5);
          }
          25% {
            opacity: 0.6;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.8);
          }
          75% {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }

        @keyframes ambientGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }

        @keyframes cosmicPulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          33% {
            opacity: 0.3;
            transform: scale(1.2);
          }
          66% {
            opacity: 0.2;
            transform: scale(1.0);
          }
        }

        @keyframes tunnelGlow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        @keyframes lightRefraction {
          0% {
            transform: rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.6;
          }
        }

        @keyframes softBreathing {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes outerRingGlow {
          0%, 100% {
            box-shadow:
              inset 0 0 0 2px rgba(255, 215, 0, 0.4),
              0 0 40px rgba(255, 215, 0, 0.3),
              0 0 70px rgba(255, 179, 0, 0.25),
              0 0 100px rgba(255, 167, 38, 0.2),
              0 0 140px rgba(255, 138, 0, 0.15);
            opacity: 0.8;
          }
          50% {
            box-shadow:
              inset 0 0 0 2px rgba(255, 215, 0, 0.6),
              0 0 60px rgba(255, 215, 0, 0.5),
              0 0 100px rgba(255, 179, 0, 0.4),
              0 0 140px rgba(255, 167, 38, 0.3),
              0 0 180px rgba(255, 138, 0, 0.2);
            opacity: 1;
          }
        }

        @keyframes innerRingGlow {
          0%, 100% {
            box-shadow:
              inset 0 0 0 1px rgba(255, 215, 0, 0.6),
              inset 0 0 20px rgba(255, 215, 0, 0.2),
              inset 0 0 40px rgba(255, 179, 0, 0.15),
              inset 0 0 60px rgba(255, 167, 38, 0.1),
              0 0 25px rgba(255, 215, 0, 0.4),
              0 0 50px rgba(255, 179, 0, 0.3);
            opacity: 0.9;
          }
          50% {
            box-shadow:
              inset 0 0 0 1px rgba(255, 215, 0, 0.8),
              inset 0 0 30px rgba(255, 215, 0, 0.3),
              inset 0 0 60px rgba(255, 179, 0, 0.25),
              inset 0 0 90px rgba(255, 167, 38, 0.2),
              0 0 35px rgba(255, 215, 0, 0.6),
              0 0 70px rgba(255, 179, 0, 0.5);
            opacity: 1;
          }
        }

        @keyframes voidPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes deepVoidPulse {
          0%, 100% {
            opacity: 0.9;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes infiniteDepth {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1) translateZ(0);
          }
          33% {
            opacity: 0.9;
            transform: scale(1.08) translateZ(0);
          }
          66% {
            opacity: 0.8;
            transform: scale(1.03) translateZ(0);
          }
        }

        .portal-main::before {
          content: '';
          position: absolute;
          top: -12px;
          left: -12px;
          right: -12px;
          bottom: -12px;
          border-radius: 162px 162px 32px 32px;
          background: transparent;
          border: 1px solid rgba(255, 215, 0, 0.3);
          box-shadow:
            0 0 50px rgba(255, 215, 0, 0.3),
            0 0 80px rgba(255, 179, 0, 0.2),
            0 0 120px rgba(255, 167, 38, 0.15);
          filter: blur(2px);
          animation: softBreathing 5s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        .portal-main::after {
          content: '';
          position: absolute;
          top: -25px;
          left: -25px;
          right: -25px;
          bottom: -25px;
          border-radius: 175px 175px 45px 45px;
          background: transparent;
          box-shadow:
            0 0 80px rgba(255, 215, 0, 0.2),
            0 0 120px rgba(255, 179, 0, 0.15),
            0 0 160px rgba(255, 167, 38, 0.1),
            0 0 200px rgba(255, 138, 0, 0.05);
          filter: blur(8px);
          animation: softBreathing 7s ease-in-out infinite;
          animation-delay: 2s;
          pointer-events: none;
          z-index: -2;
        }
      `}</style>
    </div>
  );
};

export default MagicalPortal;
