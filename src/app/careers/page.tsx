import { Metadata } from 'next';
import RelatedContent from '../../components/RelatedContent';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: "Careers at Docdril: Join the Creative-Tech Ecosystem | Docdril",
  description: "Apply to join Docdril as a video editor, motion designer, AI content creator, social media strategist, web/backend developer, research executive, or sales executive.",
  keywords: "jobs design agency, apply video editor, hire automation engineer, front-end developer jobs B2B, motion designer jobs, social media strategist, research executive, sales intern",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at Docdril",
    "description": "Application portal for creators, developers, strategists, and sales executives to join the Docdril team."
  };

  const openRoles = [
    {
      title: "Video Editor",
      specs: "Remote / Contract or Full-Time",
      image: "/jobopenings/1.png",
      desc: "Requires strong aesthetic pacing, spatial sound engineering, narrative flow, and advanced retention hooks analysis."
    },
    {
      title: "Motion Designer",
      specs: "Remote / Contract or Full-Time",
      image: "/jobopenings/2.png",
      desc: "Focused on fluid animation curves, custom transition physics, kinetic typography, and premium branding effects."
    },
    {
      title: "AI Content Creator",
      specs: "Remote / Contract or Full-Time",
      image: "/jobopenings/3.png",
      desc: "Leveraging LLMs, Midjourney, Stable Diffusion, and custom automation workflows to scale premium asset production."
    },
    {
      title: "Social Media Strategist",
      specs: "Remote / Full-Time",
      image: "/jobopenings/4.png",
      desc: "Driving algorithmic audience growth, growth hacking, content distribution engines, and high-impact B2B narrative scripting."
    },
    {
      title: "Web & Backend Developer",
      specs: "Remote / Full-Time or Contract",
      image: "/jobopenings/5.png",
      desc: "Building React/Next.js frontend systems, robust Node.js/Firebase APIs, schema designs, and automated pipeline integrations."
    },
    {
      title: "Research Executive",
      specs: "Remote / Contract or Full-Time",
      image: "/jobopenings/6.png",
      desc: "Conducting exhaustive B2B intelligence mapping, competitive analysis, trend spotting, and strategic knowledge compilation."
    },
    {
      title: "Sales Executive",
      specs: "Full-Time or Intern",
      image: "/jobopenings/7.png",
      desc: "Driving enterprise outreach, consultative client discovery, tailored proposals, relationship management, and sales pipeline growth."
    },
    {
      title: "AI Specialist",
      specs: "Remote / Contract or Full-Time",
      image: "/jobopenings/8.png",
      desc: "Developing, fine-tuning, and integrating advanced AI models, LLM pipelines, and custom agent automation workflows."
    }
  ];

  const cultureValues = [
    {
      title: "Work Ethics & Responsibility",
      image: "/ourvalue/1.png",
      desc: "We operate on high trust and complete transparency. You manage your own hours, but you take absolute ownership of your commitments, communication, and outcomes."
    },
    {
      title: "Mindset & Achievements",
      image: "/ourvalue/2.png",
      desc: "Skills can be trained, but hunger and work ethic cannot. We seek builders who bring a track record of solving hard problems and shipping tangible achievements."
    },
    {
      title: "Real Business Value",
      image: "/ourvalue/3.png",
      desc: "We don't just complete checklist tasks; we drive business impact. We look for partners who think strategically, act autonomously, and speak in real business terms."
    }
  ];

  const applySteps = [
    {
      number: "1",
      title: "Docdril Improvement",
      image: "/apply/1.png",
      desc: "Tell us what you think we are doing well and how we could level up or run even better."
    },
    {
      number: "2",
      title: "Identify Gaps",
      image: "/apply/2.png",
      desc: "Pinpoint a potential area where you think we need assistance or support, and how you would fix it."
    },
    {
      number: "3",
      title: "Business-first Value",
      image: "/apply/3.png",
      desc: "Share your achievements, work ethics, and mindset in a real business sense. Offer solutions, not just tools."
    },
    {
      number: "4",
      title: "Interview Readiness",
      image: "/apply/4.png",
      desc: "Confirm that you are open to an active, conversational interview to discuss compatibility and goals."
    }
  ];



  const baseShadowClass = "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_15px_35px_-5px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_15px_35px_-5px_rgba(0,0,0,0.35)]";
  const hoverShadowClass = "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_25px_50px_-12px_rgba(0,0,0,0.06)] dark:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.45)] hover:-translate-y-0.5";
  const baseSolidShadow = "shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.45),0_1px_3px_rgba(0,0,0,0.05)]";
  const hoverSolidShadow = "hover:shadow-[0_35px_70px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_10px_20px_rgba(0,0,0,0.25)] hover:-translate-y-0.5";
  const baseGlassClass = "bg-gradient-to-br from-white/65 to-white/25 dark:from-zinc-900/40 dark:to-zinc-950/15 backdrop-blur-xl border border-white/80 dark:border-zinc-800/80 rounded-3xl";
  const hoverGlassClass = "hover:from-white/75 hover:to-white/35 dark:hover:from-zinc-900/50 dark:hover:to-zinc-950/20 hover:border-white/95 dark:hover:border-zinc-700/80";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page careers-page">
        <section className="hero-section !mb-8 flex flex-col items-center text-center">
          <h1 className="title mx-auto text-center">Shape the next era of storytelling and systems.</h1>
          <p className="subtitle !text-base md:!text-lg mx-auto text-center">
            We are building an elite crew of creatives, engineers, and strategists. If you are driven by high ownership, outstanding work ethics, and real-world business outcomes, explore our open roles.
          </p>
        </section>


        {/* Repositioned and Upscaled Tagline */}
        <div className="text-center mt-16 mb-8">
          <h2 className="title !mb-0 !mt-0 mx-auto">
            Join Us
          </h2>
        </div>

        {/* Workspace Visual Section - Using career.jpg */}
        <div className="mb-16">
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200/80 dark:border-zinc-800/80 shadow-[0_25px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.5)] aspect-video bg-zinc-900">
            <img 
              src="/career.jpg" 
              alt="Docdril Workspace Setup" 
              className="object-cover w-full h-full"
            />
            {/* Desktop Overlay - Hidden on Mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none hidden md:flex items-end p-8">
              <div>
                <p className="text-white font-bold text-lg md:text-xl uppercase tracking-wider">Engineered for Storytelling & Systems</p>
                <p className="text-zinc-300 text-xs md:text-sm mt-1">Inside the creative powerhouse running Docdril global operations.</p>
              </div>
            </div>
          </div>
          {/* Mobile Caption - Shown only on Mobile */}
          <div className="block md:hidden mt-4 text-center px-4">
            <p className="text-slate-900 dark:text-zinc-100 font-bold text-sm uppercase tracking-wider">Engineered for Storytelling & Systems</p>
            <p className="text-slate-500 dark:text-zinc-400 text-xs mt-1">Inside the creative powerhouse running Docdril global operations.</p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center text-slate-900 dark:text-slate-50 uppercase">Active Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, idx) => (
              <div 
                key={idx} 
                className={`relative p-6 sm:p-5 sm:pl-4 sm:pr-6 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl ${baseSolidShadow} ${hoverSolidShadow} hover:bg-white dark:hover:bg-zinc-900/80 hover:border-slate-800 dark:hover:border-zinc-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left group overflow-hidden`}
              >
                {/* Illustration */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={role.image} 
                    alt={role.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-between min-h-[96px] sm:min-h-[112px] w-full">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-2.5">{role.title}</h3>
                    <p className="text-[13px] sm:text-[14px] text-slate-655 dark:text-zinc-350 leading-relaxed mb-3">{role.desc}</p>
                  </div>
                  <p className="font-sans tracking-wider text-[10px] font-extrabold text-slate-400 dark:text-zinc-550 uppercase mt-auto">
                    {role.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Ecosystem Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center text-slate-900 dark:text-slate-50 uppercase">Our Tech & Creative Stack</h2>
          <div className="max-w-4xl mx-auto px-4">
            <div className={`relative w-full aspect-[5/2] bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl ${baseSolidShadow} ${hoverSolidShadow} hover:bg-white dark:hover:bg-zinc-900/80 hover:border-slate-800 dark:hover:border-zinc-200 transition-all duration-350 overflow-hidden group`}>
              <img 
                src="/stack/1.png" 
                alt="Our Tech & Creative Stack Mockup"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 relative">
          {/* Decorative background blobs */}
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-indigo-400/8 dark:bg-indigo-500/5 blur-[120px] pointer-events-none select-none" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-400/8 dark:bg-purple-500/5 blur-[100px] pointer-events-none select-none" />

          <h2 className="text-2xl font-bold tracking-tight mb-2 text-center text-slate-900 dark:text-slate-50 uppercase relative z-10">What We Value</h2>
          <p className="text-center text-slate-500 dark:text-zinc-500 max-w-xl mx-auto mb-8 text-[15px] relative z-10">
            We seek partners who operate like owners and focus on high-fidelity outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
            {cultureValues.map((val, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col justify-between overflow-hidden group transition-all duration-300 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl ${baseSolidShadow} ${hoverSolidShadow} hover:bg-white dark:hover:bg-zinc-900/80 hover:border-slate-800 dark:hover:border-zinc-200`}
              >
                <div>
                  {/* Top-bleed Illustration Image */}
                  <div className="relative w-full h-48 bg-slate-50/50 dark:bg-zinc-950/20 border-b border-slate-100 dark:border-zinc-800/30 overflow-hidden select-none p-4 flex items-center justify-center">
                    <img 
                      src={val.image} 
                      alt={val.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Padding Wrapper */}
                  <div className="p-6 text-center flex flex-col items-center">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">{val.title}</h3>
                    <p className="text-[14px] text-slate-655 dark:text-zinc-350 leading-relaxed max-w-xs">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordions Section */}
        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center text-slate-900 dark:text-slate-50 uppercase">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className={`group border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-4 bg-slate-50/50 dark:bg-zinc-900/10 hover:border-slate-800 dark:hover:border-zinc-200 ${baseShadowClass} hover:shadow-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden`}>
              <summary className="flex justify-between items-center font-semibold text-slate-900 dark:text-slate-50 cursor-pointer list-none select-none text-base">
                <span>What is the interview and onboarding process like?</span>
                <span className="flex-shrink-0 ml-1.5 p-1 bg-slate-100/80 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border border-slate-200/50 dark:border-zinc-800/50 rounded-md transition-transform group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] text-slate-600 dark:text-zinc-300 leading-relaxed pt-2 border-t border-slate-200/40 dark:border-zinc-800/30">
                Our process consists of three main steps: 1) Initial Review of your business-focused email application, 2) An interactive conversational interview to understand alignment on values, ethics, and mindset, and 3) A short paid test scope to ensure mutual satisfaction before final onboarding.
              </p>
            </details>

            <details className={`group border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-4 bg-slate-50/50 dark:bg-zinc-900/10 hover:border-slate-800 dark:hover:border-zinc-200 ${baseShadowClass} hover:shadow-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden`}>
              <summary className="flex justify-between items-center font-semibold text-slate-900 dark:text-slate-50 cursor-pointer list-none select-none text-base">
                <span>Are these roles remote or on-site?</span>
                <span className="flex-shrink-0 ml-1.5 p-1 bg-slate-100/80 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border border-slate-200/50 dark:border-zinc-800/50 rounded-md transition-transform group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] text-slate-600 dark:text-zinc-300 leading-relaxed pt-2 border-t border-slate-200/40 dark:border-zinc-800/30">
                All developer, editor, strategy, and research roles are 100% remote. Sales roles are flexible depending on candidate preference (remote or hybrid). We hire globally and care about your output, not your location.
              </p>
            </details>

            <details className={`group border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-4 bg-slate-50/50 dark:bg-zinc-900/10 hover:border-slate-800 dark:hover:border-zinc-200 ${baseShadowClass} hover:shadow-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden`}>
              <summary className="flex justify-between items-center font-semibold text-slate-900 dark:text-slate-50 cursor-pointer list-none select-none text-base">
                <span>How do you evaluate candidate performance?</span>
                <span className="flex-shrink-0 ml-1.5 p-1 bg-slate-100/80 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border border-slate-200/50 dark:border-zinc-800/50 rounded-md transition-transform group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] text-slate-600 dark:text-zinc-300 leading-relaxed pt-2 border-t border-slate-200/40 dark:border-zinc-800/30">
                We look at results and ownership. We evaluate based on your reliability, quality of execution, proactive communication, and ability to think from a business perspective to make systems and stories better.
              </p>
            </details>

            <details className={`group border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-4 bg-slate-50/50 dark:bg-zinc-900/10 hover:border-slate-800 dark:hover:border-zinc-200 ${baseShadowClass} hover:shadow-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden`}>
              <summary className="flex justify-between items-center font-semibold text-slate-900 dark:text-slate-50 cursor-pointer list-none select-none text-base">
                <span>What timezone do you operate in?</span>
                <span className="flex-shrink-0 ml-1.5 p-1 bg-slate-100/80 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border border-slate-200/50 dark:border-zinc-800/50 rounded-md transition-transform group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] text-slate-600 dark:text-zinc-300 leading-relaxed pt-2 border-t border-slate-200/40 dark:border-zinc-800/30">
                We operate across multiple global timezones. While your active working hours are fully flexible, we require at least 2 hours of daily overlap with our core operational window for sync calls and collaborative updates.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-8 relative">
          {/* Decorative background blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-300/8 dark:bg-blue-500/5 blur-[140px] pointer-events-none select-none" />
          
          <div className={`p-8 md:p-12 relative z-10 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl ${baseSolidShadow}`}>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-200/60 dark:border-zinc-800/60 pb-8">
                <div>
                  <span className="font-mono tracking-widest text-[10px] text-slate-400 dark:text-zinc-500 uppercase">Application Blueprint</span>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1 text-left uppercase">How to Apply</h2>
                </div>
                <a 
                  href="mailto:join@docdril.com?subject=Application%20for%20Docdril"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-95 transition-all text-xs tracking-wider uppercase w-fit shadow-md cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Apply via Email
                </a>
              </div>

              <p className="text-slate-600 dark:text-zinc-300 text-[15px] leading-relaxed mb-8">
                We skip typical HR filters. To apply, send a thoughtful, direct email to <strong className="text-slate-900 dark:text-white font-semibold">join@docdril.com</strong> with the subject format <code className="bg-slate-100 dark:bg-zinc-850 px-2 py-1 rounded text-xs text-slate-800 dark:text-zinc-200 font-mono">[Role Name] - [Your Name]</code>. In your message, address the following clearly:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {applySteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className={`relative p-6 sm:p-5 sm:pl-4 sm:pr-6 bg-white dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl ${baseSolidShadow} ${hoverSolidShadow} hover:bg-white dark:hover:bg-zinc-900/80 hover:border-slate-800 dark:hover:border-zinc-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left group overflow-hidden`}
                  >
                    {/* Number Indicator Badge */}
                    <div className="absolute top-4 left-4 z-10 w-7 h-7 rounded-full bg-blue-50/90 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-extrabold flex items-center justify-center shadow-sm select-none">
                      {step.number}
                    </div>

                    {/* Illustration */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center mt-4">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow pt-2 w-full">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-base">{step.title}</h4>
                      <p className="text-[13px] sm:text-[14px] text-slate-655 dark:text-zinc-350 leading-relaxed">{step.desc}</p>
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
