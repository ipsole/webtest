import RelatedContent from '../../components/RelatedContent';
import { Clock, CheckSquare, XCircle, Zap, Handshake, ClipboardCheck } from 'lucide-react';

export const metadata = {
  title: "Refund Policy | Docdril",
  description: "Read the refund policy of Docdril. We prioritize clarity, commitment, and long-term partnerships.",
  keywords: "refund policy docdril, service agreement, client satisfaction, project cancellation",
};

export default function RefundPolicyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Refund Policy",
        "url": "https://docdril.in/refund-policy"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="seo-page refund-policy pb-12">
                <section className="hero-section !mb-12">
                    <span className="font-mono tracking-widest text-[10px] text-slate-400 dark:text-zinc-500 uppercase">Legal Policy</span>
                    <h1 className="title text-slate-900 dark:text-white font-extrabold tracking-tight mt-2 uppercase">
                        Refund <span className="text-blue-700 dark:text-blue-400">Policy</span>
                    </h1>
                    <p className="subtitle !text-base md:!text-lg max-w-2xl mx-auto mt-4 text-center">
                        Last updated: June 5, 2026. General guidelines governing cancellations and refunds.
                    </p>
                </section>

                <div className="max-w-4xl mx-auto mb-12 px-4 sm:px-0 text-center">
                    <p className="text-base md:text-lg text-slate-655 dark:text-zinc-350 leading-relaxed max-w-2xl mx-auto">
                        At Docdril, we prioritize clarity, commitment, and long-term partnerships. Every project is approached with deep understanding and structured planning to ensure alignment from the start.
                    </p>
                </div>

                {/* Stacked Cards Layout */}
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16 px-4 sm:px-0">
                    
                    {/* Card 1: Commitment */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    1. Commitment to Delivery
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    We ensure that all deliverables are executed as per the agreed scope, timelines, and expectations discussed during onboarding. If Docdril fails to fulfill any clearly defined deliverables due to reasons on our end, we take full responsibility and will evaluate the situation for a fair resolution.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Execution baseline</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">As per agreed scope</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Failure accountability</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Full agency responsibility</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Eligibility */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <CheckSquare className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    2. Eligibility for Refunds
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    Refunds are only considered under specific conditions including failure to deliver agreed services/milestones, major deviation from agreed scope caused by our team, or verified execution errors originating from our side. All decisions are based on scope, communication, and deliverables.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Milestones</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Delivery failure</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Team Deviation</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Scope clashing</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Verification</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Execution errors</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Non-Refundable */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 text-rose-700 dark:text-rose-500 border border-rose-100 dark:border-rose-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <XCircle className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    3. Non-Refundable Situations
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    Refunds will not be provided for changes of mind, preference-based shifts not aligned with initial scope, delays/lack of assets from the client's side, or requests made after active approval stages.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Preference</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Change of mind</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Client Bottlenecks</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Asset delays</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Milestones</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Post-approval</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Pre-Project Alignment */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-amber-550/10 dark:bg-amber-950/25 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    4. Pre-Project Alignment
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    To ensure the right fit and workflow compatibility, we strongly recommend starting with a pilot project or a warm-up engagement phase before committing to larger scopes.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Initial Trial</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Starter / Pilot</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Collaboration style</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Warm-up engagement</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Partnership Approach */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <Handshake className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    5. Partnership Approach
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                                    We focus on building long-term trust and mutual alignment. We collaborate with clients who value structured execution. Strong early-stage communication ensures refund issues are extremely rare.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Relationship</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Trust & Clarity</span>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Collaboration model</span>
                                        <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Long-term alignment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Agreement */}
                    <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="p-3.5 rounded-2xl bg-teal-50/80 dark:bg-teal-950/20 text-teal-700 dark:text-teal-400 border border-teal-100 dark:border-teal-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <ClipboardCheck className="w-6 h-6" />
                            </div>
                            <div className="flex-grow w-full">
                                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                                    6. Agreement
                                </h2>
                                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed text-left">
                                    By engaging with Docdril, you acknowledge and agree to this refund policy.
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
