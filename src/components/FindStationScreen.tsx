import { motion } from "motion/react";
import { Search, MapPin, Navigation, Star, Zap, Info, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Station {
  id: number;
  name: string;
  distance: string;
  available: number;
  total: number;
  price: string;
  rating: number;
  type: "Fast" | "Standard";
}

const stations: Station[] = [
  { id: 1, name: "Kinetic Hub #42", distance: "0.8km", available: 3, total: 8, price: "¥1.3/kWh", rating: 4.9, type: "Fast" },
  { id: 2, name: "Green Charge Station A4", distance: "1.2km", available: 0, total: 5, price: "¥1.1/kWh", rating: 4.7, type: "Fast" },
  { id: 3, name: "EcoPower Central", distance: "2.5km", available: 12, total: 20, price: "¥1.5/kWh", rating: 4.8, type: "Standard" },
  { id: 4, name: "City Mall Charging", distance: "3.1km", available: 2, total: 10, price: "¥1.4/kWh", rating: 4.5, type: "Standard" },
];

interface FindStationScreenProps {
  onBack: () => void;
  onSelectStation: (station: Station) => void;
}

export default function FindStationScreen({ onBack, onSelectStation }: FindStationScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 pb-10"
    >
      <header className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 bg-surface-container-low rounded-full active:scale-90 transition-transform">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <h1 className="text-2xl font-extrabold tracking-tight">一键找桩</h1>
      </header>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
        <input 
          type="text" 
          placeholder="搜索附近充电站..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      {/* Map Placeholder */}
      <div className="relative w-full h-64 bg-surface-container-highest rounded-[2.5rem] overflow-hidden shadow-inner border border-outline-variant/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        {/* Simulated Map Pins */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-1/4 left-1/3 p-2 bg-primary text-white rounded-full shadow-lg z-10"
        >
          <Zap className="w-4 h-4 fill-white" />
        </motion.div>
        <div className="absolute top-1/2 left-2/3 p-2 bg-secondary text-white rounded-full shadow-lg">
          <Zap className="w-4 h-4 fill-white" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 p-2 bg-outline text-white rounded-full shadow-lg">
          <Zap className="w-4 h-4 fill-white" />
        </div>
        
        {/* Map Overlay Info */}
        <div className="absolute bottom-4 left-4 right-4 glass-effect p-4 rounded-2xl border border-white/20 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Navigation className="text-primary w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">最近站点</p>
              <p className="text-sm font-bold">Kinetic Hub #42 • 0.8km</p>
            </div>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform">
            导航
          </button>
        </div>
      </div>

      {/* Station List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-lg font-bold tracking-tight">附近推荐</h2>
          <span className="text-xs font-bold text-on-surface-variant">按距离排序</span>
        </div>
        
        {stations.map((station) => (
          <motion.div 
            key={station.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectStation(station)}
            className="bg-surface-container-low p-5 rounded-3xl flex items-center justify-between border border-outline-variant/5 shadow-sm group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${station.available > 0 ? "bg-primary/10 text-primary" : "bg-outline/10 text-outline"}`}>
                <Zap className={`w-6 h-6 ${station.available > 0 ? "fill-primary/20" : ""}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-on-surface">{station.name}</h3>
                  {station.type === "Fast" && (
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded uppercase">快充</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {station.distance}
                  </span>
                  <span className={`text-xs font-bold ${station.available > 0 ? "text-primary" : "text-error"}`}>
                    空闲 {station.available}/{station.total}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-on-surface">{station.price}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold">{station.rating}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
