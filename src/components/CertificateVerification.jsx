import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { verifyCertificate } from '../services/database';

export default function CertificateVerification() {
  const { language } = useLanguage();
  const [certificateNumber, setCertificateNumber] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!certificateNumber.trim() || !candidateName.trim()) {
      setError(t(language, 'required'));
      return;
    }

    setLoading(true);
    setError('');
    setCertificateData(null);

    try {
      const result = await verifyCertificate(certificateNumber, candidateName);
      
      if (result) {
        setCertificateData(result);
      } else {
        setError(t(language, 'certificateNotFound'));
      }
      setSearched(true);
    } catch (err) {
      setError(t(language, 'error') + ': ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCertificateNumber('');
    setCandidateName('');
    setCertificateData(null);
    setError('');
    setSearched(false);
  };

  const downloadCertificate = () => {
    if (certificateData?.certificateUrl) {
      const link = document.createElement('a');
      link.href = certificateData.certificateUrl;
      link.download = `${certificateData.candidateName}-certificate.pdf`;
      link.click();
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="section-title">{t(language, 'certificateVerification')}</h1>
            <p className="section-subtitle">
              {language === 'en' 
                ? 'Verify your training certificate by entering your certificate number and full name.'
                : 'आपले प्रशिक्षण प्रमाणपत्र सत्यापित करा आपले प्रमाणपत्र क्रमांक आणि पूर्ण नाव दर्ज करून.'}
            </p>
          </div>

          {/* Search Form */}
          <div className="card p-8 mb-8">
            <form onSubmit={handleSearch} className="space-y-6">
              {/* Certificate Number Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t(language, 'enterCertificateNumber')}
                </label>
                <input
                  type="text"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value.toUpperCase())}
                  placeholder="e.g., UUS-2024-001"
                  className="form-input"
                />
              </div>

              {/* Candidate Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t(language, 'enterFullName')}
                </label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder={language === 'en' ? 'Full Name' : 'पूर्ण नाव'}
                  className="form-input"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? t(language, 'loading') : t(language, 'search')}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 btn-outline"
                >
                  {t(language, 'cancel')}
                </button>
              </div>
            </form>
          </div>

          {/* Certificate Details - Success */}
          {certificateData && (
            <div className="card p-8 bg-green-50 border-2 border-green-200 animate-fadeIn">
              <div className="text-center mb-6">
                <div className="inline-block bg-green-500 text-white rounded-full p-3 mb-4">
                  <i className="fas fa-check text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  {t(language, 'certificateFound')}
                </h2>
              </div>

              <div className="bg-white p-6 rounded-lg mb-8 border-2 border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name of the Participant / Awarded to */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-1">
                      {language === 'en' 
                        ? 'Name of the Participant / Awarded to' 
                        : 'प्रतिभागीचे नाव / प्रदान केले गेले'}
                    </p>
                    <p className="text-lg font-bold text-gray-900">{certificateData.candidateName || 'N/A'}</p>
                  </div>

                  {/* Name of the Training Programme / Event */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-1">
                      {language === 'en' 
                        ? 'Name of the Training Programme / Event' 
                        : 'प्रशिक्षण कार्यक्रम / इव्हेंटचे नाव'}
                    </p>
                    <p className="text-lg font-bold text-gray-900">{certificateData.courseName || 'N/A'}</p>
                  </div>

                  {/* Prog. Duration or Participation Date */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-1">
                      {language === 'en' 
                        ? 'Prog. Duration or Participation Date' 
                        : 'कार्यक्रम अवधि किंवा सहभाग तारीख'}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {certificateData.issuedDate 
                        ? new Date(certificateData.issuedDate).toLocaleDateString()
                        : 'N/A'
                      }
                    </p>
                  </div>

                  {/* Program Conducted at / in Association with */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-1">
                      {language === 'en' 
                        ? 'Program Conducted at / in Association with' 
                        : 'कार्यक्रम संचालित केले / सहयोगात्मकतेत'}
                    </p>
                    <p className="text-lg font-bold text-gray-900">Udyog Utkarsh Samajik Sanstha</p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold mb-2">
                    {language === 'en' ? 'Certificate Number' : 'प्रमाणपत्र क्रमांक'}
                  </p>
                  <p className="text-gray-900 font-mono text-lg">{certificateData.certificateNumber}</p>
                </div>

                {/* Verify Certificate Text */}
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-yellow-800 text-sm italic">
                    [Paste full Verify Certificate text above]
                  </p>
                </div>
              </div>

              {/* Download Button */}
              {certificateData.certificateUrl && (
                <button
                  onClick={downloadCertificate}
                  className="w-full btn-secondary"
                >
                  <i className="fas fa-download mr-2"></i>
                  {t(language, 'downloadCertificate')}
                </button>
              )}

              {/* New Search Button */}
              <button
                onClick={handleReset}
                className="w-full mt-3 btn-outline"
              >
                {language === 'en' ? 'Search Another Certificate' : 'दुसरे प्रमाणपत्र शोधा'}
              </button>
            </div>
          )}

          {/* Certificate Not Found */}
          {searched && !certificateData && !error && (
            <div className="card p-8 bg-yellow-50 border-2 border-yellow-200 animate-fadeIn">
              <div className="text-center">
                <div className="inline-block bg-yellow-500 text-white rounded-full p-3 mb-4">
                  <i className="fas fa-info text-2xl"></i>
                </div>
                <p className="text-yellow-700 text-lg font-semibold mb-4">
                  {t(language, 'certificateNotFound')}
                </p>
                <p className="text-yellow-600 mb-6">
                  {language === 'en'
                    ? 'Please verify the certificate number and name, and try again.'
                    : 'कृपया प्रमाणपत्र क्रमांक आणि नाव सत्यापित करा आणि पुन्हा प्रयत्न करा.'}
                </p>
                <button
                  onClick={handleReset}
                  className="btn-primary"
                >
                  {t(language, 'search')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
