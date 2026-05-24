import React from 'react';
import CommonIntroBlock from '../components/CommonIntroBlock';

export default function AboutUsPage() {
  const boardMembers = [
    { sno: 1, name: 'Mr. Abhishek Ghagre', designation: 'Founder President' },
    { sno: 2, name: 'Mr. Sachin Pol', designation: 'Vice President' },
    { sno: 3, name: 'Mrs. Trupti Gaikwad', designation: 'Secretary' },
    { sno: 4, name: 'Mrs. Poonam Pol', designation: 'Treasurer' },
    { sno: 5, name: 'Mr. Shankar Parab', designation: 'Member' },
    { sno: 6, name: 'Mrs. Suchitra Parab', designation: 'Member' },
    { sno: 7, name: 'Mr. Clinton Miranda', designation: 'Member' },
    { sno: 8, name: 'Mrs. Amruta Ghagre', designation: 'Member' },
    { sno: 9, name: 'Mrs. Komal Dabhade', designation: 'Member' },
  ];

  const coreFocusAreas = [
    {
      sno: 1,
      title: 'Entrepreneurship Development',
      description: 'Promoting entrepreneurship & self-reliance across Maharashtra by implementing structured programs in Entrepreneurship Development.',
    },
    {
      sno: 2,
      title: 'Youth Development',
      description: 'Enhancing employability & leadership skills for the next generation.',
    },
    {
      sno: 3,
      title: 'Women Empowerment',
      description: 'Promoting financial independence through skill-building & entrepreneurship.',
    },
    {
      sno: 4,
      title: 'Counselling of Rural Adolescent Girls',
      description: 'Conducting various workshops & training sessions to educate adolescent girls about hormonal changes & guide them with respect to their career & bright future.',
    },
    {
      sno: 5,
      title: 'Health & Wellness',
      description: 'Improving community access to healthcare services and preventive education.',
    },
    {
      sno: 6,
      title: 'Rural Development',
      description: 'Providing training & knowledge sharing platforms for rural communities.',
    },
    {
      sno: 7,
      title: 'Environmental Sustainability',
      description: 'Implementing conservation projects and ecological awareness programs.',
    },
    {
      sno: 8,
      title: 'Awards & Recognition',
      description: 'Recognizing & motivating the successful in the society by presenting them with an award of honour.',
    },
  ];

  const otherObjectives = [
    {
      title: 'Skill Development & Entrepreneurship Promotion',
      points: [
        'Establish Skill Development & Self-Employment Training Institute.',
        'Conduct Entrepreneurship Development Programs on subjects such as: Animal Husbandry, Organic Farming, Medicinal Plants Cultivation, Sericulture, Fisheries, Horticulture, Beekeeping, Agro-Tourism, Food Processing, Photography, Soft Skills & Employability Skills, other service & manufacturing related skills.',
      ],
    },
    {
      title: 'Access to Government Schemes',
      points: [
        'Guide the public on availing training & benefits under various schemes offered by Khadi & Village Industries Commission (KVIC), District Rural Development Agency (DRDA), NABARD, District Industries Centre (DIC) & other government & semi-government bodies.',
      ],
    },
    {
      title: 'Vocational Education & Economic Empowerment',
      points: [
        'Impart vocational education to rural & urban youth.',
        'Implement skill development programs to promote financial self-reliance & employment readiness.',
      ],
    },
    {
      title: 'Educational Infrastructure Development',
      points: [
        'Establish quality-focused educational campuses & institutions.',
        'Promote STEM education, IT literacy & research.',
        'Operate English & Marathi medium pre-primary, secondary schools & colleges.',
        'Set up residential hostels & modern laboratory facilities.',
      ],
    },
    {
      title: 'Environmental & Health Awareness',
      points: [
        'Conduct awareness campaigns on Physical Health & Wellbeing, Wildlife Conservation, Energy Conservation & Water Management.',
      ],
    },
    {
      title: 'Community Engagement & Awareness',
      points: [
        'Organize events & competitions focused on Social & Cultural Development, Arts & Sports, Science & Technology, Agriculture, Health & Hygiene & Entrepreneurship.',
      ],
    },
    {
      title: 'Rural Development Initiatives',
      points: [
        'Establish rural information centres.',
        'Provide training & knowledge sharing platforms for rural communities.',
      ],
    },
    {
      title: 'Social Reform & Awareness',
      points: [
        'Promote government welfare schemes through awareness campaigns.',
        'Organize awareness lectures on Prohibition of Alcohol, Dowry Prevention, Family Planning, Tree Plantation, Group Farming, Entrepreneurship Promotion & Substance Abuse Prevention.',
      ],
    },
    {
      title: 'Legal Aid & Awareness',
      points: [
        'Organize legal awareness & assistance camps to provide access to justice for underprivileged sections.',
      ],
    },
    {
      title: 'Environmental Sustainability',
      points: [
        'Conduct awareness, Organize and promote Tree Plantation Drives, Solid Waste Management Initiatives & Blood Donation Camps.',
      ],
    },
    {
      title: 'Youth Empowerment & Crime Prevention',
      points: [
        'Conduct behavioural change programs & camps to divert youth from criminal tendencies.',
        'Provide career counselling & guidance towards employment & entrepreneurship.',
      ],
    },
    {
      title: 'Support for Marginalized Communities',
      points: [
        'Conduct behavioural change programs & camps to divert youth from criminal tendencies.',
        'Provide career counselling & guidance towards employment & entrepreneurship.',
      ],
    },
    {
      title: 'Promotion of National Integration',
      points: [
        'Foster values of unity and harmony through cultural and educational programs aimed at strengthening national integration.',
      ],
    },
  ];

  return (
    <>
      <CommonIntroBlock />

      {/* About Us Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Udyog Utkarsh Samajik Sanstha was established with the vision of creating a Skilled, Confident & Self-Reliant 
            society. Through our continuous efforts in Educational & Professional Development, we aim to support Students, 
            Rural Youth, Women, Farmers & Aspiring Entrepreneurs in building Successful Careers & Sustainable Livelihoods.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our organization collaborates with Colleges, Institutions, Trainers, Industry Experts & Social Partners through 
            our Skill Development & Self Employment Training Institute to deliver impactful programs focused on practical 
            learning & personal growth.
          </p>
        </div>
      </section>

      {/* Founder's Desk */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">From the Founder President's Desk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Photo Placeholder */}
            <div className="flex justify-center">
              <div className="w-64 h-80 bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-600">
                  <p className="text-sm">Photo Placeholder</p>
                  <p className="text-xs">Mr. Abhishek Ghagre</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 text-gray-700 text-justify">
              <p>
                At Udyog Utkarsh Samajik Sanstha, we strongly believe that true Social & Economic Development can only be 
                achieved when individuals become Financially Independent & Self-Reliant. In today's rapidly growing world, 
                the population is increasing day by day & with it the demand for employment & sustainable income opportunities 
                is also rising.
              </p>
              <p>
                Every individual needs a reliable source of income to survive & build a better future. In such circumstances; 
                people generally choose either to work in a job or to start their own business. However, one important reality 
                must be understood — <strong>without businesses, industries & enterprises the employment opportunities cannot be 
                created.</strong> Every job exists because someone had the courage & vision to start a business.
              </p>
              <p>
                Therefore, the development of businesses, startup's & MSME's is essential for generating employment & 
                strengthening the economy. Our mission is not only to help people find jobs, but also to inspire & guide them 
                towards becoming entrepreneurs, business owners & employment creators.
              </p>
              <p className="font-semibold text-blue-900 italic">
                "A person who believes in himself chooses to build a business, while a person who lacks confidence chooses to 
                work for someone else."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas Table */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Core Focus Areas</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left w-12">Sr.</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Core Focus Area</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {coreFocusAreas.map((area, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-900">{area.sno}</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">{area.title}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">{area.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-gray-700">
            At Udyog Utkarsh Samajik Sanstha, we especially focus on empowering individuals who lack Confidence, Exposure or 
            Opportunities. Through Skill Development, Personality Development, Entrepreneurship Training & Interview Facing 
            Based Career Guidance Programs we aim to transform Job Seekers into Job Creators.
          </p>
        </div>
      </section>

      {/* We Are Committed To */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">We are Committed to</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Promoting entrepreneurship & self-employment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Supporting small businesses & MSME's.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Creating awareness about business opportunities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Helping entrepreneurs build their brand value.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Encouraging youth towards innovation & leadership.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Generating maximum employment opportunities across the society.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
          <p className="text-gray-700 text-justify leading-relaxed mb-4">
            Our vision is to create a strong ecosystem of skilled, confident, self-reliant & employable individuals who can 
            contribute positively towards nation-building through enterprise & innovation to our society & economy. Together 
            let us create a future where every youth has the confidence not only to seek opportunities, but also to create them 
            for others.
          </p>
          <p className="text-center text-lg font-semibold text-blue-900 italic border-l-4 border-blue-600 pl-4">
            "Empowering Individuals to Become Employment Creators, Not Just Employment Seekers."
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-justify text-lg">
            Our mission is to empower youth & communities through Quality Skill Development, Communication Training, 
            Entrepreneurship guidance & Employment-Oriented Education.
          </p>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Join Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Become a part of our journey towards creating a Skilled, Confident & Self-Reliant Society.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold">Skill</span>
            <span className="px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold">Confidence</span>
            <span className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold">Employment</span>
            <span className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">Empowerment</span>
          </div>
          <p className="text-center text-lg font-semibold text-blue-900 italic mt-6">
            "Transforming Potential Into Success"
          </p>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Board of Trustees</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left w-12">Sr.</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Name of the Member</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-900">{member.sno}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">{member.name}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Message to Society */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Message to the Society</h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            We strongly believe that education alone is not enough in today's competitive world. Along with academic knowledge 
            the students need Communication Abilities, Confidence, Professional Skills & Entrepreneurial Thinking to Succeed 
            in Life. Our mission is to ensure that every young individual gets access to the right Opportunities, Guidance & 
            Practical Knowledge needed for Personal & Professional Growth.
          </p>
        </div>
      </section>

      {/* Other Objectives */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Other Objectives of our Organization</h2>
          <p className="text-gray-700 mb-8">
            In addition to its primary mission, the organization pursues a range of objectives aimed at holistic & sustainable 
            community development. These objectives align with key focus areas of CSR initiatives under Schedule VII of the 
            Companies Act 2013.
          </p>

          <div className="space-y-6">
            {otherObjectives.map((obj, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{index + 1}. {obj.title}</h3>
                <ul className="space-y-2">
                  {obj.points.map((point, pidx) => (
                    <li key={pidx} className="text-gray-700 flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">-</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
