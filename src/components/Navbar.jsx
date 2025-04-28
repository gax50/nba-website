import React, { useState, useRef, useEffect } from 'react';
import { Search, Phone, User, ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const searchRef = useRef();
  const menuRef = useRef();
  const [iconSize, setIconSize] = useState(getResponsiveIconSize());

  function getResponsiveIconSize() {
    const width = window.innerWidth;
    if (width < 400) return 12;
    if (width < 480) return 15;
    if (width < 768) return 17;
    return 20;
  }

  useEffect(() => {
    const handleResize = () => setIconSize(getResponsiveIconSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (searchOpen || menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen, menuOpen]);

  return (
    <header className="bg-[#001f3f] text-white px-4 py-3 shadow-md relative z-50">
      <div className="flex items-center justify-between w-full gap-5">
        {/* Logo principal */}
        <div className="soratra flex items-center gap-2 md:text-lg text-sm font-bold z-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <img src={logo} alt="maso" className="sary w-5 h-5 sm:h-7 sm:w-7" />
          <span>Nba <span className="text-blue-500">Vision</span></span>
        </div>

        {/* Recherche mobile */}
        <div className="flex items-center gap-4 md:hidden">
          {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 glow-ring bg-white/10 backdrop-blur-md shadow-md transition-all duration-300 z-10"
            >
              <Search size={iconSize} className="text-white" />
            </button>
          )}
        </div>

        {/* Recherche desktop */}
        <div className="hidden md:flex flex-1 justify-center h-8 text-xs md:h-8">
          <input
            type="text"
            placeholder="Rechercher ....."
            className="w-full max-w-xl px-4 py-2 rounded-sm opacity-97 text-black hover:opacity-100 duration-400 bg-white border-3 border-white focus:border-sky-300 focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Icônes */}
        <div className={`flex items-center gap-4 ${searchOpen ? 'hidden' : 'flex'} md:flex xl:mr-20`}>
          <button><Phone size={iconSize} /></button>
          <button><User size={iconSize} /></button>
          <button><ShoppingCart size={iconSize} /></button>
        </div>

        {/* Boutons desktop */}
        <div className="flex gap-2 sm:gap-3 sm:mr-1 hidden sm:flex" style={{ fontFamily: "'Urbanist', sans-serif" }}>
          <button className="text-white border sm:px-2 sm:py-1 px-2 py-1 sm:text-[10px] rounded-sm transition text-xs xl:text-sm xl:px-6 hover:opacity-85 duration-300">Log In</button>
          <button className="bg-white text-[#001f3f] px-3 sm:px-2 py-1 rounded-sm hover:bg-gray-200 transition text-[10px] xl:text-sm xl:px-6 hover:opacity-95 duration-300">Sign Up</button>
        </div>

        {/* Menu burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white z-1000 p-2 rounded hover:bg-white/10 transition"
        >
          {menuOpen ? <X size={iconSize} /> : <Menu size={iconSize} />}
        </button>
      </div>

      {/* Recherche mobile */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute top-full left-0 w-full bg-[#001f3f] px-4 py-4 z-40"
          >
            <input
              type="text"
              placeholder="Search ......"
              className="focus:ring-2 focus:ring-sky-300 focus:outline-none w-full max-w-xl px-4 py-2 z-10 rounded-md text-[10px] text-black hover:opacity-100 duration-400 bg-white h-7 border-1 border-gray-300 focus:border-sky-300 transition-all duration-300"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu burger           */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-64 bg-[#001f3f] shadow-lg z-40 overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/20 mt-1">
              <div className="flex items-center gap-2 text-sm font-bold ">
                
                <span>Nba <span className="text-blue-500">Vision</span></span>
              </div>
              
            </div>

            <ul className="p-6 space-y-4 text-sm">
              {['Accueil', 'Équipes', 'Playoffs', 'Histoire', 'Contact'].map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setActiveMenuItem(item);
                    setMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded cursor-pointer transition duration-300 ${
                    activeMenuItem === item ? 'bg-white/10' : 'hover:bg-white/10'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 px-6 pb-6" style={{ fontFamily: "'Urbanist', sans-serif" }}>
              <button className="text-white border border-white px-3 py-2 rounded hover:opacity-70 transition">Log In</button>
              <button className="bg-white text-[#001f3f] px-3 py-2 rounded hover:bg-gray-300 transition">Sign Up</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
