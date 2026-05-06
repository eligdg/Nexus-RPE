import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  Package,
  ArrowUpDown,
  Tag,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  { id: 'PROD-001', name: 'MACBOOK PRO M3', sku: 'LAP-001', category: 'ELECTRÓNICA', price: 2499, stock: 15, status: 'AVAILABLE' },
  { id: 'PROD-002', name: 'TECLADO MECÁNICO RGB', sku: 'ACC-042', category: 'ACCESORIOS', price: 129, stock: 5, status: 'LOW_STOCK' },
  { id: 'PROD-003', name: 'MONITOR 4K 27"', sku: 'DIS-099', category: 'ELECTRÓNICA', price: 499, stock: 0, status: 'OUT_OF_STOCK' },
  { id: 'PROD-004', name: 'SILLA ERGONÓMICA', sku: 'FUR-005', category: 'MOBILIARIO', price: 350, stock: 42, status: 'AVAILABLE' },
  { id: 'PROD-005', name: 'RATÓN INALÁMBRICO', sku: 'ACC-002', category: 'ACCESORIOS', price: 79, stock: 120, status: 'AVAILABLE' },
];

export function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-end justify-between border-b-2 border-[#141414] pb-4">
        <div>
          <span className="text-[10px] font-mono opacity-50 uppercase italic tracking-widest">Module / Asset Control</span>
          <h1 className="text-4xl font-mono font-bold tracking-tighter">INVENTORY_STOK_SYSTEM</h1>
        </div>
        <button className="px-6 py-2 bg-[#141414] text-white font-mono text-xs uppercase hover:bg-zinc-800 transition-all flex items-center gap-2">
          <Plus size={14} /> Add_Asset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: '01 Total Assets', val: '1,204', icon: Package, color: 'text-foreground' },
          { label: '02 Critical Stock', val: '12', icon: AlertCircle, color: 'text-red-600' },
          { label: '03 Categories', val: '24', icon: Tag, color: 'text-blue-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-[#141414] p-4 flex flex-col shadow-[4px_4px_0px_#14141410]">
             <span className="text-[10px] uppercase font-mono opacity-50 mb-1 italic tracking-widest">{stat.label}</span>
             <div className="flex items-baseline gap-2">
               <span className={cn("text-3xl font-mono tracking-tighter font-bold", stat.color)}>{stat.val}</span>
               <stat.icon size={16} className="opacity-20" />
             </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#141414]/40" size={16} />
          <Input 
            placeholder="Search warehouse..." 
            className="h-10 border-[#141414] rounded-none font-mono text-xs uppercase pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="h-10 px-6 border border-[#141414] font-mono text-[10px] uppercase hover:bg-white transition-all font-bold">Sort_Engine</button>
      </div>

      <div className="bg-white border border-[#141414] shadow-[8px_8px_0px_#14141410] overflow-hidden">
        <Table className="font-mono">
          <TableHeader className="bg-[#141414]">
            <TableRow className="hover:bg-[#141414] border-none">
              <TableHead className="text-white text-[10px] uppercase h-10 px-6">SKU_Ref</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10">Asset_Descriptor</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10">Cat_Ref</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10 text-right">Unit_Price</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10 text-right">Qty</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10 text-right pr-6">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[11px]">
            {products.map((product) => (
              <TableRow key={product.id} className="border-b border-[#141414]/10 hover:bg-[#141414]/5 transition-colors group">
                <TableCell className="px-6 font-bold opacity-40">{product.sku}</TableCell>
                <TableCell className="font-bold">{product.name}</TableCell>
                <TableCell className="opacity-60">{product.category}</TableCell>
                <TableCell className="text-right font-bold">${product.price.toLocaleString()}</TableCell>
                <TableCell className="text-right font-bold">{product.stock}</TableCell>
                <TableCell className="text-right pr-6 px-4">
                  <span className={cn(
                    "px-2 py-0.5 text-[9px] font-bold border",
                    product.status === 'AVAILABLE' ? "border-green-600 text-green-600 bg-green-50" : 
                    product.status === 'LOW_STOCK' ? "border-orange-600 text-orange-600 bg-orange-50" : "border-red-600 text-red-600 bg-red-50"
                  )}>
                    {product.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
