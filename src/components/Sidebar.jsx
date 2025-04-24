import React, { useState, useEffect, useRef } from 'react';
import { Home, Calendar, ShoppingCart, Info, User } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Accueil');
  const [iconSize, setIconSize] = useState(20);
  const [labelSize, setLabelSize] = useState('text-base');

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 420) {
        setIconSize(10);
        setLabelSize('text-[8px]');
      } else if (width < 640) {
        setIconSize(13);
        setLabelSize('text-[12px]');
      } else if (width < 1024) {
        setIconSize(16);
        setLabelSize('text-sm');
      } else {
        setIconSize(18);
        setLabelSize('text-[14px]');
      }
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleItemClick = (label) => {
    setActive(label);
    if (!open) setOpen(true);
  };

  const menuItems = [
    { icon: <Home size={iconSize} />, label: 'Accueil' },
    { icon: <Calendar size={iconSize} />, label: 'Calendrier' },
    { icon: <ShoppingCart size={iconSize} />, label: 'Boutique' },
    { icon: <User size={iconSize} />, label: 'Profil' },
    { icon: <Info size={iconSize} />, label: 'Info' },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`use custom-scroll bg-[#001f3f] text-white h-screen transition-all duration-300 overflow-y-auto hidden sm:block ${
        open ? 'w-55' : 'w-18'
      }`}
    >
      {/* Header */}
      <div
        className="bien flex items-center justify-between px-4 py-3 md:text-lg text-[12px]"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        {open && <span className="font-bold">NbaVision</span>}
        <button
          onClick={() => setOpen(!open)}
          className="text-xs md:text-lg mt-1 focus:outline-none hover:bg-white/10 px-2 py-1 rounded-md"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-3 mt-5 px-2 sm:px-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            open={open}
            active={active === item.label}
            onClick={() => handleItemClick(item.label)}
            labelSize={labelSize}
          />
        ))}
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, open, active, onClick, labelSize }) => {
  return (
    <div
      className={`flex items-center gap-2 sm:gap-4 p-2 transition-all cursor-pointer 
        ${open ? 'px-3' : ''}
        ${
          open
            ? active
              ? 'bg-white/20 rounded-md'
              : 'hover:bg-white/10 rounded-md'
            : ''
        }`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center transition-transform duration-200 ${
          !open ? 'p-2 bg-white/10 rounded-full hover:scale-120 duration-300' : ''
        }`}
      >
        {icon}
      </div>
      {open && (
        <span className={`whitespace-nowrap transition-opacity duration-400 ${labelSize}`}>
          {label}
        </span>
      )}
    </div>
  );
};

export default Sidebar;
