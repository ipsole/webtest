import RelatedContent from '../../components/RelatedContent';
import { Metadata } from 'next';
import { CreditCard, RotateCcw, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms of Service & Collaboration Guidelines | Docdril",
  description: "Read our standard service terms, payment schedules, draft revision limits, and intellectual property policies.",
  keywords: "terms of service docdril, contract milestones agency, project advance policy, digital asset ownership",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "url": "https://docdril.in/terms"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page terms-of-service pb-12">
        <section className="hero-section !mb-12">
          <span className="font-mono tracking-widest text-[10px] text-slate-400 dark:text-zinc-500 uppercase">Legal Guidelines</span>
          <h1 className="title text-slate-900 dark:text-white font-extrabold tracking-tight mt-2 uppercase">
            Terms of <span className="text-blue-700 dark:text-blue-400">Service</span>
          </h1>
          <p className="subtitle !text-base md:!text-lg max-w-2xl mx-auto mt-4 text-center">
            Effective Date: June 3, 2026. General guidelines governing project agreements and deliverables.
          </p>
        </section>

        {/* Stacked Cards Layout */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16 px-4 sm:px-0">
          
          {/* Card 1: Standard Payments */}
          <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <CreditCard className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-grow w-full">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                  1. Standard Payments & Baseline Advances
                </h2>
                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                  All client projects operate on a structured milestone system. Standard projects require a baseline minimum 20% advance settlement to initialize design or development (reduced to a 15% baseline for returning loyal partners). The remaining 80% balance is due on final approved asset delivery. Scopes are custom-tailored per client agreement.
                </p>
                
                {/* Visual Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Standard Advance</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">20% Baseline</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Loyal Partners</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">15% Baseline</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Final Balance</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">80% on Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Refinement & Revisions */}
          <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-amber-550/10 dark:bg-amber-950/25 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <RotateCcw className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-grow w-full">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                  2. Refinement & Draft Revisions
                </h2>
                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                  We provide 2 free refinement rounds on all video files and design templates. Extra revisions beyond this baseline are subject to additional hourly rate parameters detailed in the service contract.
                </p>
                
                {/* Visual Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Standard Scope</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">2 Free Rounds</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Excess Revisions</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Hourly Rate Billing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Ownership & Intellectual Property */}
          <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-grow w-full">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                  3. Ownership & Intellectual Property
                </h2>
                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                  Upon final payment settlement, all global intellectual rights for website code, custom designs, and edited video media are fully transferred to the client. Docdril retains permission to display final works in portfolios unless prohibited by an active NDA.
                </p>
                
                {/* Visual Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Transfer of Rights</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">100% Client Ownership</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Portfolio License</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">NDA Excludable</span>
                  </div>
                </div>
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
