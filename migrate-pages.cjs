const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

const files = glob.sync('legacy_html/**/index.html').filter(f => f !== 'legacy_html/index.html');

let routesConfig = [];

files.forEach(file => {
    let dirPath = path.dirname(file).replace('legacy_html', '');
    if (dirPath === '') dirPath = '/';
    
    let componentName = dirPath.split('/')
        .filter(p => p)
        .map(p => p.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(''))
        .join('');
    
    if (componentName === '') componentName = 'Home';
    
    const outPath = `src/pages/${componentName}.jsx`;
    routesConfig.push({
        path: dirPath,
        componentName: componentName,
        importPath: `./pages/${componentName}`
    });
    
    let content = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(content);
    
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href && !href.startsWith('http') && !href.startsWith('mailto:')) {
            let resolvedPath = path.resolve(dirPath, href);
            resolvedPath = resolvedPath.replace(/\/index\.html$/, '');
            if (resolvedPath === '') resolvedPath = '/';
            if (resolvedPath.endsWith('/')) resolvedPath = resolvedPath.slice(0, -1);
            if (resolvedPath === '') resolvedPath = '/';
            
            $(el).attr('to', resolvedPath);
            $(el).removeAttr('href');
            el.tagName = 'Link';
        }
    });
    
    $('img').each((i, el) => {
        let src = $(el).attr('src');
        if (src && !src.startsWith('http')) {
            let resolvedSrc = path.resolve(dirPath, src);
            $(el).attr('src', resolvedSrc);
        }
    });
    
    let mainHtml = $('main').html() || '';
    
    // First, fix self-closing tags
    mainHtml = mainHtml.replace(/<img([^>]+?)(?<!\/)>/gi, "<img$1 />");
    mainHtml = mainHtml.replace(/<input([^>]+?)(?<!\/)>/gi, "<input$1 />");
    mainHtml = mainHtml.replace(/<br([^>]*?)(?<!\/)>/gi, "<br$1 />");
    mainHtml = mainHtml.replace(/<hr([^>]*?)(?<!\/)>/gi, "<hr$1 />");

    // Convert attributes
    mainHtml = mainHtml.replace(/class=/g, 'className=');
    mainHtml = mainHtml.replace(/for=/g, 'htmlFor=');
    mainHtml = mainHtml.replace(/frameborder=/g, 'frameBorder=');
    mainHtml = mainHtml.replace(/stroke-linecap=/g, 'strokeLinecap=');
    mainHtml = mainHtml.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    mainHtml = mainHtml.replace(/stroke-width=/g, 'strokeWidth=');
    mainHtml = mainHtml.replace(/fill-rule=/g, 'fillRule=');
    mainHtml = mainHtml.replace(/clip-rule=/g, 'clipRule=');
    mainHtml = mainHtml.replace(/onclick=/g, 'onClick=');
    
    // Convert styles
    mainHtml = mainHtml.replace(/style="animation-delay:\s*([0-9.]+)s;?"/g, "style={{ animationDelay: '$1s' }}");
    
    // Convert onerror
    mainHtml = mainHtml.replace(/onerror="this\.style\.opacity='0'"/g, "onError={(e) => { e.target.style.opacity = '0'; }}");
    
    // Convert HTML comments to JSX comments
    mainHtml = mainHtml.replace(/<!--(.*?)-->/g, "{/*$1*/}");

    // Fix link closing tags
    mainHtml = mainHtml.replace(/<\/a>/g, "</Link>");
    mainHtml = mainHtml.replace(/<a /g, "<Link "); 

    const jsxCode = `/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useModal } from '../context/ModalContext';

export default function ${componentName}() {
    useRevealOnScroll();
    const { setInfoModal, setIsMouseLoopPaused, setIsChatbotOpen } = useModal();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-20">
            ${mainHtml}
        </main>
    );
}
`;

    fs.writeFileSync(outPath, jsxCode);
});

// Create Routes config JSON so we can easily inject it into App.jsx
fs.writeFileSync('routes-config.json', JSON.stringify(routesConfig, null, 2));
console.log('Re-generated all components with strict closing tags and eslint disable.');
