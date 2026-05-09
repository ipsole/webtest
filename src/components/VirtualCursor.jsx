"use client";
import { useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext';

export default function VirtualCursor() {
  const { isMouseLoopPaused } = useModal();
  const [cursorStyle, setCursorStyle] = useState({ opacity: 0, top: 0, left: 0 });

  useEffect(() => {
    let currentIndex = 0;
    let moveCount = 0;
    const maxMoves = 21; 
    let cursorInterval;

    const moveCursor = () => {
      const buttons = [
        document.getElementById('btn-ideate'),
        document.getElementById('btn-design'),
        document.getElementById('btn-edit')
      ];

      if (moveCount >= maxMoves) {
        setCursorStyle(prev => ({ ...prev, opacity: 0 }));
        buttons.forEach(b => b?.classList.remove('sim-hover'));
        if (cursorInterval) clearInterval(cursorInterval);
        return;
      }

      if (isMouseLoopPaused) {
        setCursorStyle(prev => ({ ...prev, opacity: 0 }));
        return;
      }
      if (window.matchMedia('(hover: none)').matches) return;
      if (window.innerWidth <= 768) return; 

      const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      if(buttons[prevIndex]) buttons[prevIndex].classList.remove('sim-hover');

      const targetBtn = buttons[currentIndex];
      if (!targetBtn) return;

      const rect = targetBtn.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      if (rect.top >= -100 && rect.bottom <= window.innerHeight + 100) {
        setCursorStyle({
          opacity: 1,
          top: rect.top + scrollTop + rect.height / 2 + 15,
          left: rect.left + scrollLeft + rect.width / 2 + 15
        });
        
        setTimeout(() => {
          if(!isMouseLoopPaused) {
            targetBtn.classList.add('sim-hover');
          }
        }, 500);

        moveCount++;
      } else {
        setCursorStyle(prev => ({ ...prev, opacity: 0 }));
        buttons.forEach(b => b?.classList.remove('sim-hover'));
      }

      currentIndex = (currentIndex + 1) % buttons.length;
    };

    const timer1 = setTimeout(() => {
      moveCursor(); 
      cursorInterval = setInterval(moveCursor, 2500); 
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearInterval(cursorInterval);
    };
  }, [isMouseLoopPaused]);

  return (
    <div 
      className="text-black dark:text-white pointer-events-none fixed z-[90] transition-all duration-500"
      style={{ 
        opacity: cursorStyle.opacity, 
        top: cursorStyle.top, 
        left: cursorStyle.left,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <svg className="w-6 h-6 fill-current drop-shadow-md" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"></path>
      </svg>
    </div>
  );
}
