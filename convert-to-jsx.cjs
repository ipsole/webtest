const fs = require('fs');

const html = fs.readFileSync('legacy_html/index.html', 'utf8');

// Extract the main content between <main> and </main>
const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (!match) {
  console.log("Could not find <main>");
  process.exit(1);
}

let mainContent = match[1];

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
    // Very rudimentary style to object converter for animation-delay and transition-delay
    const styles = p1.split(';').filter(s => s.trim()).map(s => {
      const [key, value] = s.split(':').map(str => str.trim());
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${camelKey}: '${value}'`;
    });
    return `style={{ ${styles.join(', ')} }}`;
  })
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}'); // convert HTML comments to JSX comments

const jsx = `import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const showInfoModal = (id, title, desc) => {
    alert(title + ": " + desc); // Temp implementation
  };

  return (
    <main className="flex-grow pt-24 relative">
      ${mainContent}
    </main>
  );
}
`;

fs.writeFileSync('src/pages/Home.jsx', jsx);
console.log("Generated src/pages/Home.jsx");
