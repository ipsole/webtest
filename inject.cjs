const fs = require('fs');
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
let missing = fs.readFileSync('missing-sections.jsx', 'utf8');

// remove </main> from missing
missing = missing.replace('</main>', '');

home = home.replace('</main>', missing + '\n</main>');
fs.writeFileSync('src/pages/Home.jsx', home);
console.log('Injected');
