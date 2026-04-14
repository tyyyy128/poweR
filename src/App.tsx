import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Fuel, Clock, Trophy, User, Zap, UserCircle } from "lucide-react";

import StatusScreen from "./components/StatusScreen";
import ChargingScreen from "./components/ChargingScreen";
import SettingsScreen from "./components/SettingsScreen";
import ProfileScreen from "./components/ProfileScreen";
import BillSummaryScreen from "./components/BillSummaryScreen";
import SuccessScreen from "./components/SuccessScreen";
import FindStationScreen from "./components/FindStationScreen";

type Tab = "status" | "charging" | "rewards" | "profile";
type SubScreen = "main" | "settings" | "bill" | "success" | "find-station";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("status");
  const [subScreen, setSubScreen] = useState<SubScreen>("main");

  const renderContent = () => {
    if (subScreen === "settings") {
      return <SettingsScreen onConfirm={() => { setActiveTab("charging"); setSubScreen("main"); }} />;
    }
    if (subScreen === "bill") {
      return <BillSummaryScreen onBack={() => setSubScreen("main")} onPay={() => setSubScreen("success")} />;
    }
    if (subScreen === "success") {
      return <SuccessScreen onDone={() => { setSubScreen("main"); setActiveTab("status"); }} />;
    }
    if (subScreen === "find-station") {
      return <FindStationScreen onBack={() => setSubScreen("main")} onSelectStation={() => setSubScreen("main")} />;
    }

    switch (activeTab) {
      case "status":
        return (
          <StatusScreen 
            onStartCharging={() => setSubScreen("settings")} 
            onOpenSettings={() => setSubScreen("settings")} 
            onFindStation={() => setSubScreen("find-station")}
          />
        );
      case "charging":
        return <ChargingScreen onStop={() => setSubScreen("bill")} />;
      case "profile":
        return <ProfileScreen />;
      case "rewards":
        return (
          <div className="space-y-8">
            <section>
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">奖励中心</h1>
              <p className="text-on-surface-variant font-medium text-sm">通过绿色出行赚取积分并兑换好礼。</p>
            </section>
            
            <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">可用积分</p>
              <h2 className="text-5xl font-extrabold tracking-tighter mb-6">12,450</h2>
              <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm active:scale-95 transition-transform">
                立即兑换
              </button>
            </div>

            <section className="space-y-4">
              <h3 className="text-lg font-bold tracking-tight px-1">积分任务</h3>
              <div className="space-y-3">
                {[
                  { title: "每日签到", points: "+10", icon: "✨" },
                  { title: "使用快充 3 次", points: "+500", icon: "⚡" },
                  { title: "邀请好友", points: "+1000", icon: "🤝" },
                ].map((task, i) => (
                  <div key={i} className="bg-surface-container-low p-5 rounded-3xl flex items-center justify-between border border-outline-variant/5">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{task.icon}</span>
                      <p className="font-bold text-on-surface">{task.title}</p>
                    </div>
                    <span className="text-primary font-bold">{task.points}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      default:
        return (
          <StatusScreen 
            onStartCharging={() => setSubScreen("settings")} 
            onOpenSettings={() => setSubScreen("settings")} 
            onFindStation={() => setSubScreen("find-station")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm border-b border-outline-variant/5">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Zap className="text-primary w-6 h-6 fill-primary/20" />
            <span className="text-lg font-bold tracking-tighter text-on-surface">聚农智充</span>
          </div>
          <button className="text-outline hover:text-primary transition-colors active:scale-95">
            <UserCircle className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto pt-24 px-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={subScreen === "main" ? activeTab : subScreen}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      {subScreen === "main" && (
        <nav className="fixed bottom-0 w-full z-50 bg-surface/80 backdrop-blur-xl rounded-t-3xl shadow-[0_-8px_24px_rgba(0,0,0,0.05)] border-t border-outline-variant/5">
          <div className="flex justify-around items-center w-full px-4 pt-2 pb-8 h-20 max-w-md mx-auto">
            <button 
              onClick={() => setActiveTab("status")}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-200 active:scale-90 ${activeTab === "status" ? "text-primary bg-primary/5" : "text-outline"}`}
            >
              <Fuel className={`w-6 h-6 ${activeTab === "status" ? "fill-primary/20" : ""}`} />
              <span className="text-[11px] font-bold tracking-wide mt-1">状态</span>
            </button>
            <button 
              onClick={() => setActiveTab("charging")}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-200 active:scale-90 ${activeTab === "charging" ? "text-primary bg-primary/5" : "text-outline"}`}
            >
              <Clock className={`w-6 h-6 ${activeTab === "charging" ? "fill-primary/20" : ""}`} />
              <span className="text-[11px] font-bold tracking-wide mt-1">充电</span>
            </button>
            <button 
              onClick={() => setActiveTab("rewards")}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-200 active:scale-90 ${activeTab === "rewards" ? "text-primary bg-primary/5" : "text-outline"}`}
            >
              <Trophy className={`w-6 h-6 ${activeTab === "rewards" ? "fill-primary/20" : ""}`} />
              <span className="text-[11px] font-bold tracking-wide mt-1">奖励</span>
            </button>
            <button 
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-200 active:scale-90 ${activeTab === "profile" ? "text-primary bg-primary/5" : "text-outline"}`}
            >
              <User className={`w-6 h-6 ${activeTab === "profile" ? "fill-primary/20" : ""}`} />
              <span className="text-[11px] font-bold tracking-wide mt-1">我的</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
