import RelatedContent from '../../components/RelatedContent';
import { Metadata } from 'next';
import { Lock, Key, EyeOff } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security | Docdril",
  description: "Learn how Docdril manages, secures, and protects client data, software API keys, credentials, and video assets.",
  keywords: "privacy policy docdril, data security compliance, database confidentiality, client asset NDA",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://docdril.in/privacy"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page privacy-policy pb-12">
        <section className="hero-section !mb-12">
          <span className="font-mono tracking-widest text-[10px] text-slate-400 dark:text-zinc-500 uppercase">Data Security Standard</span>
          <h1 className="title text-slate-900 dark:text-white font-extrabold tracking-tight mt-2 uppercase">
            Privacy <span className="text-blue-700 dark:text-blue-400">Policy</span>
          </h1>
          <p className="subtitle !text-base md:!text-lg max-w-2xl mx-auto mt-4 text-center">
            Effective Date: June 3, 2026. How we manage, protect, and handle data across our ecosystem.
          </p>
        </section>

        {/* Stacked Cards Layout */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16 px-4 sm:px-0">
          
          {/* Card 1: Data Confidentiality */}
          <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Lock className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-grow w-full">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                  1. Data Confidentiality & Client Assets
                </h2>
                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                  We work with sensitive customer details, credentials, and product media. All customer information uploaded to our systems is private. We strictly enforce standard Non-Disclosure Agreements (NDAs) for all client workspaces.
                </p>
                
                {/* Visual Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Confidentiality</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">100% Client Isolation</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Contract Compliance</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Standard NDAs Enforced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: API Keys and Credentials */}
          <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-amber-550/10 dark:bg-amber-950/25 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Key className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-grow w-full">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                  2. API Keys and Workspace Credentials
                </h2>
                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                  When engineering Make.com automations, Zapier integrations, or OpenAI API pipelines, we require temporary API credentials. We store all credentials using industry-standard AES-256 encryption. We never share, sell, or reuse developer credentials.
                </p>
                
                {/* Visual Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Storage Security</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">AES-256 Encryption</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Distribution Policy</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">Zero Sharing / Re-use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Cookies and Analytics */}
          <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-slate-800 dark:hover:border-zinc-200 group">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/25 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <EyeOff className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-grow w-full">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 text-left">
                  3. Cookies and Analytics
                </h2>
                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-zinc-350 leading-relaxed mb-6 text-left">
                  We collect standard anonymous browser interactions to optimize our page rendering, SEO metadata quality, and landing speed. You can opt out of analytics tracking via browser settings.
                </p>
                
                {/* Visual Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Interaction Tracking</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">100% Anonymous</span>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950/20 border border-slate-100 dark:border-zinc-800/30 rounded-2xl text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">Control Choice</span>
                    <span className="text-base font-bold text-slate-800 dark:text-zinc-200">User Opt-Out Available</span>
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
