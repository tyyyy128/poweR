import { motion } from "motion/react";
import { Zap, Antenna, Thermometer, Activity, CheckCircle2, Radio } from "lucide-react";

interface ChargingScreenProps {
  onStop: () => void;
}

export default function ChargingScreen({ onStop }: ChargingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8 pb-32"
    >
      <section className="flex flex-col items-center pt-4">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg className="w-full h-full">
            <circle 
              className="text-surface-container-high" 
              cx="128" cy="128" r="110" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="12" 
            />
            <circle 
              className="text-secondary opacity-20" 
              cx="128" cy="128" r="110" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="12" 
            />
            <motion.circle 
              initial={{ strokeDashoffset: 691 }}
              animate={{ strokeDashoffset: 124 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-primary" 
              cx="128" cy="128" r="110" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="12" 
              strokeDasharray="691" 
              strokeLinecap="round"
              style={{ 
                transform: "rotate(-90deg)", 
                transformOrigin: "50% 50%",
                filter: "drop-shadow(0 0 8px rgba(83, 225, 111, 0.4))" 
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-sm font-medium text-on-surface-variant tracking-wider uppercase">正在充电</span>
            <h1 className="text-6xl font-extrabold tracking-tight text-on-surface">82%</h1>
            <div className="mt-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full">
              剩余 15 分钟
            </div>
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-bold tracking-tight text-on-surface">充电进度</h2>
      </section>

      <section className="bg-surface-container-low rounded-3xl p-6 space-y-4 shadow-sm">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">功率输出</p>
            <p className="text-2xl font-bold text-secondary">48.2 kW</p>
          </div>
          <div className="flex gap-1 items-end h-16">
            <motion.div animate={{ height: "50%" }} className="w-2 bg-secondary/20 rounded-t-full"></motion.div>
            <motion.div animate={{ height: "75%" }} className="w-2 bg-secondary/40 rounded-t-full"></motion.div>
            <motion.div animate={{ height: "66%" }} className="w-2 bg-secondary/60 rounded-t-full"></motion.div>
            <motion.div animate={{ height: "83%" }} className="w-2 bg-secondary/80 rounded-t-full"></motion.div>
            <motion.div animate={{ height: "100%" }} className="w-2 bg-secondary rounded-t-full"></motion.div>
            <motion.div animate={{ height: "80%" }} className="w-2 bg-secondary rounded-t-full"></motion.div>
            <motion.div animate={{ height: "50%" }} className="w-2 bg-secondary/40 rounded-t-full"></motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-6 flex items-center justify-between shadow-[0_12px_32px_rgba(26,27,31,0.04)]">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Antenna className="text-primary w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-on-surface">无线充电板</h3>
            <p className="text-primary font-semibold flex items-center gap-1 text-sm">
              <CheckCircle2 className="w-4 h-4" />
              已对齐
            </p>
          </div>
        </div>
        <div className="bg-surface-container text-on-surface-variant p-2 rounded-xl">
          <Radio className="w-5 h-5" />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-low rounded-3xl p-5 space-y-2 shadow-sm">
          <Thermometer className="text-secondary w-5 h-5" />
          <p className="text-xs text-on-surface-variant font-medium">电池温度</p>
          <p className="text-xl font-bold">28°C</p>
        </div>
        <div className="bg-surface-container-low rounded-3xl p-5 space-y-2 shadow-sm">
          <Zap className="text-tertiary w-5 h-5" />
          <p className="text-xs text-on-surface-variant font-medium">电压</p>
          <p className="text-xl font-bold">400V</p>
        </div>
      </section>

      <section className="bg-surface-bright rounded-t-[32px] shadow-[0_-12px_48px_rgba(0,0,0,0.12)] border-x border-t border-outline-variant/10 -mx-6 px-6 pb-8 pt-2">
        <div className="flex justify-center py-3">
          <div className="w-10 h-1.5 bg-surface-container-highest rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-bold text-on-surface">状态更新</h4>
          <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-md uppercase tracking-tighter">实时</span>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="mt-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10"></div>
            <div>
              <p className="text-sm font-bold text-on-surface">已达到最佳充电速度</p>
              <p className="text-xs text-on-surface-variant">2 分钟前 • A4 充电桩</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="mt-1 w-2 h-2 rounded-full bg-outline-variant"></div>
            <div>
              <p className="text-sm font-medium text-on-surface-variant">握手协议已完成</p>
              <p className="text-xs text-on-surface-variant">12 分钟前</p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <button 
          onClick={onStop}
          className="w-full py-5 rounded-full bg-error/10 text-error font-bold text-lg active:scale-95 transition-transform border border-error/20"
        >
          停止充电
        </button>
      </div>
    </motion.div>
  );
}
