const fs = require('fs');
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Add imports
if (!home.includes('useModal')) {
  home = home.replace("import { useState, useRef, useEffect } from 'react';", 
    "import { useState, useRef, useEffect } from 'react';\nimport { useModal } from '../context/ModalContext';\nimport { useRevealOnScroll } from '../hooks/useRevealOnScroll';");
}

// Add hooks
if (!home.includes('const { setIsChatbotOpen, setInfoModal } = useModal();')) {
  home = home.replace('export default function Home() {', 
    `export default function Home() {
  const { setIsChatbotOpen, setInfoModal, setIsMouseLoopPaused } = useModal();
  useRevealOnScroll();
  const [paymentMode, setPaymentMode] = useState('new');
  const [flippedCard, setFlippedCard] = useState(null);
`);
}

// Replace Payment Policy onClick="togglePayment('new')" with onClick={() => setPaymentMode('new')}
home = home.replace(/onClick="togglePayment\('new'\)"/g, "onClick={() => setPaymentMode('new')}");
home = home.replace(/onClick="togglePayment\('loyal'\)"/g, "onClick={() => setPaymentMode('loyal')}");

// Fix toggle UI classes using paymentMode
home = home.replace(
  /<div id="toggle-slider" className="absolute top-1 bottom-1 w-\[calc\(50%-4px\)\] bg-white dark:bg-gray-700 rounded-full shadow-sm transition-all duration-300 ease-out z-0 left-1"><\/div>/,
  `<div className={\`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-gray-700 rounded-full shadow-sm transition-all duration-300 ease-out z-0 \${paymentMode === 'new' ? 'left-1' : 'left-[calc(50%+2px)]'}\`}></div>`
);

home = home.replace(
  /<button id="btn-new" className="relative z-10 flex-1 py-2 sm:py-3 text-\[12px\] sm:text-sm font-bold transition-colors duration-300 focus:outline-none text-gray-900 dark:text-white tracking-wide" onClick=\{..\} >New Clients<\/button>/,
  `<button className={\`relative z-10 flex-1 py-2 sm:py-3 text-[12px] sm:text-sm font-bold transition-colors duration-300 focus:outline-none tracking-wide \${paymentMode === 'new' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}\`} onClick={() => setPaymentMode('new')}>New Clients</button>`
);

home = home.replace(
  /<button id="btn-loyal" className="relative z-10 flex-1 py-2 sm:py-3 text-\[12px\] sm:text-sm font-bold transition-colors duration-300 focus:outline-none text-gray-400 dark:text-gray-500 tracking-wide" onClick=\{..\} >Loyal Clients<\/button>/,
  `<button className={\`relative z-10 flex-1 py-2 sm:py-3 text-[12px] sm:text-sm font-bold transition-colors duration-300 focus:outline-none tracking-wide \${paymentMode === 'loyal' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}\`} onClick={() => setPaymentMode('loyal')}>Loyal Clients</button>`
);

// Fix payment percentage
home = home.replace(
  /<div id="payment-pct" className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 transform scale-100 opacity-100 drop-shadow-sm">[\s]*20%[\s]*<\/div>/,
  `<div className={\`text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300 transform drop-shadow-sm \${paymentMode === 'new' ? 'from-violet-600 to-purple-600' : 'from-fuchsia-600 to-pink-600'}\`}>
    {paymentMode === 'new' ? '20%' : '15%'}
  </div>`
);

// Fix payment gradient line
home = home.replace(
  /<div id="payment-gradient-line" className="absolute top-0 left-0 w-full h-1\.5 sm:h-2 bg-gradient-to-r from-violet-500 to-purple-600 transition-colors duration-500"><\/div>/,
  `<div className={\`absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r transition-colors duration-500 \${paymentMode === 'new' ? 'from-violet-500 to-purple-600' : 'from-fuchsia-500 to-pink-600'}\`}></div>`
);

// Fix Modals
home = home.replace(
  /onclick="showInfoModal\('ideate', 'Creative Ideation', 'We start by understanding your vision and goals. Through deep research and brainstorming, we conceptualize unique angles that align with your brand identity and target audience.'\)"/g,
  "onClick={() => { setIsMouseLoopPaused(true); setInfoModal({ isOpen: true, type: 'ideate', title: 'Creative Ideation', text: 'We start by understanding your vision and goals. Through deep research and brainstorming, we conceptualize unique angles that align with your brand identity and target audience.' }); }}"
);

home = home.replace(
  /onclick="showInfoModal\('design', 'Strategic Design', 'Visuals matter. We craft compelling visual narratives using advanced color grading, dynamic motion graphics, and a psychology-driven approach to keep viewers hooked.'\)"/g,
  "onClick={() => { setIsMouseLoopPaused(true); setInfoModal({ isOpen: true, type: 'design', title: 'Strategic Design', text: 'Visuals matter. We craft compelling visual narratives using advanced color grading, dynamic motion graphics, and a psychology-driven approach to keep viewers hooked.' }); }}"
);

home = home.replace(
  /onclick="showInfoModal\('edit', 'Precision Editing', 'Our editors meticulously weave footage, audio, and effects together. We focus on pacing, retention metrics, and flawless execution to deliver cinema-grade quality.'\)"/g,
  "onClick={() => { setIsMouseLoopPaused(true); setInfoModal({ isOpen: true, type: 'edit', title: 'Precision Editing', text: 'Our editors meticulously weave footage, audio, and effects together. We focus on pacing, retention metrics, and flawless execution to deliver cinema-grade quality.' }); }}"
);

// Chatbot Trigger
home = home.replace(
  /id="chatbot-trigger" className="w-16 h-16/g,
  `onClick={(e) => { e.preventDefault(); setIsChatbotOpen(true); setIsMouseLoopPaused(true); }} className="w-16 h-16 cursor-pointer`
);

// Flip cards
home = home.replace(
  /<div className="scroll-zoom-wrapper group perspective-1000 min-w-\[75vw\] md:min-w-0 w-full h-\[250px\] md:h-\[400px\] cursor-pointer snap-center">/g,
  (match) => `<div className="scroll-zoom-wrapper group perspective-1000 min-w-[75vw] md:min-w-0 w-full h-[250px] md:h-[400px] cursor-pointer snap-center" onClick={() => setFlippedCard(flippedCard === 'card1' ? null : 'card1')}>`
);
// Make flippedCard state unique per card. I'll just regex replace each flip card to use index.
let cardIndex = 1;
home = home.replace(
  /onClick=\{\(\) => setFlippedCard\(flippedCard === 'card1' \? null : 'card1'\)\}/g,
  () => {
    const idx = cardIndex++;
    return `onClick={() => setFlippedCard(flippedCard === ${idx} ? null : ${idx})}`;
  }
);

let innerIndex = 1;
home = home.replace(
  /<div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-xl rounded-3xl">/g,
  () => {
    const idx = innerIndex++;
    return `<div className={\`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-xl rounded-3xl \${flippedCard === ${idx} ? 'is-flipped' : ''}\`}>`;
  }
);

// Robot bubble animation (Adding simple useEffect)
if (!home.includes('useEffect(() => { // Robot bubble')) {
  home = home.replace('export default function Home() {',
    `export default function Home() {
  const [robotBubbleText, setRobotBubbleText] = useState('');
  const [isTypingCursor, setIsTypingCursor] = useState(true);

  useEffect(() => { // Robot bubble
    const messages = ["Hi, folks!", "I'm Pluto.", "An AI Agent."];
    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let cycleCount = 0;
    const maxCycles = 2;
    let timeout;
    
    function typeLoop() {
      if (document.hidden) {
        timeout = setTimeout(typeLoop, 1000); 
        return;
      }
      const currentMsg = messages[msgIndex];
      
      if (isDeleting) {
        setRobotBubbleText(currentMsg.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setRobotBubbleText(currentMsg.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentMsg.length) {
        typeSpeed = 2000; 
        if (cycleCount >= maxCycles && msgIndex === 0) {
          setIsTypingCursor(false);
          return;
        }
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex++;
        if (msgIndex >= messages.length) {
          msgIndex = 0;
          cycleCount++;
        }
        typeSpeed = 500; 
      }
      timeout = setTimeout(typeLoop, typeSpeed);
    }
    timeout = setTimeout(typeLoop, 1000);
    return () => clearTimeout(timeout);
  }, []);
`
  );

  home = home.replace(
    /<div id="robot-bubble" className="absolute top-2 right-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium py-1\.5 px-3 rounded-2xl rounded-tr-none shadow-lg opacity-0 animate-fade-in-up typing-cursor" style=\{\{ animationDelay: '2s', animationFillMode: 'forwards' \}\}>/,
    `<div id="robot-bubble" className={\`absolute top-2 right-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium py-1.5 px-3 rounded-2xl rounded-tr-none shadow-lg opacity-0 animate-fade-in-up \${isTypingCursor ? 'typing-cursor' : ''}\`} style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>`
  );
  home = home.replace(
    />Hi, folks!<\/div>/,
    `>{robotBubbleText}</div>`
  );
}

fs.writeFileSync('src/pages/Home.jsx', home);
console.log('Refactored Home.jsx');
