import './globals.css';
import { ModalProvider } from '../context/ModalContext';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modals from '../components/Modals';

export const metadata = {
  title: 'Docdril OS',
  description: 'Docdril Client Portal and Workspace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-gray-100 transition-colors duration-300 relative z-0">
        <AuthProvider>
          <ModalProvider>
            <Header />
            {children}
            <Footer />
            <Modals />
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
