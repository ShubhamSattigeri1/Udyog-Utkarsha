import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';

export default function Programmes() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('training');

  const programmeCategories = [
    { id: 'college', name: 'College Training Programmes' },
    { id: 'inhouse', name: 'In house Training Programmes' },
    { id: 'offsite', name: 'Offsite Training Programmes' },
    { id: 'government', name: 'Government Training Programmes' },
    { id: 'awareness', name: 'Awareness Camps' },
    { id: 'social', name: 'Social Projects' },
    { id: 'other', name: 'Other Projects' },
  ];

  const upcomingPrograms = [
    {
      id: 1,
      title: 'Advanced Web Development',
      date: '2024-06-15',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Digital Marketing Workshop',
      date: '2024-07-01',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    },
  ];

  const completedPrograms = [
    {
      id: 1,
      title: 'Data Analytics Bootcamp',
      participants: '50+',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Entrepreneurship Development',
      participants: '100+',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="section-title text-4xl font-bold text-blue-900 mb-4">
            {language === 'en' ? 'Programmes' : 'कार्यक्रम'}
          </h1>
        </div>

        {/* Programme Categories Tabs */}
        <div className="mb-12">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              {language === 'en' ? 'Training Programmes Listed:' : 'सूचीबद्ध प्रशिक्षण कार्यक्रम:'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programmeCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`p-4 rounded-lg font-semibold transition-all text-left ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Awareness Programmes Section */}
        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            {language === 'en' ? 'Awareness Programmes' : 'जागरूकता कार्यक्रम'}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              We create awareness for various causes in the society. Some of the causes are Entrepreneurship Development, Organic farming, Agro Tourism, Tree plantation, Youth awareness camps, Government subsidy awareness camps, Waste management, Blood donation camps etc. The biggest awareness campaign carried in 2020 by us is Online Covid 19 Awareness Campaign 2020. People all over Maharashtra are participating in this campaign & we are appealing them to donate generously to the Chief Ministers Relief Fund Covid 19. People are also pledging for following the guidelines issued by the government.
            </p>
          </div>
        </div>

        {/* Upcoming Training Programmes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            {language === 'en' ? 'Our Upcoming Training Programmes' : 'आमचे आगामी प्रशिक्षण कार्यक्रम'}
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-dashed border-blue-300 text-center mb-8">
            <div className="flex items-center justify-center gap-4 text-blue-700">
              <i className="fas fa-images text-4xl"></i>
              <div>
                <p className="font-semibold text-lg">{language === 'en' ? 'Photos of Our Upcoming Training Programmes' : 'आमच्या आगामी प्रशिक्षण कार्यक्रमांची फोटोज'}</p>
                <p className="text-sm">{language === 'en' ? 'Landscape (Dynamic - Slideshow)' : 'परिदृश्य (गतिशील - स्लाइडशो)'}</p>
                <p className="text-xs mt-2 italic">{language === 'en' ? 'Editable from Control Panel' : 'नियंत्रण पैनलमधून संपादन करण्यायोग्य'}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingPrograms.map((program) => (
              <div key={program.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600">
                    <i className="fas fa-calendar"></i>
                    <span>{program.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Training Programmes */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            {language === 'en' ? 'Photos of Our Finished Training Programmes' : 'आमच्या पूर्ण झालेल्या प्रशिक्षण कार्यक्रमांची फोटोज'}
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border-2 border-dashed border-green-300 text-center mb-8">
            <div className="flex items-center justify-center gap-4 text-green-700">
              <i className="fas fa-images text-4xl"></i>
              <div>
                <p className="font-semibold text-lg">{language === 'en' ? 'Photos of Our Finished Training Programmes' : 'आमच्या पूर्ण झालेल्या प्रशिक्षण कार्यक्रमांची फोटोज'}</p>
                <p className="text-sm">{language === 'en' ? 'Landscape (Dynamic – Slideshow)' : 'परिदृश्य (गतिशील - स्लाइडशो)'}</p>
                <p className="text-xs mt-2 italic">{language === 'en' ? 'Editable from Control Panel' : 'नियंत्रण पैनलमधून संपादन करण्यायोग्य'}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedPrograms.map((program) => (
              <div key={program.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-center gap-2 text-green-600">
                    <i className="fas fa-users"></i>
                    <span>{program.participants} {language === 'en' ? 'Participants' : 'सहभागी'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
