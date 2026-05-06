const fs = require('fs');
const files = [
  'src/pages/Home.jsx',
  'src/components/Header.jsx',
  'src/components/Modals.jsx',
  'src/components/Footer.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/frameborder=/g, 'frameBorder=');
  content = content.replace(/stroke-linecap=/g, 'strokeLinecap=');
  content = content.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  content = content.replace(/stroke-width=/g, 'strokeWidth=');
  content = content.replace(/fill-rule=/g, 'fillRule=');
  content = content.replace(/clip-rule=/g, 'clipRule=');
  content = content.replace(/class=/g, 'className=');
  fs.writeFileSync(file, content);
});
console.log('Fixed JSX casing');
