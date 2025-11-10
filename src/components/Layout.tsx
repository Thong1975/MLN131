import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  TrendingUp, 
  Target, 
  FileText,
  Menu,
  X,
  Gamepad2
} from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Local Museum SVG icon component (used for the 'Bảo tàng' nav item)
  const Museum = ({ size = 18 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 10l9-6 9 6" />
      <path d="M21 10v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
      <path d="M8 10v6" />
      <path d="M12 10v6" />
      <path d="M16 10v6" />
    </svg>
  );

  const navigationItems = [
    { path: '/baotang', icon: Museum, label: 'Bảo tàng', external: 'https://www.artsteps.com/view/68fe2d4a085f14571657eccc/?currentUser' },
    { path: '/', icon: Home, label: 'Giới thiệu' },
    { path: '/theory', icon: BookOpen, label: 'Lý thuyết' },
    { path: '/changes', icon: TrendingUp, label: 'Biến đổi' },
    { path: '/direction', icon: Target, label: 'Phương hướng' },
    { path: '/games', icon: Gamepad2, label: 'Trò chơi' },
    { path: '/sources', icon: FileText, label: 'Nguồn' },
  // External museum link (opens Artsteps)
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative transition-colors duration-300">
      <ParticleBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-900 dark:text-white">MLN131</h1>
                <p className="text-xs text-gray-600 dark:text-gray-300">Gia đình & CNXH</p>
                {/* Museum link (opens Artsteps in a new tab) */}
                <a
                  href="https://www.artsteps.com/view/68fe2d4a085f14571657eccc/?currentUser"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mở bảo tàng ảo trên Artsteps (mở trong tab mới)"
                  className="text-sm text-primary-700 dark:text-primary-400 hover:underline mt-0.5 inline-block"
                >
                  Bảo tàng (Artsteps)
                </a>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isExternal = Boolean((item as any).external);
              const isActive = !isExternal && isActivePath(item.path);

              if (isExternal) {
                return (
                  <a
                    key={item.path}
                    href={(item as any).external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-1 transition-colors text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 transition-colors ${
                    isActive 
                      ? 'text-primary-700 dark:text-primary-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Dark Mode Toggle */}
          {/* <div className="hidden md:block">
            <DarkModeToggle />
          </div> */}

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary-900 dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4"
          >
            <nav className="container mx-auto px-4 flex flex-col space-y-3">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isExternal = Boolean((item as any).external);
                const isActive = !isExternal && isActivePath(item.path);

                if (isExternal) {
                  return (
                    <a
                      key={item.path}
                      href={(item as any).external}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 py-2 transition-colors text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-2 py-2 transition-colors ${
                      isActive 
                        ? 'text-primary-700 dark:text-primary-400 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
