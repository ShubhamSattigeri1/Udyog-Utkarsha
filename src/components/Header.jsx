import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { Link } from 'react-router-dom';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'aboutUs', path: '/about' },
    { key: 'programmes', path: '/programmes' },
    { key: 'publications', path: '/publications' },
    { key: 'certifyVerify', path: '/verify-certificate' },
    { key: 'contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - ISO & Language */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="container-fluid flex justify-between items-center">
          <p className="text-sm">
            <i className="fas fa-award mr-2"></i>
            {language === 'en' 
              ? 'ISO 9001:2015 Certified Organization' 
              : 'ISO 9001:2015 प्रमाणित संस्था'}
          </p>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 bg-blue-700 rounded hover:bg-blue-600 transition-colors"
          >
            <i className="fas fa-globe"></i>
            {language === 'en' ? 'हिंदी / मराठी' : 'English'}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-fluid px-6">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Logo & Organization Name */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-blue-900">
                  {t(language, 'organizationName')}
                </h1>
                <p className="text-xs text-gray-600">
                  {language === 'en' 
                    ? 'Skill Development & Awareness' 
                    : 'कौशल विकास व जागरूकता'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {navItems.map(item => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap"
                >
                  {t(language, item.key)}
                </Link>
              ))}
            </nav>

            {/* Right Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <i className="fas fa-globe text-sm"></i>
                <span className="text-xs font-semibold">
                  {language === 'en' ? 'मराठी' : 'English'}
                </span>
              </button>
              <Link
                to="/admin"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <i className="fas fa-user-shield mr-2"></i>
                {t(language, 'admin')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600"
            >
              <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-gray-200 pt-4 space-y-3">
              {navItems.map(item => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  {t(language, item.key)}
                </Link>
              ))}
              <hr className="my-3" />
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-semibold"
                >
                  {language === 'en' ? 'मराठी' : 'English'}
                </button>
                <Link
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {t(language, 'admin')}
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
