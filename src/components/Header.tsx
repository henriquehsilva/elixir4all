import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-800 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            ElixirParaTod@s
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection('inicio')}
            className="nav-link font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('conteudo')}
            className="nav-link font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Conteúdo
          </button>
          <button
            onClick={() => scrollToSection('instrutor')}
            className="nav-link font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Instrutor
          </button>
          <button
            onClick={() => scrollToSection('inscricao')}
            className="nav-link font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Inscrição
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="nav-link font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('inicio')}
              className="py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('conteudo')}
              className="py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
            >
              Conteúdo
            </button>
            <button
              onClick={() => scrollToSection('instrutor')}
              className="py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
            >
              Instrutor
            </button>
            <button
              onClick={() => scrollToSection('inscricao')}
              className="py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
            >
              Inscrição
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;