const fs = require('fs');
let lines = fs.readFileSync('src/pages/Home.jsx', 'utf8').split('\n');

const dupStart = lines.findIndex((l, i) => i > 400 && l.includes('id="why-us"'));
if (dupStart !== -1) {
  lines.splice(dupStart - 1, 381); // the injection was 380 lines
  fs.writeFileSync('src/pages/Home.jsx', lines.join('\n'));
  console.log('Fixed duplication');
} else {
  console.log('Not found');
}
