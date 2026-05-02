import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [activeTab, setActiveTab] = useState('sliders');
  const [uploadMessage, setUploadMessage] = useState('');

  // Mock authentication
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginPassword === 'admin123') { // Change this to a secure password
      setIsAuthenticated(true);
      setLoginPassword('');
      setUploadMessage('');
    } else {
      setUploadMessage('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="card p-8 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t(language, 'admin')} {language === 'en' ? 'Login' : 'लॉगिन'}
            </h1>
            <p className="text-gray-600">
              {language === 'en' ? 'Admin Control Panel' : 'प्रशासन नियंत्रण पैनल'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Password' : 'पासवर्ड'}
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="form-input"
                placeholder="Enter admin password"
              />
            </div>

            {uploadMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {uploadMessage}
              </div>
            )}

            <button type="submit" className="w-full btn-primary">
              {language === 'en' ? 'Login' : 'लॉगिन'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full btn-outline"
            >
              {t(language, 'cancel')}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700 text-center">
              {language === 'en'
                ? 'Demo: Use password "admin123" to login'
                : 'डेमो: लॉगिन करण्यासाठी पासवर्ड "admin123" वापरा'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard - Main Content
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container-fluid py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Admin Dashboard' : 'प्रशासन डैशबोर्ड'}
            </h1>
            <p className="text-gray-600">
              {language === 'en' ? 'Manage website content' : 'वेबसाइट सामग्री व्यवस्थापित करा'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            {language === 'en' ? 'Logout' : 'लॉगआउट'}
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-6 border-b">
          <div className="flex flex-wrap gap-2 p-4">
            {[
              { id: 'sliders', label: language === 'en' ? 'Manage Sliders' : 'स्लाइडर व्यवस्थापित करा', icon: 'images' },
              { id: 'news', label: language === 'en' ? 'News & Updates' : 'समाचार व अपडेट्स', icon: 'newspaper' },
              { id: 'stories', label: language === 'en' ? 'Success Stories' : 'यशस्वी कहानी', icon: 'star' },
              { id: 'pdfs', label: language === 'en' ? 'Upload PDFs' : 'PDF अपलोड करा', icon: 'file-pdf' },
              { id: 'certificates', label: language === 'en' ? 'Manage Certificates' : 'प्रमाणपत्र व्यवस्थापित करा', icon: 'certificate' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`fas fa-${tab.icon}`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="card p-8">
          {activeTab === 'sliders' && (
            <SliderManagement language={language} t={t} />
          )}
          {activeTab === 'news' && (
            <NewsManagement language={language} t={t} />
          )}
          {activeTab === 'stories' && (
            <StoriesManagement language={language} t={t} />
          )}
          {activeTab === 'pdfs' && (
            <PDFManagement language={language} t={t} />
          )}
          {activeTab === 'certificates' && (
            <CertificateManagement language={language} t={t} />
          )}
        </div>
      </div>
    </div>
  );
}

// Slider Management Component
function SliderManagement({ language, t }) {
  const [sliderType, setSliderType] = useState('upcoming');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {language === 'en' ? 'Manage Sliders' : 'स्लाइडर व्यवस्थापित करा'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {language === 'en' ? 'Slider Type' : 'स्लाइडर प्रकार'}
          </label>
          <select
            value={sliderType}
            onChange={(e) => setSliderType(e.target.value)}
            className="form-input"
          >
            <option value="upcoming">{language === 'en' ? 'Upcoming Training' : 'आगामी प्रशिक्षण'}</option>
            <option value="completed">{language === 'en' ? 'Completed Training' : 'पूर्ण प्रशिक्षण'}</option>
            <option value="awareness">{language === 'en' ? 'Awareness Programs' : 'जागरूकता कार्यक्रम'}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {language === 'en' ? 'Upload Image' : 'चित्र अपलोड करा'}
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-input"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t(language, 'search')} {language === 'en' ? 'Title' : 'शीर्षक'}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={language === 'en' ? 'Enter title' : 'शीर्षक दर्ज करा'}
            className="form-input"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {language === 'en' ? 'Description' : 'विवरण'}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={language === 'en' ? 'Enter description' : 'विवरण दर्ज करा'}
            rows="4"
            className="form-textarea"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button className="w-full btn-primary">
            {language === 'en' ? 'Upload Slider Image' : 'स्लाइडर चित्र अपलोड करा'}
          </button>
        </div>
      </div>

      {/* Existing Sliders List */}
      <div className="mt-8 border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Current Sliders' : 'वर्तमान स्लाइडर'}
        </h3>
        <div className="text-gray-600 text-center py-8">
          {language === 'en' ? 'No sliders uploaded yet' : 'अभी कोई स्लाइडर अपलोड नहीं किए गए'}
        </div>
      </div>
    </div>
  );
}

// News Management Component
function NewsManagement({ language, t }) {
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {language === 'en' ? 'Manage News & Updates' : 'समाचार व अपडेट्स व्यवस्थापित करा'}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
          placeholder={language === 'en' ? 'News Title' : 'समाचार शीर्षक'}
          className="form-input"
        />
        <textarea
          value={newsContent}
          onChange={(e) => setNewsContent(e.target.value)}
          placeholder={language === 'en' ? 'News Content' : 'समाचार सामग्री'}
          rows="6"
          className="form-textarea"
        ></textarea>
        <button className="w-full btn-primary">
          {language === 'en' ? 'Publish News' : 'समाचार प्रकाशित करा'}
        </button>
      </div>
    </div>
  );
}

// Stories Management Component
function StoriesManagement({ language, t }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {language === 'en' ? 'Manage Success Stories' : 'यशस्वी कहानी व्यवस्थापित करा'}
      </h2>
      <div className="text-gray-600 text-center py-8">
        {language === 'en' ? 'Success stories management coming soon' : 'सफलता की कहानियां प्रबंधन जल्द आ रहा है'}
      </div>
    </div>
  );
}

// PDF Management Component
function PDFManagement({ language, t }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {language === 'en' ? 'Upload PDFs' : 'PDF अपलोड करा'}
      </h2>
      <div className="space-y-4">
        <input
          type="file"
          accept=".pdf"
          className="form-input"
        />
        <button className="w-full btn-primary">
          {language === 'en' ? 'Upload PDF' : 'PDF अपलोड करा'}
        </button>
      </div>
    </div>
  );
}

// Certificate Management Component
function CertificateManagement({ language, t }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {language === 'en' ? 'Manage Certificates' : 'प्रमाणपत्र व्यवस्थापित करा'}
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder={language === 'en' ? 'Certificate Number' : 'प्रमाणपत्र क्रमांक'}
          className="form-input"
        />
        <input
          type="text"
          placeholder={language === 'en' ? 'Candidate Name' : 'उमेदवार का नाम'}
          className="form-input"
        />
        <input
          type="text"
          placeholder={language === 'en' ? 'Course Name' : 'अभ्यासक्रम का नाम'}
          className="form-input"
        />
        <input
          type="file"
          accept=".pdf"
          placeholder={language === 'en' ? 'Certificate PDF' : 'प्रमाणपत्र PDF'}
          className="form-input"
        />
        <button className="w-full btn-primary">
          {language === 'en' ? 'Add Certificate' : 'प्रमाणपत्र जोड़ें'}
        </button>
      </div>
    </div>
  );
}
