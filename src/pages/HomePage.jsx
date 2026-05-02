import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';
import { getSliderImages, getSuccessStories, getTestimonials } from '../services/database';

export default function HomePage() {
  const { language } = useLanguage();
  const [upcomingSlider, setUpcomingSlider] = useState(0);
  const [completedSlider, setCompletedSlider] = useState(0);
  const [awarenessSlider, setAwarenessSlider] = useState(0);
  const [successStories, setSuccessStories] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data for sliders (Replace with Firebase data)
  const upcomingPrograms = [
    {
      id: 1,
      title: language === 'en' ? 'Advanced Web Development' : 'उन्नत वेब विकास',
      description: language === 'en' 
        ? 'Learn modern web technologies and best practices.' 
        : 'आधुनिक वेब तंत्रज्ञान आणि सर्वोत्तम प्रथा शिका.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      date: '2024-06-15'
    },
    {
      id: 2,
      title: language === 'en' ? 'Digital Marketing Workshop' : 'डिजिटल मार्केटिंग कार्यशाळा',
      description: language === 'en'
        ? 'Master digital marketing strategies and tools.'
        : 'डिजिटल मार्केटिंग रणनीती आणि साधने आयुष्य करा.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      date: '2024-07-01'
    }
  ];

  const completedPrograms = [
    {
      id: 1,
      title: language === 'en' ? 'Data Analytics Bootcamp' : 'डेटा विश्लेषण बूटकैंप',
      description: language === 'en'
        ? '50+ students completed successfully'
        : '50+ विद्यार्थी यशस्वीरित्या पूर्ण झाले',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      participants: '50+'
    },
    {
      id: 2,
      title: language === 'en' ? 'Entrepreneurship Development' : 'उद्यमशीलता विकास',
      description: language === 'en'
        ? '100+ entrepreneurs trained'
        : '100+ उद्यमी प्रशिक्षित',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      participants: '100+'
    }
  ];

  const awarenessPrograms = [
    {
      id: 1,
      title: language === 'en' ? 'Women Empowerment' : 'महिला सशक्तिकरण',
      description: language === 'en'
        ? 'Awareness about women rights and opportunities'
        : 'महिला अधिकार आणि अवसरांची जागरूकता',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d1aac34a5e?w=800&h=400&fit=crop',
      reach: '500+ women'
    },
    {
      id: 2,
      title: language === 'en' ? 'Environmental Conservation' : 'पर्यावरण संरक्षण',
      description: language === 'en'
        ? 'Community awareness on environmental issues'
        : 'पर्यावरणीय समस्यांची समुदाय जागरूकता',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop',
      reach: '1000+ people'
    }
  ];

  useEffect(() => {
    // Fetch data from Firebase
    const fetchData = async () => {
      try {
        // const stories = await getSuccessStories();
        // const testimonies = await getTestimonials();
        // setSuccessStories(stories);
        // setTestimonials(testimonies);
        
        // For now, using dummy data
        setSuccessStories([
          {
            id: 1,
            name: language === 'en' ? 'Raj Kumar' : 'राज कुमार',
            story: language === 'en'
              ? 'After completing the training program, I started my own digital marketing agency.'
              : 'प्रशिक्षण कार्यक्रम पूर्ण केल्यानंतर, मी माझे स्वतःचे डिजिटल मार्केटिंग एजन्सी सुरू केले.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
          },
          {
            id: 2,
            name: language === 'en' ? 'Priya Singh' : 'प्रिया सिंह',
            story: language === 'en'
              ? 'The entrepreneurship program helped me secure funding for my startup.'
              : 'उद्यमशीलता कार्यक्रमाने मला माझ्या स्टार्टअपसाठी निधि सुरक्षित करण्यास मदत केली.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
          }
        ]);

        setTestimonials([
          {
            id: 1,
            name: language === 'en' ? 'Amit Patel' : 'अमित पटेल',
            role: language === 'en' ? 'Web Developer' : 'वेब डेवलपर',
            testimonial: language === 'en'
              ? 'Excellent training quality and supportive mentors. Highly recommended!'
              : 'उत्कृष्ट प्रशिक्षण गुणवत्ता आणि सहायक प्रशिक्षक. अत्यंत शिफारस!',
            rating: 5
          },
          {
            id: 2,
            name: language === 'en' ? 'Neha Sharma' : 'नेहा शर्मा',
            role: language === 'en' ? 'Digital Marketer' : 'डिजिटल मार्केटर',
            testimonial: language === 'en'
              ? 'Life-changing experience. Great instructors and practical knowledge.'
              : 'जीवन बदलणारा अनुभव. अद्भुत प्रशिक्षक आणि व्यावहारिक ज्ञान.',
            rating: 5
          }
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  // Auto-rotate sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setUpcomingSlider((prev) => (prev + 1) % upcomingPrograms.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const SliderCard = ({ slides, activeIndex, setActiveIndex, title }) => {
    if (!slides || slides.length === 0) return null;
    const slide = slides[activeIndex];

    return (
      <div className="card overflow-hidden">
        {/* Image */}
        <div className="relative h-96 bg-gray-200 overflow-hidden">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{slide.title}</h3>
          <p className="text-gray-600 mb-4">{slide.description}</p>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>

          {/* Action Button */}
          <button className="w-full btn-primary">
            {language === 'en' ? 'Learn More' : 'अधिक जाणून घ्या'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-black flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center container-fluid">
          <h1 className="text-5xl font-bold mb-4 font-display">
            {t(language, 'welcomeTitle')}
          </h1>
          <p className="text-xl mb-8 opacity-90">
            {t(language, 'welcomeSubtitle')}
          </p>
          <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            {t(language, 'exploreMore')}
          </button>
        </div>
      </section>

      {/* Upcoming Programs Slider */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <h2 className="section-title text-center mb-12">
            {t(language, 'upcomingTraining')}
          </h2>
          <SliderCard
            slides={upcomingPrograms}
            activeIndex={upcomingSlider}
            setActiveIndex={setUpcomingSlider}
            title={t(language, 'upcomingTraining')}
          />
        </div>
      </section>

      {/* Completed Programs Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container-fluid">
          <h2 className="section-title text-center mb-12">
            {t(language, 'completedTraining')}
          </h2>
          <SliderCard
            slides={completedPrograms}
            activeIndex={completedSlider}
            setActiveIndex={setCompletedSlider}
            title={t(language, 'completedTraining')}
          />
        </div>
      </section>

      {/* Awareness Programs Slider */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <h2 className="section-title text-center mb-12">
            {t(language, 'awarenessPrograms')}
          </h2>
          <SliderCard
            slides={awarenessPrograms}
            activeIndex={awarenessSlider}
            setActiveIndex={setAwarenessSlider}
            title={t(language, 'awarenessPrograms')}
          />
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Founder"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="section-title mb-4">{t(language, 'founderMessage')}</h2>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Abhishek Ghagre</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Our mission is to empower every individual with quality skills and knowledge that will enable them to build a better future. Through our programs, we have impacted thousands of lives across the region.'
                  : 'आमचे उद्दिष्य प्रत्येक व्यक्तीला गुणवत्तेच्या कौशल्य आणि ज्ञानाने सशक्त करणे हे आहे जे त्यांना उत्तम भविष्य बनवण्यास सक्षम करेल. आमच्या कार्यक्रमांद्वारे, आम्ही संपूर्ण प्रदेशात हजारो जीवन प्रभावित केले आहेत.'}
              </p>
              <p className="text-gray-600 italic">
                {language === 'en' ? '- President & Founder' : '- अध्यक्ष व संस्थापक'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer's Message */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
                alt="Trainer"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h2 className="section-title mb-4">{t(language, 'trainerMessage')}</h2>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {language === 'en' ? 'Lead Trainer' : 'प्रमुख प्रशिक्षक'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Education is not just about transferring knowledge; it is about building confidence and creating leaders. Every trainee is unique, and we focus on personalized training that brings out their potential.'
                  : 'शिक्षा केवळ ज्ञान हस्तांतरण करणे नाही; हे आत्मविश्वास बनवणे आणि नेते तयार करणे आहे. प्रत्येक प्रशिक्षणार्थी अद्वितीय आहे, आणि आम्ही व्यक्तिगत प्रशिक्षणावर लक्ष केंद्रित करतो जे त्यांची संभाव्यता बाहेर आणते.'}
              </p>
              <p className="text-gray-600 italic">
                {language === 'en' ? '- Project Trainer' : '- प्रकल्प प्रशिक्षक'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {successStories.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-fluid">
            <h2 className="section-title text-center mb-12">
              {language === 'en' ? 'Success Stories' : 'यशस्वी कहानी'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map(story => (
                <div key={story.id} className="card p-6 flex gap-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-fluid">
            <h2 className="section-title text-center mb-12">
              {language === 'en' ? 'Testimonials' : 'प्रशंसापत्र'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="card p-6 border-l-4 border-blue-600">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-fluid text-center">
          <h2 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'Ready to Transform Your Career?' : 'आपले करिअर बदलण्यास तयार?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en'
              ? 'Join thousands of successful professionals who have transformed their lives.'
              : 'हजारो सफल व्यावसायिकांसह सामील व्हा जन्होंने त्यांचे जीवन रूपांतरित केले.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              {t(language, 'onlineAdmission')}
            </button>
            <button className="btn-secondary">
              {language === 'en' ? 'Request Training' : 'प्रशिक्षण विनंती करा'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
