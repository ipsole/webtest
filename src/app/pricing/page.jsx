export const metadata = {
  title: 'Pricing - Docdril',
  description: 'Detailed pricing for Docdril services',
};

export default function PricingPage() {
  return (
    <main className="w-full flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mt-12 mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Transparent Pricing List
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 fill-mode-both">
          Detailed, exhaustive pricing for all our individual creative and technical services will be published here soon. 
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-gray-200/60 dark:border-white/10 rounded-3xl p-8 md:p-16 shadow-xl text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
        <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pricing Table Under Construction</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          We are currently compiling our exhaustive list of services including Video Editing, Motion Graphics, and Web Development. Please check back shortly or request a custom quote.
        </p>
        <a href="/contact" className="inline-block bg-black text-white dark:bg-white dark:text-black font-bold py-3 px-8 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl">
          Request a Custom Quote
        </a>
      </div>
    </main>
  );
}
