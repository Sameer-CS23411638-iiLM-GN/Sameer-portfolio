import React, { useState, useEffect } from "react";
import { X, Play, Pause, AlertTriangle, CheckCircle, Cpu, Eye, Volume2, VolumeX } from "lucide-react";

interface DrowsinessSimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrowsinessSimModal: React.FC<DrowsinessSimModalProps> = ({ isOpen, onClose }) => {
  const [driverState, setDriverState] = useState<"alert" | "drowsy" | "microsleep">("alert");
  const [isRunning, setIsRunning] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [earValue, setEarValue] = useState(0.34);
  const [fps, setFps] = useState(31.8);
  const [latency, setLatency] = useState(13.8);
  const [blinkCount, setBlinkCount] = useState(4);

  // Dynamic simulation loop
  useEffect(() => {
    if (!isOpen || !isRunning) return;

    const interval = setInterval(() => {
      // Fluctuate values realistically
      if (driverState === "alert") {
        setEarValue(+(0.32 + Math.random() * 0.05).toFixed(3));
        setFps(+(31.5 + Math.random() * 1.5).toFixed(1));
        setLatency(+(13.5 + Math.random() * 1.2).toFixed(1));
      } else if (driverState === "drowsy") {
        setEarValue(+(0.18 + Math.random() * 0.04).toFixed(3));
        setFps(+(30.8 + Math.random() * 1.2).toFixed(1));
        setLatency(+(14.1 + Math.random() * 1.4).toFixed(1));
      } else {
        // Micro-sleep
        setEarValue(+(0.11 + Math.random() * 0.03).toFixed(3));
        setFps(+(30.0 + Math.random() * 1.0).toFixed(1));
        setLatency(+(14.5 + Math.random() * 1.5).toFixed(1));
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isOpen, isRunning, driverState]);

  if (!isOpen) return null;

  const isDrowsyAlert = earValue < 0.22;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                Real-Time Driver Drowsiness Inference Simulator
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                OpenCV Pipeline • CNN (TensorFlow/Keras) • 10K+ Dataset Model
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Main Visualizer Monitor */}
          <div className="relative aspect-video sm:h-64 bg-zinc-900/90 rounded-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center">
            {/* Live Camera Simulation Overlay */}
            <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 font-mono text-[11px] text-zinc-300">
              <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-red-500 animate-ping" : "bg-zinc-600"}`} />
              <span>LIVE CAM STREAM</span>
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 bg-black/60 hover:bg-black/80 rounded-md border border-white/10 text-zinc-400 hover:text-white text-xs cursor-pointer"
                title="Toggle Alert Audio"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>

            {/* Simulated Face Outline & Landmarks */}
            <div className="relative flex flex-col items-center justify-center select-none">
              {/* Eye Landmark Box Left & Right */}
              <div className="flex gap-12 sm:gap-16 mb-4">
                <div
                  className={`w-14 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isDrowsyAlert
                      ? "border-red-500 bg-red-500/20 scale-y-50 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                      : "border-blue-400 bg-blue-500/10 scale-y-100 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${isDrowsyAlert ? "bg-red-400" : "bg-blue-300"} transition-all`}
                  />
                </div>
                <div
                  className={`w-14 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isDrowsyAlert
                      ? "border-red-500 bg-red-500/20 scale-y-50 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                      : "border-blue-400 bg-blue-500/10 scale-y-100 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${isDrowsyAlert ? "bg-red-400" : "bg-blue-300"} transition-all`}
                  />
                </div>
              </div>

              {/* Status Banner */}
              <div
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 border transition-all ${
                  isDrowsyAlert
                    ? "bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-bounce"
                    : "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                }`}
              >
                {isDrowsyAlert ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>DROWSINESS ALERT: EYES CLOSED (EAR &lt; 0.22)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>DRIVER ALERT & ATTENTIVE</span>
                  </>
                )}
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="absolute bottom-2 inset-x-3 flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-zinc-400 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
              <span>EAR: <strong className="text-white">{earValue}</strong> (Thresh: 0.22)</span>
              <span>Inference: <strong className="text-emerald-400">{latency}ms</strong> (-35% opt)</span>
              <span>Stream: <strong className="text-blue-400">{fps} FPS</strong></span>
            </div>
          </div>

          {/* Interactive State Control Buttons */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Inject Test Scenario:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setDriverState("alert");
                  setBlinkCount((c) => c + 1);
                }}
                className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  driverState === "alert"
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Scenario 1: Alert Eyes Open</span>
              </button>

              <button
                onClick={() => {
                  setDriverState("drowsy");
                  setBlinkCount((c) => c + 3);
                }}
                className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  driverState === "drowsy"
                    ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Scenario 2: Drowsy Blinking</span>
              </button>

              <button
                onClick={() => {
                  setDriverState("microsleep");
                  setBlinkCount((c) => c + 5);
                }}
                className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  driverState === "microsleep"
                    ? "bg-red-500/20 border-red-500 text-red-300 font-semibold"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Scenario 3: Prolonged Closure</span>
              </button>
            </div>
          </div>

          {/* Key Architectural Technical Takeaways */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-zinc-300 space-y-1.5 font-light">
            <p className="font-semibold text-white font-mono text-[11px]">Engineering Highlights from Sameer's Resume:</p>
            <ul className="list-disc pl-4 space-y-1 text-zinc-400 text-[11px]">
              <li>Trained and evaluated on <strong className="text-zinc-200">10K+ labeled facial frames</strong> achieving <strong className="text-zinc-200">92% real-time accuracy</strong>.</li>
              <li>OpenCV video acquisition and landmark normalization fed directly into a lightweight CNN inference backbone.</li>
              <li>Engineered frame-caching and thread optimization to <strong className="text-zinc-200">reduce inference latency by 35%</strong>, ensuring reliable 30+ FPS operation.</li>
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex justify-between items-center">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white cursor-pointer"
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? "Pause Stream" : "Resume Stream"}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
};
