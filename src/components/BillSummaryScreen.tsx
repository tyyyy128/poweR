import { motion } from "motion/react";
import { ArrowLeft, Share2, QrCode, Wallet, CreditCard, Banknote, Check, Smile } from "lucide-react";
import { useState } from "react";

interface BillSummaryScreenProps {
  onBack: () => void;
  onPay: () => void;
}

export default function BillSummaryScreen({ onBack, onPay }: BillSummaryScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState("wechat");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 pb-32"
    >
      <header className="flex justify-between items-center -mx-6 px-6 h-16 bg-surface/80 backdrop-blur-xl sticky top-0 z-50 border-b border-outline-variant/10">
        <button onClick={onBack} className="text-primary active:scale-90 transition-transform">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold tracking-tight">账单详情</h1>
        <button className="text-primary active:scale-90 transition-transform">
          <Share2 className="w-6 h-6" />
        </button>
      </header>

      <section className="mb-10">
        <div className="bg-surface-container-lowest receipt-jagged p-8 shadow-[0_12px_32px_rgba(26,27,31,0.06)] relative overflow-hidden border border-outline-variant/5">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
          <div className="text-center mb-8">
            <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">交易成功</p>
            <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">¥60.50</h2>
            <p className="text-on-surface-variant text-sm mt-2">2023年9月24日 • 14:32</p>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-on-surface font-semibold text-base">充电费</p>
                <p className="text-on-surface-variant text-xs mt-0.5">35kWh @ ¥1.3/kWh</p>
              </div>
              <p className="text-on-surface font-medium">¥45.50</p>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-on-surface font-semibold text-base">停车费</p>
                <p className="text-on-surface-variant text-xs mt-0.5">B4 桩位 - 1h 20m</p>
              </div>
              <p className="text-on-surface font-medium">¥15.00</p>
            </div>
            <div className="pt-6 border-t border-dashed border-outline-variant/30 flex justify-between items-center">
              <p className="text-on-surface-variant font-bold text-sm uppercase tracking-wider">总金额</p>
              <p className="text-primary font-extrabold text-xl">¥60.50</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center opacity-40">
            <div className="w-16 h-16 bg-surface-container-high rounded-lg flex items-center justify-center mb-2">
              <QrCode className="w-10 h-10" />
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold">KNTC-7729-102</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-on-surface-variant font-bold text-xs uppercase tracking-[0.15em] mb-4 ml-1">支付方式</h3>
        <div className="space-y-3">
          <button 
            onClick={() => setPaymentMethod("wechat")}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border-2 ${paymentMethod === "wechat" ? "bg-surface-container-lowest border-primary/20 shadow-sm" : "bg-surface-container-low border-transparent"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#07C160]/10 flex items-center justify-center text-[#07C160]">
                <Wallet className="w-6 h-6 fill-[#07C160]/20" />
              </div>
              <span className="font-semibold text-on-surface">微信支付</span>
            </div>
            {paymentMethod === "wechat" && (
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <Check className="w-4 h-4" />
              </div>
            )}
          </button>

          <button 
            onClick={() => setPaymentMethod("alipay")}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border-2 ${paymentMethod === "alipay" ? "bg-surface-container-lowest border-primary/20 shadow-sm" : "bg-surface-container-low border-transparent"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1677FF]/10 flex items-center justify-center text-[#1677FF]">
                <Banknote className="w-6 h-6" />
              </div>
              <span className="font-semibold text-on-surface">支付宝</span>
            </div>
            {paymentMethod === "alipay" && (
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <Check className="w-4 h-4" />
              </div>
            )}
          </button>

          <button 
            onClick={() => setPaymentMethod("card")}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border-2 ${paymentMethod === "card" ? "bg-surface-container-lowest border-primary/20 shadow-sm" : "bg-surface-container-low border-transparent"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="font-semibold text-on-surface">银行卡</span>
            </div>
            {paymentMethod === "card" && (
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <Check className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full px-6 pb-10 pt-4 bg-gradient-to-t from-surface via-surface to-transparent z-40">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onPay}
            className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-5 rounded-2xl font-bold text-lg shadow-[0_12px_32px_rgba(0,107,39,0.25)] active:scale-95 transition-transform flex items-center justify-center gap-3"
          >
            <Smile className="w-6 h-6" />
            使用面容 ID 支付
          </button>
          <p className="text-center text-on-surface-variant text-[11px] mt-4 font-medium opacity-60">由 Kinetic 银行加密保护</p>
        </div>
      </div>
    </motion.div>
  );
}
