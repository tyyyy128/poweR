import { motion } from "motion/react";
import { Zap, BatteryCharging, Snowflake, Gauge, Clock } from "lucide-react";
import React, { useState } from "react";

interface SettingsScreenProps {
  onConfirm: () => void;
}

export default function SettingsScreen({ onConfirm }: SettingsScreenProps) {
  const [chargeLimit, setChargeLimit] = useState(85);
  const [optimizedBattery, setOptimizedBattery] = useState(true);
  const [precondition, setPrecondition] = useState(false);
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState(20);

  const hours = Array.from({ length: 13 }, (_, i) => i);
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>, type: 'h' | 'm') => {
    const container = e.currentTarget;
    const scrollPos = container.scrollTop;
    const itemHeight = 48; // h-12
    const index = Math.round(scrollPos / itemHeight);
    
    if (type === 'h') {
      if (hours[index] !== undefined) setSelectedHour(hours[index]);
    } else {
      if (minutes[index] !== undefined) setSelectedMinute(minutes[index]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="space-y-8"
    >
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">充电设置</h1>
        <p className="text-on-surface-variant font-medium text-sm">配置您的车辆能量摄入精度。</p>
      </section>

      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(26,27,31,0.06)] flex items-center justify-between border border-outline-variant/10">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">时间预测</span>
          <h2 className="text-xl font-bold text-on-surface">预计充满：{selectedHour}h {selectedMinute}m</h2>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Clock className="w-6 h-6 fill-primary/20" />
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-bold tracking-tight">手动定时器</h3>
          <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full uppercase tracking-wider">持续时间</span>
        </div>
        <div className="relative bg-surface-container-low rounded-3xl overflow-hidden h-48 flex items-center justify-center border border-outline-variant/5">
          {/* Selection Highlight */}
          <div className="absolute inset-x-0 h-12 bg-surface-container-highest/50 border-y border-outline-variant/10 pointer-events-none z-10"></div>
          
          <div className="flex w-full items-center justify-center gap-8 wheel-mask h-full">
            {/* Hours Wheel */}
            <div className="relative flex items-center gap-2 h-full">
              <div 
                onScroll={(e) => handleScroll(e, 'h')}
                className="flex flex-col items-center overflow-y-auto h-full no-scrollbar snap-y snap-mandatory py-20 px-4 scroll-smooth"
              >
                {hours.map((h) => (
                  <div 
                    key={h}
                    className={`h-12 w-12 flex items-center justify-center snap-center transition-all duration-200 ${selectedHour === h ? 'text-on-surface font-bold text-2xl scale-110' : 'text-on-surface-variant/40 font-medium scale-90'}`}
                  >
                    {h}
                  </div>
                ))}
              </div>
              <span className="text-lg font-bold text-on-surface-variant">h</span>
            </div>

            {/* Minutes Wheel */}
            <div className="relative flex items-center gap-2 h-full">
              <div 
                onScroll={(e) => handleScroll(e, 'm')}
                className="flex flex-col items-center overflow-y-auto h-full no-scrollbar snap-y snap-mandatory py-20 px-4 scroll-smooth"
              >
                {minutes.map((m) => (
                  <div 
                    key={m}
                    className={`h-12 w-12 flex items-center justify-center snap-center transition-all duration-200 ${selectedMinute === m ? 'text-on-surface font-bold text-2xl scale-110' : 'text-on-surface-variant/40 font-medium scale-90'}`}
                  >
                    {m}
                  </div>
                ))}
              </div>
              <span className="text-lg font-bold text-on-surface-variant">m</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-3xl p-2 space-y-1 shadow-sm border border-outline-variant/5">
        <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl">
          <div className="flex items-center gap-3">
            <BatteryCharging className="text-secondary w-5 h-5" />
            <span className="font-semibold text-on-surface text-sm">优化电池老化</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only ios-switch" 
              checked={optimizedBattery}
              onChange={() => setOptimizedBattery(!optimizedBattery)}
            />
            <div className="ios-switch-label w-11 h-6 bg-surface-container-highest rounded-full transition-colors duration-200 ease-in-out after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-transform after:duration-200"></div>
          </label>
        </div>

        <div className="p-6 bg-surface-container-lowest rounded-2xl space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Gauge className="text-secondary w-5 h-5" />
              <span className="font-semibold text-on-surface text-sm">充电上限</span>
            </div>
            <span className="text-primary font-bold">{chargeLimit}%</span>
          </div>
          <div className="relative w-full h-2 bg-surface-container-highest rounded-full">
            <div className="absolute h-full bg-secondary rounded-full" style={{ width: `${chargeLimit}%` }}></div>
            <input 
              type="range" 
              min="50" 
              max="100" 
              value={chargeLimit} 
              onChange={(e) => setChargeLimit(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div 
              className="absolute w-6 h-6 bg-white border-2 border-secondary shadow-lg rounded-full top-1/2 -translate-y-1/2 -ml-3 pointer-events-none" 
              style={{ left: `${chargeLimit}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl">
          <div className="flex items-center gap-3">
            <Snowflake className="text-secondary w-5 h-5" />
            <span className="font-semibold text-on-surface text-sm">预调节座舱</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only ios-switch" 
              checked={precondition}
              onChange={() => setPrecondition(!precondition)}
            />
            <div className="ios-switch-label w-11 h-6 bg-surface-container-highest rounded-full transition-colors duration-200 ease-in-out after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-transform after:duration-200"></div>
          </label>
        </div>
      </section>

      <button 
        onClick={onConfirm}
        className="w-full h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-3xl font-bold text-lg shadow-[0_12px_32px_rgba(0,107,39,0.2)] active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2"
      >
        确认并开始
        <Zap className="w-5 h-5 fill-white" />
      </button>
    </motion.div>
  );
}
