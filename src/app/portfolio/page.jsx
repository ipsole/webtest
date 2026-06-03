"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { 
    Sun, Moon, Info, ArrowRight, Maximize, X, 
    Loader2, ExternalLink, Clock, Megaphone, ArrowUpRight 
} from 'lucide-react';

// --- Data Models ---
const infoData = {
    confidentiality: { title: 'Confidentiality First', desc: 'To safeguard client privacy, specific client projects are omitted from this public portfolio.' },
    software: { title: 'Web & Software', desc: 'Custom web design, SaaS platforms, internal workflows, and development automation tailored to scale and optimize your business operations.' },
    shortform: { title: 'Video Editing', desc: 'High-impact vertical videos tailored for platforms like Instagram Reels, TikTok, and YouTube Shorts. Focuses on fast pacing and high retention rates.' },
    motion: { title: 'Motion Graphics', desc: 'Custom 2D/3D animations and visual effects that elevate production value. From logo reveals to complex explainer graphics.' },
    songcreation: { title: 'Song Creation', desc: 'Immersive visualizers and lyric videos that breathe life into music, synchronized perfectly with audio beats.' },
    longform: { title: 'Long Form Editing', desc: 'Narrative-driven editing for YouTube videos, documentaries, and podcasts emphasizing storytelling and pacing.' },
    ads: { title: 'Commercial Ads', desc: 'Conversion-focused commercial edits designed to capture attention instantly and drive clear calls-to-action.' }
};

const webProjects = [
    { id: 1, title: 'Botanical Store', category: 'Plants', url: 'https://plants-azure.vercel.app/' },
    { id: 2, title: 'Premium Commerce', category: 'Shop', url: 'https://shop-steel-omega.vercel.app/' },
    { id: 3, title: 'Secure Gateway', category: 'Login', url: 'https://login-theta-one-95.vercel.app/' },
    { id: 4, title: 'Aura Cosmetics', category: 'Beauty', url: 'https://beauty-two-chi.vercel.app/' },
    { id: 5, title: 'Gourmet Bites', category: 'Food', url: 'https://food-sigma-nine.vercel.app/' },
    { id: 6, title: 'Dashboard Pro UI', category: 'UI Based', url: 'https://uibased.vercel.app/' }
];

const shortVideos = ['1139442423', '1139442722', '1139443002', '1139443472'];
const aiUgcVideos = ['1191349594'];

const motionVideos = [
    { id: '1150964523', aspect: 'aspect-[4/3]', width: 'w-[300px] md:w-[450px]' },
    { id: '1150964513', aspect: 'aspect-video', width: 'w-[320px] md:w-[500px]' },
    { id: '1139672991', aspect: 'aspect-[9/16]', width: 'w-[180px] md:w-[240px]' }
];

const spotifyTracks = [
    '4Cfbg80ZXlV9h5Kn86cutX', '5UaTWIqRMBD72ujcdrQIOA', '0KOlBSuW333G5ylcraD19I', 
    '3PS0bfLPk3qtqxKPg361zg', '4QYGoeHmxrSrnZezP7AZPw', '02pzAwvmS9S7U0GPiJiCkA', '18eMQomg2xdlh7gBVJMQmB'
];

const globalCategories = ['All', 'Video Editing', 'Web & Software', 'Motion Graphics', 'Song Creation'];
const webCategories = ['All', 'Plants', 'Shop', 'Login', 'Beauty', 'Food', 'UI Based'];

// --- Sub-components ---

const ScrollReveal = ({ children, className = "", order = 1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={ref} 
            style={{ order }}
            className={`transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'} ${className}`}
        >
            {children}
        </section>
    );
};

const IframePreview = ({ url }) => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const width = window.innerWidth;
                const mobileMode = width < 768;
                setIsMobile(mobileMode);
                if (mobileMode) {
                    setScale(1);
                } else {
                    setScale(containerRef.current.clientWidth / 1280);
                }
            }
        };
        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full pt-[65%] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-zinc-400" />
            </div>
            <iframe 
                src={url} 
                className="absolute top-0 left-0 border-none origin-top-left pointer-events-none transition-opacity duration-500 ease-in"
                style={{ 
                    width: isMobile ? '100%' : '1280px', 
                    height: isMobile ? '100%' : '832px',
                    transform: isMobile ? 'none' : `scale(${scale})`, 
                    opacity: loaded ? 1 : 0 
                }}
                onLoad={() => setLoaded(true)}
                scrolling="no"
                tabIndex="-1"
                loading="lazy"
                title={`Preview of ${url}`}
            />
        </div>
    );
};

const VimeoPlayer = ({ videoId, aspectClass, widthClass = "w-full", insideGrid = false }) => {
    const iframeRef = useRef(null);

    const handleFullscreen = (e) => {
        e.stopPropagation();
        if (!iframeRef.current) return;
        try {
            if (iframeRef.current.requestFullscreen) iframeRef.current.requestFullscreen();
            else if (iframeRef.current.webkitRequestFullscreen) iframeRef.current.webkitRequestFullscreen();
        } catch (err) {
            console.warn("Fullscreen error:", err);
        }
    };

    return (
        <div className={`shrink-0 snap-center ${insideGrid ? 'w-full' : widthClass}`}>
            <div className="bento-card rounded-3xl p-2 relative group overflow-hidden">
                <div className={`rounded-2xl overflow-hidden relative bg-zinc-100 dark:bg-zinc-900 ${aspectClass}`}>
                    <iframe 
                        ref={iframeRef}
                        className="absolute inset-0 w-full h-full" 
                        src={`https://player.vimeo.com/video/${videoId}?background=1&mute=0`} 
                        frameBorder="0" 
                        allow="autoplay; fullscreen" 
                        title={`Vimeo Video ${videoId}`}
                    />
                    <div className="absolute inset-0 z-10 cursor-pointer gesture-overlay pointer-events-none"></div>
                    <button 
                        onClick={handleFullscreen}
                        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 fullscreen-btn"
                    >
                        <Maximize className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function PortfolioPage() {
    const [theme, setTheme] = useState('light');
    const [globalFilter, setGlobalFilter] = useState('All');
    const [webFilter, setWebFilter] = useState('All');
    
    const [infoModal, setInfoModal] = useState(null); // { title, desc }
    const [viewAllModal, setViewAllModal] = useState(null); // { title, type }

    // Initialize Theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const handleInfoClick = (key) => setInfoModal(infoData[key]);
    const closeInfoModal = () => setInfoModal(null);

    const filteredWebProjects = webFilter === 'All' 
        ? webProjects 
        : webProjects.filter(p => p.category === webFilter);

    // Section Visibility checks based on Global Filter
    const showWeb = ['All', 'Web & Software'].includes(globalFilter);
    const showVideo = ['All', 'Video Editing'].includes(globalFilter);
    const showMotion = ['All', 'Motion Graphics'].includes(globalFilter);
    const showSongs = ['All', 'Song Creation'].includes(globalFilter);

    return (
        <div className="portfolio-page min-h-screen bg-[#FFFFFF] dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black font-sans relative z-10">


            <main className="pt-28 pb-20 flex flex-col">
                {/* Hero Section */}
                <ScrollReveal className="max-w-7xl mx-auto px-6 mb-20 md:mb-32" order={1}>
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/15 dark:border-white/15 bg-white/50 dark:bg-white/5 text-sm font-bold backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Available for new projects
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-black dark:text-white leading-[1.1]">
                            Crafting Digital <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-black dark:from-zinc-400 dark:to-white">Experiences.</span>
                        </h1>
                        
                        <div className="max-w-2xl text-lg md:text-xl text-zinc-700 dark:text-zinc-400 font-medium inline-flex items-center justify-center flex-wrap gap-2">
                            <span>A curated collection of web applications, SaaS platforms, motion graphics, and audio-visual productions.</span>
                            <button onClick={() => handleInfoClick('confidentiality')} className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                <Info className="w-5 h-5 mt-0.5" />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Global Filters */}
                <div className="sticky top-16 z-30 bg-white/95 dark:bg-[#000000]/95 backdrop-blur-md border-y border-black/15 dark:border-white/15 mb-12 transition-colors duration-500" style={{ order: 2 }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex overflow-x-auto hide-scrollbar py-4 -mx-6 px-6 lg:mx-0 lg:px-0 gap-2 portfolio-hide-scrollbar">
                            {globalCategories.map(cat => (
                                <button 
                                    key={cat}
                                    onClick={() => setGlobalFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border
                                    ${globalFilter === cat 
                                        ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-md' 
                                        : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Web & Software Section */}
                {showWeb && (
                    <ScrollReveal className="max-w-7xl mx-auto w-full px-6 mb-24" order={4}>
                        <div className="flex items-end justify-between mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
                                    Web & Software
                                    <button onClick={() => handleInfoClick('software')} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <Info className="w-5 h-5" />
                                    </button>
                                </h2>
                                <p className="text-zinc-500 dark:text-zinc-400 mt-1">SaaS, automation, and custom web design. ({webProjects.length.toString().padStart(2, '0')})</p>
                            </div>
                        </div>

                        <div className="mb-8 flex overflow-x-auto hide-scrollbar py-2 -mx-6 px-6 lg:mx-0 lg:px-0 portfolio-hide-scrollbar">
                            <div className="flex space-x-2">
                                {webCategories.map(cat => (
                                    <button 
                                        key={cat}
                                        onClick={() => setWebFilter(cat)}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border
                                        ${webFilter === cat 
                                            ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-md' 
                                            : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {filteredWebProjects.length === 0 ? (
                                <div className="col-span-full py-20 text-center bento-card rounded-3xl border-dashed">
                                    <p className="text-zinc-400">More projects coming soon to this category.</p>
                                </div>
                            ) : (
                                filteredWebProjects.map((project, idx) => (
                                    <div key={project.id} className="bento-card rounded-3xl p-3 flex flex-col gap-4 group portfolio-animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50">
                                            <IframePreview url={project.url} />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                                <div className="bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 rounded-full font-medium text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl flex items-center gap-2">
                                                    View Live Site <ExternalLink className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="px-3 pb-2 flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-lg text-black dark:text-white mb-0.5">{project.title}</h3>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.category}</p>
                                            </div>
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-600">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollReveal>
                )}

                {/* Shorts Section */}
                {showVideo && (
                    <ScrollReveal className="max-w-7xl mx-auto w-full px-6 mb-24" order={3}>
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
                                    Video Editing
                                    <button onClick={() => handleInfoClick('shortform')} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <Info className="w-5 h-5" />
                                    </button>
                                </h2>
                                <p className="text-zinc-500 dark:text-zinc-400 mt-1">High-impact short-form and vertical content. ({(shortVideos.length + aiUgcVideos.length).toString().padStart(2, '0')})</p>
                            </div>
                            <button onClick={() => setViewAllModal({ title: 'Video Editing', type: 'shorts' })} className="group flex items-center gap-2 text-sm font-medium hover:text-indigo-500 transition-colors">
                                View All <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 mb-4">Short-Form Commercials</h3>
                            <div className="relative">
                                <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar portfolio-scroll-mask pr-12 portfolio-hide-scrollbar">
                                    {shortVideos.map(vidId => (
                                        <VimeoPlayer key={vidId} videoId={vidId} aspectClass="aspect-[9/16]" widthClass="w-[240px] md:w-[280px]" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 mb-4">AI Generated UGC Content</h3>
                            <div className="relative">
                                <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar portfolio-scroll-mask pr-12 portfolio-hide-scrollbar">
                                    {aiUgcVideos.map(vidId => (
                                        <VimeoPlayer key={vidId} videoId={vidId} aspectClass="aspect-[9/16]" widthClass="w-[240px] md:w-[280px]" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {/* Motion Graphics Section */}
                {showMotion && (
                    <ScrollReveal className="max-w-7xl mx-auto w-full px-6 mb-24" order={5}>
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
                                    Motion Graphics
                                    <button onClick={() => handleInfoClick('motion')} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <Info className="w-5 h-5" />
                                    </button>
                                </h2>
                                <p className="text-zinc-500 dark:text-zinc-400 mt-1">Animations and VFX. (03)</p>
                            </div>
                            <button onClick={() => setViewAllModal({ title: 'Motion Graphics', type: 'motion' })} className="group flex items-center gap-2 text-sm font-medium hover:text-indigo-500 transition-colors">
                                View All <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar portfolio-scroll-mask pr-12 items-start portfolio-hide-scrollbar">
                                {motionVideos.map(vid => (
                                    <VimeoPlayer key={vid.id} videoId={vid.id} aspectClass={vid.aspect} widthClass={vid.width} />
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {/* Song Creation Section */}
                {showSongs && (
                    <ScrollReveal className="max-w-7xl mx-auto w-full px-6 mb-24" order={6}>
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
                                    Song Creation
                                    <button onClick={() => handleInfoClick('songcreation')} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <Info className="w-5 h-5" />
                                    </button>
                                </h2>
                                <p className="text-zinc-500 dark:text-zinc-400 mt-1">Audio visualizers and beats. (09)</p>
                            </div>
                            <button onClick={() => setViewAllModal({ title: 'Song Creation', type: 'songs' })} className="group flex items-center gap-2 text-sm font-medium hover:text-indigo-500 transition-colors">
                                View All <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scrollbar portfolio-scroll-mask pr-12 portfolio-hide-scrollbar">
                                {spotifyTracks.map(trackId => (
                                    <div key={trackId} className="shrink-0 w-[280px] md:w-[320px] snap-center">
                                        <div className="bento-card rounded-2xl p-1">
                                            <iframe 
                                                className="rounded-xl w-full" 
                                                src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`} 
                                                height="152" 
                                                frameBorder="0" 
                                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                                loading="lazy"
                                                title={`Spotify Track ${trackId}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {/* Placeholders (Long Form / Ads) */}
                {showVideo && (
                    <ScrollReveal className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24" order={7}>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                                Long Form
                                <button onClick={() => handleInfoClick('longform')} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    <Info className="w-5 h-5" />
                                </button>
                            </h2>
                            <div className="bento-card rounded-3xl h-48 flex flex-col items-center justify-center text-zinc-400 border-dashed border-2">
                                <Clock className="w-8 h-8 mb-2 opacity-50" />
                                <span className="font-medium text-sm">Curating content...</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                                Commercial Ads
                                <button onClick={() => handleInfoClick('ads')} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    <Info className="w-5 h-5" />
                                </button>
                            </h2>
                            <div className="bento-card rounded-3xl h-48 flex flex-col items-center justify-center text-zinc-400 border-dashed border-2">
                                <Megaphone className="w-8 h-8 mb-2 opacity-50" />
                                <span className="font-medium text-sm">Curating content...</span>
                            </div>
                        </div>
                    </ScrollReveal>
                )}

            </main>



            {/* View All Modal */}
            {viewAllModal && (
                <div className="fixed inset-0 z-50 bg-white/95 dark:bg-[#000000]/95 backdrop-blur-xl overflow-y-auto portfolio-animate-fade-in-up">
                    <div className="max-w-7xl mx-auto px-6 py-8 min-h-screen flex flex-col">
                        <div className="flex justify-between items-center mb-8 sticky top-0 py-4 bg-white/95 dark:bg-[#000000]/95 backdrop-blur-xl z-10 border-b border-black/15 dark:border-white/15">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{viewAllModal.title}</h2>
                            <button onClick={() => setViewAllModal(null)} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className={`grid gap-6 pb-12 ${viewAllModal.type === 'songs' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                            {viewAllModal.type === 'shorts' && [...shortVideos, ...aiUgcVideos].map(vidId => (
                                <VimeoPlayer key={vidId} videoId={vidId} aspectClass="aspect-[9/16]" insideGrid={true} />
                            ))}
                            {viewAllModal.type === 'motion' && motionVideos.map(vid => (
                                <VimeoPlayer key={vid.id} videoId={vid.id} aspectClass={vid.aspect} insideGrid={true} />
                            ))}
                            {viewAllModal.type === 'songs' && spotifyTracks.map(trackId => (
                                <div key={trackId} className="w-full">
                                    <div className="bento-card rounded-2xl p-1">
                                        <iframe 
                                            className="rounded-xl w-full" 
                                            src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`} 
                                            height="152" 
                                            frameBorder="0" 
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Info Modal */}
            <div className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 ${infoModal ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} onClick={closeInfoModal}>
                <div className={`bento-card w-full max-w-md p-8 rounded-3xl shadow-2xl relative transition-transform duration-300 ${infoModal ? 'scale-100' : 'scale-95'}`} onClick={(e) => e.stopPropagation()}>
                    <button onClick={closeInfoModal} className="absolute top-6 right-6 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                    {infoModal && (
                        <>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-3 pr-8 tracking-tight">{infoModal.title}</h3>
                            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">{infoModal.desc}</p>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
}
