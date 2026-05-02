import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { useForm } from '../hooks';
import { validateForm } from '../utils/validators';

export default function ContactForm() {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, setErrors) => {
    const errors = validateForm(values, ['name', 'email', 'phone', 'subject', 'message']);
    if (errors) {
      setErrors(errors);
      return;
    }

    try {
      console.log('Contact form submitted:', values);
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
      subject: '',
      message: ''
    },
    handleSubmit
  );

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: language === 'en' ? 'Registered Address' : 'पंजीकृत पता',
      content: 'Udyog Utkarsh Samajik Sanstha, Wai, Satara District, Maharashtra, India'
    },
    {
      icon: 'fa-building',
      title: language === 'en' ? 'Office Address' : 'कार्यालय पता',
      content: 'Udyog Utkarsh Samajik Sanstha, Wai, Satara District, Maharashtra, India'
    },
    {
      icon: 'fa-envelope',
      title: language === 'en' ? 'Email' : 'ईमेल',
      content: 'udyogutkarsh@gmail.com',
      href: 'mailto:udyogutkarsh@gmail.com'
    },
    {
      icon: 'fa-phone',
      title: language === 'en' ? 'Contact Numbers' : 'संपर्क संख्या',
      content: '8208305484 / 8655539506 / 9223319257',
      phones: ['8208305484', '8655539506', '9223319257']
    },
    {
      icon: 'fa-globe',
      title: language === 'en' ? 'Website' : 'वेबसाइट',
      content: 'https://www.udyogutkarsh.org.in',
      href: 'https://www.udyogutkarsh.org.in',
      target: '_blank'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="section-title text-4xl font-bold text-blue-900 mb-4">
            {language === 'en' ? 'Contact Us' : 'आमच्याशी संपर्क साधा'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'en'
              ? 'Get in touch with us for any queries or support'
              : 'किसी भी प्रश्न या सहायता के लिए हमसे संपर्क करें'}
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${info.icon} text-blue-600 text-lg`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.phones ? (
                    <div className="space-y-1">
                      {info.phones.map((phone, i) => (
                        <a
                          key={i}
                          href={`tel:+91${phone}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline block transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  ) : info.href ? (
                    <a
                      href={info.href}
                      target={info.target}
                      rel={info.target === '_blank' ? 'noopener noreferrer' : ''}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors break-all"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700">{info.content}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              {language === 'en' ? 'Send us a Message' : 'हमें संदेश भेजें'}
            </h2>

            {showSuccess && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-4 rounded-lg mb-6 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-2xl"></i>
                  <div>
                    <p className="font-bold">{language === 'en' ? 'Thank you!' : 'धन्यवाद!'}</p>
                    <p className="text-sm">{language === 'en' ? 'Your message has been received. We will get back to you soon.' : 'आपका संदेश प्राप्त हुआ है। हम शीघ्र ही आपसे संपर्क करेंगे।'}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {language === 'en' ? 'Full Name' : 'पूरा नाम'} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder={language === 'en' ? 'Your Name' : 'आपका नाम'}
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
                  {language === 'en' ? 'Phone Number' : 'फोन नंबर'} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder={language === 'en' ? '10-digit phone number' : '10 अंकों का फोन नंबर'}
                  className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {language === 'en' ? 'Subject' : 'विषय'} *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder={language === 'en' ? 'Subject' : 'विषय'}
                  className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {language === 'en' ? 'Message' : 'संदेश'} *
                </label>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder={language === 'en' ? 'Your message...' : 'आपका संदेश...'}
                  rows="5"
                  className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Error Message */}
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {errors.submit}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting 
                  ? (language === 'en' ? 'Sending...' : 'भेजा जा रहा है...')
                  : (language === 'en' ? 'Send Message' : 'संदेश भेजें')}
              </button>
            </form>
          </div>

          {/* Google Maps Embed */}
          <div className="card p-0 overflow-hidden">
            <div className="w-full h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.8405896898574!2d73.66970231433374!3d17.91880968298826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc54ef0cfcf0001%3A0x3e3c5e3c5e3c5e3c!2sWai%2C%20Satara%2C%20Maharashtra%20415410!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
