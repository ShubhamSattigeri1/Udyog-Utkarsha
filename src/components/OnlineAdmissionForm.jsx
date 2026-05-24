import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { useForm } from '../hooks';
import { validateForm } from '../utils/validators';

export default function OnlineAdmissionForm() {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, setErrors) => {
    // Validation
    const errors = validateForm(values, ['firstName', 'lastName', 'email', 'phone', 'programme']);
    if (errors) {
      setErrors(errors);
      return;
    }

    try {
      // Submit to Firebase or backend
      console.log('Form submitted:', values);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        resetForm();
      }, 3000);
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit: onSubmit, resetForm } = useForm(
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      programme: '',
      educationLevel: '',
      experience: '',
      message: ''
    },
    handleSubmit
  );

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="section-title">{t(language, 'onlineAdmission')}</h1>
          <p className="section-subtitle">
            {language === 'en'
              ? 'Join our training programs and transform your skills'
              : 'आमच्या प्रशिक्षण कार्यक्रमात सामील व्हा आणि आपल्या कौशल्य रूपांतरित करा'}
          </p>
        </div>

        {showSuccess && (
          <div className="card p-6 bg-green-50 border-2 border-green-200 mb-6 animate-fadeIn">
            <div className="flex items-center gap-3 text-green-700">
              <i className="fas fa-check-circle text-2xl"></i>
              <div>
                <p className="font-bold">{t(language, 'success')}</p>
                <p>{t(language, 'thankYouMessage')}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'First Name' : 'पहला नाम'} *
              </label>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder={language === 'en' ? 'First Name' : 'पहला नाम'}
                className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Last Name' : 'अंतिम नाम'} *
              </label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Last Name' : 'अंतिम नाम'}
                className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Email Address' : 'ईमेल पता'} *
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Phone Number' : 'फोन नंबर'} *
              </label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Programme */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Select Programme' : 'कार्यक्रम चुनें'} *
              </label>
              <select
                name="programme"
                value={values.programme}
                onChange={handleChange}
                className={`form-input ${errors.programme ? 'border-red-500' : ''}`}
              >
                <option value="">{language === 'en' ? 'Select a programme' : 'एक कार्यक्रम चुनें'}</option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="entrepreneurship">Entrepreneurship Development</option>
                <option value="data-analytics">Data Analytics</option>
              </select>
              {errors.programme && <p className="text-red-500 text-sm mt-1">{errors.programme}</p>}
            </div>

            {/* Education Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Education Level' : 'शिक्षा स्तर'}
              </label>
              <select
                name="educationLevel"
                value={values.educationLevel}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select</option>
                <option value="10th">10th Pass</option>
                <option value="12th">12th Pass</option>
                <option value="diploma">Diploma</option>
                <option value="graduation">Bachelor's</option>
                <option value="masters">Master's</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Years of Experience' : 'अनुभव के वर्ष'}
              </label>
              <input
                type="number"
                name="experience"
                value={values.experience}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="form-input"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Additional Message' : 'अतिरिक्त संदेश'}
              </label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Any additional information...' : 'कोई अतिरिक्त जानकारी...'}
                rows="4"
                className="form-textarea"
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? t(language, 'loading') : t(language, 'submit')}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 btn-outline"
            >
              {t(language, 'cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
