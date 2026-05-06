import { 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Package,
  FileCheck,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const data = [
  { name: '01', sales: 4000 }, { name: '02', sales: 3000 }, { name: '03', sales: 9000 },
  { name: '04', sales: 2780 }, { name: '05', sales: 1890 }, { name: '06', sales: 5390 },
];

const stats = [
  { label: '01 Revenue', value: '$142,850.00', change: '+12.4% ARR', trending: 'up' },
  { label: '02 leads', value: '842', change: 'Modular: CRM', trending: 'neutral' },
  { label: '03 Stock Alerts', value: '12', change: 'Action Req.', trending: 'down' },
  { label: '04 Performance', value: '99.9%', change: 'Stable SLA', trending: 'up' },
];

export function DashboardPage() {
  return (
    <div className="space-y-8 h-full flex flex-col animate-in fade-in duration-500">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-[#141414] p-5 flex flex-col shadow-[4px_4px_0px_#14141410]"
          >
            <span className="text-[10px] uppercase font-mono opacity-50 mb-1 italic tracking-widest">{stat.label}</span>
            <span className="text-3xl font-mono tracking-tighter font-bold">{stat.value}</span>
            <div className={`mt-2 text-[10px] px-2 py-0.5 self-start font-mono font-bold ${
              stat.trending === 'up' ? "bg-green-50 text-green-700" : 
              stat.trending === 'down' ? "bg-red-50 text-red-700 blink" : "bg-blue-50 text-blue-700 font-bold"
            }`}>
              {stat.change}
            </div>
          </motion.div>
        ))}
      </section>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-0">
        <div className="lg:col-span-2 bg-white border border-[#141414] flex flex-col shadow-[8px_8px_0px_#14141410] overflow-hidden">
          <div className="p-4 border-b border-[#141414] bg-[#141414] text-white flex justify-between items-center font-mono">
            <h2 className="text-[11px] uppercase tracking-widest">Performance Metrics [V1.0]</h2>
            <span className="text-[9px] opacity-60">REF: SYS-99X</span>
          </div>
          <div className="flex-1 p-6 flex items-center justify-center min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#14141410" />
                <XAxis dataKey="name" stroke="#141414" fontSize={10} tickLine={false} axisLine={true} />
                <YAxis stroke="#141414" fontSize={10} tickLine={false} axisLine={true} />
                <Tooltip />
                <Area type="stepAfter" dataKey="sales" stroke="#141414" fill="#14141405" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white border border-[#141414] p-5 shadow-[4px_4px_0px_#14141410] flex-1">
            <h3 className="font-mono text-[11px] uppercase font-bold border-b border-[#141414] pb-2 mb-4 italic">System Health</h3>
            <div className="space-y-6">
              {[
                { name: 'CRM_ENGINE', val: 98, color: 'bg-green-500' },
                { name: 'INVENTORY_WORKER', val: 100, color: 'bg-green-500' },
                { name: 'PDF_RENDERER', val: 42, color: 'bg-orange-500' },
              ].map(module => (
                <div key={module.name} className="flex flex-col gap-1">
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest font-bold">
                    <span>{module.name}</span>
                    <span>{module.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#141414]/10 border border-[#141414]/5 overflow-hidden">
                    <div className={cn("h-full transition-all duration-1000", module.color)} style={{ width: `${module.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-dashed border-[#141414]/30 pt-4">
               <h3 className="font-mono text-[10px] uppercase font-bold mb-2 italic">Active Workers</h3>
               <div className="text-[11px] font-mono opacity-70">
                <div className="flex gap-2 items-center py-1">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   <span>Ledger-Sync-Node-01</span>
                </div>
                <div className="flex gap-2 items-center py-1">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   <span>Auth-Gateway-E2</span>
                </div>
               </div>
            </div>
          </div>
          
          <div className="h-28 bg-[#141414] text-[#E4E3E0] p-4 font-mono text-[9px] overflow-hidden border-t-4 border-blue-400">
            <p className="opacity-40 tracking-tighter"> {">"} Auth: Session Token Validated </p>
            <p className="opacity-40 text-blue-400 font-bold tracking-tighter"> {">"} DB_IO: Postgres: Connected [Node_01] </p>
            <p className="opacity-40 tracking-tighter"> {">"} Core: All modules operational </p>
          </div>
        </div>
      </div>
    </div>
  );
}
