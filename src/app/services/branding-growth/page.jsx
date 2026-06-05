"use client";
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useEffect } from 'react';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import { useModal } from '../../../context/ModalContext';

export default function ServicesBrandingGrowth() {
    useRevealOnScroll();
    const { setInfoModal, setIsMouseLoopPaused, setIsChatbotOpen } = useModal();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-20">
            
        
        {/* 1. Hero Section */}
        <header className="pt-8 md:pt-16 pb-16 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black dark:text-white mb-4 md:mb-6 leading-[1.1]">
                    Branding &amp; Growth <br className="hidden lg:block" />
                    <span className="text-zinc-400">Services</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    We shape perception, build identity, and design systems that drive long-term growth.
                </p>
            </div>
            {/* Hero Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 mt-6 lg:mt-0">
                {/* Text fallback behind the image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs md:text-sm font-medium z-0">
                    Put: hero-branding-growth.webp here
                </div>
                <img src="/branding/hero-branding-growth.webp" alt="Branding and Growth Strategy" className="relative z-10 object-cover w-full h-full" onError={(e) => { e.target.style.opacity = '0'; }} />
            </div>
        </header>

        {/* 2. What We Do */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start md:items-center">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">Strategic Positioning</h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-800 dark:text-zinc-200 leading-snug mb-8 md:mb-12">
                        Docdril engineers brand perception. We combine deep strategic positioning with high-impact design to build identities that resonate. Our growth systems ensure your brand not only commands attention but scales with intent and absolute clarity.
                    </p>
                    {/* Methodology Image */}
                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs md:text-sm font-medium z-0">
                            Put: branding-methodology.webp here
                        </div>
                        <img src="/branding/branding-methodology.webp" alt="Brand Positioning Methodology" className="relative z-10 object-cover w-full h-full" onError={(e) => { e.target.style.opacity = '0'; }} />
                    </div>
                </div>
            </div>
        </section>

        {/* 3. Services Grid */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2 mb-2 md:mb-0">Our Capabilities</h2>
                </div>
                
                <div className="md:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        
                        {/* Card 1: Social Media Management */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/branding-growth/social-media-management">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-social-media.webp
                                </div>
                                <img src="/branding/service-social-media.webp" alt="Social Media Management" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Social Media Management</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    Strategic content curation and community building to amplify your brand's digital presence and authority.
                                </p>
                            </div>
                        </Link>

                        {/* Card 2: Graphic Design Services */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/branding-growth/graphic-design-services">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-graphic-design.webp
                                </div>
                                <img src="/branding/service-graphic-design.webp" alt="Graphic Design Services" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Graphic Design</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    High-fidelity visual assets crafted to communicate your message with precision and aesthetic excellence.
                                </p>
                            </div>
                        </Link>

                        {/* Card 3: Brand Identity Design */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/branding-growth/brand-identity-design">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-brand-identity.webp
                                </div>
                                <img src="/branding/service-brand-identity.webp" alt="Brand Identity Design" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Brand Identity Design</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    Comprehensive visual systems, typography, and guidelines that define your brand's core DNA.
                                </p>
                            </div>
                        </Link>

                        {/* Card 4: Consultancy Services */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/branding-growth/consultancy-services">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-consultancy.webp
                                </div>
                                <img src="/branding/service-consultancy.webp" alt="Consultancy Services" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Consultancy Services</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    Expert advisory on brand positioning, market entry, and scalable go-to-market strategies.
                                </p>
                            </div>
                        </Link>

                        {/* Card 5: Pitch Deck Design (Spans 1 column, left aligned in grid) */}
                        <Link className="group block rounded-xl md:rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="/services/branding-growth/pitch-deck-design">
                            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] md:text-xs font-medium z-0">
                                    service-pitch-deck.webp
                                </div>
                                <img src="/branding/service-pitch-deck.webp" alt="Pitch Deck Design" className="relative z-10 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.opacity = '0'; }} />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">Pitch Deck Design</h3>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-black dark:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                                    Persuasive, data-driven presentations designed to secure investment and close high-stakes deals.
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
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">The Psychology of Growth</h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        In a saturated market, attention is the most valuable currency. A cohesive brand identity and strategic positioning don't just make you look good—they build trust, reduce friction in the buying process, and create an irrational loyalty that defies competition.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. Call To Action */}
        <section className="pt-20 md:pt-32 pb-12 md:pb-16 text-center fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black dark:text-white mb-8 md:mb-10 px-4">
                Build a brand that stands out and scales.
            </h2>
            <Link className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium tracking-wide text-white bg-black rounded-full hover:bg-zinc-800 transition-colors duration-300 shadow-lg shadow-black/20" href="/services/branding-growth/contact">
                Initiate Project
            </Link>
        </section>

    
        </main>
    );
}
