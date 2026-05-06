const fs = require('fs');

const routes = JSON.parse(fs.readFileSync('routes-config.json', 'utf8'));

let imports = `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { ModalProvider } from './context/ModalContext';
`;

let routeElements = `            <Route path="/" element={<Home />} />\n`;

routes.forEach(r => {
    imports += `import ${r.componentName} from '${r.importPath}';\n`;
    routeElements += `            <Route path="${r.path}" element={<${r.componentName} />} />\n`;
});

const appCode = `${imports}
function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-gray-100 transition-colors duration-300">
          <Header />
          <Routes>
${routeElements}          </Routes>
          <Footer />
          <Modals />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
`;

fs.writeFileSync('src/App.jsx', appCode);
console.log('Updated App.jsx with all 40 routes.');
