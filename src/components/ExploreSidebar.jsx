"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';
import { X, ChevronRight, Layers, Cpu, Sparkles, Scale, Activity, Users, Compass, Link2 } from 'lucide-react';

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
  }
];

const getFolderIcon = (name, isOpen) => {
  const props = { className: `w-4.5 h-4.5 transition-all duration-300 ${isOpen ? 'text-[#4B4EFC] dark:text-[#6c6efc] scale-110' : 'text-gray-600 dark:text-zinc-400'}` };
  switch(name) {
    case 'Services': return <Layers {...props} />;
    case 'Ecosystem': return <Cpu {...props} />;
    case 'Solutions': return <Sparkles {...props} />;
    case 'VS Comparisons': return <Scale {...props} />;
    case 'Industries': return <Activity {...props} />;
    case 'Roles': return <Users {...props} />;
    case 'Company Core': return <Compass {...props} />;
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
      {/* Centered Modal Dialogue Overlay (No blur as requested) */}
      <div 
        onClick={() => setIsExploreOpen(false)}
        onTouchStart={() => setIsExploreOpen(false)}
        className={`fixed inset-0 bg-black/45 flex items-center justify-center p-4 z-[99998] transition-all duration-300 cursor-pointer ${
          isExploreOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Dialogue Box container */}
        <div 
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className={`relative bg-white/95 dark:bg-zinc-950/95 border border-gray-200/50 dark:border-zinc-800/60 rounded-[2rem] w-full max-w-lg max-h-[75vh] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform cursor-default ${
            isExploreOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-zinc-800/60 bg-white/50 dark:bg-black/50 backdrop-blur shrink-0">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Explore Docdril™</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Sitemap &amp; Ecosystem Explorer</span>
            </div>
            <button 
              onClick={() => setIsExploreOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
              title="Close Explorer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tree list content (sans-serif font matching site theme) */}
          <div className="flex-grow p-6 overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-2.5 font-sans text-sm select-none">
              {EXPLORE_TREE.map((folder) => {
                const isOpen = !!openFolders[folder.name];
                return (
                  <div key={folder.name} className="flex flex-col">
                    {/* Folder Row */}
                    <div 
                      onClick={() => toggleFolder(folder.name)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100/70 dark:hover:bg-zinc-900/60 cursor-pointer transition-all group border border-transparent hover:border-gray-200/30 dark:hover:border-zinc-800/30"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90 text-indigo-500 dark:text-indigo-400' : ''}`} />
                        {getFolderIcon(folder.name, isOpen)}
                        <span className="font-semibold text-gray-800 dark:text-gray-200 tracking-tight">{folder.name}</span>
                      </div>
                      <span className="text-[10px] bg-gray-100/80 dark:bg-zinc-900/80 text-gray-500 dark:text-gray-400 font-bold px-2 py-0.5 rounded-full group-hover:bg-[#4B4EFC] group-hover:text-white dark:group-hover:bg-[#6c6efc] transition-all">
                        {folder.children.length}
                      </span>
                    </div>

                    {/* Children Sub-tree */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col pl-9 ${
                        isOpen ? 'max-h-[500px] opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {folder.children.map((child) => (
                        <Link 
                          key={child.path} 
                          href={child.path}
                          onClick={handleLinkClick}
                          className="flex items-center gap-2.5 p-2 rounded-lg text-gray-600 dark:text-zinc-400 hover:bg-indigo-50/50 dark:hover:bg-zinc-900/40 hover:text-[#4B4EFC] dark:hover:text-[#818cf8] transition-all text-xs border border-transparent hover:border-indigo-100/50 dark:hover:border-zinc-800/40 font-medium"
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
