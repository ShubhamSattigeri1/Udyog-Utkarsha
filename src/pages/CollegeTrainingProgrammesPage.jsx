import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CommonIntroBlock from '../components/CommonIntroBlock';
import CollegeTrainingRequestForm from '../components/CollegeTrainingRequestForm';
import StudentEnrollmentForm from '../components/StudentEnrollmentForm';
import useContentStore from '../store/contentStore';

export default function CollegeTrainingProgrammesPage() {
  const [showCollegeForm, setShowCollegeForm] = useState(false);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const collegeContent = useContentStore((state) => state.collegeContent);

  // Sample images for slider if no images in store
  const defaultSliderImages = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
  ];

  const sliderImages = collegeContent.finishedProgramsSlider.length > 0
    ? collegeContent.finishedProgramsSlider.map((img) => img.url)
    : defaultSliderImages;

  const handlePrevSlide = () => {
    setSliderIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSliderIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <CommonIntroBlock />

      {/* Media Section with CTA Buttons */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Slideshow */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={sliderImages[sliderIndex]}
                  alt="Finished Training Program"
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-900" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all z-10"
                >
                  <ChevronRight className="w-6 h-6 text-blue-900" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {sliderIndex + 1} / {sliderImages.length}
                </div>
              </div>

              <p className="text-center text-gray-600 mt-4 font-semibold">
                PHOTO of our Finished Training Programmes
              </p>
            </div>

            {/* Right Column - CTA Buttons */}
            <div className="flex flex-col justify-center gap-6">
              <button
                onClick={() => setShowCollegeForm(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-lg"
              >
                <div className="text-center">
                  <p>CLICK TO REQUEST A TRAINING</p>
                  <p>PROGRAMME (FOR COLLEGES)</p>
                </div>
              </button>

              <button
                onClick={() => setShowStudentForm(true)}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-6 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-lg"
              >
                <div className="text-center">
                  <p>CLICK TO ENROLL FOR A TRAINING</p>
                  <p>PROGRAMME (FOR COLLEGE STUDENTS)</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Professional Expertise */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Leadership & Professional Expertise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Founder President, <strong>Mr. Abhishek Ghagre</strong>, is a Business Coach & Professional Corporate Trainer 
            known for conducting professional training programmes at reputed institutions such as:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-6">
            <li>Maharashtra Centre for Entrepreneurship Development (MCED)</li>
            <li>IDBI Rural Self Employment Training Institute, Satara.</li>
            <li>Mann Deshi Foundation, Satara.</li>
            <li>ICICI Foundation, Wai.</li>
            <li>Krishi Vidnyan Kendra, Narayangaon, Pune etc.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Our organization is recognized for delivering professional & High-Quality Training Programmes using Modern Audio-Visual 
            Training Aids & Practical Teaching Methodologies. The administration & project coordination of the institute is managed 
            by Mr. Abhishek Ghagre.
          </p>
        </div>
      </section>

      {/* Our Vision for Entrepreneurship Development */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision for Entrepreneurship Development</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The key focus of Udyog Utkarsh Samajik Sanstha is to develop Successful Entrepreneurs & Skilled Professionals capable 
            of using Modern Technology, E-commerce Platforms & Innovative Business Strategies effectively. Our mission is not only 
            to help individuals start businesses, but also to support them in building sustainable enterprises with reduced chances 
            of failure. We believe that every successful entrepreneur can become a source of employment for many others in society.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            To promote entrepreneurial awareness and innovation, we regularly organize:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-6">
            <li>Entrepreneurship Awareness Camps (EAC)</li>
            <li>Entrepreneurship Awareness Programmes (EAP)</li>
            <li>Entrepreneurship Development Programmes (EDP)</li>
            <li>Career Guidance Workshops</li>
            <li>Startup Motivation Sessions</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            These programmes are conducted for College students, Aspiring Entrepreneurs & Individuals who wish to enter the field 
            of Business & Self-employment. We provide Professional Training in a wide range of Skill Development & Entrepreneurship-related 
            subjects including:
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg">
            Personality Development, Leadership Skills, Communication Skills, Presentation & Public Speaking Skills, Marketing & Sales 
            Techniques, Decision Making Skills, Time Management, Stress Management, Manpower Management, Product Costing & Pricing, 
            Product Labelling & Packaging, Product Designing, Quality Control & Quality Standards, Legal Formalities for Company Setup, 
            GST Registration & Return Filing, Trademark & Patent Registration, Online Marketing & E-Commerce, Risk Management, 
            Import – Export Trade, Customer Relationship Management, Financial Assistance & Loan Guidance, Government & Non-Government 
            Subsidy Schemes etc.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We also provide a valid training certificate that helps our participants to demonstrate their Knowledge, Skills & Professional 
            Learning. Our Entrepreneurship Development Programs encourage Self-employment & Startup Culture by guiding aspiring entrepreneurs 
            with Business Knowledge, Motivation & Practical Insights.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            At Udyog Utkarsh Samajik Sanstha, we are committed to creating a Skilled, Confident & Self-Reliant generation capable 
            of contributing positively to society through Entrepreneurship, Innovation & Employment Creation.
          </p>
          <p className="text-2xl font-semibold italic">
            "Our Mission Is To Transform Job Seekers Into Job Creators."
          </p>
        </div>
      </section>

      {/* Our Vision for Creating Employment */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our Vision for Creating Employment — Job Seekers (NAAC Ready Programmes)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our Core Activities for creating employable candidates includes a power packed Skill Development Training program. We aim 
            at providing practical & industry-oriented training programs for students & youth to enhance employability & career readiness. 
            Our training programs include courses like:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-6">
            <li>English Improvement & Communication Skills</li>
            <li>Personality Development</li>
            <li>Seminar – Presentation Skills</li>
            <li>Interview Facing Skills etc.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            These Training Programmes help students to improve Spoken & Written English, Communication Skills, Public Speaking Skills, 
            Confidence building, Leadership Development, Professional Personality Development, Interview Preparation, Career Guidance, 
            Mock Interviews, Resume-Building, Career Counseling & Placement Preparation. We organize Educational Seminars & Workshops, 
            Awareness Drives, Motivational Sessions & Professional Development Workshops in colleges & institutions.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Experienced Professional Trainers',
              'Practical & Interactive Learning Methods',
              'Industry-Focused Skill Development',
              'Career & Entrepreneurship Guidance',
              'Student-Centered Training Approach',
              'Strong Educational Collaborations',
              'Commitment Towards Social Development',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="w-6 h-6 mt-1 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              'Empowering Thousands of Students Across Maharashtra',
              'Skill Development Programs',
              'College Training Workshops',
              'Entrepreneurship Awareness Sessions',
              'Career Guidance Initiatives',
              'Personality Development Training',
              'Youth Empowerment Campaigns',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed text-center font-semibold">
            Our efforts continue to inspire students & young individuals to become confident professionals & responsible citizens.
          </p>
        </div>
      </section>

      {/* Message to Society */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Message to the Society</h2>
          <p className="text-gray-700 text-justify leading-relaxed mb-4">
            We strongly believe that education alone is not enough in today's competitive world. Along with academic knowledge, 
            students need communication abilities, confidence, professional skills & entrepreneurial thinking to succeed in life. 
            Our mission is to ensure that every young individual gets access to the right opportunities, guidance & practical 
            knowledge needed for personal & professional growth.
          </p>
          <p className="text-center text-lg font-semibold text-blue-900 italic border-l-4 border-blue-600 pl-4">
            "Empowering Youth For A Better Tomorrow"
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Impact (Stats)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
              <p className="text-5xl font-bold mb-2">5000+</p>
              <p className="text-xl font-semibold">Students Trained</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg shadow-lg">
              <p className="text-5xl font-bold mb-2">30+</p>
              <p className="text-xl font-semibold">College Collaborations</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-lg shadow-lg">
              <p className="text-5xl font-bold mb-2">100+</p>
              <p className="text-xl font-semibold">Skill Development Workshops</p>
            </div>
          </div>
          <p className="text-center text-lg font-semibold text-blue-900 mt-8">
            "Empowering Youth Through Training & Awareness"
          </p>
        </div>
      </section>

      {/* Forms */}
      {showCollegeForm && (
        <CollegeTrainingRequestForm onClose={() => setShowCollegeForm(false)} />
      )}
      {showStudentForm && (
        <StudentEnrollmentForm onClose={() => setShowStudentForm(false)} />
      )}
    </>
  );
}
