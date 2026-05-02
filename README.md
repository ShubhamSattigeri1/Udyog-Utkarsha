# Udyog Utkarsh Samajik Sanstha - Website

A comprehensive NGO website built with React, Tailwind CSS, and Firebase for the organization 'Udyog Utkarsh Samajik Sanstha'.

## Features

- **Bilingual Support**: English & Marathi language support throughout the website
- **Dynamic Sliders**: Multiple landscape slideshow sliders for different training programmes
- **Certificate Verification System**: Search and verify training certificates
- **Admin Control Panel**: Secure admin panel to manage content
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Firebase Integration**: Backend support for data management and image uploads

## Project Structure

```
ngo-website/
├── public/                      # Static files
├── src/
│   ├── assets/
│   │   ├── images/             # Images and screenshots
│   │   ├── icons/              # SVG icons
│   │   └── pdfs/               # PDF storage
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with language toggle
│   │   ├── Footer.jsx          # Footer with contact and map
│   │   └── CertificateVerification.jsx  # Certificate verification component
│   ├── pages/
│   │   ├── HomePage.jsx        # Home page with all sliders
│   │   └── AdminDashboard.jsx  # Admin control panel
│   ├── services/
│   │   ├── firebase.js         # Firebase configuration
│   │   └── database.js         # Database operations
│   ├── contexts/
│   │   └── LanguageContext.jsx # Language context for bilingual support
│   ├── hooks/                  # Custom React hooks
│   ├── utils/
│   │   └── translations.js     # Translation constants
│   ├── styles/
│   │   └── index.css          # Global styles with Tailwind
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind styles
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
├── postcss.config.js          # PostCSS configuration
└── .gitignore                 # Git ignore file
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation Steps

1. **Clone/Navigate to the project:**
```bash
cd "c:\Users\Admin\OneDrive\Desktop\ngo- website"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Firebase:**
   - Create a `.env.local` file in the root directory
   - Add your Firebase credentials:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

## Key Components

### HomePage.jsx
- Three landscape sliders (Upcoming Training, Completed Training, Awareness Programmes)
- Synchronized text descriptions with sliding images
- Founder's message and Trainer's message sections
- Success stories carousel
- Testimonials section
- Call-to-action buttons

### CertificateVerification.jsx
- Search certificates by Certificate Number and Candidate Name
- Display certificate details
- Download certificate PDF
- Bilingual error messages and validation

### AdminDashboard.jsx
- Password-protected admin login
- Slider management
- News & updates management
- Success stories management
- PDF uploads
- Certificate management
- Demo login: password "admin123"

### Header.jsx
- Organization logo and name
- Bilingual navigation menu
- ISO certification display
- Language toggle (English/Marathi)
- Mobile-responsive hamburger menu
- Admin login link

### Footer.jsx
- Organization information
- Quick links
- Contact information
- Embedded Google Map
- Social media links
- Newsletter subscription
- Privacy Policy and Terms links

## Database Structure (Firebase Firestore)

### Collections

**certificates**
```json
{
  "certificateNumber": "UUS-2024-001",
  "candidateName": "John Doe",
  "courseName": "Web Development",
  "issuedDate": "2024-05-01",
  "certificateUrl": "path/to/pdf",
  "createdAt": "timestamp"
}
```

**sliders**
```json
{
  "type": "upcoming|completed|awareness",
  "title": "Programme Title",
  "description": "Programme description",
  "imageUrl": "path/to/image",
  "date": "2024-06-15",
  "createdAt": "timestamp"
}
```

**successStories**
```json
{
  "name": "Person Name",
  "story": "Success story text",
  "image": "path/to/image",
  "createdAt": "timestamp"
}
```

**testimonials**
```json
{
  "name": "Person Name",
  "role": "Job Title",
  "testimonial": "Testimonial text",
  "rating": 5,
  "createdAt": "timestamp"
}
```

## Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `src/index.css` for global styles and animations
- **Responsive Design** with mobile-first approach
- **Color Scheme**: Blue (#1e40af), Red (#dc2626), Amber (#f59e0b)

## Forms to Implement

1. **Online Admission** - `/admission`
2. **Request a Training Program** - `/request-training`
3. **Be a Part of our Team** - `/join-team` (with file upload)
4. **Consultancy Service** - `/consultancy`
5. **Donate Us** - `/donate`

## Technologies Used

- **Frontend**: React 18, Tailwind CSS, React Router v6
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Build Tool**: Vite
- **UI Icons**: Font Awesome
- **State Management**: Zustand (optional for complex states)

## Next Steps

1. Replace demo Firebase credentials with actual project credentials
2. Set up all form components with validation and submission handlers
3. Implement PDF library section
4. Create About Us and Programs pages
5. Add email notifications for form submissions
6. Implement admin authentication with Firebase
7. Deploy to Vercel or Firebase Hosting

## Security Notes

- Replace demo admin password with secure authentication
- Use Firebase Admin SDK for secure backend operations
- Implement proper CORS policies
- Use environment variables for sensitive data
- Implement rate limiting for form submissions

## Support

For issues or questions, contact the development team.

---

**Last Updated**: May 1, 2026
