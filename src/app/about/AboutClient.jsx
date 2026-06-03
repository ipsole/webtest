"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Maximize, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import RelatedContent from '../../components/RelatedContent';

const COMPANY_PROFILE_SLIDES = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: i === 0 ? "Profile" : `Page ${i + 1}`,
    image: `https://uploads.onecompiler.io/445by7jfj/448sznub6/s${i + 1}.jpg`,
    alt: `Company Profile Page ${i + 1}`
}));

const FOUNDERS = [
    {
        name: "Piyush Chaudhary",
        role: "Founder & Director",
        image: "https://uploads.onecompiler.io/445by7jfj/448sznub6/piyush.jpg",
        quote: "Video editing must be rooted in deep psychological strategy.",
        bio: "Piyush Chaudhary is the visionary behind Docdril. He developed the \"Atomic Editing\" vision and drives the core philosophy that video editing must be rooted in deep psychological strategy to maximize client ROI and build lasting brand authority.",
        linkedin: "https://www.linkedin.com/in/ipsole/",
        instagram: "https://www.instagram.com/cozicupid/"
    },
    {
        name: "Arushi Bhansali",
        role: "Co-Founder & Managing Director",
        image: "https://uploads.onecompiler.io/445by7jfj/448sznub6/arushi.jpg",
        quote: "Excellence is not an act, but a habit of execution.",
        bio: "Arushi Bhansali expertly oversees the strategic direction and operational execution. She ensures that Docdril’s commitment to premium, high-quality deliverables and streamlined client success is consistently met.",
        linkedin: "https://www.linkedin.com/in/arushi-bhansali-b1a53b277/",
        instagram: "https://www.instagram.com/aruzie_/"
    }
];

export default function About() {
    useRevealOnScroll();
    const navigate = useRouter();
    
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    
    useEffect(() => {
        const handleResize = () => {
            if (isFullscreen) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isFullscreen]);

    const maxIndex = COMPANY_PROFILE_SLIDES.length - itemsPerPage;

    const nextSlide = () => {
        setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen, maxIndex]);

    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isFullscreen]);

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) nextSlide();
        if (distance < -50) prevSlide();
    };

    const totalPages = Math.ceil(COMPANY_PROFILE_SLIDES.length / itemsPerPage) + (itemsPerPage === 2 ? 1 : 0);
    const slideWidthPercentage = 100 / itemsPerPage;

    return (
        <main className="min-h-screen relative bg-transparent text-gray-900 dark:text-gray-100 overflow-x-hidden pt-20 pb-20 fade-in">

            {/* Page Title & Navigation */}
            <div className="pt-8 pb-4 px-4 relative max-w-7xl mx-auto flex items-center justify-center mt-8 md:mt-12">
                <button onClick={() => navigate.back()} className="absolute left-4 sm:left-8 p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 border border-white/60 dark:border-gray-700 shadow-sm transition-all group cursor-pointer" title="Go Back">
                    <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-black dark:text-white dark:group-hover:text-white" />
                </button>
                
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm">About</h1>
                    <div className="w-20 h-1 bg-black dark:bg-white mx-auto mt-4 rounded-full shadow-sm"></div>
                </div>
            </div>

            {/* PDF Slider Section */}
            <section className="py-6 px-2 sm:px-4 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className={`w-full transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-[2147483647] bg-black flex flex-col items-center justify-center m-0 p-0 rounded-none border-none' : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-xl border border-white/50 dark:border-gray-700/50 relative overflow-hidden group shadow-2xl shadow-gray-200/60 dark:shadow-black/60'}`}>
                        
                        {!isFullscreen && (
                            <div className="flex justify-between items-center p-4 border-b border-white/20 dark:border-gray-700/20">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Company Profile</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Swipe to explore vision &amp; capabilities</p>
                                </div>
                                <button onClick={() => { setIsFullscreen(true); setCurrentIndex(0); }} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-gray-700 dark:text-gray-300" title="View Fullscreen">
                                    <Maximize className="w-5 h-5" />
                                </button>
                            </div>
                        )}

                        <div className={`relative ${isFullscreen ? 'w-full h-full' : 'w-full'}`}>
                            <div className={`overflow-hidden w-full ${isFullscreen ? 'h-full flex items-center' : ''}`}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className={`flex transition-transform duration-300 ease-out will-change-transform ${isFullscreen ? 'h-full items-center' : ''}`}
                                     style={{ transform: `translateX(-${currentIndex * slideWidthPercentage}%)` }}>
                                    {COMPANY_PROFILE_SLIDES.map(slide => (
                                        <div key={slide.id} className={`flex-shrink-0 px-1 box-border transition-all duration-300 ${isFullscreen ? 'w-full h-full p-0 flex items-center justify-center' : ''}`} style={{ width: `${slideWidthPercentage}%` }}>
                                            <div className={`bg-transparent overflow-hidden relative group flex items-center justify-center ${isFullscreen ? 'w-full h-full bg-black aspect-auto' : 'aspect-video'}`}>
                                                <img src={slide.image} alt={slide.alt} className={`w-full h-full ${isFullscreen ? 'object-contain rounded-none' : 'object-contain md:rounded-lg'}`} />
                                                {!isFullscreen && (
                                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-white text-xs tracking-wide">{slide.title}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button onClick={prevSlide} className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all z-20 cursor-pointer flex items-center justify-center ${isFullscreen ? 'text-white bg-white/15 hover:bg-white/30 border border-white/20 w-14 h-14' : 'bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:bg-black dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md'}`}>
                                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                            <button onClick={nextSlide} className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all z-20 cursor-pointer flex items-center justify-center ${isFullscreen ? 'text-white bg-white/15 hover:bg-white/30 border border-white/20 w-14 h-14' : 'bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:bg-black dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md'}`}>
                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                            
                            {isFullscreen && (
                                <button onClick={() => { setIsFullscreen(false); setCurrentIndex(0); }} className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors z-50 border border-white/20 flex">
                                    <X className="w-6 h-6" />
                                </button>
                            )}
                        </div>

                        {!isFullscreen && (
                            <div className="flex justify-center py-4 gap-2">
                                {Array.from({ length: totalPages }).map((_, i) => {
                                    const isActive = Math.floor(currentIndex / 1) === i;
                                    return (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${isActive ? 'w-8 bg-black dark:bg-white shadow-sm' : 'w-2 bg-black/20 dark:bg-white/20'}`}></div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Company Philosophy Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-sm">
                        <Sparkles className="w-4 h-4 text-red-700 dark:text-red-400 mr-2" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-gray-800 dark:text-gray-200">Who We Are</span>
                    </div>

                    <div className="space-y-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                        <p>
                            Docdril is a creative studio that inspires brand stories through <span className="text-gray-900 dark:text-white font-semibold">cinematic visuals</span>, design intelligence, and emotionally charged narratives.
                        </p>
                        <p>
                            We craft <span className="text-gray-900 dark:text-white font-semibold">thesis-driven motion graphics</span> and proof-based visual edits that transform ideas into powerful, finished content. Our media expertise spans across high-retention <span className="text-gray-900 dark:text-white font-semibold">Short-Form</span> content for TikToks and Reels, to clean, professional <span className="text-gray-900 dark:text-white font-semibold">Long-Form</span> edits for vlogs and podcasts. From end-to-end <span className="text-gray-900 dark:text-white font-semibold">Social Media</span> management to original <span className="text-gray-900 dark:text-white font-semibold">Beat Making</span> and sound design, we create experiences that inspire, provoke, and awaken audiences.
                        </p>
                        <p>
                            Alongside creative production, Docdril operates at the cutting edge of tech. We build custom <span className="text-gray-900 dark:text-white font-semibold">Web Apps</span> and high-converting <span className="text-gray-900 dark:text-white font-semibold">SaaS Websites</span> that turn complex ideas into scalable products. Furthermore, we develop intelligent <span className="text-gray-900 dark:text-white font-semibold">AI Agents</span> designed to automate operations, streamline decision-making, and save hours of manual workflows.
                        </p>
                        <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700/60 dark:border-gray-700/60">
                            <p className="text-lg sm:text-xl text-gray-900 dark:text-white font-bold leading-snug">
                                Built for visionaries, creators, and brands shaping the future, we offer bespoke solutions tailored to your demands—operating seamlessly at the intersection of creativity, systems, and intelligent automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-12 px-2 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm">Meet The Leadership</h2>
                        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">The minds behind the atomic vision.</p>
                    </div>

                    <div className="flex flex-col gap-8 sm:gap-12 px-4 sm:px-2">
                        {FOUNDERS.map((founder, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center md:items-stretch bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/60 dark:border-gray-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 hover:bg-white/80 dark:hover:bg-gray-800/80 group">
                                <div className="w-full md:w-1/3 lg:w-1/4 relative shrink-0 p-6 sm:p-8 flex items-center justify-center bg-gray-50/50 dark:bg-gray-800/50 border-b md:border-b-0 md:border-r border-gray-200/50 dark:border-gray-700/50">
                                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-full md:aspect-square md:h-auto rounded-full md:rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-700 border-4 border-white dark:border-gray-800">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors z-10 pointer-events-none"></div>
                                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center flex-grow text-center md:text-left">
                                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold mb-1 leading-tight text-gray-900 dark:text-white">{founder.name}</h3>
                                            <p className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-xs sm:text-sm">{founder.role}</p>
                                        </div>
                                        <div className="flex gap-3 justify-center md:justify-start">
                                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-all shadow-sm flex items-center justify-center hover:scale-110 border border-gray-200 dark:border-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                            </a>
                                            <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 rounded-full transition-all shadow-sm flex items-center justify-center hover:scale-110 border border-gray-200 dark:border-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 font-serif italic font-medium leading-snug">
                                            "{founder.quote}"
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700/60">
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base font-medium">
                                            {founder.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <RelatedContent />
            </div>
        </main>
    );
}
