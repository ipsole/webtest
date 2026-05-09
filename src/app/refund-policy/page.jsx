'use client';

export default function RefundPolicyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-24 md:pt-32">
            <header className="max-w-4xl fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="mb-4 md:mb-6">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-medium">Legal</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black dark:text-white mb-5 md:mb-8 leading-[1.1]">
                    Refund <span className="text-zinc-400">Policy</span>
                </h1>
                
                <div className="prose prose-zinc dark:prose-invert max-w-none mt-12">
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Client satisfaction is our priority. Please read our refund policy carefully regarding project cancellations, revisions, and service deliverables.
                        Full details will be published here.
                    </p>
                </div>
            </header>
        </main>
    );
}
