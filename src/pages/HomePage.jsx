import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CommonIntroBlock from '../components/CommonIntroBlock';
import useContentStore from '../store/contentStore';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';

export default function HomePage() {
  const { language } = useLanguage();
  const [sliderIndex, setSliderIndex] = useState(0);
  const homeContent = useContentStore((state) => state.homeContent || {});

  const defaultSliderImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop',
  ];

  const sliderImages = (homeContent.upcomingProgramsSlider && homeContent.upcomingProgramsSlider.length > 0)
    ? homeContent.upcomingProgramsSlider.map((img) => img.url)
    : defaultSliderImages;

  const handlePrev = () => setSliderIndex((s) => (s === 0 ? sliderImages.length - 1 : s - 1));
  const handleNext = () => setSliderIndex((s) => (s === sliderImages.length - 1 ? 0 : s + 1));

  return (
    <div className="min-h-screen">
      <CommonIntroBlock />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-600">
                  <p className="text-lg font-semibold">{t(language, 'welcomeTitle')}</p>
                  <p className="text-sm">{t(language, 'welcomeSubtitle')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img src={sliderImages[sliderIndex]} alt="slide" className="w-full h-full object-cover" />

                <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white">
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 right-3 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {sliderIndex + 1} / {sliderImages.length}
                </div>
              </div>

              <p className="text-center text-gray-600 mt-4 font-semibold">{t(language, 'upcomingTraining')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{t(language, 'founderMessage')}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Udyog Utkarsh Samajik Sanstha works to empower youth and entrepreneurs through practical training and awareness programmes.'
              : 'उद्योग उत्कर्ष समाजिक संस्था व्यावहारिक प्रशिक्षण आणि जागरूकता कार्यक्रमांद्वारे तरुण आणि उद्योजकांना सशक्त करण्यासाठी कार्य करते.'}
          </p>
        </div>
      </section>
    </div>
  );
}
