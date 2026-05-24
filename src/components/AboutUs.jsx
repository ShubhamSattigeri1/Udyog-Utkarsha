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
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section 1: Introduction */}
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                We, Udyog Utkarsh Samajik Sanstha would like to introduce our self as one of the registered "Society" under Societies Registration Act 1860 & "Trust" registered under Bombay Public Trust Act 1950 with the Charity Commissioner of Satara division. We are located in the historical Wai taluka of Satara district which is about 35 kilometers from Mahabaleshwar. Our organization was established with various objectives like entrepreneurship development, creation of employment, creating awareness regarding governmental & non-governmental margin money schemes among the public, helping the people of rural areas live a better life by training them on various agricultural & allied activities, water conservation, starting educational & vocational training institutions, conserving the nature, energy, wild life etc.
              </p>
              
              <p className="mb-6">
                "Udyog Utkarsh" as the name suggests our organization mainly works for the betterment of Entrepreneurs, Start up's, & those who wish to engage themselves in self employment. Our organization mainly provides various business development trainings on various topics & helps the trainees become successful businessmen & business women. We provide our services in rural as well as urban areas all over Maharashtra.
              </p>
            </div>
          </div>

          {/* Section 2: Skill Development & Self Employment Training Institute */}
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Skill Development & Self Employment Training Institute
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                "Skill Development & Self Employment Training Institute" is established under Udyog Utkarsh Samajik Sanstha for the purpose of training & placement. Our institute is an autonomous training institute which provides various Skill Development & Self Employment Training Programmes for college / school students, individuals, various institutions & corporates. Our Founder President - Business coach & Master Trainer Mr. Abhishek Ghagre is known to conduct professional training programmes in various institutions like Maharashtra Centre for Entrepreneurship Development (MCED), IDBI Rural Self Employment Training Institute, Mann Deshi Foundation, ICICI Foundation etc. We are known to provide professional & quality training programmes to various governmental & non-governmental institutions by using latest audio visual training aids. The administration of the institute is managed by Miss. Ruchira Sawant designated as a Project Trainer.
              </p>

              <p>
                The key focus of Udyog Utkarsh Samajik Sanstha is to develop successful entrepreneurs & professionals of today's generation by training them to use the latest technology along with ecommerce & all the available resources so that the start up business progresses with a very low chance of failure. Our aim is to develop the individual's business in every aspect so that after attaining success he provides employment to the weaker sections of the society. We also conduct various "Entrepreneurship Awareness Camps", "Entrepreneurship Awareness Programmes" & "Entrepreneurship Development Programmes" for college students & individuals who have a strong desire to venture into business.
              </p>

              <p>
                We also provide various types of Skill Development trainings like Personality Development, Leadership qualities, Communication Skills, Marketing & Presentation Skills, Decision making, Time Management skills, Stress Management, Manpower Management, Product costing, Product pricing, Product Labeling, Product Designing, Product Packaging, Quality Control & Quality Standards, Legal formalities for company set up, GST registration & Return filing, Trademark & Patent registration, Marketing Strategies, Sales Techniques, Online Marketing, Risk Management, Import – Export Trade, Customer Service & Customer Relationship Management, Financial Assistance from banks & information on various governmental & non-governmental subsidy (margin money) schemes etc. We also provide a valid training certificate which enables you to prove your knowledge, experience & literacy in the subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
