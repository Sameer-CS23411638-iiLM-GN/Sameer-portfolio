import React, { useEffect, useRef } from "react";

export const DotMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const cols = 28;
    const rows = 9;
    const spacing = 7;
    const radius = 1.3;

    // Resize canvas
    canvas.width = cols * spacing + 10;
    canvas.height = rows * spacing + 10;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.04;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing + 5;
          const y = r * spacing + 5;

          // Wave equation
          const dist = Math.sin(c * 0.3 + step) + Math.cos(r * 0.4 + step * 0.8);
          const intensity = Math.max(0.08, (dist + 2) / 4);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (intensity > 0.65) {
            ctx.fillStyle = `rgba(59, 130, 246, ${intensity})`; // Blue glow for peak
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${intensity * 0.3})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <canvas ref={canvasRef} className="opacity-90 hover:opacity-100 transition-opacity" />
      <div className="flex items-center gap-1.5 mt-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
        <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono">
          Neural Pulse • 30 FPS
        </span>
      </div>
    </div>
  );
};
