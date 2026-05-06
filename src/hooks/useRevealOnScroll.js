import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05 
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        const counter = entry.target.querySelector('.counter-value');
        
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          if (counter && !counter.classList.contains('animated')) {
            counter.classList.add('animated'); 
            const target = +counter.getAttribute('data-target');
            const duration = 2000; 
            const start = performance.now();
            
            const step = (currentTime) => {
              const progress = Math.min((currentTime - start) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 4);
              
              counter.textContent = Math.floor(ease * target);
              
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                counter.textContent = target + "+"; 
              }
            };
            requestAnimationFrame(step);
          }
          
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}
