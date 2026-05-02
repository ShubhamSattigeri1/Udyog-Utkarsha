import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { useForm } from '../hooks';
import { validateForm } from '../utils/validators';

export default function RequestTrainingForm() {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, setErrors) => {
    const errors = validateForm(values, ['organizationName', 'contactPerson', 'email', 'phone', 'trainingTopic', 'expectedDates']);
    if (errors) {
      setErrors(errors);
      return;
    }

    try {
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
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      trainingTopic: '',
      numberOfParticipants: '',
      expectedDates: '',
      requirements: '',
      budget: ''
    },
    handleSubmit
  );

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="section-title">{t(language, 'requestTraining')}</h1>
          <p className="section-subtitle">
            {language === 'en'
              ? 'Request a customized training program for your organization'
              : 'अपने संगठन के लिए एक अनुकूलित प्रशिक्षण कार्यक्रम का अनुरोध करें'}
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
            {/* Organization Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Organization Name' : 'संगठन का नाम'} *
              </label>
              <input
                type="text"
                name="organizationName"
                value={values.organizationName}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Your Organization' : 'आपका संगठन'}
                className={`form-input ${errors.organizationName ? 'border-red-500' : ''}`}
              />
              {errors.organizationName && <p className="text-red-500 text-sm mt-1">{errors.organizationName}</p>}
            </div>

            {/* Contact Person */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Contact Person' : 'संपर्क व्यक्ति'} *
              </label>
              <input
                type="text"
                name="contactPerson"
                value={values.contactPerson}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Full Name' : 'पूरा नाम'}
                className={`form-input ${errors.contactPerson ? 'border-red-500' : ''}`}
              />
              {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Email' : 'ईमेल'} *
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="email@organization.com"
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Phone' : 'फोन'} *
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

            {/* Training Topic */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Training Topic' : 'प्रशिक्षण विषय'} *
              </label>
              <input
                type="text"
                name="trainingTopic"
                value={values.trainingTopic}
                onChange={handleChange}
                placeholder={language === 'en' ? 'e.g., Digital Marketing, Entrepreneurship' : 'जैसे, डिजिटल मार्केटिंग, उद्यमशीलता'}
                className={`form-input ${errors.trainingTopic ? 'border-red-500' : ''}`}
              />
              {errors.trainingTopic && <p className="text-red-500 text-sm mt-1">{errors.trainingTopic}</p>}
            </div>

            {/* Number of Participants */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Expected Participants' : 'अपेक्षित प्रतिभागी'}
              </label>
              <input
                type="number"
                name="numberOfParticipants"
                value={values.numberOfParticipants}
                onChange={handleChange}
                placeholder="50"
                min="1"
                className="form-input"
              />
            </div>

            {/* Expected Dates */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Expected Dates' : 'अपेक्षित तारीखें'} *
              </label>
              <input
                type="text"
                name="expectedDates"
                value={values.expectedDates}
                onChange={handleChange}
                placeholder={language === 'en' ? 'e.g., June 2024' : 'जैसे, जून 2024'}
                className={`form-input ${errors.expectedDates ? 'border-red-500' : ''}`}
              />
              {errors.expectedDates && <p className="text-red-500 text-sm mt-1">{errors.expectedDates}</p>}
            </div>

            {/* Requirements */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Special Requirements' : 'विशेष आवश्यकताएं'}
              </label>
              <textarea
                name="requirements"
                value={values.requirements}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Any special requirements...' : 'कोई विशेष आवश्यकता...'}
                rows="3"
                className="form-textarea"
              ></textarea>
            </div>

            {/* Budget */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Budget Range' : 'बजट रेंज'}
              </label>
              <select
                name="budget"
                value={values.budget}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select Budget Range</option>
                <option value="10000-25000">₹10,000 - ₹25,000</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="100000+">₹1,00,000+</option>
              </select>
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
