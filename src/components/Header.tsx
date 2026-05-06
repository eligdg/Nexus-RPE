import { Search, Bell, HelpCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useLocation } from 'react-router-dom';

export function Header() {
  const { profile } = useAuth();
  const location = useLocation();
  const path = location.pathname === '/' ? 'Root / Dashboard' : `Root ${location.pathname.replace('/', ' / ').toUpperCase()}`;

  return (
    <header className="h-16 border-b border-[#141414] flex items-center justify-between px-8 bg-white/30 backdrop-blur-sm z-30">
      <div className="flex gap-8 items-center text-[11px] font-mono uppercase opacity-70">
        <span>{path}</span>
        <div className="hidden md:flex items-center gap-2 bg-[#141414] text-white px-3 py-1 rounded-full text-[9px]">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
          {profile?.role?.toUpperCase() || 'SUPERUSER'}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {['Search', 'Alert'].map(icon => (
             <button key={icon} className="w-8 h-8 border border-[#141414] flex items-center justify-center font-mono text-[10px] hover:bg-[#141414] hover:text-white transition-all uppercase">
               {icon.charAt(0)}
             </button>
          ))}
        </div>
        <div className="flex items-center gap-3 pl-4 border-l border-[#141414]/20">
          <div className="text-right">
            <p className="text-[10px] font-bold font-mono tracking-tighter uppercase leading-none">{profile?.displayName || 'User_01'}</p>
            <p className="text-[9px] opacity-50 font-mono italic mt-1">online_now</p>
          </div>
          <div className="w-9 h-9 border-2 border-[#141414] p-0.5">
            <Avatar className="h-full w-full rounded-none">
              <AvatarImage src={profile?.photoURL} />
              <AvatarFallback className="rounded-none bg-[#141414] text-white">{(profile?.displayName || 'U').charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
