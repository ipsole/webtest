import React from 'react';

export default function FloatingBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[0] overflow-hidden">
            <style>
                {`
                @keyframes float-slow-1 {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(40px, -60px) scale(1.1); }
                    66% { transform: translate(-30px, 30px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes float-slow-2 {
                    0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
                    50% { transform: translate(-50px, 80px) scale(1.15) rotate(180deg); }
                    100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
                }
                @keyframes float-slow-3 {
                    0% { transform: translate(0px, 0px) scale(1); }
                    50% { transform: translate(60px, 50px) scale(0.85); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                `}
            </style>
            
            {/* Soft Blue Orb */}
            <div 
                className="absolute w-[40rem] h-[40rem] rounded-full blur-[100px] bg-blue-400/5 dark:bg-blue-600/10 mix-blend-multiply dark:mix-blend-screen"
                style={{ top: '5%', left: '-10%', animation: 'float-slow-1 25s infinite ease-in-out' }}
            ></div>

            {/* Soft Purple/Red Orb */}
            <div 
                className="absolute w-[35rem] h-[35rem] rounded-full blur-[100px] bg-purple-400/5 dark:bg-purple-600/10 mix-blend-multiply dark:mix-blend-screen"
                style={{ top: '40%', right: '-5%', animation: 'float-slow-2 30s infinite ease-in-out' }}
            ></div>

            {/* Subtle Frosted Ring Outline */}
            <div 
                className="absolute w-[30rem] h-[30rem] rounded-full border-[1px] border-gray-900/5 dark:border-white/5 backdrop-blur-[2px]"
                style={{ bottom: '-10%', left: '20%', animation: 'float-slow-3 35s infinite ease-in-out' }}
            ></div>
            
            {/* Extra Sky Blue Orb for lower section */}
            <div 
                className="absolute w-[25rem] h-[25rem] rounded-full blur-[100px] bg-sky-400/5 dark:bg-sky-600/10 mix-blend-multiply dark:mix-blend-screen"
                style={{ bottom: '15%', right: '15%', animation: 'float-slow-1 28s infinite ease-in-out reverse' }}
            ></div>
        </div>
    );
}
