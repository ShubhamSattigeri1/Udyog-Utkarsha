import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="section-title text-4xl font-bold text-blue-900 mb-4">
            {language === 'en' ? 'About Us' : 'आमच्याबद्दल'}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Udyog Utkarsh Samajik Sanstha is a registered autonomous NGO working for holistic social and economic development through skill building, entrepreneurship guidance, and self-employment training across Maharashtra.'
              : 'उद्योग उत्कर्ष सामाजिक संस्था ही महाराष्ट्रभर कौशल्य विकास, उद्योजकता मार्गदर्शन आणि स्वरोजगार प्रशिक्षणाद्वारे सर्वांगीण सामाजिक आणि आर्थिक विकासासाठी कार्यरत एक नोंदणीकृत स्वायत्त स्वयंसेवी संस्था आहे.'}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section 1: Organization Overview */}
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{language === 'en' ? 'About the Organization' : 'संस्थेबद्दल'}</h2>
              <p className="mb-6">
                {language === 'en'
                  ? 'Udyog Utkarsh Samajik Sanstha is a registered autonomous non-governmental organization dedicated to driving social and economic development through skill-building, corporate training, and entrepreneurship enablement across Maharashtra.'
                  : 'उद्योग उत्कर्ष सामाजिक संस्था ही महाराष्ट्रातील कौशल्य विकास, कॉर्पोरेट प्रशिक्षण आणि उद्योजकता सक्षमतेद्वारे सामाजिक आणि आर्थिक विकास घडवण्यासाठी समर्पित एक नोंदणीकृत स्वायत्त स्वयंसेवी संस्था आहे.'}
              </p>

              <p className="font-semibold text-blue-900 mb-4">{language === 'en' ? 'Our Motto:' : 'आपला म्हण'} {language === 'en' ? 'Holistic industrial development is our ultimate obsession.' : 'उद्योगाचा सर्वांगीण विकास हाच आमचा ध्यास.'}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-800">{language === 'en' ? 'Legal Registrations & Accreditations' : 'कायदेशीर नोंदणी आणि मान्यता'}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                    <li>{language === 'en' ? 'The Societies Registration Act, 1860: Maha/16749/Satara (Granted May 21, 2019)' : 'सोसायटी अधिनियम, 1860: Maha/16749/Satara (21 मे 2019 रोजी प्रदान)'}</li>
                    <li>{language === 'en' ? 'The Bombay Public Trusts Act, 1950: F/16709/Satara (Granted August 29, 2019)' : 'बॉम्बे पब्लिक ट्रस्ट अॅक्ट, 1950: F/16709/Satara (29 ऑगस्ट 2019 रोजी प्रदान)'}</li>
                    <li>{language === 'en' ? 'ISO 9001:2015 Certified for autonomous skill development, self-employment training and community upliftment.' : 'ISO 9001:2015 प्रमाणित स्वायत्त कौशल्य विकास, स्वरोजगार प्रशिक्षण आणि समाज उत्थान कार्यक्रमांसाठी.'}</li>
                    <li>{language === 'en' ? 'PAN: AABTU1036D' : 'PAN: AABTU1036D'}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{language === 'en' ? 'Registered Address' : 'नोंदणीकृत पत्ता'}</p>
                  <p className="text-gray-700 mt-3">
                    {language === 'en'
                      ? 'AT Dhom Punarvasan, Post: Ozarde, Taluka: Wai, District: Satara – 412 803, Maharashtra, India.'
                      : 'एटी धोंम पुनर्वसन, पोस्ट: ओझर्डे, तालुका: वाई, जिल्हा: सातारा – 412 803, महाराष्ट्र, भारत.'}
                  </p>
                  <p className="text-gray-700 mt-3">{language === 'en' ? 'Contact Email: udyogutkarsh@gmail.com' : 'संपर्क ईमेल: udyogutkarsh@gmail.com'}</p>
                  <p className="text-gray-700">{language === 'en' ? 'Contact Call: +91 820 830 5484' : 'संपर्क क्रमांक: +91 820 830 5484'}</p>
                </div>
              </div>

              <p className="mt-6">
                {language === 'en'
                  ? 'Udyog Utkarsh Samajik Sanstha focuses on empowering youth, especially educated unemployed individuals from rural and semi-urban communities, by equipping them with the technical and business acumen required to create sustainable livelihoods.'
                  : 'उद्योग उत्कर्ष सामाजिक संस्था ग्रामीण आणि अर्ध-शहरी समुदायातील विशेषतः शिक्षित बेरोजगार युवकांना सक्षम मिळवून त्यांना शाश्वत उपजीविका निर्माण करण्यासाठी आवश्यक तांत्रिक आणि व्यावसायिक कौशल्ये प्रदान करण्यात लक्ष केंद्रित करते.'}
              </p>
            </div>
          </div>

          {/* Section 2: Institute Details */}
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">{language === 'en' ? 'Skill Development & Self Employment Training Institute' : 'कौशल्य विकास आणि स्वरोजगार प्रशिक्षण संस्था'}</h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                {language === 'en'
                  ? 'Our institute is established under Udyog Utkarsh Samajik Sanstha to provide autonomous skill development and self-employment training programs for college students, school students, individuals, institutions and corporates.'
                  : 'आमची संस्था उद्योग उत्कर्ष सामाजिक संस्थेअंतर्गत स्वतंत्र कौशल्य विकास आणि स्वरोजगार प्रशिक्षण कार्यक्रम देण्यासाठी स्थापन करण्यात आली आहे.'}
              </p>

              <p>
                {language === 'en'
                  ? 'Our programs are designed to bridge the gap between technical knowledge and business success. We focus on entrepreneurial mindset development, communication skills, modern sales techniques, professional etiquette, and campus-readiness for students.'
                  : 'आमची कार्यक्रम तांत्रिक ज्ञान आणि व्यावसायिक यश यातील अंतर कमी करण्यासाठी डिझाइन केलेले आहेत. आम्ही उद्योजकीय मनोवृत्ती विकास, संवाद कौशल्ये, आधुनिक विक्री तंत्रे, व्यावसायिक शिस्त आणि विद्यार्थ्यांसाठी कॅम्पस-तैयारीवर लक्ष केंद्रित करतो.'}
              </p>

              <p>
                {language === 'en'
                  ? 'Our goal is simple: to create successful, confident, and sustainable entrepreneurs, and to curb unemployment while providing employment-ready candidates to industry.'
                  : 'आमचे लक्ष्य सोपे आहे: यशस्वी, आत्मविश्वासी आणि शाश्वत उद्योजक तयार करणे आणि उद्योगासाठी रोजगार-तयार उमेदवार उपलब्ध करून देऊन बेरोजगारी कमी करणे.'}
              </p>

              <div>
                <p className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Key Training Initiatives' : 'मुख्य प्रशिक्षण उपक्रम'}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>{language === 'en' ? 'Entrepreneurial mindset and skill development.' : 'उद्योजक मानसिकता आणि कौशल्य विकास.'}</li>
                  <li>{language === 'en' ? 'Technical skill training aligned with market trends.' : 'बाजार प्रवाहानुसार तांत्रिक कौशल्य प्रशिक्षण.'}</li>
                  <li>{language === 'en' ? 'Business planning and DPR preparation.' : 'व्यवसाय नियोजन आणि डीपीआर तयारी.'}</li>
                  <li>{language === 'en' ? 'Marketing strategies, market research and brand building.' : 'विपणन धोरणे, बाजार संशोधन आणि ब्रँड बिल्डिंग.'}</li>
                  <li>{language === 'en' ? 'Financial literacy and standard banking procedures.' : 'आर्थिक साक्षरता आणि बँकिंग प्रक्रिया.'}</li>
                  <li>{language === 'en' ? 'Licensing and MSME registration guidance.' : 'परवाना आणि MSME नोंदणी मार्गदर्शन.'}</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Soft Skills & Employability Framework' : 'सॉफ्ट स्किल्स आणि रोजगारक्षमतेचे ढांचा'}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>{language === 'en' ? 'English improvement and effective communication skills.' : 'इंग्रजी सुधारणा आणि प्रभावी संवाद कौशल्ये.'}</li>
                  <li>{language === 'en' ? 'Personality development and professional presentation skills.' : 'व्यक्तिमत्व विकास आणि व्यावसायिक सादरीकरण कौशल्ये.'}</li>
                  <li>{language === 'en' ? 'Interview facing skills and mock drills.' : 'इंटरव्ह्यू सामना कौशल्ये आणि मॉक ड्रिल्स.'}</li>
                  <li>{language === 'en' ? 'Leadership and innovation culture development.' : 'नेतृत्व आणि नवोन्मेष संस्कृती विकास.'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
