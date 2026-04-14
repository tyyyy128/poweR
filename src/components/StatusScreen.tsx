import { motion } from "motion/react";
import { Battery, MapPin, Zap, Settings as SettingsIcon, ChevronRight } from "lucide-react";

interface StatusScreenProps {
  onStartCharging: () => void;
  onOpenSettings: () => void;
  onFindStation: () => void;
}

export default function StatusScreen({ onStartCharging, onOpenSettings, onFindStation }: StatusScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <section className="relative">
        <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="flex flex-col items-start">
          <span className="text-[10px] text-on-surface-variant font-bold tracking-widest mb-1 px-1 uppercase">CONNECTED</span>
          <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface mb-6">车辆已就绪</h1>
        </div>
        
        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl">
          <img 
            className="w-full h-full object-cover transform scale-110 -translate-x-4" 
            src="https://images.unsplash.com/photo-1556122071-e404be7457cc?auto=format&fit=crop&q=80&w=1000" 
            alt="Luxury Shuttle Bus"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 p-5 glass-effect rounded-2xl flex justify-between items-center shadow-lg border border-white/20">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">MODEL K-2</p>
              <p className="text-sm font-semibold text-primary">所有系统正常</p>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[11px] font-bold text-primary tracking-tighter">实时</span>
            </div>
          </div>
        </div>
      </section>

      {/* One-click Find Station Button */}
      <button 
        onClick={onFindStation}
        className="w-full bg-surface-container-low p-6 rounded-[2rem] flex items-center justify-between border border-outline-variant/5 shadow-sm active:scale-[0.98] transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-on-surface">一键找桩</h3>
            <p className="text-xs text-on-surface-variant">发现附近空闲车位与充电桩</p>
          </div>
        </div>
        <ChevronRight className="text-outline-variant w-5 h-5" />
      </button>

      <section className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between aspect-square shadow-sm">
          <Battery className="text-secondary w-8 h-8" />
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">65<span className="text-xl font-medium opacity-40">%</span></h2>
            <p className="text-sm font-medium text-on-surface-variant">当前电量</p>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between aspect-square shadow-sm">
          <MapPin className="text-primary w-8 h-8" />
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">280<span className="text-xl font-medium opacity-40">km</span></h2>
            <p className="text-sm font-medium text-on-surface-variant">剩余续航</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_12px_32px_rgba(26,27,31,0.04)] space-y-6 border border-outline-variant/10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight">开始充电</h3>
          <Zap className="text-on-surface-variant w-5 h-5" />
        </div>
        <p className="text-on-surface-variant leading-relaxed text-sm">
          已连接至 <span className="font-semibold text-on-surface">聚农智充站 #08</span>。准备好使用可持续能源为您的车辆补充能量。
        </p>
        <div className="space-y-3">
          <button 
            onClick={onStartCharging}
            className="kinetic-gradient w-full py-5 rounded-full text-white font-bold text-lg shadow-[0_12px_32px_rgba(0,107,39,0.25)] active:scale-95 transition-transform"
          >
            确认并开始充电
          </button>
          <button 
            onClick={onOpenSettings}
            className="w-full py-5 rounded-full bg-surface-container-highest text-secondary font-bold text-lg active:scale-95 transition-transform"
          >
            充电设置
          </button>
        </div>
      </section>

      <section className="flex justify-center items-center gap-6 px-4 pb-4">
        <div className="flex items-center gap-1.5 opacity-50">
          <span className="text-xs font-medium">21°C 车内温度</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
        <div className="flex items-center gap-1.5 opacity-50">
          <span className="text-xs font-medium">已解锁</span>
        </div>
      </section>
    </motion.div>
  );
}
