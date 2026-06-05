import RelatedContent from '../../components/RelatedContent';
import { Metadata } from 'next';
import { 
  MessageSquare, 
  Compass, 
  Map, 
  Handshake, 
  Layers, 
  CreditCard, 
  Activity, 
  Rocket
} from 'lucide-react';

export const metadata: Metadata = {
  title: "How Docdril Works: The Creative-Tech Process | Docdril",
  description: "Explore the 8-step client workflow pipeline. Learn how Docdril integrates video editing, web design, and AI automation into a unified process.",
  keywords: "how docdril works, creative tech ecosystem model, docdril delivery workflow, agency onboarding process, baseline pricing rules",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Collaborate with Docdril",
    "description": "Understand the step-by-step process of client onboarding, advance settlements, narrative staging, edits, and deliverables validation.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Leads / Enquiry",
        "text": "Submit your raw details, current files, or project goals. We analyze your requirements and get back in under 12 hours."
      },
      {
        "@type": "HowToStep",
        "name": "Discovery Meeting",
        "text": "We hop on a brief call to align on your brand's voice, aesthetic targets, integrations, and long-term ecosystem direction."
      },
      {
        "@type": "HowToStep",
        "name": "Workflow Proposal",
        "text": "We present our workflow outline, custom template blueprints, and integration route maps for your final validation."
      },
      {
        "@type": "HowToStep",
        "name": "Deal Confirmation",
        "text": "We align on scope limits, timeline schedules, and deliverable items before drafting agreements."
      },
      {
        "@type": "HowToStep",
        "name": "Client Onboarding",
        "text": "You get access to a private dashboard space, and shared assets directories, keeping communication clean."
      },
      {
        "@type": "HowToStep",
        "name": "Standard Advance Settlement",
        "text": "We trigger kickoff upon a standard minimum 20% advance payment settlement (reduced to 15% baseline for returning partners, fully customizable depending on project specs)."
      },
      {
        "@type": "HowToStep",
        "name": "Production & Revisions",
        "text": "Our engineers and creatives work in parallel. We provide 2 free refinement rounds on all video and design outputs before deployment."
      },
      {
        "@type": "HowToStep",
        "name": "Final Delivery & Launch",
        "text": "Upon final approval and the remaining 80% settlement, we deploy files to your hosting/folders and launch integrations live."
      }
    ]
  };

  const phaseOne = [
    {
      number: "01",
      title: "Leads / Enquiry",
      icon: <MessageSquare className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "Submit your raw details, current files, or project goals. We analyze your requirements and get back in under 12 hours."
    },
    {
      number: "02",
      title: "Discovery Meeting",
      icon: <Compass className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "We hop on a brief call to align on your brand's voice, aesthetic targets, integrations, and long-term ecosystem direction."
    },
    {
      number: "03",
      title: "Workflow Proposal",
      icon: <Map className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "We present our workflow outline, custom template blueprints, and integration route maps for your final validation."
    },
    {
      number: "04",
      title: "Deal Confirmation",
      icon: <Handshake className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "We align on scope limits, timeline schedules, and deliverable items before drafting agreements."
    }
  ];

  const phaseTwo = [
    {
      number: "05",
      title: "Client Onboarding",
      icon: <Layers className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "You get access to a private dashboard space, and shared assets directories, keeping communication clean."
    },
    {
      number: "06",
      title: "Standard Advance Settlement",
      icon: <CreditCard className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "We trigger kickoff upon a standard minimum 20% advance payment settlement (reduced to 15% baseline for returning partners, fully customizable depending on project specs)."
    }
  ];

  const phaseThree = [
    {
      number: "07",
      title: "Production & Revisions",
      icon: <Activity className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "Our engineers and creatives work in parallel. We provide 2 free refinement rounds on all video and design outputs before deployment."
    },
    {
      number: "08",
      title: "Final Delivery & Launch",
      icon: <Rocket className="w-4.5 h-4.5 text-slate-800 dark:text-zinc-200" />,
      desc: "Upon final approval and the remaining 80% settlement, we deploy files to your hosting/folders and launch integrations live."
    }
  ];

  const baseShadowClass = "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_15px_35px_-5px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_15px_35px_-5px_rgba(0,0,0,0.35)]";
  const hoverShadowClass = "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_25px_50px_-12px_rgba(0,0,0,0.06)] dark:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.45)] hover:-translate-y-0.5";
  const baseGlassClass = "bg-gradient-to-br from-white/65 to-white/25 dark:from-zinc-900/40 dark:to-zinc-950/15 backdrop-blur-xl border border-white/80 dark:border-zinc-800/80 rounded-3xl";
  const hoverGlassClass = "hover:from-white/75 hover:to-white/35 dark:hover:from-zinc-900/50 dark:hover:to-zinc-950/20 hover:border-white/95 dark:hover:border-zinc-700/80";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page how-it-works">
        <section className="hero-section">
          <p className="tagline">Our Methodology</p>
          <h1 className="title">A clear, simple, and professional process.</h1>
          <p className="subtitle !text-base md:!text-lg">
            We combine creative precision with technical engineering. Here is exactly how we onboarding, design, automate, and deliver premium assets for your brand.
          </p>
          <div className="cta-wrapper">
            <button className="cta-button primary shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              Get Started Today
            </button>
          </div>
        </section>

        {/* Timeline Section - Editorial Panels */}
        <section className="relative w-full max-w-4xl mx-auto py-12 px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center text-slate-900 dark:text-slate-50 uppercase mb-16">
            The 8-Step Collaboration Timeline
          </h2>
          
          <div className="space-y-16 relative">
            {/* Decorative background blobs for glassmorphism refraction */}
            <div className="absolute top-1/10 left-1/4 w-80 h-80 rounded-full bg-blue-400/8 dark:bg-blue-500/5 blur-[120px] pointer-events-none select-none" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-orange-300/8 dark:bg-orange-500/5 blur-[130px] pointer-events-none select-none" />
            <div className="absolute bottom-1/10 left-1/3 w-80 h-80 rounded-full bg-purple-400/8 dark:bg-purple-500/5 blur-[110px] pointer-events-none select-none" />

            {/* Phase 1: Alignment */}
            <div className={`p-8 md:p-12 bg-slate-550/5 dark:bg-zinc-900/10 border border-slate-200/50 dark:border-zinc-800/50 rounded-3xl ${baseShadowClass} ${hoverShadowClass} transition-all duration-500 relative z-10`}>
              <div className="border-b border-slate-200 dark:border-zinc-800/80 pb-4 mb-8">
                <span className="font-sans tracking-widest text-xs font-semibold text-slate-455 dark:text-zinc-550 uppercase">
                  Phase I &mdash; Alignment & Strategy
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phaseOne.map((step, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col justify-between overflow-hidden group transition-all duration-300 ${baseGlassClass} ${baseShadowClass} ${hoverGlassClass} ${hoverShadowClass}`}
                  >
                    <div>
                      {/* Top-bleed Illustration Image */}
                      <div className="relative w-full h-48 bg-white/20 dark:bg-zinc-950/5 border-b border-white/40 dark:border-zinc-800/20 overflow-hidden select-none p-4 flex items-center justify-center">
                        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black tracking-widest rounded shadow-sm select-none">
                          STEP {step.number}
                        </div>
                        <img 
                          src={`/illustrations/${step.number.replace(/^0/, '')}.png`} 
                          alt={step.title}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content Padding Wrapper */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="p-2.5 bg-slate-100/80 dark:bg-zinc-800/80 text-slate-855 dark:text-zinc-250 border border-slate-200/50 dark:border-zinc-800/50 rounded-lg shadow-sm">
                            {step.icon}
                          </div>
                          <span className="font-sans font-black text-4xl text-slate-900 dark:text-white select-none leading-none opacity-90">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-slate-655 dark:text-zinc-350">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 2: Integration */}
            <div className={`p-8 md:p-12 bg-slate-550/5 dark:bg-zinc-900/10 border border-slate-200/50 dark:border-zinc-800/50 rounded-3xl ${baseShadowClass} ${hoverShadowClass} transition-all duration-500 relative z-10`}>
              <div className="border-b border-slate-200 dark:border-zinc-800/80 pb-4 mb-8">
                <span className="font-sans tracking-widest text-xs font-semibold text-slate-455 dark:text-zinc-550 uppercase">
                  Phase II &mdash; Onboarding & Settlement
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phaseTwo.map((step, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col justify-between overflow-hidden group transition-all duration-300 ${baseGlassClass} ${baseShadowClass} ${hoverGlassClass} ${hoverShadowClass}`}
                  >
                    <div>
                      {/* Top-bleed Illustration Image */}
                      <div className="relative w-full h-48 bg-white/20 dark:bg-zinc-950/5 border-b border-white/40 dark:border-zinc-800/20 overflow-hidden select-none p-4 flex items-center justify-center">
                        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black tracking-widest rounded shadow-sm select-none">
                          STEP {step.number}
                        </div>
                        <img 
                          src={`/illustrations/${step.number.replace(/^0/, '')}.png`} 
                          alt={step.title}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content Padding Wrapper */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="p-2.5 bg-slate-100/80 dark:bg-zinc-800/80 text-slate-855 dark:text-zinc-250 border border-slate-200/50 dark:border-zinc-800/50 rounded-lg shadow-sm">
                            {step.icon}
                          </div>
                          <span className="font-sans font-black text-4xl text-slate-900 dark:text-white select-none leading-none opacity-90">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-slate-655 dark:text-zinc-350">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 3: Velocity */}
            <div className={`p-8 md:p-12 bg-slate-550/5 dark:bg-zinc-900/10 border border-slate-200/50 dark:border-zinc-800/50 rounded-3xl ${baseShadowClass} ${hoverShadowClass} transition-all duration-500 relative z-10`}>
              <div className="border-b border-slate-200 dark:border-zinc-800/80 pb-4 mb-8">
                <span className="font-sans tracking-widest text-xs font-semibold text-slate-455 dark:text-zinc-550 uppercase">
                  Phase III &mdash; Production & Launch
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phaseThree.map((step, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col justify-between overflow-hidden group transition-all duration-300 ${baseGlassClass} ${baseShadowClass} ${hoverGlassClass} ${hoverShadowClass}`}
                  >
                    <div>
                      {/* Top-bleed Illustration Image */}
                      <div className="relative w-full h-48 bg-white/20 dark:bg-zinc-950/5 border-b border-white/40 dark:border-zinc-800/20 overflow-hidden select-none p-4 flex items-center justify-center">
                        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black tracking-widest rounded shadow-sm select-none">
                          STEP {step.number}
                        </div>
                        <img 
                          src={`/illustrations/${step.number.replace(/^0/, '')}.png`} 
                          alt={step.title}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content Padding Wrapper */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="p-2.5 bg-slate-100/80 dark:bg-zinc-800/80 text-slate-855 dark:text-zinc-250 border border-slate-200/50 dark:border-zinc-800/50 rounded-lg shadow-sm">
                            {step.icon}
                          </div>
                          <span className="font-sans font-black text-4xl text-slate-900 dark:text-white select-none leading-none opacity-90">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-slate-655 dark:text-zinc-350">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <RelatedContent />
        </div>
      </main>
    </>
  );
}
function Cpu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3" />
      <path d="M15 1v3" />
      <path d="M9 20v3" />
      <path d="M15 20v3" />
      <path d="M20 9h3" />
      <path d="M20 15h3" />
      <path d="M1 9h3" />
      <path d="M1 15h3" />
    </svg>
  )
}
