import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { useForm } from '../hooks';
import { validateForm } from '../utils/validators';

export default function JoinTeamForm() {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, setErrors) => {
    const errors = validateForm(values, ['fullName', 'email', 'phone', 'position']);
    if (errors) {
      setErrors(errors);
      return;
    }

    if (!values.resumeFile) {
      setErrors({ resumeFile: 'Resume is required' });
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
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      skills: '',
      resumeFile: null,
      coverLetter: ''
    },
    handleSubmit
  );

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="section-title">{t(language, 'joinTeam')}</h1>
          <p className="section-subtitle">
            {language === 'en'
              ? 'Be a part of our dedicated team and make an impact'
              : 'हमारी समर्पित टीम का हिस्सा बनें और प्रभाव डालें'}
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
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Full Name' : 'पूरा नाम'} *
              </label>
              <input
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Full Name' : 'पूरा नाम'}
                className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
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

            {/* Position */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Position Applied For' : 'जिस पद के लिए आवेदन कर रहे हैं'} *
              </label>
              <select
                name="position"
                value={values.position}
                onChange={handleChange}
                className={`form-input ${errors.position ? 'border-red-500' : ''}`}
              >
                <option value="">Select Position</option>
                <option value="trainer">Trainer</option>
                <option value="coordinator">Program Coordinator</option>
                <option value="admin">Administrative Staff</option>
                <option value="marketing">Marketing Executive</option>
              </select>
              {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
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

            {/* Skills */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Key Skills' : 'मुख्य कौशल'}
              </label>
              <input
                type="text"
                name="skills"
                value={values.skills}
                onChange={handleChange}
                placeholder={language === 'en' ? 'e.g., Teaching, Digital Marketing' : 'जैसे, शिक्षण, डिजिटल मार्केटिंग'}
                className="form-input"
              />
            </div>

            {/* Resume Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Upload Resume (PDF/DOC)' : 'रिज्यूमे अपलोड करें (PDF/DOC)'} *
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="resumeFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {errors.resumeFile && <p className="text-red-500 text-sm mt-1">{errors.resumeFile}</p>}
              <p className="text-gray-500 text-sm mt-1">Max file size: 5MB</p>
            </div>

            {/* Cover Letter */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Cover Letter' : 'कवर लेटर'}
              </label>
              <textarea
                name="coverLetter"
                value={values.coverLetter}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Tell us about yourself...' : 'अपने बारे में बताएं...'}
                rows="5"
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
