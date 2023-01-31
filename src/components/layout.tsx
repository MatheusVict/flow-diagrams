import { ReactNode } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

interface LayoutProps {
  children: ReactNode
}

export function Layout() {


  return (
    <div className='fixed'>
    <nav className='bg-gray-900'>
    <button>OI</button>
    <button>OI</button>
    </nav>
    </div>
  );
}