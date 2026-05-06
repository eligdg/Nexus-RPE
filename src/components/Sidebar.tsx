import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  FileText, 
  Briefcase, 
  Calendar, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Building2
} from 'lucide-react';
import { useUI } from '@/lib/ui-context';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

const menuItems = [
  { icon: LayoutDashboard, label: '00 Dashboard', path: '/' },
  { icon: Users, label: '01 CRM Pipeline', path: '/crm' },
  { icon: Package, label: '02 Inventory', path: '/inventory' },
  { icon: FileText, label: '03 Invoicing', path: '/billing' },
  { icon: Briefcase, label: '04 Projects', path: '/projects' },
  { icon: Calendar, label: '05 Calendar', path: '/calendar' },
  { icon: Settings, label: '06 Config', path: '/settings' },
];

export function Sidebar() {
  const { sidebarState, toggleSidebar } = useUI();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <aside className={cn(
      "h-full border-r border-[#141414] bg-[#E4E3E0] flex flex-col transition-all duration-300 relative z-40",
      sidebarState === 'expanded' ? "w-64" : "w-16"
    )}>
      <div className="p-6 border-b border-[#141414] bg-[#141414] text-[#E4E3E0]">
        <div className="flex items-center gap-3">
          <Building2 size={24} className="shrink-0" />
          {sidebarState === 'expanded' && (
            <div>
              <h1 className="text-xl font-bold tracking-tighter leading-none">NEXUS <span className="font-thin italic">ERP</span></h1>
              <p className="text-[9px] opacity-60 tracking-widest mt-1 uppercase font-mono">System V1.0</p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2 font-mono text-[11px] uppercase tracking-wider">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "group px-6 py-4 cursor-pointer border-b border-[#141414]/10 transition-all flex items-center gap-3 font-bold",
                isActive ? "bg-[#141414] text-[#E4E3E0]" : "hover:bg-white",
                sidebarState === 'collapsed' && "px-0 justify-center"
              )}
            >
              <item.icon size={18} className={cn("shrink-0", isActive ? "text-blue-400" : "")} />
              {sidebarState === 'expanded' && <span>{item.label}</span>}
              {isActive && sidebarState === 'expanded' && (
                 <div className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full" />
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#141414] bg-white/30 space-y-2">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 p-2 w-full text-[10px] font-mono uppercase hover:bg-red-500 hover:text-white transition-colors"
        >
          <LogOut size={14} />
          {sidebarState === 'expanded' && <span>Logout</span>}
        </button>
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 w-full border border-[#141414] hover:bg-[#141414] hover:text-white transition-colors"
        >
          {sidebarState === 'expanded' ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>
    </aside>
  );
}
