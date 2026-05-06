const fs = require('fs');

const lines = fs.readFileSync('legacy_html/index.html', 'utf8').split('\n');
const missingLines = lines.slice(807, 1187).join('\n'); // 808 to 1187

let mainContent = missingLines;

// Basic HTML to JSX conversions
mainContent = mainContent
  .replace(/class="/g, 'className="')
  .replace(/onclick="/g, 'onClick="')
  .replace(/for="/g, 'htmlFor="')
  .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
  .replace(/<source([^>]+[^\/])>/g, '<source$1 />')
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
  .replace(/style="([^"]*)"/g, (match, p1) => {
    const styles = p1.split(';').filter(s => s.trim()).map(s => {
      const [key, value] = s.split(':').map(str => str.trim());
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${camelKey}: '${value}'`;
    });
    return `style={{ ${styles.join(', ')} }}`;
  })
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}'); 

fs.writeFileSync('missing-sections.jsx', mainContent);
console.log("Extracted missing sections");
