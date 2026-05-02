import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';

export default function Publications() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('publications');

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="section-title text-4xl font-bold text-blue-900 mb-4">
            {language === 'en' ? 'Publications' : 'प्रकाशने'}
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('publications')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'publications'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {language === 'en' ? 'OUR PUBLICATIONS' : 'आमचे प्रकाशने'}
            </button>
          </div>

          {/* Content Area */}
          <div className="card p-12 bg-white shadow-lg">
            {activeTab === 'publications' && (
              <div className="text-center">
                <div className="mb-8">
                  <i className="fas fa-book-open text-6xl text-blue-300 mb-4"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  {language === 'en' 
                    ? 'Our Publications' 
                    : 'आमचे प्रकाशने'}
                </h3>
                <p className="text-gray-600 text-lg">
                  {language === 'en'
                    ? 'Content to be updated later'
                    : 'सामग्री नंतर अपडेट केली जाईल'}
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700">
                    {language === 'en'
                      ? 'Check back soon for our latest publications, research papers, and articles.'
                      : 'आमचे नवीनतम प्रकाशन, संशोधन पत्र आणि लेखांसाठी लवकरच पुन्हा पहा.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
