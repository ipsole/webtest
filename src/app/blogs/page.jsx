'use client';

export default function BlogsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-24 md:pt-32">
            <header className="max-w-4xl fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="mb-4 md:mb-6">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium">Insights</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black dark:text-white mb-5 md:mb-8 leading-[1.1]">
                    Our <span className="text-zinc-400">Journal</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mb-12">
                    Thoughts, strategies, and case studies on creative technology and automation.
                </p>
                <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-3xl bg-gray-50 dark:bg-[#0a0a0a]">
                    <p className="text-gray-500 dark:text-gray-400">Articles coming soon.</p>
                </div>
            </header>
        </main>
    );
}
