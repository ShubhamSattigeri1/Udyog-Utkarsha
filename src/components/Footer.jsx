import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-white font-bold text-lg">
                {language === 'en' ? 'Udyog Utkarsh' : 'उद्योग उत्कर्ष'}
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              {language === 'en'
                ? 'Empowering communities through quality training and awareness programs.'
                : 'गुणवत्तेच्या प्रशिक्षण आणि जागरूकता कार्यक्रमांद्वारे समुदायाचा सशक्तिकरण.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">{t(language, 'quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  {t(language, 'home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  {t(language, 'aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="hover:text-blue-400 transition-colors">
                  {t(language, 'programmes')}
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-blue-400 transition-colors">
                  {t(language, 'publications')}
                </Link>
              </li>
              <li>
                <Link to="/verify-certificate" className="hover:text-blue-400 transition-colors">
                  {t(language, 'certifyVerify')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold mb-4">{t(language, 'contactUs')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                <span>{t(language, 'address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-blue-400"></i>
                <a href="tel:+91" className="hover:text-blue-400 transition-colors">
                  {t(language, 'phone')}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <a href="mailto:info@udyogutkarsh.org" className="hover:text-blue-400 transition-colors">
                  {t(language, 'email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">{t(language, 'followUs')}</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="text-sm">
              <p className="mb-2 font-semibold">
                {language === 'en' ? 'Subscribe to Newsletter' : 'समाचार पत्रिका सदस्यता घ्या'}
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={language === 'en' ? 'Your email' : 'आपली ईमेल'}
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-l border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-r">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Google Map - Embedded */}
        <div className="mb-8">
          <h4 className="text-white font-bold mb-4">
            {language === 'en' ? 'Find Us On Map' : 'नकाशावर आमच्याला शोधा'}
          </h4>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="250"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Wai,%20Satara,%20Maharashtra&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            &copy; {currentYear} {t(language, 'organizationName')}. {language === 'en' ? 'All Rights Reserved.' : 'सर्व अधिकार आरक्षित.'}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'गोपनीयता धोरण'}
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              {language === 'en' ? 'Terms & Conditions' : 'नियम व शर्ती'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
