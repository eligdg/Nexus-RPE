import React, { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useUI } from '@/lib/ui-context';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';

export function AppLayout({ children }: { children: ReactNode }) {
  const { sidebarState } = useUI();

  return (
    <div className="flex h-screen bg-[#E4E3E0] font-sans text-[#141414] overflow-hidden border-[12px] border-[#141414]">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 relative">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
}
