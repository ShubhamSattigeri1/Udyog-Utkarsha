import React from 'react';

export default function CommonIntroBlock() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 border-b-2 border-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Skill Development & Self Employment Training Institute
        </h2>
        
        <div className="text-gray-700 space-y-4 text-justify">
          <p>
            Under Udyog Utkarsh Samajik Sanstha, we have established the Skill Development & Self Employment 
            Training Institute with the objective of providing Quality Training, Career Guidance & Placement-Oriented 
            Programmes. The institute functions as an Autonomous Training Center offering Professional Training 
            Programmes for:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>College Students</li>
            <li>Individuals & Job Seekers</li>
            <li>Entrepreneurs & Startup's</li>
            <li>Educational Institutions</li>
            <li>Corporate Organizations</li>
            <li>Rural Youth & Women</li>
          </ul>

          <p className="font-semibold text-blue-900">
            Our training methodology focuses on Practical Learning, Modern Technology, Professional Development 
            & Entrepreneurship Readiness.
          </p>
        </div>
      </div>
    </section>
  );
}
