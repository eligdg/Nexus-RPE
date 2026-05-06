import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  Mail,
  Phone,
  Building
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const contacts = [
  { id: '001', name: 'Alex Rivera', company: 'TechSolutions S.A.', email: 'alex@tech.com', phone: '+34 600', status: 'CLIENT', sector: 'SAAS' },
  { id: '002', name: 'Beatriz Gomez', company: 'Global Logistics', email: 'b.gomez@global.com', phone: '+34 601', status: 'LEAD', sector: 'LOGS' },
  { id: '003', name: 'Carlos Sanz', company: 'Creative Agency', email: 'carlos@creative.io', phone: '+34 602', status: 'OPPORTUNITY', sector: 'ADS' },
  { id: '004', name: 'Diana Torres', company: 'Retail Hub', email: 'diana@retail.es', phone: '+34 603', status: 'CLIENT', sector: 'RETAIL' },
  { id: '005', name: 'Eduardo Ruiz', company: 'Finance Pro', email: 'edu@finance.com', phone: '+34 604', status: 'LOST', sector: 'FINS' },
];

export function CRMPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-end justify-between border-b-2 border-[#141414] pb-4">
        <div>
          <span className="text-[10px] font-mono opacity-50 uppercase italic tracking-widest">Module / Management</span>
          <h1 className="text-4xl font-mono font-bold tracking-tighter">CRM_CONTACT_LEDGER</h1>
        </div>
        <button className="px-6 py-2 bg-[#141414] text-white font-mono text-xs uppercase hover:bg-zinc-800 transition-all flex items-center gap-2">
          <Plus size={14} /> New_Entry
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#141414]/40" size={16} />
          <Input 
            placeholder="Search database..." 
            className="h-10 border-[#141414] rounded-none font-mono text-xs uppercase pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="h-10 px-6 border border-[#141414] font-mono text-[10px] uppercase hover:bg-white transition-all font-bold">Query_Filter</button>
      </div>

      <div className="bg-white border border-[#141414] shadow-[8px_8px_0px_#14141410] overflow-hidden">
        <Table className="font-mono">
          <TableHeader className="bg-[#141414]">
            <TableRow className="hover:bg-[#141414] border-none">
              <TableHead className="text-white text-[10px] uppercase h-10 px-6">ID_Ref</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10">Entity_Name</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10">System_Status</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10">Contact_Email</TableHead>
              <TableHead className="text-white text-[10px] uppercase h-10 text-right pr-6">Ops</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[11px]">
            {contacts.map((contact) => (
              <TableRow key={contact.id} className="border-b border-[#141414]/10 hover:bg-[#141414]/5 cursor-default group transition-colors">
                <TableCell className="px-6 font-bold opacity-40">{contact.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col uppercase">
                    <span className="font-bold">{contact.name}</span>
                    <span className="text-[9px] opacity-60 italic">{contact.company}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={cn(
                    "px-2 py-0.5 text-[9px] font-bold border",
                    contact.status === 'CLIENT' ? "border-green-600 text-green-600 bg-green-50" : 
                    contact.status === 'LEAD' ? "border-blue-600 text-blue-600 bg-blue-50" : 
                    contact.status === 'OPPORTUNITY' ? "border-yellow-600 text-yellow-600 bg-yellow-50" : "border-zinc-400 text-zinc-400"
                  )}>
                    {contact.status}
                  </span>
                </TableCell>
                <TableCell className="opacity-70">{contact.email.toUpperCase()}</TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 border border-transparent hover:border-[#141414] transition-all">
                      <Mail size={14} />
                    </button>
                    <button className="p-1.5 border border-transparent hover:border-[#141414] transition-all">
                      <MoreHorizontal size={14} />
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
