import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Sparkles, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function Home() {
  const [robotBubbleText, setRobotBubbleText] = useState('');
  const [isTypingCursor, setIsTypingCursor] = useState(true);
  const laptopContainerRef = useRef(null);
  const [iframeScale, setIframeScale] = useState(1);

  useEffect(() => {
      const updateScale = () => {
          if (laptopContainerRef.current) {
              const width = laptopContainerRef.current.offsetWidth;
              // Target desktop width is roughly 1280px for a clean viewport
              setIframeScale(width / 1280);
          }
      };
      updateScale();
      window.addEventListener('resize', updateScale);
      return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => { // Robot bubble
    const messages = ["Hi, folks!", "I'm Pluto.", "An AI Agent."];
    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let cycleCount = 0;
    const maxCycles = 2;
    let timeout;
    
    function typeLoop() {
      if (document.hidden) {
        timeout = setTimeout(typeLoop, 1000); 
        return;
      }
      const currentMsg = messages[msgIndex];
      if (!currentMsg) return;
      
      if (isDeleting) {
        setRobotBubbleText(currentMsg.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setRobotBubbleText(currentMsg.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentMsg.length) {
        typeSpeed = 2000; 
        if (cycleCount >= maxCycles && msgIndex === 0) {
          setIsTypingCursor(false);
          return;
        }
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex++;
        if (msgIndex >= messages.length) {
          msgIndex = 0;
          cycleCount++;
        }
        typeSpeed = 500; 
      }
      timeout = setTimeout(typeLoop, typeSpeed);
    }
    timeout = setTimeout(typeLoop, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // BATTERY SAVER: Suspend 3D Robot iframe when scrolled out of view
    const robotIframe = document.getElementById('robot-iframe');
    const heroSection = document.getElementById('hero-section'); 
    if (robotIframe && heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    robotIframe.classList.add('gpu-paused');
                } else {
                    robotIframe.classList.remove('gpu-paused');
                }
            });
        }, { rootMargin: '100px' });
        heroObserver.observe(heroSection);
        return () => heroObserver.disconnect();
    }
  }, []);

    const { setIsPortfolioOpen, setIsChatbotOpen, setInfoModal, setIsAppPreviewOpen, setIsMouseLoopPaused } = useModal();

    // Robot Bubble Typing Animation
    useEffect(() => {
        const messages = ["Hi, folks!", "I'm Pluto.", "An AI Agent."];
        let msgIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let cycleCount = 0;
        const maxCycles = 2; // exactly 3 full cycles
        let timer;
        const robotBubble = document.getElementById('robot-bubble');

        if (!robotBubble) return;

        function typeLoop() {
            const currentMsg = messages[msgIndex];
            
            if (isDeleting) {
                robotBubble.textContent = currentMsg.substring(0, charIndex - 1);
                charIndex--;
            } else {
                robotBubble.textContent = currentMsg.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentMsg.length) {
                typeSpeed = 2000; 
                
                if (cycleCount >= maxCycles && msgIndex === 0) {
                    robotBubble.classList.remove('typing-cursor');
                    return;
                }
                
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                msgIndex++;
                if (msgIndex >= messages.length) {
                    msgIndex = 0;
                    cycleCount++;
                }
                typeSpeed = 500;
            }

            timer = setTimeout(typeLoop, typeSpeed);
        }
        
        timer = setTimeout(typeLoop, 1000);
        return () => clearTimeout(timer);
    }, []);

  useRevealOnScroll();
  const [paymentMode, setPaymentMode] = useState('new');
  const [flippedCard, setFlippedCard] = useState(null);

  const appFeatures = [
    { title: "Client Project Delivery & Management", desc: "Seamlessly add projects, track process, output, and delivery all in one centralized hub." },
    { title: "Built-in Communication", desc: "Features integrated queries, chat functions, and timestamped comments for better assistance and precise revisions." },
    { title: "Integrated Wallet & Payments", desc: "Onboard projects smoothly. Start with an advance or pay in full upfront, then settle any remaining balance at the end for a seamless experience." }
  ];

  const [activeAppFeatureIndex, setActiveAppFeatureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAppFeatureIndex((prev) => (prev + 1) % appFeatures.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

    const expertiseItems = [
    { title: "Visuals", img: "/assets/services/video-editing.webp", desc: "Cinematic & 4K Edits" },
    { title: "Engineering", img: "/assets/services/web-saas-design.webp", desc: "SaaS & Web Architecture" },
    { title: "Growth", img: "/assets/services/social-media.webp", desc: "Branding & Strategy" },
    { title: "Automation", img: "/assets/services/agentic-chatbots.webp", desc: "AI Agents & Pipelines" }
  ];

  const [hoveredExpertise, setHoveredExpertise] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const showInfoModal = (id, title, desc) => {
    setInfoModal({ isOpen: true, title, text: desc, type: id });
  };

  return (
    <main className="flex-grow pt-24 relative overflow-x-hidden">
        {/* Floating Reveal Image Container */}
        <div 
            className="fixed top-0 left-0 w-[480px] h-[270px] pointer-events-none z-[100] transition-all duration-[400ms] ease-out flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-gray-900/10 backdrop-blur-sm"
            style={{ 
                opacity: hoveredExpertise !== null ? 1 : 0, 
                transform: `translate(${mousePos.x - 240}px, ${mousePos.y - 135}px) scale(${hoveredExpertise !== null ? 1 : 0.8})`
            }}
        >
            {expertiseItems.map((item, idx) => (
                <img 
                    key={idx}
                    src={item.img}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredExpertise === idx ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>

            {/*  1. Hero Section Part 1: White Gradient Background (Robot + Ask)  */}
            <section id="hero-section" className="w-full pt-6 pb-2 px-4 sm:px-6 lg:px-8 relative z-10">
                {/*  Inner Light Container  */}
                <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black rounded-[2.5rem] overflow-hidden relative pt-6 sm:pt-12 pb-4 shadow-2xl shadow-black/10 dark:shadow-white/5 border-8 border-gray-100 dark:border-gray-800 zoom-in-entrance">

                    {/*  Photo Background  */}
                    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80 dark:opacity-60 transition-opacity duration-300" style={{ backgroundImage: "url('https://uploads.onecompiler.io/445by7jfj/44gphz9hz/web-cover-2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    
                    {/*  Audio Play Button  */}
                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-30">
                        <audio id="robot-audio" ref={audioRef}>
                            <source src="/audio/sound.mp3" type="audio/mpeg" />
                        </audio>
                        <button id="audio-toggle-btn" onClick={toggleAudio} className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 dark:border-gray-700 text-gray-800 dark:text-white hover:scale-110 transition-transform active:scale-95 group" title="Play Sound">
                            {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current transition-colors" /> : <Play className="w-5 h-5 md:w-6 md:h-6 fill-current ml-0.5 transition-colors" />}
                        </button>
                    </div>

                    <div className="w-full max-w-4xl mx-auto relative z-10">
                        {/*  Robot Text Bubble  */}
                        <div id="robot-bubble" className="absolute z-20 top-[5%] right-[5%] sm:top-[10%] sm:right-[15%] md:right-[25%] liquid-bubble typing-cursor"></div>

                        {/*  Robot Column  */}
                        <div className="max-w-lg mx-auto h-[200px] md:h-[280px] robot-container overflow-hidden rounded-lg relative z-10 pointer-events-none sm:pointer-events-auto">
                            <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,0.8)_0%,_transparent_70%)] mix-blend-soft-light dark:hidden"></div>
                            <iframe 
                                id="robot-iframe"
                                src='https://my.spline.design/genkubgreetingrobot-1risyBQsn5fHVnO9r2idsNhk/?logo=0&bg=transparent' 
                                frameBorder='0' 
                                className="w-full border-0 h-[150%] md:h-[131%] -translate-y-[13%] md:-translate-y-[8%]"
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/*  CHAT BUTTON (RIGHT)  */}
                        <div className="absolute z-20 top-1/2 -translate-y-1/2 right-4 sm:right-16 lg:right-0 flex items-center gap-2 sm:gap-4 chat-button-group">
                            <span className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white reveal-on-scroll">Ask</span>
                            <div className="breathe-animation">
                                <button id="chatbot-trigger" onClick={(e) => { e.preventDefault(); setIsChatbotOpen(true); }} className="flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white rounded-full shadow-xl transform transition-transform hover:scale-110 focus:outline-none">
                                    <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-2.138a1.125 1.125 0 0 1 .865-.501h.002c1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" strokeWidth="1.5"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  1. Hero Section Part 2: White/Light Background (Text Content)  */}
            <section className="w-full pt-2 pb-2 sm:pb-3 px-4 sm:px-6 lg:px-8 overflow-hidden relative z-20">
                <div className="text-center">
                    {/*  Portfolio Badge  */}
                    <button id="portfolio-trigger" onClick={(e) => { e.preventDefault(); setIsPortfolioOpen(true); }} className="header-slide-in relative inline-flex overflow-hidden rounded-full p-[1px] mb-4 group focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black shadow-lg shadow-black/10 dark:shadow-white/5" style={{ animationDelay: '0.3s' }}>
                        {/*  PERFORMANCE OPTIMIZATION: Slowed from 2s to 8s  */}
                        <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E5E7EB_0%,#FFFFFF_50%,#E5E7EB_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#FFFFFF_50%,#000000_100%)]"></span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-black px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 backdrop-blur-3xl transition-colors hover:bg-gray-200 dark:hover:bg-gray-900 gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            View Portfolio
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </button>

                    {/*  H1 Box  */}
                    <div className="w-full flex justify-center">
                        <div className="header-slide-in relative inline-flex overflow-hidden rounded-full p-[1px] shadow-xl shadow-black/10 dark:shadow-white/5" style={{ animationDelay: '0.5s' }}>
                            {/*  PERFORMANCE OPTIMIZATION: Slowed from 2s to 8s  */}
                            <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E5E7EB_0%,#FFFFFF_50%,#E5E7EB_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#FFFFFF_50%,#000000_100%)]"></span>
                            
                            <h1 className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-black/90 dark:bg-black/90 backdrop-blur-3xl p-4 md:p-8 text-lg sm:text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight flex-nowrap gap-x-3 md:gap-x-8">
                                <button id="btn-ideate" onClick={() => showInfoModal('ideate', 'Ideate', 'Before the first cut, we conceptualize. This stage involves deep-vision intake, scripting for retention, and identifying psychological hooks that align with your specific target audience and content goals.')} 
                                        className=" flex items-center gap-2 md:gap-3 transition-transform hover:scale-105 active:opacity-70 focus:outline-none group">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black dark:text-white group-hover:text-yellow-600 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <span>Ideate</span>
                                </button>
                                <button id="btn-design" onClick={() => showInfoModal('design', 'Design', 'Establishing the visual identity. We define the color palette, craft custom motion graphics, select high-impact typography, and integrate branding elements to ensure your video stands out in a crowded feed.')}
                                        className=" flex items-center gap-2 md:gap-3 transition-transform hover:scale-105 active:opacity-70 focus:outline-none group">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black dark:text-white group-hover:text-rose-600 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <span>Design</span>
                                </button>
                                <button id="btn-edit" onClick={() => showInfoModal('edit', 'Edit', 'The final convergence of vision and assets. Our editors utilize advanced cutting techniques, audio mastering, color grading, and SFX to turn raw footage into a polished, high-impact final deliverable.')}
                                        className=" flex items-center gap-2 md:gap-3 transition-transform hover:scale-105 active:opacity-70 focus:outline-none group">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black dark:text-white group-hover:text-blue-700 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.452-2.452L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.452-2.452L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.452 2.452L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.452 2.452Z" />
                                    </svg>
                                    <span>Edit</span>
                                </button>
                            </h1>
                        </div>
                    </div>
                    
                    {/*  Docdril OS Hero Prominent Button (PREMIUM APPLE-STYLE PILL)  */}
                    <div className="header-slide-in w-full relative flex flex-col items-center justify-center mt-6 sm:mt-8 mb-0" style={{ animationDelay: '0.7s' }}>
                        
                        {/* Center Node Connecting Line (Top portion above button removed to avoid clutter, flow starts from button) */}

                        <a href="https://os.docdril.com" className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 p-2 pr-6 sm:p-2.5 sm:pr-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full shadow-lg shadow-black/10 dark:shadow-white/5 hover:shadow-xl hover:shadow-black/15 transition-all duration-300 overflow-hidden z-10">
                            
                            {/*  Sleek App Badge  */}
                            <span className="relative z-20 flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
                                APP
                            </span>
                            
                            <span className="relative z-20 flex items-center text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-wide">
                                Docdril OS
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-gray-400 group-hover:text-gray-900 dark:text-white dark:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </a>

                        {/* CSS Wireframe Flow Arrows */}
                        <div className="w-full flex flex-col items-center mt-0 opacity-80 z-0">
                            {/* Vertical Stem from Button */}
                            <div className="w-px sm:w-[2px] h-8 sm:h-10 bg-gray-300 dark:bg-zinc-700"></div>
                            
                            {/* Horizontal Bar with Curves (Hidden on mobile for better stacking) */}
                            <div className="hidden sm:flex w-full max-w-5xl justify-center items-start h-12 sm:h-16 px-4">
                                {/* Left Branch (Aligns perfectly with 1/6th of container, the center of col 1) */}
                                <div className="w-[33.33%] h-full border-t-2 border-l-2 border-gray-300 dark:border-zinc-700 rounded-tl-3xl translate-x-[1px]"></div>
                                
                                {/* Center Branch */}
                                <div className="w-[2px] h-full bg-gray-300 dark:bg-zinc-700 shrink-0"></div>
                                
                                {/* Right Branch (Aligns perfectly with 5/6th of container, the center of col 3) */}
                                <div className="w-[33.33%] h-full border-t-2 border-r-2 border-gray-300 dark:border-zinc-700 rounded-tr-3xl -translate-x-[1px]"></div>
                            </div>
                            
                            {/* Mobile straight line fallback */}
                            <div className="flex sm:hidden w-px h-8 bg-gray-300 dark:bg-zinc-700"></div>
                        </div>

                        {/* The 3 Role Boxes */}
                        <div className="w-full max-w-5xl mx-auto px-4 relative sm:-mt-2 mb-2 sm:mb-4">
                            {/* Continuous vertical line for mobile ONLY to connect the boxes */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-zinc-700 sm:hidden z-0 opacity-80"></div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 relative z-10">
                                {/* Client Box */}
                                <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-[1.5rem] p-4 sm:p-6 shadow-xl shadow-black/5 dark:shadow-white/5 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-white/10 transition-all duration-300 cursor-default relative z-10 max-w-[300px] sm:max-w-none w-full mx-auto">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2 sm:mb-4 shadow-sm">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Clients</h4>
                                    <p className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Project delivery, tracking, and seamless onboarding.</p>
                                </div>
                                
                                {/* Manager Box */}
                                <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-[1.5rem] p-4 sm:p-6 shadow-xl shadow-black/5 dark:shadow-white/5 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-white/10 transition-all duration-300 cursor-default relative z-10 max-w-[300px] sm:max-w-none w-full mx-auto">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2 sm:mb-4 shadow-sm">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    </div>
                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Managers</h4>
                                    <p className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Team coordination, timeline tracking, and reporting.</p>
                                </div>
                                
                                {/* Admin Box */}
                                <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-[1.5rem] p-4 sm:p-6 shadow-xl shadow-black/5 dark:shadow-white/5 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-white/10 transition-all duration-300 cursor-default relative z-10 max-w-[300px] sm:max-w-none w-full mx-auto">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2 sm:mb-4 shadow-sm">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                    </div>
                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Admins</h4>
                                    <p className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Full ecosystem control, analytics, and billing.</p>
                                </div>
                            </div>
                        </div>

                        {/* Connection from Center Box down to Carousel */}
                        <div className="w-px sm:w-[2px] h-6 sm:h-10 bg-gray-300 dark:bg-zinc-700 opacity-80 z-0 mb-0"></div>

                        {/*  App Info Details (Carousel)  */}
                        <div className="w-full max-w-2xl mx-auto relative z-10 bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-[1.5rem] p-6 sm:p-8 text-left shadow-xl shadow-black/5 dark:shadow-white/5">
                            <h3 className="text-sm sm:text-base md:text-lg font-black text-gray-900 dark:text-white uppercase tracking-[0.15em] mb-6 flex items-center gap-3 drop-shadow-sm">
                                <span className="relative flex h-3 w-3 sm:h-3.5 sm:w-3.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
                                </span>
                                PROJECT DELIVERY APP
                            </h3>
                            <div className="relative w-full min-h-[100px] sm:min-h-[70px] flex items-center">
                                {appFeatures.map((feature, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeAppFeatureIndex === idx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
                                    >
                                        <p className="text-sm sm:text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed m-0">
                                            <strong className="text-gray-900 dark:text-white mr-1.5">{feature.title}:</strong> 
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Carousel Indicators */}
                            <div className="mt-6 flex items-center justify-center gap-2">
                                {appFeatures.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveAppFeatureIndex(idx)}
                                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 focus:outline-none ${activeAppFeatureIndex === idx ? 'w-6 sm:w-8 bg-gray-900 dark:bg-white' : 'w-1.5 sm:w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                                        aria-label={`Go to feature ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* ======================================================== */}
                        {/* EMBEDDED LAPTOP MOCKUP (Clean, Stable Version)           */}
                        {/* ======================================================== */}
                        <div className="w-full max-w-4xl mx-auto mt-16 sm:mt-24 header-slide-in relative z-10" style={{ animationDelay: '0.8s' }}>
                            <div className="relative w-full aspect-[16/10] bg-[#e5e7eb] dark:bg-[#1f2937] rounded-t-2xl sm:rounded-t-3xl border-[8px] sm:border-[12px] border-b-0 border-gray-900 dark:border-black shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-700 hover:scale-[1.02]">
                                {/* Browser Chrome */}
                                <div className="w-full h-6 sm:h-8 bg-gray-100 dark:bg-zinc-800 flex items-center px-3 gap-1.5 shrink-0 border-b border-gray-200 dark:border-zinc-700 z-20">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                                    <div className="mx-auto bg-white dark:bg-black rounded-md px-4 sm:px-24 py-0.5 sm:py-1 text-[8px] sm:text-[10px] text-gray-400 font-mono tracking-wide">os.docdril.com</div>
                                </div>
                                {/* Iframe Content */}
                                <div ref={laptopContainerRef} className="flex-grow relative w-full bg-white dark:bg-black pointer-events-none overflow-hidden">
                                    <iframe 
                                        src="https://os.docdril.com" 
                                        style={{
                                            width: '1280px',
                                            height: iframeScale > 0 ? `${100 / iframeScale}%` : '100%',
                                            transform: `scale(${iframeScale})`,
                                            transformOrigin: 'top left'
                                        }}
                                        className="absolute top-0 left-0 border-0 pointer-events-none" 
                                        title="Docdril OS Live Preview" 
                                        loading="lazy"
                                        scrolling="no"
                                    ></iframe>
                                </div>
                            </div>
                            {/* Laptop Base */}
                            <div className="w-[105%] -ml-[2.5%] h-3 sm:h-5 bg-gray-300 dark:bg-zinc-800 rounded-b-2xl sm:rounded-b-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-gray-400 dark:border-zinc-700 flex justify-center items-start">
                                <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gray-400 dark:bg-zinc-600 rounded-b-md mt-0"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*  The Studio / Philosophy Section  */}
            <section id="the-studio" className="w-full pt-16 pb-20 md:pb-32 bg-transparent relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="reveal-on-scroll mb-8">
                            <h2 className="text-5xl sm:text-6xl md:text-[5.5rem] leading-[1.1] font-semibold text-gray-900 dark:text-white tracking-tight mb-4">
                                <span className="font-normal text-zinc-400">@</span>Creative-tech Studio.
                            </h2>
                            <p className="text-[1.1rem] sm:text-xl md:text-2xl text-gray-800 dark:text-gray-200 italic font-light tracking-wide">
                                video editing <span className="mx-1.5 sm:mx-2 font-thin opacity-50">|</span> web design <span className="mx-1.5 sm:mx-2 font-thin opacity-50">|</span> ai automation
                            </p>
                        </div>
                        
                        <p className="reveal-on-scroll text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
                            At Docdril, we merge high-end visual storytelling with robust digital engineering. We are a hybrid creative and tech studio built to elevate your brand from every angle.
                        </p>
                    </div>

                    {/* Bento Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {/*  Card 1: Creative  */}
                        <div className="reveal-on-scroll relative bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-10 border border-gray-100 dark:border-gray-700/60 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-900 dark:text-white mb-6 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Creative Media</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">Expert video editing, dynamic motion graphics, custom branding, and original song making to give your brand an unforgettable identity.</p>
                        </div>
                        
                        {/*  Card 2: Tech (Offset downwards on larger screens)  */}
                        <div className="reveal-on-scroll sm:translate-y-8 relative bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-10 border border-gray-100 dark:border-gray-700/60 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-900 dark:text-white mb-6 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tech & Automation</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">Full-stack web and app design, custom SaaS website development, and smart AI automations designed to streamline your operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  NEW: Hover Reveal Expertise Section  */}
            <section 
                className="w-full py-12 md:py-20 bg-transparent relative z-20 overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredExpertise(null)}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col border-t border-gray-200 dark:border-gray-800">
                        {expertiseItems.map((item, idx) => (
                            <div 
                                key={idx}
                                className="group flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-6 sm:py-10 cursor-default relative"
                                onMouseEnter={() => setHoveredExpertise(idx)}
                            >
                                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 dark:text-white uppercase tracking-tighter transition-all duration-300 group-hover:pl-4 sm:group-hover:pl-8 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {item.title}
                                </h2>
                                <span className="text-xs sm:text-sm md:text-lg font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hidden sm:block">
                                    {item.desc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  2. Services Section (PREMIUM MINIMALIST GRID)  */}
            <section id="services" className="w-full bg-transparent flowing-section flow-top relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !pt-2 sm:!pt-2">
                    <div className="text-center mb-10 md:mb-16 mt-0">
                        <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Our Service Menu</h2>
                        <p className="reveal-on-scroll mt-3 sm:mt-4 text-xs sm:text-lg text-gray-500 dark:text-gray-400 font-medium">Everything you need to scale your brand and digital presence.</p>
                    </div>
                    
                    {/*  PREMIUM 2x2 GRID  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        
                        {/*  Category 1: Content Creation  */}
                        <Link to="/services/content-creation" className="h-full reveal-on-scroll block group" style={{ transitionDelay: '0.0s' }}>
                            <div className="relative h-full bg-white dark:bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-gray-800 p-6 sm:p-10 flex flex-col hover:-translate-y-1.5 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
                                {/*  Subtle background glow  */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-blue-600 dark:text-blue-400">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                </div>
                                
                                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-3 relative z-10">Content Creation</h3>
                                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
                                    High-retention short-form, long-form, and complete video production tailored for your audience.
                                </p>
                                
                                <div className="mt-6 flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                                    Explore Content
                                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </div>
                        </Link>

                        {/*  Category 2: AI Solutions  */}
                        <Link to="/services/ai-automation" className="h-full reveal-on-scroll block group" style={{ transitionDelay: '0.1s' }}>
                            <div className="relative h-full bg-white dark:bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-gray-800 p-6 sm:p-10 flex flex-col hover:-translate-y-1.5 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-transparent dark:from-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-amber-600 dark:text-amber-400">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                
                                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-3 relative z-10">AI Solutions</h3>
                                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
                                    Intelligent agents, custom chatbots, and automated pipelines to scale your operations rapidly.
                                </p>
                                
                                <div className="mt-6 flex items-center text-sm font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                                    Explore AI
                                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </div>
                        </Link>

                        {/*  Category 3: Web Development  */}
                        <Link to="/services/web-development" className="h-full reveal-on-scroll block group" style={{ transitionDelay: '0.15s' }}>
                            <div className="relative h-full bg-white dark:bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-gray-800 p-6 sm:p-10 flex flex-col hover:-translate-y-1.5 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-emerald-600 dark:text-emerald-400">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                </div>
                                
                                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-3 relative z-10">Web Development</h3>
                                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
                                    High-converting SaaS websites and robust, responsive web applications built for scale.
                                </p>
                                
                                <div className="mt-6 flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                                    Explore Web
                                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </div>
                        </Link>

                        {/*  Category 4: Branding  */}
                        <Link to="/services/branding-growth" className="h-full reveal-on-scroll block group" style={{ transitionDelay: '0.2s' }}>
                            <div className="relative h-full bg-white dark:bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-gray-800 p-6 sm:p-10 flex flex-col hover:-translate-y-1.5 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 to-transparent dark:from-violet-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-violet-600 dark:text-violet-400">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                </div>
                                
                                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-3 relative z-10">Branding</h3>
                                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
                                    Complete brand identity creation, strategic pitch decks, and premium graphic design.
                                </p>
                                
                                <div className="mt-6 flex items-center text-sm font-bold text-violet-600 dark:text-violet-400 group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                                    Explore Branding
                                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </div>
                        </Link>

                    </div>

                    {/*  View All Services Button  */}
                    <div className="mt-10 md:mt-14 text-center reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/services" className="inline-flex items-center gap-2 bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 group">
                            View All Services
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>

                </div>
            </section>

            {/*  Projects Stats Section  */}
            <section className="w-full py-8 md:py-12 bg-transparent flex justify-center items-center relative z-20">
                <div className="reveal-on-scroll flex items-center justify-center gap-5 sm:gap-8 px-6">
                    <div className="text-right flex flex-col justify-center">
                        <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-200 tracking-tight">Projects</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-400 dark:text-gray-500 tracking-tight">Delivered</span>
                    </div>
                    <div className="w-1 h-16 sm:h-24 bg-gradient-to-b from-pink-500 to-red-600 rounded-full"></div>
                    <div className="flex items-center">
                        <span className="text-6xl sm:text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-600 counter-value leading-none" data-target="450">0</span>
                    </div>
                </div>
            </section>

            {/*  3. Why Us  */}
            <section id="why-us" className="w-full bg-transparent flowing-section flow-bottom relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !pt-2 sm:!pt-8">
                    <h2 className="reveal-on-scroll text-center text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 md:mb-16 tracking-tight">
                        Why Us?
                    </h2>
                    
                    <div className="reveal-on-scroll flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 max-w-6xl mx-auto no-scrollbar">
                        
                        {/*  Value Prop 1  */}
                        <div className="scroll-zoom-wrapper group perspective-1000 min-w-[75vw] md:min-w-0 w-full h-[250px] md:h-[400px] cursor-pointer snap-center" onClick={() => setFlippedCard(flippedCard === 1 ? null : 1)}>
                            <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-xl rounded-3xl ${flippedCard === 1 ? 'is-flipped' : ''}`}>
                                {/*  Front Face  */}
                                <div className="absolute inset-0 backface-hidden bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/50 dark:border-gray-600 flex flex-col items-center justify-center text-center z-10">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-t-3xl"></div>
                                    <div className="w-12 h-12 md:w-20 md:h-20 mb-3 md:mb-6 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                        <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Cinema-Grade Quality</h3>
                                    <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1 md:mt-4">Tap to Reveal</p>
                                </div>
                                {/*  Back Face  */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-600 to-blue-700 p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-blue-500/50 shadow-inner">
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">Perfection in Pixels</h3>
                                    <p className="text-white/90 leading-relaxed text-[11px] md:text-base font-medium">We ensure every video is pixel-perfect with 4K Edits, professional Color Grading, seamless Motion Graphics, and Text Animation.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/*  Value Prop 2  */}
                        <div className="scroll-zoom-wrapper group perspective-1000 min-w-[75vw] md:min-w-0 w-full h-[250px] md:h-[400px] cursor-pointer snap-center" onClick={() => setFlippedCard(flippedCard === 2 ? null : 2)}>
                            <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-xl rounded-3xl ${flippedCard === 2 ? 'is-flipped' : ''}`}>
                                {/*  Front Face  */}
                                <div className="absolute inset-0 backface-hidden bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/50 dark:border-gray-600 flex flex-col items-center justify-center text-center z-10">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-600 rounded-t-3xl"></div>
                                    <div className="w-12 h-12 md:w-20 md:h-20 mb-3 md:mb-6 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900 dark:to-pink-900 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                        <TrendingUp className="w-6 h-6 md:w-10 md:h-10 text-pink-600 dark:text-pink-400" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Viral-Ready Content</h3>
                                    <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1 md:mt-4">Tap to Reveal</p>
                                </div>
                                {/*  Back Face  */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-orange-500 to-pink-600 p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-pink-500/50 shadow-inner">
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">Hook Your Audience</h3>
                                    <p className="text-white/90 leading-relaxed text-[11px] md:text-base font-medium">We specialize in high-retention editing, including precise Captioning, compelling Visual Effects, and strategic use of Stock Footage.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/*  Value Prop 3  */}
                        <div className="scroll-zoom-wrapper group perspective-1000 min-w-[75vw] md:min-w-0 w-full h-[250px] md:h-[400px] cursor-pointer snap-center" onClick={() => setFlippedCard(flippedCard === 3 ? null : 3)}>
                            <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-xl rounded-3xl ${flippedCard === 3 ? 'is-flipped' : ''}`}>
                                {/*  Front Face  */}
                                <div className="absolute inset-0 backface-hidden bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/50 dark:border-gray-600 flex flex-col items-center justify-center text-center z-10">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-t-3xl"></div>
                                    <div className="w-12 h-12 md:w-20 md:h-20 mb-3 md:mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                        <Cpu className="w-6 h-6 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">AI & Future Integration</h3>
                                    <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1 md:mt-4">Tap to Reveal</p>
                                </div>
                                {/*  Back Face  */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-indigo-500/50 shadow-inner">
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">Cutting-Edge Tech</h3>
                                    <p className="text-white/90 leading-relaxed text-[11px] md:text-base font-medium">Stay ahead with AI Integration. We streamline editing and explore innovative tools to deliver content that keeps your brand current.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Scroll Hint for Mobile  */}
                    <div className="md:hidden text-center text-xs text-gray-400 dark:text-gray-500 mt-2 flex items-center justify-center gap-2">
                        <span>Tap cards to flip</span>
                        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                    </div>
                </div>
            </section>

            {/*  4. Workflow  */}
            <section id="workflow" className="w-full bg-transparent flowing-section flow-top relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !pt-2 sm:!pt-8">
                    <div className="text-center mb-8 md:mb-16 mt-0">
                        <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">How We Work</h2>
                        <p className="reveal-on-scroll mt-3 sm:mt-4 text-xs sm:text-lg text-gray-500 dark:text-gray-400 font-medium">A streamlined, stress-free journey from start to finish.</p>
                    </div>
                    
                    <div className="reveal-on-scroll w-full overflow-x-auto no-scrollbar py-8 px-2 sm:px-4 cursor-grab active:cursor-grabbing">
                        <div className="flex items-start justify-between min-w-[800px] lg:min-w-full relative mx-auto">
                            
                            {/*  Step 1: Lead  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    <div className="absolute top-1/2 left-1/2 w-full h-0 border-t-2 sm:border-t-[3px] border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 z-0 transition-all duration-500 group-hover:border-gray-500 dark:group-hover:border-gray-400"></div>
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        1
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Lead</span>
                            </div>

                            {/*  Step 2: Meet  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    <div className="absolute top-1/2 left-1/2 w-full h-0 border-t-2 sm:border-t-[3px] border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 z-0 transition-all duration-500 group-hover:border-gray-500 dark:group-hover:border-gray-400"></div>
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        2
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Meet</span>
                            </div>

                            {/*  Step 3: Deal  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    <div className="absolute top-1/2 left-1/2 w-full h-0 border-t-2 sm:border-t-[3px] border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 z-0 transition-all duration-500 group-hover:border-gray-500 dark:group-hover:border-gray-400"></div>
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        3
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Deal</span>
                            </div>

                            {/*  Step 4: Advance  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    <div className="absolute top-1/2 left-1/2 w-full h-0 border-t-2 sm:border-t-[3px] border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 z-0 transition-all duration-500 group-hover:border-gray-500 dark:group-hover:border-gray-400"></div>
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        4
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Advance</span>
                            </div>

                            {/*  Step 5: Onboard  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    <div className="absolute top-1/2 left-1/2 w-full h-0 border-t-2 sm:border-t-[3px] border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 z-0 transition-all duration-500 group-hover:border-gray-500 dark:group-hover:border-gray-400"></div>
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        5
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Onboard</span>
                            </div>

                            {/*  Step 6: Production  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    <div className="absolute top-1/2 left-1/2 w-full h-0 border-t-2 sm:border-t-[3px] border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 z-0 transition-all duration-500 group-hover:border-gray-500 dark:group-hover:border-gray-400"></div>
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        6
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Production</span>
                            </div>

                            {/*  Step 7: Review  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    <div className="absolute top-1/2 left-1/2 w-full h-0 border-t-2 sm:border-t-[3px] border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 z-0 transition-all duration-500 group-hover:border-gray-500 dark:group-hover:border-gray-400"></div>
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        7
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Review</span>
                            </div>

                            {/*  Step 8: Delivery  */}
                            <div className="flex flex-col items-center relative group flex-1 cursor-pointer">
                                <div className="relative w-full flex justify-center">
                                    {/*  No connecting line for the last item  */}
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm sm:text-lg text-gray-400 dark:text-gray-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:text-white dark:group-hover:text-black dark:text-white shadow-sm group-hover:shadow-xl">
                                        8
                                    </div>
                                </div>
                                <span className="mt-4 text-[11px] sm:text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-black dark:text-white dark:group-hover:text-white uppercase tracking-wider">Delivery</span>
                            </div>

                        </div>
                    </div>

                    {/*  Scroll Hint for Mobile  */}
                    <div className="md:hidden text-center text-xs text-gray-400 dark:text-gray-500 mt-2 flex items-center justify-center gap-2">
                        <span>Swipe to explore journey</span>
                        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            </section>

            {/*  5. Pillars  */}
            <section className="w-full bg-transparent flowing-section flow-bottom z-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="reveal-on-scroll text-center text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 md:mb-20 tracking-tight">
                        Pillars of Docdril
                    </h2>
                    
                    <div className="reveal-on-scroll flex flex-nowrap overflow-x-auto gap-4 snap-x snap-mandatory pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0 no-scrollbar">
                        
                        {/*  Step 1  */}
                        <div className="min-w-[75vw] md:min-w-0 snap-center group relative bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/50 dark:border-gray-600 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-600"></div>
                            <span className="text-7xl font-black text-emerald-50/80 absolute -right-2 -top-2 select-none group-hover:text-emerald-100/80 transition-colors z-0">01</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">Deep Vision Intake</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm relative z-10">We don't just take orders. We capture your <span className="text-emerald-600 dark:text-emerald-400 font-semibold">entire vision</span>—goals, desired tone, and creative notes—before the first cut.</p>
                        </div>
                        {/*  Step 2  */}
                        <div className="min-w-[75vw] md:min-w-0 snap-center group relative bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/50 dark:border-gray-600 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
                            <span className="text-7xl font-black text-blue-50/80 absolute -right-2 -top-2 select-none group-hover:text-blue-100/80 transition-colors z-0">02</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">Strategic Editing</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm relative z-10">Our process is driven by <span className="text-blue-600 dark:text-blue-400 font-semibold">psychology & data</span>. Every edit and effect is placed to maximize viewer retention.</p>
                        </div>
                        {/*  Step 3  */}
                        <div className="min-w-[75vw] md:min-w-0 snap-center group relative bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/50 dark:border-gray-600 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-600"></div>
                            <span className="text-7xl font-black text-amber-50/80 absolute -right-2 -top-2 select-none group-hover:text-amber-100/80 transition-colors z-0">03</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">Transparent Kick-off</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm relative z-10">Clear contracts, secure payments, and optional free samples ensure <span className="text-amber-600 dark:text-amber-400 font-semibold">complete confidence</span>. No surprises.</p>
                        </div>
                        {/*  Step 4  */}
                        <div className="min-w-[75vw] md:min-w-0 snap-center group relative bg-white dark:bg-black/80 dark:bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/50 dark:border-gray-600 shadow-lg hover:shadow-rose-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-red-600"></div>
                            <span className="text-7xl font-black text-rose-50/80 absolute -right-2 -top-2 select-none group-hover:text-rose-100/80 transition-colors z-0">04</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">Guaranteed Success</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm relative z-10">We deliver high-impact edits on time. Our process ends with your video <span className="text-rose-600 dark:text-rose-400 font-semibold">published & performing</span>.</p>
                        </div>
                    </div>
                    
                    {/*  Scroll Hint for Mobile  */}
                    <div className="md:hidden text-center text-xs text-gray-400 dark:text-gray-500 mt-2 flex items-center justify-center gap-2">
                        <span>Scroll for more</span>
                        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            </section>

            {/*  6. Payment Policy  */}
            <section className="w-full bg-transparent flowing-section flow-top z-20 relative">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="reveal-on-scroll text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 sm:mb-12 md:mb-16 tracking-tight">
                        Transparent Payment Policy
                    </h2>
                    <div className="reveal-on-scroll max-w-sm sm:max-w-md mx-auto w-full">
                        <div className="scroll-zoom-wrapper w-full h-full">
                            <div className="flex flex-col justify-center items-center relative bg-white dark:bg-black/90 dark:bg-black/90 backdrop-blur-xl p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/50 dark:border-gray-600 shadow-xl overflow-hidden transition-all duration-300 text-center">
                                {/*  Dynamic Top Gradient Line  */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r transition-colors duration-500 ${paymentMode === 'new' ? 'from-violet-500 to-purple-600' : 'from-fuchsia-500 to-pink-600'}`}></div>

                                {/*  Toggle UI  */}
                                <div className="relative flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full mb-6 sm:mb-10 w-full max-w-[280px] sm:max-w-[320px] shadow-inner">
                                    <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-gray-700 rounded-full shadow-sm transition-all duration-300 ease-out z-0 ${paymentMode === 'new' ? 'left-1' : 'left-[calc(50%+2px)]'}`}></div>
                                    <button id="btn-new" className="relative z-10 flex-1 py-2 sm:py-3 text-[12px] sm:text-sm font-bold transition-colors duration-300 focus:outline-none text-gray-900 dark:text-white tracking-wide" onClick={() => setPaymentMode('new')}>New Clients</button>
                                    <button id="btn-loyal" className="relative z-10 flex-1 py-2 sm:py-3 text-[12px] sm:text-sm font-bold transition-colors duration-300 focus:outline-none text-gray-400 dark:text-gray-500 tracking-wide" onClick={() => setPaymentMode('loyal')}>Loyal Clients</button>
                                </div>

                                {/*  Dynamic Number Display  */}
                                <div className="h-16 sm:h-24 flex items-center justify-center mb-1 sm:mb-2">
                                    <div className={`text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300 transform drop-shadow-sm ${paymentMode === 'new' ? 'from-violet-600 to-purple-600' : 'from-fuchsia-600 to-pink-600'}`}>
    {paymentMode === 'new' ? '20%' : '15%'}
  </div>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Advance Payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  7. Get in Touch  */}
            <section id="get-in-touch" className="w-full py-16 md:py-24 bg-transparent relative z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="reveal-on-scroll text-sm sm:text-lg text-gray-600 dark:text-gray-400 font-medium">
                            Have questions? Our team is ready to provide the expert support your business needs.
                        </p>
                    </div>

                    <div className="reveal-on-scroll relative w-full bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-6 sm:p-10 md:p-12 border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] flex flex-col gap-8 md:gap-12">
                        
                        {/*  Email Section  */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 text-center sm:text-left">
                            <div className="w-16 h-16 shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex flex-col justify-center sm:pt-1">
                                <p className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-2">Email Us</p>
                                <a href="mailto:info@docdril.in" className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300">info@docdril.in</a>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2.5">Drop us a line anytime. We usually reply within 24 hours.</p>
                            </div>
                        </div>

                        {/*  WhatsApp Inner Card  */}
                        <div className="bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-[1.5rem] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 justify-between transition-transform hover:-translate-y-1 duration-300">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left w-full md:w-auto">
                                <div className="w-16 h-16 shrink-0 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-2">WhatsApp Chat</p>
                                    <p className="text-sm sm:text-[15px] text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-sm">Prefer quick answers? Chat directly with our support team.</p>
                                </div>
                            </div>
                            <a href="https://wa.me/917304631447" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20b958] text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20 whitespace-nowrap w-full md:w-auto">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                Chat Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Testimonials — Wall of Love  */}
            <section id="testimonials" className="w-full py-16 md:py-24 bg-transparent relative z-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                            Wall of Love
                        </h2>
                        <p className="reveal-on-scroll text-sm sm:text-lg text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto">
                            Hear from the brands and creators who trusted us with their vision.
                        </p>
                    </div>
                </div>

                {/* Row 1 — scrolls left */}
                <div className="w-full overflow-hidden mb-6">
                    <div className="marquee-track flex gap-6 w-max">
                        {[...Array(2)].map((_, setIdx) => (
                            <div key={setIdx} className="flex gap-6 shrink-0">
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"Docdril completely transformed our brand's digital footprint. The quality of editing and design work was beyond anything we expected."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">RP</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Rahul Patel</p><p className="text-xs text-gray-400">Founder, TechVista</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"Their AI automation setup saved us 20+ hours a week. Incredibly efficient team with a deep understanding of modern workflows."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">SK</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</p><p className="text-xs text-gray-400">COO, NeuralPath AI</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"The website they built for us looks straight out of an Awwwards showcase. Clean, fast, and incredibly premium. Worth every penny."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold">AM</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Arjun Mehta</p><p className="text-xs text-gray-400">CEO, GreenStack Labs</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"Their motion design work elevated our pitch deck to a whole new level. We closed a $2M round partly because of how polished it looked."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-bold">ND</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Nisha Desai</p><p className="text-xs text-gray-400">Co-founder, LaunchPad</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"From concept to delivery, Docdril was seamless. They understood our brand voice instantly and delivered content that truly resonated."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">VR</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Vikram Rao</p><p className="text-xs text-gray-400">Marketing Head, Luxe Studios</p></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls right (reversed direction) */}
                <div className="w-full overflow-hidden">
                    <div className="marquee-track flex gap-6 w-max" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
                        {[...Array(2)].map((_, setIdx) => (
                            <div key={setIdx} className="flex gap-6 shrink-0">
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"Our social media engagement skyrocketed after Docdril took over our content strategy. The visuals are consistently on-brand and stunning."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">PS</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Priya Sharma</p><p className="text-xs text-gray-400">Brand Manager, Orbit Media</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"I was skeptical about outsourcing creative work, but Docdril proved me wrong. They feel like an extension of our in-house team."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white text-xs font-bold">MJ</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Marcus Johnson</p><p className="text-xs text-gray-400">Director, Crisp Creative Co.</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"The chatbot they built for our e-commerce store handles 70% of customer queries autonomously. Absolutely game-changing for our support costs."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center text-white text-xs font-bold">AK</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Aarav Kumar</p><p className="text-xs text-gray-400">CTO, ShopNova</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"Working with Docdril is a premium experience — fast turnarounds, clean communication, and output that always exceeds expectations."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">LS</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Lisa Santos</p><p className="text-xs text-gray-400">VP Product, Verve Digital</p></div>
                                    </div>
                                </div>
                                <div className="w-[340px] sm:w-[380px] shrink-0 relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"The video content Docdril produces for our YouTube channel consistently outperforms. Our watch time has increased by 3x since partnering."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold">DM</div>
                                        <div><p className="text-sm font-semibold text-gray-900 dark:text-white">Dev Malhotra</p><p className="text-xs text-gray-400">Content Lead, PixelForge</p></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  8. Contact  */}
            <section id="contact" className="w-full py-24 md:py-40 bg-transparent relative z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="reveal-on-scroll text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">Thank You.</h2>
                    <p className="reveal-on-scroll text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">Let's create something inspiring together.</p>
                    
                    <div className="reveal-on-scroll flex flex-nowrap justify-center items-center gap-3 sm:gap-6 mb-12 overflow-visible">
                        {/*  LinkedIn  */}
                        <a href="https://www.linkedin.com/company/docdril/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BMtYAjo9UQRSkchadjGCpLA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                        </a>
                        
                        {/*  Instagram  */}
                        <a href="https://www.instagram.com/docdril/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.315 1.347 20.646.935 19.856.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" clipRule="evenodd" />
                            </svg>
                        </a>

                        {/*  Facebook  */}
                        <a href="https://www.facebook.com/docdril" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>

                        {/*  YouTube  */}
                        <a href="https://www.youtube.com/@Docdril" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                            <span className="sr-only">YouTube</span>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.254.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                        </a>

                        {/*  X (Black)  */}
                        <a href="https://x.com/docdril" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                            <span className="sr-only">X</span>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/></svg>
                        </a>

                        {/*  Pinterest  */}
                        <a href="https://in.pinterest.com/docdril/" target="_blank" rel="noopener noreferrer" className="text-[#E60023] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                            <span className="sr-only">Pinterest</span>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" clipRule="evenodd" /></svg>
                        </a>
                        
                        {/*  WhatsApp Channel  */}
                        <a href="https://whatsapp.com/channel/0029Vb6MycQ77qVPVBqp2y44" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                            <span className="sr-only">WhatsApp Channel</span>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.025.558 1.284.782 2.806.781 3.181 0 5.767-2.587 5.767-5.766.001-3.185-2.585-5.767-5.767-5.767zm.592 7.633h-.002c-.528 0-1.587-.707-1.97-1.252-.161-.229-.194-.364-.235-.487L9.954 11.2l.338-.285c.145-.123.327-.275.452-.381.185-.156.241-.336.143-.531-.082-.164-.326-.851-.433-1.127-.116-.301-.331-.222-.455-.224l-.391-.005c-.135 0-.356.051-.541.254-.186.202-.712.695-.712 1.694 0 .999.728 1.964.829 2.1.101.135 1.433 2.189 3.472 3.068.485.209.864.335 1.157.428.483.153.923.131 1.272.079.39-.057 1.202-.491 1.372-.966.17-.474.17-.881.119-.966-.051-.085-.186-.135-.391-.237zM12.056 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.879 0-3.666-.516-5.195-1.42L2 22l1.458-5.155A9.957 9.957 0 0 1 2.056 12a10 10 0 0 1 10-10z"/></svg>
                        </a>
                    </div>

                    <a href="mailto:info@docdril.in" 
                        className="reveal-on-scroll inline-block text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-200 dark:border-gray-700 dark:bg-black dark:text-white dark:border-gray-800 py-3 px-8 sm:py-4 sm:px-10 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-50 dark:bg-gray-900/50 dark:hover:bg-gray-900 hover:scale-105 hover:shadow-xl">
                        Connect
                    </a>
                </div>
            </section>

</main>
  );
}
