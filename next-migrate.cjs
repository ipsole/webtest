const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src/App.jsx');
const pagesDir = path.join(__dirname, 'src/pages');
const appDir = path.join(__dirname, 'src/app');

const appJsxContent = fs.readFileSync(appJsxPath, 'utf8');

// Find all routes: <Route path="/services" element={<Services />} />
const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}\s*\/>/g;
let match;

while ((match = routeRegex.exec(appJsxContent)) !== null) {
  const routePath = match[1];
  const componentName = match[2];
  
  // Find the file for this component
  const componentFilePath = path.join(pagesDir, `${componentName}.jsx`);
  if (!fs.existsSync(componentFilePath)) {
    console.log(`Warning: Component file not found for ${componentName}`);
    continue;
  }

  // Determine Next.js app directory path
  let nextAppPath;
  if (routePath === '/') {
    nextAppPath = appDir;
  } else {
    // routePath usually starts with /, e.g., /about -> about
    const cleanRoutePath = routePath.startsWith('/') ? routePath.slice(1) : routePath;
    nextAppPath = path.join(appDir, cleanRoutePath);
  }

  // Create directory if it doesn't exist
  fs.mkdirSync(nextAppPath, { recursive: true });

  // Destination path is page.jsx
  const destPath = path.join(nextAppPath, 'page.jsx');

  // Read the original file
  let content = fs.readFileSync(componentFilePath, 'utf8');

  // We need to fix imports from 'react-router-dom' to 'next/link'
  content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
  
  // If there are other imports from react-router-dom, warn about them
  if (content.includes('react-router-dom') && !content.includes("import Link from 'next/link'")) {
      console.log(`Warning: react-router-dom used in ${componentName} for something other than Link`);
  }
  
  // Since we moved it deeper into /app/, imports of components, context etc. that used ../ might be wrong.
  // We need to rewrite paths. Wait, the old ones were in /src/pages, so one level deep.
  // /src/pages/About.jsx -> /src/app/about/page.jsx (now 2 levels deep)
  // /src/pages/ServicesWebDevelopment.jsx -> /src/app/services/web-development/page.jsx (now 3 levels deep)
  
  // A simple way to fix relative paths is to use `@/` alias, but Next.js needs configuration for that.
  // Since Vite was used, did they use aliases? Let's check imports.
  // They usually import `../components/...`
  
  const depth = routePath === '/' ? 1 : routePath.split('/').filter(Boolean).length + 1;
  const relativePrefix = '../'.repeat(depth);
  
  content = content.replace(/from\s+['"]\.\.\/([^'"]+)['"]/g, `from '${relativePrefix}$1'`);
  content = content.replace(/from\s+['"]\.\/([^'"]+)['"]/g, `from '${relativePrefix}pages/$1'`); // if they imported anything from sibling in pages

  fs.writeFileSync(destPath, content);
  console.log(`Migrated ${componentName} to ${destPath}`);
}
