import { useState } from 'react';
import { 
  Plus, 
  Search, 
  FileText,
  Download,
  MoreVertical,
  Printer,
  Mail,
  CheckCircle2,
  Clock,
  XCircle
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

const invoices = [
  { id: 'INV-2024-001', number: 'INV-2024-001', contact: 'TechSolutions S.A.', date: '2024-05-01', dueDate: '2024-05-15', total: 1250.50, status: 'PAID' },
  { id: 'INV-2024-002', number: 'INV-2024-002', contact: 'Global Logistics', date: '2024-05-02', dueDate: '2024-05-16', total: 420.00, status: 'PENDING' },
  { id: 'INV-2024-003', number: 'INV-2024-003', contact: 'Creative Agency', date: '2024-05-03', dueDate: '2024-05-01', total: 2100.00, status: 'OVERDUE' },
  { id: 'INV-2024-004', number: 'INV-2024-004', contact: 'Retail Hub', date: '2024-05-04', dueDate: '2024-05-18', total: 890.75, status: 'DRAFT' },
  { id: 'INV-2024-005', number: 'INV-2024-005', contact: 'TechSolutions S.A.', date: '2024-05-05', dueDate: '2024-05-19', total: 3200.00, status: 'PAID' },
];

export function BillingPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-end justify-between border-b-2 border-[#141414] pb-4">
        <div>
          <span className="text-[10px] font-mono opacity-50 uppercase italic tracking-widest">Module / Financials</span>
          <h1 className="text-4xl font-mono font-bold tracking-tighter">BILLING_LEDGER_CORE</h1>
        </div>
        <div className="flex gap-2">
            <button className="px-6 py-2 border border-[#141414] font-mono text-xs uppercase hover:bg-white transition-all flex items-center gap-2 font-bold">
                <Download size={14} /> Export_Data
            </button>
            <button className="px-6 py-2 bg-[#141414] text-white font-mono text-xs uppercase hover:bg-zinc-800 transition-all flex items-center gap-2">
                <Plus size={14} /> New_Invoice
            </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#141414]/40" size={16} />
          <Input 
            placeholder="Search transactions..." 
            className="h-10 border-[#141414] rounded-none font-mono text-xs uppercase pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 ml-auto">
            {['All', 'Paid', 'Pending', 'Overdue'].map((tab) => (
                <button key={tab} className={cn(
                    "px-4 py-1.5 font-mono text-[10px] uppercase border border-transparent transition-all",
                    tab === 'All' ? "bg-[#141414] text-white" : "hover:border-[#141414]"
                )}>
                    {tab}_STATE
                </button>
            ))}
        </div>
      </div>

      <div className="bg-white border border-[#141414] shadow-[8px_8px_0px_#14141410] overflow-hidden">
        <Table className="font-mono">
          <TableHeader className="bg-[#141414]">
            <TableRow className="hover:bg-[#141414] border-none">
              <TableHead className="text-white text-[10px] uppercase h-10 px-6">Inv_Ref</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10">Entity</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10 text-right">Amount_Total</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10 text-right">Status</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10 text-right pr-6">Data_Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[11px]">
            {invoices.map((inv) => (
                <TableRow key={inv.id} className="border-b border-[#141414]/10 hover:bg-[#141414]/5 transition-colors group">
                  <TableCell className="px-6 font-bold">{inv.number}</TableCell>
                  <TableCell>
                    <div className="flex flex-col uppercase">
                      <span className="font-bold">{inv.contact}</span>
                      <span className="text-[9px] opacity-40">Due: {inv.dueDate}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold text-lg tracking-tighter">${inv.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</TableCell>
                  <TableCell className="text-right">
                    <span className={cn(
                        "px-2 py-0.5 text-[9px] font-bold border",
                        inv.status === 'PAID' ? "border-green-600 text-green-600 bg-green-50" : 
                        inv.status === 'PENDING' ? "border-blue-600 text-blue-600 bg-blue-50" : 
                        inv.status === 'OVERDUE' ? "border-red-600 text-red-600 bg-red-50" : "border-zinc-400 text-zinc-400"
                      )}>
                        {inv.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex justify-end gap-2">
                        <button className="p-1.5 border border-transparent hover:border-[#141414] transition-all">
                            <Download size={14} />
                        </button>
                        <button className="p-1.5 border border-transparent hover:border-[#141414] transition-all">
                            <Printer size={14} />
                        </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
