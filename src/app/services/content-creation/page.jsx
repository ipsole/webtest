"use client";
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useEffect } from 'react';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import { useModal } from '../../../context/ModalContext';

export default function ServicesContentCreation() {
    useRevealOnScroll();
    const { setInfoModal, setIsMouseLoopPaused, setIsChatbotOpen } = useModal();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-20">
            
        
        {/* 1. Hero Section */}
        <header className="pt-8 md:pt-16 pb-16 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black dark:text-white mb-4 md:mb-6 leading-[1.1]">
                    Content Creation <br className="hidden lg:block" />
                    <span className="text-zinc-400">Services</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    We engineer attention. Cinematic storytelling designed to bypass the noise and anchor your brand in the human mind.
                </p>
            </div>
            {/* Hero Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 mt-6 lg:mt-0">
                {/* Text fallback behind the image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs md:text-sm font-medium z-0">
                    Put: hero-showreel.webp here
                </div>
                <img src="/services/content-creation/images/hero-showreel.webp" alt="Cinematic Content Creation" className="relative z-10 object-cover w-full h-full" onError={(e) => { e.target.style.opacity = '0'; }} />
            </div>
        </header>

        {/* 2. What We Do */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start md:items-center">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">The Architecture of Influence</h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-800 dark:text-zinc-200 leading-snug mb-8 md:mb-12">
                        Docdril doesn't just make media; we construct psychological assets. We translate your core frequency into visual and auditory experiences that compel action, build unshakeable loyalty, and drive measurable dominance in your sector.
                    </p>
                    {/* Methodology Image */}
                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs md:text-sm font-medium z-0">
                            Put: agency-methodology.webp here
                        </div>
                        <img src="/services/content-creation/images/agency-methodology.webp" alt="Our Methodology" className="relative z-10 object-cover w-full h-full" onError={(e) => { e.target.style.opacity = '0'; }} />
                    </div>
                </div>
            </div>
        </section>

        {/* 3. Services Grid */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2 mb-2 md:mb-0">Our Disciplines</h2>
                </div>
                
                <div className="md:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        
                        {/* Card 1 */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/content-creation/short-form-video-editing">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-short-form.webp
                                </div>
                                <img src="/services/content-creation/images/service-short-form.webp" alt="Short-Form Video" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Short-Form Video</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    High-velocity micro-narratives engineered for infinite scroll retention.
                                </p>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/content-creation/long-form-video-editing">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-long-form.webp
                                </div>
                                <img src="/services/content-creation/images/service-long-form.webp" alt="Long-Form Video" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Long-Form Video</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    Immersive, deep-dive storytelling that establishes absolute authority.
                                </p>
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/content-creation/ai-video-production">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-ai.webp
                                </div>
                                <img src="/services/content-creation/images/service-ai.webp" alt="AI Production" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">AI Production</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    Next-generation synthetic media pushing the boundaries of the possible.
                                </p>
                            </div>
                        </Link>

                        {/* Card 4 */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/content-creation/beat-making">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-beat.webp
                                </div>
                                <img src="/services/content-creation/images/service-beat.webp" alt="Beat Making" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Beat Making</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    Bespoke auditory landscapes that dictate the emotional pulse of your brand.
                                </p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>

        {/* 4. Why It Matters */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">The Currency of Now</h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        In an era of infinite distraction, attention is the only asset that matters. Mediocrity is invisible. To exist digitally is to demand presence through relentless, uncompromising quality. We build the magnetic pull your brand requires to survive and scale.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. Call To Action */}
        <section className="pt-20 md:pt-32 pb-12 md:pb-16 text-center fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black dark:text-white mb-8 md:mb-10 px-4">
                Let’s build content that captures attention.
            </h2>
            <Link className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium tracking-wide text-white bg-black rounded-full hover:bg-zinc-800 transition-colors duration-300 shadow-lg shadow-black/20" href="/services/content-creation/contact">
                Initiate Project
            </Link>
        </section>

    
        </main>
    );
}
