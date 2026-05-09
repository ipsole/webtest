const fs = require('fs');
const path = require('path');
const { globSync } = require('glob'); // package.json has glob 13.0.6

const files = globSync('src/**/*.jsx');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Replace react-router-dom Link import
    if (content.includes("from 'react-router-dom'")) {
        // Handle complex imports
        if (content.includes('useNavigate') || content.includes('Link')) {
            content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];?/g, (match, p1) => {
                let replacements = [];
                if (p1.includes('Link')) replacements.push("import Link from 'next/link';");
                if (p1.includes('useNavigate')) replacements.push("import { useRouter } from 'next/navigation';");
                if (p1.includes('useLocation')) replacements.push("import { usePathname } from 'next/navigation';");
                return replacements.join('\n');
            });
            modified = true;
        }
    }

    // Replace useNavigate with useRouter
    if (content.includes('useNavigate()')) {
        content = content.replace(/const\s+(\w+)\s*=\s*useNavigate\(\)/g, "const $1 = useRouter()");
        // Replace navigate(-1) with router.back()
        content = content.replace(/navigate\(\s*-1\s*\)/g, "router.back()");
        // Replace navigate('/path') with router.push('/path') - approximate
        content = content.replace(/navigate\((['"][^'"]+['"])\)/g, "router.push($1)");
        modified = true;
    }

    // Replace <Link to="..."> with <Link href="...">
    if (content.match(/<Link[^>]+to=/)) {
        content = content.replace(/(<Link[^>]+)to=/g, "$1href=");
        modified = true;
    }

    // Add "use client" if it uses hooks and doesn't have it
    const hooksRegex = /useState|useEffect|useRef|useContext|useRouter|usePathname|useModal|useRevealOnScroll/;
    if (hooksRegex.test(content) && !content.includes('"use client"') && !content.includes("'use client'")) {
        content = `"use client";\n` + content;
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Fixed ${file}`);
    }
});
