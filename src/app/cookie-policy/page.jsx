import RelatedContent from '../../components/RelatedContent';
import { Info, Settings, Layers, Globe, Sliders, UserCheck, RefreshCw, Mail } from 'lucide-react';

export const metadata = {
  title: "Cookie Policy | Docdril",
  description: "Read the cookie policy of Docdril. Learn how we use cookies to improve your user experience on our website.",
  keywords: "cookie policy docdril, analytics cookies, essential cookies, manage cookies",
};

export default function CookiePolicyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Cookie Policy",
        "url": "https://docdril.in/cookie-policy"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="seo-page cookie-policy pb-12">
                <section className="hero-section !mb-12">
                    <span className="font-mono tracking-widest text-[10px] text-slate-400 dark:text-zinc-500 uppercase">Legal Policy</span>
                    <h1 className="title text-slate-900 dark:text-white font-extrabold tracking-tight mt-2 uppercase">
                        Cookie <span className="text-blue-700 dark:text-blue-400">Policy</span>
                    </h1>
                    <p className="subtitle !text-base md:!text-lg max-w-2xl mx-auto mt-4 text-center">
                        Last updated: June 5, 2026. This Cookie Policy explains how Docdril uses cookies and similar technologies to improve your experience.
                    </p>
                </section>

                {/* Stacked Cards Layout */}
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16 px-4 sm:px-0">
                    
                    {/* Card 1: What Are Cookies */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-blue-550/10 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Info className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    1. What Are Cookies
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and improve overall user experience.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Storage destination</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Local device cache</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Key Objectives</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Functionality & preferences</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: How We Use Cookies */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Settings className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    2. How We Use Cookies
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    Docdril uses cookies to ensure the website functions smoothly, understand how users interact with our website, improve performance, and remember basic user preferences. We do not use cookies to collect unnecessary personal data.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Data collection</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Zero unnecessary personal data</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Core utility</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Usability & metrics</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Types of Cookies We Use */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-amber-550/10 dark:bg-amber-950/25 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    3. Types of Cookies We Use
                                </h2>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <strong className="text-slate-850 dark:text-slate-200 text-sm block mb-1">Essential Cookies</strong>
                                        <p className="text-[13px] md:text-[14px] text-slate-550 dark:text-zinc-400 leading-relaxed text-left font-normal">
                                            Necessary for the website to function properly. They enable core features like navigation and secure access.
                                        </p>
                                    </div>
                                    <div>
                                        <strong className="text-slate-850 dark:text-slate-200 text-sm block mb-1">Analytics Cookies</strong>
                                        <p className="text-[13px] md:text-[14px] text-slate-550 dark:text-zinc-400 leading-relaxed text-left font-normal">
                                            Help us understand how visitors interact with the site, allowing us to improve performance and usability.
                                        </p>
                                    </div>
                                    <div>
                                        <strong className="text-slate-850 dark:text-slate-200 text-sm block mb-1">Functional Cookies</strong>
                                        <p className="text-[13px] md:text-[14px] text-slate-550 dark:text-zinc-400 leading-relaxed text-left font-normal">
                                            These cookies remember user choices to provide a more tailored browsing experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Required</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Essential core</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Performance</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Analytics tracking</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Personalization</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Functional preferences</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Third-Party Cookies */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    4. Third-Party Cookies
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    We may use trusted third-party services (such as analytics tools) that set their own cookies to help us evaluate usage metrics and optimize services. These third parties maintain their own independent privacy and cookie guidelines.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">External Integrations</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Trusted analytics</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Governance</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Third-party terms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Managing Cookies */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-teal-50/80 dark:bg-teal-950/20 text-teal-700 dark:text-teal-400 border border-teal-100 dark:border-teal-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Sliders className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    5. Managing Cookies
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    You can control or disable cookie storage through your personal browser settings. Note that disabling certain essential cookies may limit the visual rendering or operational functions of the website.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Configuration</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Via browser settings</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Impact warning</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">May affect layout/speed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Consent */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 border border-purple-100 dark:border-purple-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    6. Consent
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed text-left">
                                    By continuing to use our website, you agree to our use of cookies as outlined in this policy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 7: Updates to This Policy */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-cyan-50/80 dark:bg-cyan-950/20 text-cyan-700 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <RefreshCw className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    7. Updates to This Policy
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed text-left">
                                    We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 8: Contact */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-pink-50/80 dark:bg-pink-955/20 text-pink-700 dark:text-pink-400 border border-pink-100 dark:border-pink-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    8. Contact
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed text-left">
                                    If you have any questions about our Cookie Policy, you can contact us through our official website.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                    <RelatedContent />
                </div>
            </main>
        </>
    );
}
