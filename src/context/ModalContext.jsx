"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isAppPreviewOpen, setIsAppPreviewOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  
  // Info Modal state
  const [infoModal, setInfoModal] = useState({ isOpen: false, type: '', title: '', text: '' });
  
  // Global flag to pause the virtual mouse loop (used by Modals)
  const [isMouseLoopPaused, setIsMouseLoopPaused] = useState(false);

  // Close modals when pressing Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
        setIsAppPreviewOpen(false);
        setIsExploreOpen(false);
        setInfoModal({ ...infoModal, isOpen: false });
        setIsMouseLoopPaused(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [infoModal]);

  return (
    <ModalContext.Provider value={{
      isVideoModalOpen, setIsVideoModalOpen,
      isChatbotOpen, setIsChatbotOpen,
      isPortfolioOpen, setIsPortfolioOpen,
      isAppPreviewOpen, setIsAppPreviewOpen,
      isExploreOpen, setIsExploreOpen,
      infoModal, setInfoModal,
      isMouseLoopPaused, setIsMouseLoopPaused
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
