/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useModal } from '../context/ModalContext';

export default function ServicesBrandingGrowthConsultancyServices() {
    useRevealOnScroll();
    const { setInfoModal, setIsMouseLoopPaused, setIsChatbotOpen } = useModal();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-20">
            
        
        {/* 1. Hero Section */}
        <header className="pt-8 md:pt-16 pb-16 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black dark:text-white mb-4 md:mb-6 leading-[1.1]">
                    Business Consultancy <br className="hidden lg:block" />
                    <span className="text-zinc-400">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-black dark:text-white font-medium mb-3">
                    Architect your unfair advantage.
                </p>
                <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    We engineer psychology-driven business strategies and brand positioning that transform market perception into measurable, scalable growth.
                </p>
            </div>
            {/* Hero Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 mt-6 lg:mt-0">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs md:text-sm font-medium z-0">
                    Put: hero-business-consultancy.webp here
                </div>
                <img src="/services/branding-growth/consultancy-services/images/hero-business-consultancy.webp" alt="Business Consultancy &amp; Branding Services" className="relative z-10 object-cover w-full h-full" onError={(e) => { e.target.style.opacity = '0'; }} />
            </div>
        </header>

        {/* 2. What This Service Is */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">The Architecture of Growth</h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-800 dark:text-zinc-200 leading-snug">
                        In a saturated market, clarity is your ultimate weapon. We don't just offer advice. We architect comprehensive business models and brand identities designed for maximum market penetration, authoritative positioning, and unshakeable leverage.
                    </p>
                </div>
            </div>
        </section>

        {/* 3. Who It's For & 4. What You Get */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 items-start">
                
                {/* Who It's For */}
                <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 lg:col-span-12">
                        <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium lg:mb-8">Designed For</h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-12">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Established Businesses seeking scale
                            </li>
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Personal Brands accelerating authority
                            </li>
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> High-Growth Startups requiring clarity
                            </li>
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Digital Creators building empires
                            </li>
                        </ul>
                    </div>
                </div>

                {/* What You Get */}
                <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 lg:col-span-12">
                        <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium lg:mb-8">The Deliverables</h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-12">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Deep-Dive Market Positioning
                            </li>
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Psychological Brand Architecture
                            </li>
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Go-To-Market Strategy formulation
                            </li>
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Operational Growth Systems
                            </li>
                            <li className="flex items-start gap-3 text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300">
                                <span className="text-zinc-300 mt-1">—</span> Revenue Model Optimization
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        {/* 5. Process */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">The Framework</h2>
                </div>
                <div className="md:col-span-8">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="group">
                            <h3 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-2 flex items-center gap-4">
                                <span className="text-sm font-light text-zinc-400 w-6">01</span> Strategic Discovery
                            </h3>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light pl-10">We dissect your current operations, market positioning, and target psychology to identify untapped leverage points.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="group">
                            <h3 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-2 flex items-center gap-4">
                                <span className="text-sm font-light text-zinc-400 w-6">02</span> Architecture &amp; Design
                            </h3>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light pl-10">Designing the blueprint. We build a cohesive brand identity and business strategy that commands absolute market authority.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="group">
                            <h3 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-2 flex items-center gap-4">
                                <span className="text-sm font-light text-zinc-400 w-6">03</span> Tactical Execution
                            </h3>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light pl-10">Translating strategy into reality. We implement the operational systems, messaging, and positioning frameworks required for market capture.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="group">
                            <h3 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-2 flex items-center gap-4">
                                <span className="text-sm font-light text-zinc-400 w-6">04</span> Scale &amp; Optimization
                            </h3>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light pl-10">Continuous data-driven refinement to ensure your brand ecosystem consistently drives conversion and sustains long-term loyalty.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 6. Why Docdril */}
        <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-700 fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                <div className="md:col-span-4">
                    <h2 className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium md:mt-2">The Docdril Advantage</h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        We treat business growth as an exact science rooted in human psychology. It’s never just about superficial aesthetic updates or generic business advice.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        We build modern brand systems. By merging high-end strategic thinking with data-backed execution, we create architectures that not only elevate your market perception but forge a resilient, scalable enterprise.
                    </p>
                </div>
            </div>
        </section>

        {/* 7. Call To Action */}
        <section className="pt-20 md:pt-32 pb-12 md:pb-16 text-center fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black dark:text-white mb-8 md:mb-10 px-4">
                Build your brand. Scale your impact.
            </h2>
            <Link className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium tracking-wide text-white bg-black rounded-full hover:bg-zinc-800 transition-colors duration-300 shadow-lg shadow-black/20" to="/services/branding-growth/consultancy-services/contact">
                Build Your Brand
            </Link>
        </section>

    
        </main>
    );
}
