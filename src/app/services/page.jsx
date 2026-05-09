"use client";
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useEffect } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { useModal } from '../../context/ModalContext';

export default function Services() {
    useRevealOnScroll();
    const { setInfoModal, setIsMouseLoopPaused, setIsChatbotOpen } = useModal();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-20">
            
        
        {/* 1. Hero Section */}
        <header className="pt-8 md:pt-24 pb-12 md:pb-24 max-w-4xl fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4 md:mb-6">
                <span className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium">Creative &amp; Technology Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black dark:text-white mb-5 md:mb-8 leading-[1.1]">
                Our <span className="text-zinc-400">Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
                We build systems across content, technology, automation, and branding to help businesses grow and scale.
            </p>
        </header>

        {/* 2. Introduction */}
        <section className="pb-12 md:pb-24 fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-3xl">
                Our digital services are divided into focused, high-impact categories. We bypass the bloat of traditional agencies, delivering precise, scalable solutions engineered for modern market dominance.
            </p>
        </section>

        {/* 3. Categories Grid */}
        <section className="py-12 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                
                {/* Card 1: Content Creation */}
                <Link className="group flex flex-col h-full p-5 sm:p-6 md:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50/50 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-all duration-300" href="/services/content-creation">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-zinc-200 border border-zinc-200 dark:border-zinc-700/50">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium z-0">content-creation.webp</div>
                        <img src="/services/images/content-creation.webp" alt="Content Creation Services" className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e) => { e.target.style.opacity = '0'; }} />
                    </div>
                    <div className="flex justify-between items-start mb-3 sm:mb-4 gap-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black dark:text-white tracking-tight">Content Creation</h2>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-300">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mt-auto">
                        High-impact video, storytelling, and creative systems built for modern platforms.
                    </p>
                </Link>

                {/* Card 2: Web Development */}
                <Link className="group flex flex-col h-full p-5 sm:p-6 md:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50/50 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-all duration-300" href="/services/web-development">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-zinc-200 border border-zinc-200 dark:border-zinc-700/50">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium z-0">web-development.webp</div>
                        <img src="/services/images/web-development.webp" alt="Web Development Services" className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e) => { e.target.style.opacity = '0'; }} />
                    </div>
                    <div className="flex justify-between items-start mb-3 sm:mb-4 gap-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black dark:text-white tracking-tight">Web Development</h2>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-300">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mt-auto">
                        Scalable, high-performance web solutions designed for modern businesses.
                    </p>
                </Link>

                {/* Card 3: AI & Automation */}
                <Link className="group flex flex-col h-full p-5 sm:p-6 md:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50/50 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-all duration-300" href="/services/ai-automation">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-zinc-200 border border-zinc-200 dark:border-zinc-700/50">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium z-0">ai-automation.webp</div>
                        <img src="/services/images/ai-automation.webp" alt="AI &amp; Automation Services" className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e) => { e.target.style.opacity = '0'; }} />
                    </div>
                    <div className="flex justify-between items-start mb-3 sm:mb-4 gap-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black dark:text-white tracking-tight">AI &amp; Automation</h2>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-300">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mt-auto">
                        Intelligent systems that automate workflows and enhance operational efficiency.
                    </p>
                </Link>

                {/* Card 4: Branding & Growth */}
                <Link className="group flex flex-col h-full p-5 sm:p-6 md:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50/50 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-all duration-300" href="/services/branding-growth">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-zinc-200 border border-zinc-200 dark:border-zinc-700/50">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-medium z-0">branding-growth.webp</div>
                        <img src="/services/images/branding-growth.webp" alt="Branding &amp; Growth Services" className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e) => { e.target.style.opacity = '0'; }} />
                    </div>
                    <div className="flex justify-between items-start mb-3 sm:mb-4 gap-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black dark:text-white tracking-tight">Branding &amp; Growth</h2>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-300">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mt-auto">
                        Strategic branding, design, and growth systems that shape perception and scale businesses.
                    </p>
                </Link>

            </div>
        </section>

        {/* 4. Why Work With Us */}
        <section className="py-12 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start">
                <div className="md:col-span-4 lg:col-span-3">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">The Advantage</h2>
                </div>
                <div className="md:col-span-8 lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-12">
                        
                        <div>
                            <div className="w-12 h-px bg-zinc-300 mb-4 sm:mb-6"></div>
                            <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-2 sm:mb-3">Psychology-Driven</h3>
                            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">We architect experiences based on human behavior, ensuring every touchpoint builds trust and drives action.</p>
                        </div>

                        <div>
                            <div className="w-12 h-px bg-zinc-300 mb-4 sm:mb-6"></div>
                            <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-2 sm:mb-3">Systems Thinking</h3>
                            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">We don't just build isolated assets. We create interconnected, modern ecosystems designed to scale autonomously.</p>
                        </div>

                        <div>
                            <div className="w-12 h-px bg-zinc-300 mb-4 sm:mb-6"></div>
                            <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-2 sm:mb-3">High-Quality Execution</h3>
                            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">Absolute precision in design and deployment. We deliver premium, cinematic quality across all digital mediums.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* 5. Call To Action */}
        <section className="pt-16 md:pt-32 pb-8 md:pb-16 text-center fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black dark:text-white mb-6 sm:mb-8 md:mb-10 px-4 leading-tight">
                Let's build something impactful.
            </h2>
            <Link className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium tracking-wide text-white bg-black rounded-full hover:bg-zinc-800 transition-colors duration-300 shadow-lg shadow-black/20 group w-full sm:w-auto max-w-[280px] mx-auto" href="/services/contact">
                Work With Us
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </Link>
        </section>

    
        </main>
    );
}
