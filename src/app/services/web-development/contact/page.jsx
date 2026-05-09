"use client";
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useEffect } from 'react';
import { useRevealOnScroll } from '../../../../hooks/useRevealOnScroll';
import { useModal } from '../../../../context/ModalContext';

export default function ServicesWebDevelopmentContact() {
    useRevealOnScroll();
    const { setInfoModal, setIsMouseLoopPaused, setIsChatbotOpen } = useModal();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-20">
            
        
        {/* Hero Section */}
        <header className="text-center mb-16 md:mb-24 flex flex-col items-center fade-in" style={{ animationDelay: '0.2s' }}>
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/60 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Accepting new projects
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black dark:text-white mb-4 md:mb-6 leading-[1.1]">
                Let's scale your <br className="hidden sm:block" />
                <span className="text-zinc-400">digital presence.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                Ready to engineer high-retention content? Choose your preferred method to start the conversation.
            </p>
        </header>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* WhatsApp Card */}
            <Link href="https://wa.me/917304631447" className="group relative flex flex-col p-8 md:p-10 lg:p-12 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-300 dark:border-zinc-600/80 hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 dark:from-zinc-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-black text-white dark:bg-white dark:text-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-500 shadow-md">
                    {/* WhatsApp Icon */}
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                    </svg>
                </div>
                <h2 className="relative text-2xl md:text-3xl font-medium text-black dark:text-white mb-3">WhatsApp</h2>
                <p className="relative text-zinc-500 dark:text-zinc-400 font-light text-lg mb-8 md:mb-12 flex-grow">
                    Fastest response time. Drop us a message to discuss strategy, timelines, and deliverables instantly.
                </p>
                <div className="relative flex items-center text-sm font-medium tracking-wide text-black dark:text-white group-hover:text-zinc-600 dark:text-zinc-400 transition-colors">
                    Start a chat 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </div>
            </Link>

            {/* Email Card */}
            <Link href="mailto:info@docdril.in" className="group relative flex flex-col p-8 md:p-10 lg:p-12 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-300 dark:border-zinc-600/80 hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 dark:from-zinc-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-black text-white dark:bg-white dark:text-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-[5deg] transition-all duration-500 shadow-md">
                    {/* Mail Icon */}
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <h2 className="relative text-2xl md:text-3xl font-medium text-black dark:text-white mb-3">Email Us</h2>
                <p className="relative text-zinc-500 dark:text-zinc-400 font-light text-lg mb-8 md:mb-12 flex-grow">
                    Prefer formal channels? Send us your brief, current content links, and goals. We aim to reply within 24 hours.
                </p>
                <div className="relative flex items-center text-sm font-medium tracking-wide text-black dark:text-white group-hover:text-zinc-600 dark:text-zinc-400 transition-colors">
                    info@docdril.in
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </div>
            </Link>

        </div>
    
        </main>
    );
}
