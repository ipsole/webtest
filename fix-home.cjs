const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

content = content.replace(/<a href="services\/content-creation\/index\.html"/g, '<Link to="/services/content-creation"');
content = content.replace(/<a href="services\/ai-automation\/index\.html"/g, '<Link to="/services/ai-automation"');
content = content.replace(/<a href="services\/web-development\/index\.html"/g, '<Link to="/services/web-development"');
content = content.replace(/<a href="services\/branding-growth\/index\.html"/g, '<Link to="/services/branding-growth"');
content = content.replace(/<a href="services\/index\.html"/g, '<Link to="/services"');

// Close the Link tags
// We can just replace </a> with </Link> but only for the internal ones.
// It's safer to just replace all </a> with </Link> and change all <a to <Link? No, external links MUST use <a>.
// Since we only replaced 5 links, let's fix their closing tags.
// This is fragile. Let's use regex to find these specific blocks.

content = content.replace(/<Link to="\/services\/content-creation"([^>]*)>([\s\S]*?)<\/a>/g, '<Link to="/services/content-creation"$1>$2</Link>');
content = content.replace(/<Link to="\/services\/ai-automation"([^>]*)>([\s\S]*?)<\/a>/g, '<Link to="/services/ai-automation"$1>$2</Link>');
content = content.replace(/<Link to="\/services\/web-development"([^>]*)>([\s\S]*?)<\/a>/g, '<Link to="/services/web-development"$1>$2</Link>');
content = content.replace(/<Link to="\/services\/branding-growth"([^>]*)>([\s\S]*?)<\/a>/g, '<Link to="/services/branding-growth"$1>$2</Link>');
content = content.replace(/<Link to="\/services"([^>]*)>([\s\S]*?)<\/a>/g, '<Link to="/services"$1>$2</Link>');

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Fixed Home.jsx links');
