"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';
import { X, ChevronRight, Layers, Cpu, Sparkles, Scale, Activity, Users, Compass, Link2, BookOpen, Terminal, Heart, LifeBuoy } from 'lucide-react';

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

const getFolderIcon = (name, isOpen) => {
  const props = { className: `w-4.5 h-4.5 ${isOpen ? 'text-[#4B4EFC] dark:text-[#6c6efc] scale-110' : 'text-gray-600 dark:text-zinc-400'}` };
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

export default function ExploreSidebar() {
  const { isExploreOpen, setIsExploreOpen } = useModal();
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (name) => {
    setOpenFolders(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleLinkClick = () => {
    setIsExploreOpen(false);
  };

  return (
    <>
      {/* Centered Modal Dialogue Overlay (Instant display, no blur as requested) */}
      <div 
        onClick={() => setIsExploreOpen(false)}
        onTouchStart={() => setIsExploreOpen(false)}
        className={`fixed inset-0 bg-black/45 flex items-end md:items-center justify-center p-0 md:p-4 z-[99998] cursor-pointer ${
          isExploreOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Dialogue Box container (Instant resize & display, responsive size) */}
        <div 
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="relative bg-white dark:bg-zinc-950 w-full h-full md:h-auto md:max-w-lg md:max-h-[75vh] md:rounded-[2rem] md:border md:border-gray-200/50 md:dark:border-zinc-800/60 md:shadow-2xl flex flex-col overflow-hidden cursor-default"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 shrink-0 md:rounded-t-[1.9rem]">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Explore Docdril™</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Sitemap &amp; Ecosystem Explorer</span>
            </div>
            <button 
              onClick={() => setIsExploreOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-0"
              title="Close Explorer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tree list content (sans-serif font matching site theme) */}
          <div className="flex-grow p-6 overflow-y-auto no-scrollbar md:rounded-b-[1.9rem]">
            <div className="flex flex-col gap-2.5 font-sans text-sm select-none">
              {EXPLORE_TREE.map((folder) => {
                const isOpen = !!openFolders[folder.name];
                return (
                  <div key={folder.name} className="flex flex-col">
                    {/* Folder Row */}
                    <div 
                      onClick={() => toggleFolder(folder.name)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFolder(folder.name); } }}
                      role="button"
                      tabIndex={0}
                      className="sitemap-folder-row flex items-center justify-between p-3 rounded-xl cursor-pointer select-none border border-transparent md:hover:bg-gray-100/70 md:dark:hover:bg-zinc-900/60 md:hover:border-gray-200/30 md:dark:hover:border-zinc-800/30 focus:outline-none focus:ring-0 active:bg-transparent"
                      style={{ WebkitTapHighlightColor: 'transparent', outline: 'none' }}
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight className={`w-4 h-4 text-gray-450 ${isOpen ? 'rotate-90 text-indigo-500 dark:text-indigo-400' : ''}`} />
                        {getFolderIcon(folder.name, isOpen)}
                        <span className="font-bold text-gray-800 dark:text-zinc-200 tracking-tight text-sm">{folder.name}</span>
                      </div>
                      <span className="text-[10px] bg-gray-100/80 dark:bg-zinc-900/80 text-gray-500 dark:text-gray-400 font-bold px-2 py-0.5 rounded-full">
                        {folder.children.length}
                      </span>
                    </div>

                    {/* Children List */}
                    <div 
                      className={`flex flex-col pl-9 ${
                        isOpen ? 'block mt-1 mb-2' : 'hidden'
                      }`}
                    >
                      {folder.children.map((child) => (
                        <Link 
                          key={child.name} 
                          href={child.path}
                          onClick={handleLinkClick}
                          className="flex items-center gap-2.5 p-2 rounded-lg text-gray-600 dark:text-zinc-400 hover:bg-indigo-50/50 dark:hover:bg-zinc-900/40 hover:text-[#4B4EFC] dark:hover:text-[#818cf8] transition-all text-xs font-medium focus:outline-none focus:ring-0"
                        >
                          <Link2 className="w-3.5 h-3.5 text-[#4B4EFC]/70 dark:text-[#6c6efc]/70 shrink-0" />
                          <span className="truncate">{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
