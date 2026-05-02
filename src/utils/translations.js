// Translation constants for the entire application
export const translations = {
  en: {
    // Header
    organizationName: 'Udyog Utkarsh Samajik Sanstha',
    home: 'Home',
    aboutUs: 'About Us',
    programmes: 'Programmes',
    publications: 'Publications',
    certifyVerify: 'Verify Certificate',
    contact: 'Contact',
    admin: 'Admin',
    
    // Hero/Banner
    welcomeTitle: 'Welcome to Udyog Utkarsh',
    welcomeSubtitle: 'Empowering Communities Through Quality Training & Awareness',
    exploreMore: 'Explore More',
    
    // Sliders
    upcomingTraining: 'Upcoming Training Programmes',
    completedTraining: 'Completed Training Programmes',
    awarenessPrograms: 'Awareness Programmes',
    
    // Sections
    founderMessage: "From the Founder - President's Desk",
    trainerMessage: "From the Project Trainer's Desk",
    
    // Certificate Verification
    certificateVerification: 'Certificate Verification',
    enterCertificateNumber: 'Enter Certificate Number',
    enterFullName: 'Enter Full Name',
    search: 'Search',
    certificateFound: 'Certificate Details Found',
    certificateNotFound: 'Certificate not found',
    certificateNumber: 'Certificate Number',
    candidateName: 'Candidate Name',
    courseName: 'Course Name',
    issuedDate: 'Issued Date',
    downloadCertificate: 'Download Certificate',
    
    // Forms
    onlineAdmission: 'Online Admission',
    requestTraining: 'Request a Training Program',
    joinTeam: 'Be a Part of our Team',
    consultancy: 'Consultancy Service',
    donateUs: 'Donate Us',
    submit: 'Submit',
    cancel: 'Cancel',
    thankYouMessage: 'Thank you! Your submission has been received.',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    contactUs: 'Contact Us',
    address: 'Wai, Satara, Maharashtra, India',
    phone: '+91-XXXXXXXXXX',
    email: 'info@udyogutkarsh.org',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    required: 'This field is required',
  },
  
  mr: {
    // Header
    organizationName: 'उद्योग उत्कर्ष समाजिक संस्था',
    home: 'मुख्यपृष्ठ',
    aboutUs: 'आमच्याबद्दल',
    programmes: 'कार्यक्रम',
    publications: 'प्रकाशने',
    certifyVerify: 'प्रमाणपत्र सत्यापित करा',
    contact: 'संपर्क',
    admin: 'प्रशासक',
    
    // Hero/Banner
    welcomeTitle: 'उद्योग उत्कर्षमध्ये स्वागतम्',
    welcomeSubtitle: 'गुणवत्तेच्या प्रशिक्षण आणि जागरूकतेद्वारे समुदायाचा सशक्तिकरण',
    exploreMore: 'अधिक जाणून घ्या',
    
    // Sliders
    upcomingTraining: 'आगामी प्रशिक्षण कार्यक्रम',
    completedTraining: 'पूर्ण झालेले प्रशिक्षण कार्यक्रम',
    awarenessPrograms: 'जागरूकता कार्यक्रम',
    
    // Sections
    founderMessage: 'संस्थापक - अध्यक्षांचे डेस्क',
    trainerMessage: 'प्रकल्प प्रशिक्षकांचे डेस्क',
    
    // Certificate Verification
    certificateVerification: 'प्रमाणपत्र सत्यापन',
    enterCertificateNumber: 'प्रमाणपत्र क्रमांक दर्ज करा',
    enterFullName: 'पूर्ण नाव दर्ज करा',
    search: 'शोधा',
    certificateFound: 'प्रमाणपत्र तपशील आढळले',
    certificateNotFound: 'प्रमाणपत्र सापडले नाही',
    certificateNumber: 'प्रमाणपत्र क्रमांक',
    candidateName: 'उमेदवाराचे नाव',
    courseName: 'अभ्यासक्रमाचे नाव',
    issuedDate: 'जारी केलेली तारीख',
    downloadCertificate: 'प्रमाणपत्र डाउनलोड करा',
    
    // Forms
    onlineAdmission: 'ऑनलाइन प्रवेश',
    requestTraining: 'प्रशिक्षण कार्यक्रमाची विनंती करा',
    joinTeam: 'आमच्या संघाचा भाग बनवा',
    consultancy: 'सल्लागारी सेवा',
    donateUs: 'आमच्याला दान द्या',
    submit: 'सबमिट करा',
    cancel: 'रद्द करा',
    thankYouMessage: 'धन्यवाद! आपली मनोनीत प्राप्त झाली.',
    
    // Footer
    quickLinks: 'त्वरित दुवे',
    followUs: 'आमचे अनुसरण करा',
    contactUs: 'आमच्याशी संपर्क साधा',
    address: 'वै, सातारा, महाराष्ट्र, भारत',
    phone: '+91-XXXXXXXXXX',
    email: 'info@udyogutkarsh.org',
    
    // Common
    loading: 'लोड होत आहे...',
    error: 'त्रुटी',
    success: 'यशस्वी',
    required: 'हे क्षेत्र आवश्यक आहे',
  }
};

export const t = (language, key) => {
  return translations[language]?.[key] || key;
};
