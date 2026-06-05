"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Layers, Cpu, Sparkles, Scale, Activity, Users, Compass, ArrowRight } from 'lucide-react';

const EXPLORE_TREE = [
  {
    name: 'Services',
    title: 'Explore More Services',
    subtitle: 'High-impact creative & digital pipelines tailored for growth.',
    icon: Layers,
    children: [
      { name: 'Video Editing & VFX', path: '/services/video-editing', desc: 'Premium cinematic grading, sound design, and retention hooks.' },
      { name: 'Website Design', path: '/services/website-design', desc: 'Performance-first Next.js, interactive design tokens, and SEO.' },
      { name: 'AI Workflows & Automation', path: '/services/ai-workflows-automation', desc: 'Custom Make/Zapier pipelines and CRM database syncing.' },
      { name: 'Growth Infrastructure', path: '/services/growth-infrastructure', desc: 'Analytics tracking, tech stack audit, and conversion pipelines.' },
      { name: 'Social Media Management', path: '/services/social-media-management', desc: 'Content calendar strategy, copywriting, and growth analytics.' },
      { name: 'AI Music Creation', path: '/services/ai-music-creation', desc: 'Custom AI-generated audio scores and soundscapes.' },
      { name: 'Video Production & Shoots', path: '/services/video-production-shoots', desc: 'Professional camera setup, scripting, and field directing.' },
      { name: 'Marketing Strategy', path: '/services/marketing-strategy', desc: 'Omnichannel acquisition, positioning audit, and funnel optimization.' },
    ]
  },
  {
    name: 'Ecosystem',
    title: 'Explore Our Tech Ecosystem',
    subtitle: 'Modern software tools and integrations we use to build systems.',
    icon: Cpu,
    children: [
      { name: 'Make.com Automation', path: '/ecosystem/make-automation', desc: 'Visual workflow builders and bi-directional API routers.' },
      { name: 'Next.js Development', path: '/ecosystem/nextjs-development', desc: 'Server-side rendering, static compilation, and high SEO.' },
      { name: 'AI Workflows', path: '/ecosystem/ai-workflows', desc: 'LLM agents, vector embedding indexing, and cognitive pipelines.' },
      { name: 'Framer Development', path: '/ecosystem/framer-development', desc: 'High-fidelity visual animations and lightning landing pages.' },
      { name: 'Zapier Automation', path: '/ecosystem/zapier-automation', desc: 'SaaS app webhooks and instant database sync triggers.' },
    ]
  },
  {
    name: 'Solutions',
    title: 'Explore Related Solutions',
    subtitle: 'Bespoke integration pipelines solving workflow bottlenecks.',
    icon: Sparkles,
    children: [
      { name: 'Automated Client Onboarding', path: '/solutions/automated-client-onboarding', desc: 'Self-serve CRM pipelines, automated client Slack invite, and kickoff docs.' },
      { name: 'CRM & Database Syncing', path: '/solutions/crm-database-syncing', desc: 'Sync Notion, Airtable, HubSpot, and custom databases seamlessly.' },
      { name: 'LinkedIn Carousel Design', path: '/solutions/linkedin-carousel-design', desc: 'High-retention visual assets, cover page branding, and writing templates.' },
      { name: 'Retention-Focused Ad Creatives', path: '/solutions/retention-focused-ad-creatives', desc: 'Paid acquisition hook structures and high-performance video scripts.' },
    ]
  },
  {
    name: 'VS Comparisons',
    title: 'Compare Alternatives',
    subtitle: 'Learn why brands transition to Docdril’s creative-tech workflows.',
    icon: Scale,
    children: [
      { name: 'vs. Traditional Agencies', path: '/vs/traditional-agencies', desc: 'Why slow communication and high overhead retainers fail high-speed brands.' },
      { name: 'vs. Freelancers', path: '/vs/freelancers', desc: 'Why single-point dependency and lack of engineering pipelines bottleneck scale.' },
      { name: 'vs. Designjoy Alternative', path: '/vs/designjoy-alternative', desc: 'How we compare to standard visual design subscriptions by offering custom dev.' },
      { name: 'vs. VideoHusky Alternative', path: '/vs/videohusky-alternative', desc: 'Why video editing subscriptions with basic templates fall short of custom strategy.' },
    ]
  },
  {
    name: 'Industries',
    title: 'Tailored for Your Industry',
    subtitle: 'Exhaustive systems built for your exact operational model.',
    icon: Activity,
    children: [
      { name: 'AI Startups', path: '/industries/ai-startups', desc: 'Funnels, product demo edits, API sandboxes, and VC pitch layouts.' },
      { name: 'SaaS Builders', path: '/industries/saas-builders', desc: 'Next.js landing grids, user-journey videos, and Make onboarding scenarios.' },
      { name: 'Content Creators', path: '/industries/content-creators', desc: 'High-retention editing, channel assets, and automated content distribution.' },
    ]
  },
  {
    name: 'Roles',
    title: 'Optimized for Your Role',
    subtitle: 'Unlock speed and output based on your core objectives.',
    icon: Users,
    children: [
      { name: 'For Founders', path: '/roles/for-founders', desc: 'Delegating creative overhead and building automated digital hubs.' },
      { name: 'For Growth Teams', path: '/roles/for-growth-teams', desc: 'Conversion-focused landing architectures and rapid video ad creative testing.' },
      { name: 'For Content Creators', path: '/roles/for-content-creators', desc: 'Professional production pipelines to free up creative bandwidth.' },
    ]
  },
  {
    name: 'Company Core',
    title: 'More Inside Docdril',
    subtitle: 'Discover our principles, transparent pricing, and careers.',
    icon: Compass,
    children: [
      { name: 'About Us', path: '/about', desc: 'Meet the founders and discover the creative-tech ecosystem philosophy.' },
      { name: 'How It Works', path: '/how-it-works', desc: 'Step-by-step engagement model from first brief to approved delivery.' },
      { name: 'Pricing', path: '/pricing', desc: 'Transparent guideline baselines and advance payment principles.' },
      { name: 'Careers', path: '/careers', desc: 'Apply to join our elite pool of remote creative-tech builders.' },
      { name: 'FAQs', path: '/faqs', desc: 'Quick answers about licensing, scopes, revisions, and NDAs.' },
      { name: 'System Status', path: '/status', desc: 'API connectivity, database uptime, and Next.js CDN logs.' },
      { name: 'Contact', path: '/contact', desc: 'Get in touch for custom creative and automation quotes.' },
      { name: 'Portfolio', path: '/portfolio', desc: 'Browse live landing layouts and featured video showcase reels.' },
      { name: 'Privacy Policy', path: '/privacy', desc: 'Data encryption, AES credentials storage, and NDA compliance.' },
      { name: 'Terms of Service', path: '/terms', desc: 'Contract specifications, grace periods, and watermark guidelines.' },
    ]
  }
];

export default function RelatedContent() {
  const pathname = usePathname();

  // Find category group that contains current path
  const currentCategory = EXPLORE_TREE.find(group => 
    group.children.some(child => child.path === pathname)
  );

  if (!currentCategory) return null;

  // Filter out the active page
  const recommendations = currentCategory.children.filter(child => child.path !== pathname);

  if (recommendations.length === 0) return null;

  const IconComponent = currentCategory.icon;

  return (
    <section className="mt-16 sm:mt-24 pt-12 border-t border-gray-100 dark:border-zinc-800/60 w-full relative z-20">
      <div className="flex flex-col mb-8 text-left">
        <div className="flex items-center gap-2 mb-2">
          <IconComponent className="w-5 h-5 text-black dark:text-white" />
          <span className="text-[10px] font-bold text-black dark:text-zinc-300 uppercase tracking-widest">{currentCategory.name} Recommendations</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight leading-none mb-1">
          {currentCategory.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">
          {currentCategory.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recommendations.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="group p-5 bg-white/40 dark:bg-zinc-900/30 rounded-2xl border border-gray-200/50 dark:border-zinc-800/50 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between hover:border-black/30 dark:hover:border-white/30 hover:bg-white/80 dark:hover:bg-zinc-900/60"
          >
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors text-sm sm:text-base tracking-tight mb-1">
                {item.name}
              </h4>
              <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
            <span className="flex items-center gap-1 text-[10px] font-bold text-black dark:text-zinc-300 mt-4 group-hover:translate-x-1 transition-transform">
              Visit Page <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
