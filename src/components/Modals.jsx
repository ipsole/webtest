"use client";
import { useEffect, useRef, useState } from 'react';
import { useModal } from '../context/ModalContext';
import { X, RefreshCw, Layers } from 'lucide-react';

export default function Modals() {
  const {
    isVideoModalOpen, setIsVideoModalOpen,
    isChatbotOpen, setIsChatbotOpen,
    isPortfolioOpen, setIsPortfolioOpen,
    isAppPreviewOpen, setIsAppPreviewOpen,
    infoModal, setInfoModal,
    setIsMouseLoopPaused
  } = useModal();

  const iframeRef = useRef(null);
  const portfolioRef = useRef(null);

  // Close modals safely
  const closeVideo = () => {
    setIsVideoModalOpen(false);
    setIsMouseLoopPaused(false);
  };
  const closeChatbot = () => {
    setIsChatbotOpen(false);
    setIsMouseLoopPaused(false);
  };
  const closePortfolio = () => {
    setIsPortfolioOpen(false);
    setIsMouseLoopPaused(false);
  };
  const closeAppPreview = () => {
    setIsAppPreviewOpen(false);
    setIsMouseLoopPaused(false);
  };
  const closeInfoModal = () => {
    setInfoModal({ ...infoModal, isOpen: false });
    setIsMouseLoopPaused(false);
  };

  const reloadChatbot = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const reloadPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.src = portfolioRef.current.src;
    }
  };

  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout;
    if (infoModal.isOpen && infoModal.text) {
      setTypedText('');
      setIsTyping(true);
      let i = 0;
      const speed = 20;
      
      const typeWriter = () => {
        if (i < infoModal.text.length) {
          setTypedText(infoModal.text.substring(0, i + 1));
          i++;
          timeout = setTimeout(typeWriter, speed);
        } else {
          setIsTyping(false);
        }
      };
      
      timeout = setTimeout(typeWriter, 100);
    } else {
      setTypedText('');
      setIsTyping(false);
    }
    return () => clearTimeout(timeout);
  }, [infoModal.isOpen, infoModal.text]);

  const infoConfig = {
    ideate: { color: 'text-yellow-600', path: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    design: { color: 'text-rose-600', path: 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' },
    edit: { color: 'text-blue-700', path: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.452-2.452L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.452-2.452L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.452 2.452L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.452 2.452Z' }
  };
  
  const currentConfig = infoConfig[infoModal.type] || infoConfig['ideate'];

  return (
    <>
      {/* Video Modal Overlay */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isVideoModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={closeVideo}></div>
        <div className={`relative z-10 w-full max-w-md md:max-w-lg bg-black rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isVideoModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <button onClick={closeVideo} className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
            {isVideoModalOpen && (
              <iframe
                src="https://player.vimeo.com/video/1139672991?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Comp1"
              ></iframe>
            )}
          </div>
        </div>
      </div>

      {/* Chatbot Floating Window */}
      <div className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[9999] w-[90vw] sm:w-[400px] h-[600px] max-h-[75vh] bg-white dark:bg-black rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-500 transform ${isChatbotOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0 pointer-events-none'} overflow-hidden`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div>
              <span className="block font-bold text-gray-900 dark:text-white text-sm">Docdril AI</span>
              <span className="block text-xs text-gray-500">Online</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={reloadChatbot} className="p-2 text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800" title="Reload">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button onClick={closeChatbot} className="p-2 text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800" title="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {isChatbotOpen && (
          <iframe ref={iframeRef} src="https://ask.docdril.com" className="flex-grow w-full border-0 bg-gray-50 dark:bg-gray-900" allow="microphone;"></iframe>
        )}
      </div>

      {/* Portfolio Floating Window */}
      <div className={`fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-[9999] w-[90vw] sm:w-[500px] h-[600px] max-h-[75vh] bg-white dark:bg-black rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-500 transform ${isPortfolioOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0 pointer-events-none'} overflow-hidden`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Layers className="w-4 h-4 text-gray-900 dark:text-white" />
            </div>
            <div>
              <span className="block font-bold text-gray-900 dark:text-white text-sm">Portfolio</span>
              <a href="https://portfolio.docdril.com" target="_blank" rel="noopener noreferrer" className="block text-xs text-blue-500 hover:underline">Open in new tab</a>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={reloadPortfolio} className="p-2 text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800" title="Reload">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button onClick={closePortfolio} className="p-2 text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800" title="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {isPortfolioOpen && (
          <iframe ref={portfolioRef} src="https://portfolio.docdril.com" className="flex-grow w-full border-0 bg-gray-50 dark:bg-gray-900"></iframe>
        )}
      </div>

      {/* Docdril OS App Preview Floating Window */}
      <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 transition-all duration-500 ${isAppPreviewOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={closeAppPreview}></div>
        <div className={`relative w-full max-w-6xl h-[85vh] bg-white dark:bg-black rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden transform transition-all duration-500 ${isAppPreviewOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur z-10">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse mr-1.5"></span>
                APP
              </div>
              <div>
                <span className="block font-bold text-gray-900 dark:text-white text-sm sm:text-base">Docdril OS Preview</span>
                <a href="https://os.docdril.com" target="_blank" rel="noopener noreferrer" className="block text-xs text-blue-500 hover:text-blue-600 transition-colors">Explore full app &rarr;</a>
              </div>
            </div>
            <button onClick={closeAppPreview} className="p-2 text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:bg-gray-800" title="Close Preview">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-grow w-full bg-[#f3f4f6] dark:bg-[#09090b] p-4 sm:p-8 overflow-y-auto no-scrollbar relative">
              {/* Laptop Frame Mock */}
              <div className="w-full h-full min-h-[500px] bg-white dark:bg-black rounded-xl sm:rounded-2xl border-[4px] sm:border-[8px] border-gray-800 dark:border-gray-700 shadow-2xl overflow-hidden relative mx-auto max-w-5xl">
                {isAppPreviewOpen && (
                  <iframe src="https://os.docdril.com" className="absolute inset-0 w-full h-full border-0" title="Docdril OS Preview"></iframe>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <div className={`fixed inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-[100] transition-all duration-300 ${infoModal.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0" onClick={closeInfoModal}></div>
        <div className={`relative bg-white/90 dark:bg-black/90 backdrop-blur-3xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl transition-all duration-300 transform ${infoModal.isOpen ? 'scale-100' : 'scale-95'}`}>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/30 dark:bg-white/5 rounded-full blur-xl pointer-events-none"></div>
          
          <svg className={`w-12 h-12 mx-auto mb-4 ${currentConfig.color} drop-shadow-sm relative z-10`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={currentConfig.path} />
          </svg>

          <h3 className="text-xl font-outfit font-bold text-gray-900 dark:text-white mb-3 tracking-tight relative z-10">{infoModal.title}</h3>
          
          <p className={`text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed min-h-[80px] relative z-10 ${isTyping ? 'typing-cursor' : ''}`}>
            {typedText}
          </p>

          <button onClick={closeInfoModal} className="mt-6 px-6 py-2 bg-white/50 dark:bg-white/10 hover:bg-white dark:bg-black dark:hover:bg-white/20 border border-white/20 dark:border-white/10 rounded-full text-sm font-semibold text-gray-900 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md relative z-10">
            Close
          </button>
        </div>
      </div>
    </>
  );
}
