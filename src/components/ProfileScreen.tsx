import { motion } from "motion/react";
import { User, CreditCard, Bell, Settings as SettingsIcon, ChevronRight, ParkingCircle, Coffee, Fuel, Share2, LogOut } from "lucide-react";

export default function ProfileScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 pb-20"
    >
      <section className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-container p-1 bg-surface-container-lowest shadow-lg">
            <img 
              alt="User Profile" 
              className="w-full h-full rounded-full object-cover" 
              src="https://img.pcauto.com.cn/images/upload/upc/tx/auto_bbs/1611/04/c0/29398246_1478230461618_800x600.jpg" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">我的个人资料</h1>
            <p className="text-on-surface-variant font-medium text-sm">环保卫士 4 级</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-3xl shadow-xl shadow-primary/10 text-on-primary">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium opacity-80 mb-1">可用余额</p>
              <h2 className="text-3xl font-extrabold tracking-tighter">1,250 积分</h2>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              KINETIC GOLD
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-primary px-4 py-2 rounded-xl text-sm font-bold active:scale-95 transition-transform shadow-sm">兑换</button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-bold active:scale-95 transition-transform">历史记录</button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-on-surface tracking-tight">市场奖励</h3>
          <span className="text-secondary text-sm font-semibold cursor-pointer">查看全部</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-surface-container-low p-4 rounded-3xl flex items-center justify-between group active:scale-[0.98] transition-all border border-outline-variant/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                <ParkingCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">免费停车券</h4>
                <p className="text-xs text-on-surface-variant">2 小时 A 区 • 500 积分</p>
              </div>
            </div>
            <ChevronRight className="text-outline-variant w-5 h-5" />
          </div>
          <div className="bg-surface-container-low p-4 rounded-3xl space-y-3 active:scale-[0.98] transition-all border border-outline-variant/5">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-tertiary shadow-sm">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">星巴克咖啡</h4>
              <p className="text-[10px] text-on-surface-variant">任意大杯 • 450 积分</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-3xl space-y-3 active:scale-[0.98] transition-all border border-outline-variant/5">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
              <Fuel className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">充电折扣</h4>
              <p className="text-[10px] text-on-surface-variant">八折优惠 • 300 积分</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-3xl p-5 border border-white shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-secondary-fixed rounded-2xl text-on-secondary-fixed">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-on-surface leading-tight">私人共享桩</h3>
            <p className="text-xs text-on-surface-variant">管理您的家庭充电主机</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-3 bg-surface-container-lowest text-on-surface rounded-2xl text-xs font-bold shadow-sm active:scale-95 transition-transform">进行中 (2)</button>
          <button className="flex-1 py-3 text-on-surface-variant rounded-2xl text-xs font-bold active:scale-95 transition-transform">收益</button>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="px-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">账户设置</h3>
        <div className="bg-surface-container-low rounded-3xl overflow-hidden shadow-sm border border-outline-variant/5">
          <div className="flex items-center justify-between p-4 bg-surface-container-low active:bg-surface-container-high transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">个人信息</span>
            </div>
            <ChevronRight className="text-outline-variant w-4 h-4" />
          </div>
          <div className="mx-4 h-[1px] bg-outline-variant/10"></div>
          <div className="flex items-center justify-between p-4 bg-surface-container-low active:bg-surface-container-high transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center">
                <CreditCard className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">支付方式</span>
            </div>
            <ChevronRight className="text-outline-variant w-4 h-4" />
          </div>
          <div className="mx-4 h-[1px] bg-outline-variant/10"></div>
          <div className="flex items-center justify-between p-4 bg-surface-container-low active:bg-surface-container-high transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">通知</span>
            </div>
            <ChevronRight className="text-outline-variant w-4 h-4" />
          </div>
          <div className="mx-4 h-[1px] bg-outline-variant/10"></div>
          <div className="flex items-center justify-between p-4 bg-surface-container-low active:bg-surface-container-high transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-500 text-white flex items-center justify-center">
                <SettingsIcon className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">应用偏好</span>
            </div>
            <ChevronRight className="text-outline-variant w-4 h-4" />
          </div>
        </div>
      </section>

      <button className="w-full py-4 text-error font-bold text-center bg-error-container/20 rounded-3xl active:scale-[0.98] transition-all mb-8 flex items-center justify-center gap-2">
        <LogOut className="w-5 h-5" />
        退出登录
      </button>
    </motion.div>
  );
}
