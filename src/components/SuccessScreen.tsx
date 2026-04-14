import { motion } from "motion/react";
import { CheckCircle2, Star, ArrowRight, Trophy } from "lucide-react";

interface SuccessScreenProps {
  onDone: () => void;
}

export default function SuccessScreen({ onDone }: SuccessScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="space-y-8 pb-10"
    >
      <section className="text-center space-y-6 relative overflow-hidden py-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center justify-center w-20 h-20 kinetic-gradient rounded-full text-white shadow-lg mb-2"
        >
          <CheckCircle2 className="w-10 h-10 fill-white/20" />
        </motion.div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">支付成功！</h1>
          <p className="text-on-surface-variant leading-relaxed text-sm">您的交易已安全处理。感谢您选择可持续能源。</p>
        </div>
        
        <div className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-full font-bold shadow-sm">
          <Trophy className="text-secondary w-5 h-5 fill-secondary/20" />
          <span className="tracking-wide text-sm">获得 60 积分</span>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[2rem] p-8 space-y-8 relative overflow-hidden shadow-sm border border-outline-variant/5">
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-on-surface">评价</h2>
          <p className="text-sm text-on-surface-variant">您今天的充电体验如何？</p>
        </div>
        
        <div className="flex justify-between items-center px-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className={`w-10 h-10 cursor-pointer transition-transform active:scale-90 ${i <= 4 ? "text-amber-400 fill-amber-400" : "text-outline-variant"}`} />
          ))}
        </div>

        <div className="space-y-4">
          <textarea 
            className="w-full bg-surface-container-high border-none rounded-2xl p-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/20 transition-all resize-none min-h-[120px] text-sm" 
            placeholder="告诉我们我们可以改进的地方..."
          ></textarea>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full border border-outline-variant text-xs font-medium text-on-surface-variant hover:bg-surface-container-highest transition-colors">充电快</button>
            <button className="px-4 py-2 rounded-full border border-outline-variant text-xs font-medium text-on-surface-variant hover:bg-surface-container-highest transition-colors">站点整洁</button>
            <button className="px-4 py-2 rounded-full border border-outline-variant text-xs font-medium text-on-surface-variant hover:bg-surface-container-highest transition-colors">应用好用</button>
          </div>
        </div>
      </section>

      <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-surface-container relative shadow-sm border border-outline-variant/5">
        <img 
          className="w-full h-full object-cover opacity-80" 
          src="https://img2.baidu.com/it/u=1814213382,3831861915&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500" 
          alt="Sustainability"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 kinetic-gradient opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-surface/80 to-transparent">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">可持续发展影响</p>
          <p className="text-lg font-semibold text-on-surface">今日节省了 4.2kg 二氧化碳</p>
        </div>
      </div>

      <div className="pt-4">
        <button 
          onClick={onDone}
          className="w-full kinetic-gradient text-on-primary font-bold py-5 rounded-full shadow-[0_12px_32px_rgba(26,27,31,0.1)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>返回首页</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
