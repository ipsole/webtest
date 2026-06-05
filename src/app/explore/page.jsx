"use client";
import React from 'react';
import Link from 'next/link';
import { Layers, Cpu, Sparkles, Scale, Activity, Users, Compass, Link2, BookOpen, Terminal, Heart, LifeBuoy } from 'lucide-react';

const EXPLORE_TREE = [
  {
    name: 'Services',
    children: [
      { name: 'Video Editing & VFX', path: '/services/video-editing' },
      { name: 'Website Design', path: '/services/website-design' },
      { name: 'AI Workflows & Automation', path: '/services/ai-workflows-automation' },
      { name: 'Growth Infrastructure', path: '/services/growth-infrastructure' },
      { name: 'Social Media Management', path: '/services/social-media-management' },
      { name: 'AI Music Creation', path: '/services/ai-music-creation' },
      { name: 'Video Production & Shoots', path: '/services/video-production-shoots' },
      { name: 'Marketing Strategy', path: '/services/marketing-strategy' },
    ]
  },
  {
    name: 'Ecosystem',
    children: [
      { name: 'Make.com Automation', path: '/ecosystem/make-automation' },
      { name: 'Next.js Development', path: '/ecosystem/nextjs-development' },
      { name: 'AI Workflows', path: '/ecosystem/ai-workflows' },
      { name: 'Framer Development', path: '/ecosystem/framer-development' },
      { name: 'Zapier Automation', path: '/ecosystem/zapier-automation' },
    ]
  },
  {
    name: 'Solutions',
    children: [
      { name: 'Automated Client Onboarding', path: '/solutions/automated-client-onboarding' },
      { name: 'CRM & Database Syncing', path: '/solutions/crm-database-syncing' },
      { name: 'LinkedIn Carousel Design', path: '/solutions/linkedin-carousel-design' },
      { name: 'Retention-Focused Ad Creatives', path: '/solutions/retention-focused-ad-creatives' },
    ]
  },
  {
    name: 'VS Comparisons',
    children: [
      { name: 'vs. Traditional Agencies', path: '/vs/traditional-agencies' },
      { name: 'vs. Freelancers', path: '/vs/freelancers' },
      { name: 'vs. Designjoy Alternative', path: '/vs/designjoy-alternative' },
      { name: 'vs. VideoHusky Alternative', path: '/vs/videohusky-alternative' },
    ]
  },
  {
    name: 'Industries',
    children: [
      { name: 'AI Startups', path: '/industries/ai-startups' },
      { name: 'SaaS Builders', path: '/industries/saas-builders' },
      { name: 'Content Creators', path: '/industries/content-creators' },
    ]
  },
  {
    name: 'Roles',
    children: [
      { name: 'For Founders', path: '/roles/for-founders' },
      { name: 'For Growth Teams', path: '/roles/for-growth-teams' },
      { name: 'For Content Creators', path: '/roles/for-content-creators' },
    ]
  },
  {
    name: 'Blogs',
    children: [
      { name: 'Industry Insights', path: '/blogs' },
      { name: 'Creative Technology', path: '/blogs' },
      { name: 'Video Strategy', path: '/blogs' },
      { name: 'Automation Guides', path: '/blogs' },
    ]
  },
  {
    name: 'Softwares',
    children: [
      { name: 'Premiere Pro', path: '/services/video-editing' },
      { name: 'After Effects', path: '/services/video-editing' },
      { name: 'Figma', path: '/services/website-design' },
      { name: 'Make.com', path: '/ecosystem/make-automation' },
      { name: 'Zapier', path: '/ecosystem/zapier-automation' },
    ]
  },
  {
    name: 'Company Core',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Careers', path: '/careers' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'System Status', path: '/status' },
      { name: 'Contact', path: '/contact' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ]
  },
  {
    name: 'Testimonials',
    children: [
      { name: 'Wall of Love', path: '/#testimonials' },
      { name: 'Client Reviews', path: '/portfolio' },
      { name: 'Video Showcase', path: '/portfolio' },
      { name: 'Share Feedback', path: '/contact' },
    ]
  },
  {
    name: 'Support',
    children: [
      { name: 'Submit Enquiry', path: '/enquiry' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'System Status', path: '/status' },
      { name: 'Contact Support', path: '/contact' },
    ]
  }
];

const getFolderIcon = (name) => {
  const props = { className: "w-5 h-5 text-[#4B4EFC] dark:text-[#6c6efc]" };
  switch(name) {
    case 'Services': return <Layers {...props} />;
    case 'Ecosystem': return <Cpu {...props} />;
    case 'Solutions': return <Sparkles {...props} />;
    case 'VS Comparisons': return <Scale {...props} />;
    case 'Industries': return <Activity {...props} />;
    case 'Roles': return <Users {...props} />;
    case 'Blogs': return <BookOpen {...props} />;
    case 'Softwares': return <Terminal {...props} />;
    case 'Company Core': return <Compass {...props} />;
    case 'Testimonials': return <Heart {...props} />;
    case 'Support': return <LifeBuoy {...props} />;
    default: return <Compass {...props} />;
  }
};

export default function ExplorePage() {
  return (
    <main className="seo-page explore-page">
      <section className="hero-section mb-12">
        <p className="tagline">Sitemap &amp; Ecosystem Explorer</p>
        <h1 className="title">Explore <span className="text-zinc-400">Docdril™</span></h1>
        <p className="subtitle">Discover our services, tech stack integrations, custom client solutions, and company resources all in one structured map.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {EXPLORE_TREE.map((category) => (
          <div 
            key={category.name} 
            className="flex flex-col p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-850">
              <div className="flex items-center gap-3">
                {getFolderIcon(category.name)}
                <h2 className="text-xl font-bold text-black dark:text-white tracking-tight">{category.name}</h2>
              </div>
              <span className="text-xs bg-zinc-250 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 font-bold px-2.5 py-1 rounded-full">
                {category.children.length} Links
              </span>
            </div>

            {/* Links List */}
            <div className="flex flex-col gap-1">
              {category.children.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className="flex items-center gap-2.5 p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-indigo-50/50 dark:hover:bg-zinc-900/40 hover:text-[#4B4EFC] dark:hover:text-[#818cf8] transition-all text-sm font-medium focus:outline-none focus:ring-0"
                >
                  <Link2 className="w-4 h-4 text-[#4B4EFC]/70 dark:text-[#6c6efc]/70 shrink-0" />
                  <span className="truncate">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
