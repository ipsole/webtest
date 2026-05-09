"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand & Newsletter */}
                <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white mb-4">Docdril</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        We are a creative-tech agency bridging the gap between high-end visual storytelling and intelligent automation.
                    </p>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Stay Updated</h4>
                    <form className="flex w-full gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                        <button type="submit" className="bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg px-4 py-2.5 text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">Join</button>
                    </form>
                </div>

                {/* Services */}
                <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Our Services</h4>
                    <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link href="/services/content-creation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Video Editing & VFX</Link></li>
                        <li><Link href="/services/ai-automation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">AI & Automation Setups</Link></li>
                        <li><Link href="/services/web-development" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web Development</Link></li>
                        <li><Link href="/services/branding-growth/brand-identity-design" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Brand Identity</Link></li>
                        <li><Link href="/services/branding-growth/social-media-management" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Social Media Strategy</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Company</h4>
                    <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
                        <li><Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</Link></li>
                        <li><Link href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</Link></li>
                        <li><Link href="/blogs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blogs</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
                        <li><Link href="/feedback" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">Feedback Form <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full">New</span></Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Legal</h4>
                    <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link href="/policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-service" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                        <li><Link href="/cookie-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
                        <li><Link href="/refund-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Refund Policy</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Docdril. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    Powered by <a href="https://os.docdril.com" className="font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Docdril OS</a>
                </p>
            </div>
        </div>
    </footer>
  );
}
