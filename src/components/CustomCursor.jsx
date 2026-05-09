"use client";
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices — don't render custom cursor on them
    const isTouch = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select, label[for], .cursor-pointer, [data-cursor-text], [data-cursor-hover]');
      if (target) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text');
        setCursorText(text || '');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select, label[for], .cursor-pointer, [data-cursor-text], [data-cursor-hover]');
      if (target) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    // Animation loop — dot follows instantly, ring follows with elastic delay
    const animate = () => {
      // Dot: immediate follow (lerp 1.0) for zero lag like a hardware cursor
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 1.0;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 1.0;

      // Ring: extremely fast follow (lerp 0.85) to remove sluggishness
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.85;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.85;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* The Dot — small, solid, instant tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: isHovering ? '6px' : '8px',
          height: isHovering ? '6px' : '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--cursor-dot-color)',
          opacity: isVisible ? (isClicking ? 0.6 : 1) : 0,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, background-color 0.3s ease',
          willChange: 'transform',
        }}
      />

      {/* The Ring — larger, translucent, elastic delay */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          width: isHovering ? '64px' : '40px',
          height: isHovering ? '64px' : '40px',
          borderRadius: '50%',
          border: isHovering ? '1.5px solid var(--cursor-ring-hover-border)' : '1.5px solid var(--cursor-ring-border)',
          backgroundColor: isHovering ? 'rgba(128,128,128,0.06)' : 'transparent',
          opacity: isVisible ? (isClicking ? 0.4 : 1) : 0,
          transition: 'width 0.4s cubic-bezier(0.23,1,0.32,1), height 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
          willChange: 'transform',
        }}
      >
        {cursorText && (
          <span
            className="text-[10px] font-bold uppercase tracking-wider text-gray-900 dark:text-white select-none"
            style={{
              opacity: isHovering ? 1 : 0,
              transition: 'opacity 0.2s ease',
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
