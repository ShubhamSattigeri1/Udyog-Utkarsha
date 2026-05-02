import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { useForm } from '../hooks';
import { validateForm, validateEmail } from '../utils/validators';

export default function DonationForm() {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, setErrors) => {
    const errors = {};
    
    if (!values.donorName || values.donorName.trim() === '') {
      errors.donorName = t(language, 'required');
    }
    if (!values.email || !validateEmail(values.email)) {
      errors.email = language === 'en' ? 'Valid email is required' : 'वैध ईमेल आवश्यक है';
    }
    if (!values.amount || parseFloat(values.amount) <= 0) {
      errors.amount = language === 'en' ? 'Please enter a valid amount' : 'कृपया एक वैध राशि दर्ज करें';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      // Process donation payment (integrate with payment gateway)
      console.log('Donation submitted:', values);
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
      donorName: '',
      email: '',
      phone: '',
      organization: '',
      amount: '',
      donationType: 'one-time',
      message: '',
      anonymous: false
    },
    handleSubmit
  );

  const predefinedAmounts = [500, 1000, 5000, 10000];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="section-title">{t(language, 'donateUs')}</h1>
          <p className="section-subtitle">
            {language === 'en'
              ? 'Your generous contribution helps us continue our mission'
              : 'आपका उदार योगदान हमें अपने मिशन को जारी रखने में मदद करता है'}
          </p>
        </div>

        {showSuccess && (
          <div className="card p-6 bg-green-50 border-2 border-green-200 mb-6 animate-fadeIn">
            <div className="flex items-center gap-3 text-green-700">
              <i className="fas fa-heart text-2xl"></i>
              <div>
                <p className="font-bold">{language === 'en' ? 'Thank You!' : 'धन्यवाद!'}</p>
                <p>{language === 'en'
                  ? 'Your donation has been received. We appreciate your support!'
                  : 'आपका दान प्राप्त हुआ है। हम आपके समर्थन की सराहना करते हैं!'}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="card p-8">
          {/* Donation Type */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              {language === 'en' ? 'Donation Type' : 'दान का प्रकार'}
            </label>
            <div className="flex gap-4">
              {['one-time', 'monthly'].map(type => (
                <label key={type} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="donationType"
                    value={type}
                    checked={values.donationType === type}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">
                    {type === 'one-time' 
                      ? (language === 'en' ? 'One-Time Donation' : 'एकबारी दान')
                      : (language === 'en' ? 'Monthly Donation' : 'मासिक दान')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              {language === 'en' ? 'Donation Amount (₹)' : 'दान की राशि (₹)'} *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {predefinedAmounts.map(amount => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleChange({ target: { name: 'amount', value: amount.toString() } })}
                  className={`p-3 border-2 rounded-lg font-semibold transition-all ${
                    values.amount === amount.toString()
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-blue-600'
                  }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            <input
              type="number"
              name="amount"
              value={values.amount}
              onChange={handleChange}
              placeholder={language === 'en' ? 'Enter custom amount' : 'कस्टम राशि दर्ज करें'}
              min="1"
              className={`form-input ${errors.amount ? 'border-red-500' : ''}`}
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Donor Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Full Name' : 'पूरा नाम'} *
              </label>
              <input
                type="text"
                name="donorName"
                value={values.donorName}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Full Name' : 'पूरा नाम'}
                className={`form-input ${errors.donorName ? 'border-red-500' : ''}`}
              />
              {errors.donorName && <p className="text-red-500 text-sm mt-1">{errors.donorName}</p>}
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
                {language === 'en' ? 'Phone (Optional)' : 'फोन (वैकल्पिक)'}
              </label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="form-input"
              />
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Organization (Optional)' : 'संगठन (वैकल्पिक)'}
              </label>
              <input
                type="text"
                name="organization"
                value={values.organization}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Organization Name' : 'संगठन का नाम'}
                className="form-input"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Message (Optional)' : 'संदेश (वैकल्पिक)'}
              </label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Leave a message...' : 'कोई संदेश छोड़ें...'}
                rows="3"
                className="form-textarea"
              ></textarea>
            </div>

            {/* Anonymous Donation */}
            <div className="md:col-span-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={values.anonymous}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="ml-2 text-gray-700">
                  {language === 'en'
                    ? 'Make this donation anonymous'
                    : 'इस दान को अनाम बनाएं'}
                </span>
              </label>
            </div>
          </div>

          {/* Impact Information */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              {language === 'en' ? 'Your Impact' : 'आपका प्रभाव'}
            </h3>
            {values.amount && (
              <p className="text-gray-700">
                {language === 'en'
                  ? `Your donation of ₹${values.amount} will help us train ${Math.floor(parseFloat(values.amount) / 100)} individuals and create meaningful impact.`
                  : `₹${values.amount} का आपका दान हमें ${Math.floor(parseFloat(values.amount) / 100)} व्यक्तियों को प्रशिक्षित करने और अर्थपूर्ण प्रभाव बनाने में मदद करेगा।`}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 btn-secondary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <i className="fas fa-heart mr-2"></i>
              {isSubmitting ? t(language, 'loading') : (language === 'en' ? 'Donate Now' : 'अभी दान करें')}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 btn-outline"
            >
              {t(language, 'cancel')}
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-700">
            <i className="fas fa-lock mr-2"></i>
            {language === 'en'
              ? 'Your payment information is secure and encrypted'
              : 'आपकी भुगतान जानकारी सुरक्षित और एन्क्रिप्ट की गई है'}
          </div>
        </form>
      </div>
    </div>
  );
}
