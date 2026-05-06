import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full glass-blur border-t border-gray-100 dark:border-gray-800/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            &copy; 2025 Docdril. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/policy" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition duration-200">
              Privacy & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
