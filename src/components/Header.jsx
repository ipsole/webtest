"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Play, Sun, Moon, ArrowRight, Headphones, Briefcase, Info, Server, Shield, Smartphone } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
  );

  const { setIsVideoModalOpen, setIsPortfolioOpen, setIsChatbotOpen, setIsMouseLoopPaused } = useModal();
  const [logoAnimState, setLogoAnimState] = useState('default');
  const [logoSearchText, setLogoSearchText] = useState('');

  useEffect(() => {
    let logoAnimCount = 0;
    const maxLogoAnims = 2;
    const textToType = "Looking for Edits?";
    
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
      
      await wait(1500);
      if (isCancelled) return;
      
      setLogoAnimState('visit');
      await wait(2000);
      if (isCancelled) return;

      const btn = document.getElementById('mobile-menu-btn');
      if (btn) {
        btn.style.transform = "scale(0.9)";
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
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
      <nav className="relative w-full max-w-7xl mx-auto bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-white/60 dark:border-gray-800/60 shadow-lg shadow-black/5 dark:shadow-white/5 rounded-full px-4 sm:px-6 md:px-10 py-2 lg:py-3 pointer-events-auto transition-all duration-300 header-slide-in" style={{ animationDelay: '0.1s' }}>
        <div className="flex justify-between items-center w-full gap-4 xl:gap-8">
          
          {/* Left Side: Logo + Play Button Group + Theme Toggle */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              title="Menu" 
              className="cursor-pointer flex items-center justify-center space-x-2 sm:space-x-3 bg-white dark:bg-black rounded-full shadow-lg border border-gray-100 dark:border-gray-800 py-2 px-4 md:py-2 md:px-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden flex-shrink-0"
              id="mobile-menu-btn"
            >
              <img src="https://uploads.onecompiler.io/445by7jfj/4497yex8j/logo-2-white.png" alt="Docdril Logo" className="w-10 h-10 md:w-16 md:h-16 relative z-10" onError={(e) => { e.target.src='https://placehold.co/48x48/FFFFFF/000000?text=D'; e.target.onerror=null; }} />
              {logoAnimState === 'default' ? (
                <>
                  <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-white relative z-10 brand-logo transition-transform duration-300 group-hover:-translate-x-1">
                    <span className="font-bold">Docdril</span><span className="font-bold text-[0.75em] align-super relative -top-1 opacity-80">&trade;</span>
                  </span>
                </>
              ) : logoAnimState === 'typing' ? (
                <div className="flex items-center gap-2 w-full animate-in fade-in duration-300">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="text-sm md:text-xl text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap overflow-hidden">{logoSearchText}</span>
                  <span className="w-0.5 h-5 md:h-8 bg-black dark:bg-white animate-pulse"></span>
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full animate-in fade-in zoom-in duration-300 justify-center relative">
                  <span className="text-sm md:text-xl text-gray-600 dark:text-gray-300 font-medium">Visit docdril.com</span>
                </div>
              )}
            </button>
            <button onClick={openVideo} className="bg-white dark:bg-black text-black dark:text-white hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-300 rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 border border-gray-100 dark:border-gray-800 flex items-center justify-center group" title="Play Video">
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-current ml-0.5" />
            </button>
            <button onClick={toggleTheme} className="bg-white dark:bg-black text-black dark:text-white hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-300 rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 border border-gray-100 dark:border-gray-800 flex items-center justify-center" title="Toggle Theme">
              {theme === 'dark' ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
          </div>
          
          {/* Right Side: Navigation & Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
            <div className="hidden xl:flex items-center space-x-1 2xl:space-x-3">
              <Link href="/" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full transition-all duration-200">
                Home
              </Link>
              <a href="https://portfolio.docdril.com" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full transition-all duration-200">
                Portfolio
              </a>
              <Link href="/about" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full transition-all duration-200">
                About
              </Link>
              <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full transition-all duration-200">
                Services
              </Link>
              <Link href="/pricing" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full transition-all duration-200">
                Pricing
              </Link>
              <Link href="/policy" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800/80 px-3 py-2 rounded-full transition-all duration-200">
                Policy
              </Link>
              
              <a href="https://os.docdril.com" className="flex items-center gap-1.5 text-sm font-bold text-[#4B4EFC] dark:text-[#6c6efc] hover:bg-gray-100 dark:hover:bg-gray-800/80 px-4 py-2 rounded-full transition-all duration-200 ml-1">
                <Smartphone className="w-4 h-4" />
                OS App
              </a>

              <Link href="/contact" className="ml-2 text-sm font-bold text-gray-900 dark:text-white py-2 px-5 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-black hover:bg-gray-50 dark:bg-gray-900/50 dark:hover:bg-gray-900 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md">
                Contact
              </Link>
            </div>
            
            <Link href="/enquiry" className="flex items-center justify-center w-10 h-10 bg-[#0F172A] dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 active:scale-95 group flex-shrink-0" title="Enquiry">
              <Headphones className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`xl:hidden w-full max-w-7xl mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-gray-800/60 shadow-xl pointer-events-auto flex-col space-y-2 px-4 py-6 transition-all duration-300 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200">
          Home
        </Link>
        <a href="https://portfolio.docdril.com" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200">
          Portfolio
        </a>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200">
          About
        </Link>
        <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200">
          Services
        </Link>
        <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200">
          Pricing
        </Link>
        <Link href="/policy" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200">
          Policy
        </Link>
        <a href="https://os.docdril.com" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200">
          <Smartphone className="w-5 h-5 text-[#4B4EFC]" />
          OS App
        </a>
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-center text-gray-900 dark:text-white font-bold py-3 px-5 mt-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black shadow-sm active:scale-95 transition-transform hover:bg-gray-50 dark:bg-gray-900/50 dark:hover:bg-gray-900">
          Contact
        </Link>
      </div>
    </header>
  );
}
