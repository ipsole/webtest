"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Play, Sun, Moon, ArrowRight, Headphones, Briefcase, Info, Server, Shield, Smartphone, Folder, FolderOpen } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path || pathname.startsWith(path + '/');
  };
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
  );

  const { setIsVideoModalOpen, setIsPortfolioOpen, setIsChatbotOpen, setIsMouseLoopPaused, isExploreOpen, setIsExploreOpen } = useModal();
  const [logoAnimState, setLogoAnimState] = useState('default');
  const [logoSearchText, setLogoSearchText] = useState('');

  useEffect(() => {
    let logoAnimCount = 0;
    const maxLogoAnims = 2;
    const textToType = "Creative-tech Studio";
    
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let isCancelled = false;
    
    async function playLogoAnimation() {
      if (document.hidden || logoAnimCount >= maxLogoAnims || isCancelled) return;
      logoAnimCount++;

      setLogoAnimState('typing');
      setLogoSearchText('');

      for (let i = 0; i < textToType.length; i++) {
        if (isCancelled) return;
        setLogoSearchText(prev => prev + textToType[i]);
        await wait(80);
      }
      
      await wait(2500);
      if (isCancelled) return;
      
      const btn = document.getElementById('logo-brand-link');
      if (btn) {
        btn.style.transform = "scale(0.95)";
        await wait(200);
        btn.style.transform = "scale(1)";
        await wait(200);
        btn.style.transform = "";
      }
      
      setLogoAnimState('default');
      
      if (btn) {
        btn.classList.add('animate-pulse');
        setTimeout(() => btn.classList.remove('animate-pulse'), 500);
      }
    }

    const initialTimeout = setTimeout(() => {
      playLogoAnimation();
    }, 100);

    const intervalId = setInterval(() => {
      if (logoAnimCount >= maxLogoAnims) {
        clearInterval(intervalId);
      } else {
        playLogoAnimation();
      }
    }, 20000);

    return () => {
      isCancelled = true;
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const openPortfolio = (e) => {
    e.preventDefault();
    setIsPortfolioOpen(true);
    setIsMobileMenuOpen(false);
    setIsMouseLoopPaused(true);
  };

  const openChatbot = (e) => {
    e.preventDefault();
    setIsChatbotOpen(true);
    setIsMobileMenuOpen(false);
    setIsMouseLoopPaused(true);
  };

  const openVideo = () => {
    setIsVideoModalOpen(true);
    setIsMouseLoopPaused(true);
  };

  return (
    <header className="fixed top-4 z-50 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center pointer-events-none transition-all duration-300">
      <nav className="relative w-full max-w-7xl mx-auto bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-white/60 dark:border-gray-800/60 shadow-lg shadow-black/5 dark:shadow-white/5 rounded-full px-4 sm:px-6 md:px-10 py-3.5 pointer-events-auto transition-all duration-300 header-slide-in" style={{ animationDelay: '0.1s' }}>
        <div className="flex justify-between items-center w-full gap-2 sm:gap-4 xl:gap-8">
          
          {/* Left Side: Logo Brand Link + Play Button + Folder Explorer + Theme Toggle (Desktop & Mobile) */}
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-4 flex-shrink-0">
            <Link 
              href="/"
              title="Docdril Home" 
              className="cursor-pointer flex items-center justify-center space-x-2 sm:space-x-3 bg-white dark:bg-black rounded-full shadow-lg border border-gray-100 dark:border-gray-800 py-2 px-4 md:py-2 md:px-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden flex-shrink-0"
              id="logo-brand-link"
            >
              <img src="https://uploads.onecompiler.io/445by7jfj/4497yex8j/logo-2-white.png" alt="Docdril Logo" className="w-10 h-10 md:w-16 md:h-16 relative z-10" onError={(e) => { e.target.src='https://placehold.co/48x48/FFFFFF/000000?text=D'; e.target.onerror=null; }} />
              
              <div className="relative z-10 flex items-center">
                {/* On small mobile, always show static brand text */}
                <span className="block md:hidden text-xl sm:text-2xl font-bold text-gray-900 dark:text-white brand-logo">
                  Docdril<span className="text-[0.75em] align-super relative -top-0.5 opacity-80">&trade;</span>
                </span>
                
                {/* Typing animation on medium and larger screens only */}
                <div className="hidden md:block">
                  {logoAnimState === 'default' ? (
                    <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-white brand-logo font-bold">
                      Docdril<span className="text-[0.75em] align-super relative -top-1 opacity-80">&trade;</span>
                    </span>
                  ) : (
                    <div className="flex items-center gap-2 animate-in fade-in duration-300">
                      <span className="text-sm md:text-xl text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap overflow-hidden max-w-[200px]">{logoSearchText}</span>
                      <span className="w-0.5 h-5 md:h-8 bg-black dark:bg-white animate-pulse"></span>
                    </div>
                  )}
                </div>
              </div>
            </Link>

            {/* Play video button - hidden on mobile to save space, shown on sm and up */}
            <button 
              onClick={openVideo} 
              className="hidden sm:flex bg-white dark:bg-black text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 border border-gray-100 dark:border-gray-800 items-center justify-center group" 
              title="Play Video"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-current ml-0.5" />
            </button>

            {/* Folder/Sitemap Explorer - placed on the left next to theme as requested */}
            <button 
              onClick={() => setIsExploreOpen(!isExploreOpen)} 
              className="bg-white dark:bg-black text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 border border-gray-100 dark:border-gray-800 flex items-center justify-center" 
              title="Explore Sitemap"
            >
              {isExploreOpen ? <FolderOpen className="w-4 h-4 md:w-5 md:h-5" /> : <Folder className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
          </div>
          
          {/* Right Side: Navigation Links (Desktop) & Action Toggles (Mobile & Desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4 flex-shrink-0">
            {/* Desktop Navigation links (hidden on mobile/tablet) */}
            <div className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
              <Link 
                href="/" 
                className={`text-sm transition-all duration-200 ${
                  isActive('/') 
                    ? 'font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black shadow-sm hover:shadow-md' 
                    : 'font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/portfolio" 
                className={`text-sm transition-all duration-200 ${
                  isActive('/portfolio') 
                    ? 'font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black shadow-sm hover:shadow-md' 
                    : 'font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full'
                }`}
              >
                Portfolio
              </Link>
              <Link 
                href="/about" 
                className={`text-sm transition-all duration-200 ${
                  isActive('/about') 
                    ? 'font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black shadow-sm hover:shadow-md' 
                    : 'font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full'
                }`}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className={`text-sm transition-all duration-200 ${
                  isActive('/services') 
                    ? 'font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black shadow-sm hover:shadow-md' 
                    : 'font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full'
                }`}
              >
                Services
              </Link>
              <Link 
                href="/pricing" 
                className={`text-sm transition-all duration-200 ${
                  isActive('/pricing') 
                    ? 'font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black shadow-sm hover:shadow-md' 
                    : 'font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full'
                }`}
              >
                Pricing
              </Link>
              <Link 
                href="/policy" 
                className={`text-sm transition-all duration-200 ${
                  isActive('/policy') 
                    ? 'font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black shadow-sm hover:shadow-md' 
                    : 'font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full'
                }`}
              >
                Policy
              </Link>
              
              <a href="https://os.docdril.com" className="flex items-center gap-1.5 text-sm font-bold text-[#4B4EFC] dark:text-[#6c6efc] hover:bg-gray-100 dark:hover:bg-gray-800/80 px-4 py-2 rounded-full transition-all duration-200 ml-1">
                <Smartphone className="w-4 h-4" />
                OS App
              </a>

              <Link 
                href="/contact" 
                className="ml-2 text-sm font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black hover:bg-gray-50 dark:bg-gray-900/50 dark:hover:bg-gray-900 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Contact
              </Link>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Enquiry Button */}
              <Link 
                href="/enquiry" 
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#0F172A] dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 active:scale-95 flex-shrink-0" 
                title="Enquiry"
              >
                <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
 
              {/* Mobile/Tablet Menu Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden bg-white dark:bg-black text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-center transition-transform transform active:scale-95"
                title="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      <div className={`xl:hidden w-full max-w-7xl mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-gray-800/60 shadow-xl pointer-events-auto flex-col space-y-1.5 px-4 py-6 transition-all duration-300 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
            isActive('/') 
              ? 'bg-gray-100/80 dark:bg-zinc-800 font-bold text-gray-900 dark:text-white border border-gray-200/50 dark:border-zinc-700/50' 
              : 'text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          Home
        </Link>
        <Link 
          href="/portfolio" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
            isActive('/portfolio') 
              ? 'bg-gray-100/80 dark:bg-zinc-800 font-bold text-gray-900 dark:text-white border border-gray-200/50 dark:border-zinc-700/50' 
              : 'text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          Portfolio
        </Link>
        <Link 
          href="/about" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
            isActive('/about') 
              ? 'bg-gray-100/80 dark:bg-zinc-800 font-bold text-gray-900 dark:text-white border border-gray-200/50 dark:border-zinc-700/50' 
              : 'text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          About
        </Link>
        <Link 
          href="/services" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
            isActive('/services') 
              ? 'bg-gray-100/80 dark:bg-zinc-800 font-bold text-gray-900 dark:text-white border border-gray-200/50 dark:border-zinc-700/50' 
              : 'text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          Services
        </Link>
        <Link 
          href="/pricing" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
            isActive('/pricing') 
              ? 'bg-gray-100/80 dark:bg-zinc-800 font-bold text-gray-900 dark:text-white border border-gray-200/50 dark:border-zinc-700/50' 
              : 'text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          Pricing
        </Link>
        <Link 
          href="/policy" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
            isActive('/policy') 
              ? 'bg-gray-100/80 dark:bg-zinc-800 font-bold text-gray-900 dark:text-white border border-gray-200/50 dark:border-zinc-700/50' 
              : 'text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          Policy
        </Link>
        <a href="https://os.docdril.com" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
          <Smartphone className="w-5 h-5 text-[#4B4EFC]" />
          OS App
        </a>
        
        {/* Play Promo Video Link inside Mobile Menu */}
        <button 
          onClick={() => {
            setIsMobileMenuOpen(false);
            openVideo();
          }}
          className="flex w-full items-center gap-3 px-4 py-2.5 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-left"
        >
          <Play className="w-5 h-5 text-gray-500 fill-current" />
          <span>Play Promo Video</span>
        </button>
 
        <Link 
          href="/contact" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="block text-center text-gray-900 dark:text-white font-bold py-3 px-5 mt-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black shadow-sm active:scale-95 transition-transform hover:bg-gray-50 dark:bg-gray-900/50 dark:hover:bg-gray-900"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
