import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { useForm } from '../hooks';
import { validateForm } from '../utils/validators';

export default function ConsultancyForm() {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, setErrors) => {
    const errors = validateForm(values, ['name', 'email', 'phone', 'consultancyType', 'description']);
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
      name: '',
      email: '',
      phone: '',
      consultancyType: '',
      organization: '',
      description: '',
      preferredTime: 'morning'
    },
    handleSubmit
  );

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="section-title">{t(language, 'consultancy')}</h1>
          <p className="section-subtitle">
            {language === 'en'
              ? 'Get expert consultancy services for your business needs'
              : 'अपनी व्यावसायिक आवश्यकताओं के लिए विशेषज्ञ परामर्श सेवाएं प्राप्त करें'}
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
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Full Name' : 'पूरा नाम'} *
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Full Name' : 'पूरा नाम'}
                className={`form-input ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                placeholder="email@example.com"
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

            {/* Organization */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Organization' : 'संगठन'}
              </label>
              <input
                type="text"
                name="organization"
                value={values.organization}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Your Organization' : 'आपका संगठन'}
                className="form-input"
              />
            </div>

            {/* Consultancy Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Type of Consultancy' : 'परामर्श का प्रकार'} *
              </label>
              <select
                name="consultancyType"
                value={values.consultancyType}
                onChange={handleChange}
                className={`form-input ${errors.consultancyType ? 'border-red-500' : ''}`}
              >
                <option value="">Select Type</option>
                <option value="skill-development">{language === 'en' ? 'Skill Development' : 'कौशल विकास'}</option>
                <option value="business-consulting">{language === 'en' ? 'Business Consulting' : 'व्यावसायिक परामर्श'}</option>
                <option value="hr-consulting">{language === 'en' ? 'HR Consulting' : 'HR परामर्श'}</option>
                <option value="training-design">{language === 'en' ? 'Training Program Design' : 'प्रशिक्षण कार्यक्रम डिज़ाइन'}</option>
                <option value="other">{language === 'en' ? 'Other' : 'अन्य'}</option>
              </select>
              {errors.consultancyType && <p className="text-red-500 text-sm mt-1">{errors.consultancyType}</p>}
            </div>

            {/* Preferred Time */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Preferred Contact Time' : 'पसंदीदा संपर्क समय'}
              </label>
              <select
                name="preferredTime"
                value={values.preferredTime}
                onChange={handleChange}
                className="form-input"
              >
                <option value="morning">{language === 'en' ? 'Morning (9 AM - 12 PM)' : 'सुबह (9 AM - 12 PM)'}</option>
                <option value="afternoon">{language === 'en' ? 'Afternoon (12 PM - 3 PM)' : 'दोपहर (12 PM - 3 PM)'}</option>
                <option value="evening">{language === 'en' ? 'Evening (3 PM - 6 PM)' : 'शाम (3 PM - 6 PM)'}</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Describe Your Needs' : 'अपनी आवश्यकताओं का वर्णन करें'} *
              </label>
              <textarea
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Please describe your consultancy needs in detail...' : 'कृपया अपनी परामर्श आवश्यकताओं का विस्तार से वर्णन करें...'}
                rows="5"
                className={`form-textarea ${errors.description ? 'border-red-500' : ''}`}
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
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
