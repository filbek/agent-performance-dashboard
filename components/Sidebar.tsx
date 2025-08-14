import React from 'react';
import { DashboardIcon, AgentsIcon, UploadIcon, ReportsIcon, LogoIcon } from '../constants';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false }) => {
  const activeClass = isActive ? 'bg-brand-accent text-white' : 'hover:bg-brand-secondary';
  return (
    <a href="#" className={`flex items-center px-4 py-3 text-brand-text-primary rounded-lg transition-colors duration-200 ${activeClass}`}>
      <span className="w-6 h-6">{icon}</span>
      <span className="ml-4 font-medium">{label}</span>
    </a>
  );
};


const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-brand-primary border-r border-brand-border flex flex-col p-4">
      <div className="flex items-center mb-10 px-2">
        <LogoIcon />
        <h1 className="text-xl font-bold ml-3">Agent Paneli</h1>
      </div>
      <nav className="flex-grow space-y-2">
        <NavItem icon={<DashboardIcon />} label="Gösterge Paneli" isActive={true} />
        <NavItem icon={<AgentsIcon />} label="Agentler" />
        <NavItem icon={<ReportsIcon />} label="Raporlar" />
        <NavItem icon={<UploadIcon />} label="Veri Yükle" />
      </nav>
       <div className="mt-auto">
         <div className="flex items-center p-2">
            <img className="h-10 w-10 rounded-full" src="https://picsum.photos/100" alt="Admin user"/>
            <div className="ml-3">
                <p className="font-semibold text-sm">Admin Kullanıcı</p>
                <p className="text-xs text-brand-text-secondary">admin@example.com</p>
            </div>
        </div>
       </div>
    </div>
  );
};

export default Sidebar;
