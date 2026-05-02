# Project Setup Guide

## 🚀 Quick Start Guide

### Step 1: Initial Setup

```bash
# Navigate to the project directory
cd "c:\Users\Admin\OneDrive\Desktop\ngo- website"

# Install all dependencies
npm install
```

### Step 2: Firebase Configuration

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a new project"
   - Enter project name: `udyog-utkarsh-website`
   - Enable Google Analytics (optional)
   - Create the project

2. **Get Firebase Credentials:**
   - In Firebase console, go to Project Settings (⚙️ icon)
   - Copy the Web App configuration
   - Scroll to "Your apps" and click on the web app
   - Copy the entire config object

3. **Create `.env.local` file:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and paste your Firebase credentials:
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Setup Firebase Services:**
   - **Authentication:** Enable Email/Password and Google Sign-in
   - **Firestore Database:**
     - Create a new Firestore database in production mode
     - Import the collections from `firebase-setup.json` (see below)
   - **Storage:** Enable Cloud Storage for image uploads

### Step 3: Create Firestore Collections

In Firebase Console, create these collections with sample documents:

**Collections to Create:**
1. `certificates` - For certificate verification
2. `sliders` - For programme sliders
3. `successStories` - For success stories
4. `testimonials` - For client testimonials
5. `news` - For news/updates
6. `forms` - For form submissions

**Sample Certificate Document:**
```json
{
  "certificateNumber": "UUS-2024-001",
  "candidateName": "John Doe",
  "courseName": "Web Development Bootcamp",
  "issuedDate": "2024-05-15",
  "certificateUrl": "gs://your-bucket/certificates/UUS-2024-001.pdf",
  "createdAt": "2024-05-15T10:30:00Z"
}
```

**Sample Slider Document:**
```json
{
  "type": "upcoming",
  "title": "Advanced Web Development",
  "description": "Learn modern web technologies and best practices",
  "imageUrl": "gs://your-bucket/images/web-dev.jpg",
  "date": "2024-06-15",
  "createdAt": "2024-05-01T10:30:00Z"
}
```

### Step 4: Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### Step 5: Access Admin Panel

- Navigate to `http://localhost:5173/admin`
- Use password: `admin123` (change this in `AdminDashboard.jsx` for production)

---

## 📁 Project Structure Explanation

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation & language toggle
│   ├── Footer.jsx      # Footer with contact info
│   ├── CertificateVerification.jsx
│   ├── OnlineAdmissionForm.jsx
│   ├── JoinTeamForm.jsx
│   ├── RequestTrainingForm.jsx
│   ├── ConsultancyForm.jsx
│   └── DonationForm.jsx
│
├── pages/              # Full page components
│   ├── HomePage.jsx    # Main landing page
│   └── AdminDashboard.jsx # Admin control panel
│
├── services/           # API & Firebase services
│   ├── firebase.js     # Firebase configuration
│   └── database.js     # Firestore operations
│
├── contexts/           # React Context (global state)
│   └── LanguageContext.jsx # Bilingual support
│
├── hooks/              # Custom React hooks
│   └── index.js        # Form handling, async operations
│
├── utils/              # Utility functions
│   ├── translations.js # English & Marathi text
│   ├── validators.js   # Form validation
│   └── store.js        # Zustand global state
│
└── styles/             # CSS files
    └── index.css       # Tailwind & custom styles
```

---

## 🔧 Environment Variables

Create `.env.local` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Admin Settings
VITE_ADMIN_PASSWORD=admin123
```

---

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🌐 Bilingual Support

The website supports both English and Marathi. To add/modify translations:

1. Edit `src/utils/translations.js`
2. Add text in both languages:

```javascript
export const translations = {
  en: {
    myKey: 'English text',
  },
  mr: {
    myKey: 'मराठी मजकूर',
  }
};
```

3. Use in components:
```javascript
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';

function MyComponent() {
  const { language } = useLanguage();
  return <h1>{t(language, 'myKey')}</h1>;
}
```

---

## 📋 Implementing Forms

All form components are ready. To integrate with your backend:

### Example: Online Admission Form

1. **In `OnlineAdmissionForm.jsx`, modify the `handleSubmit` function:**

```javascript
const handleSubmit = async (values, setErrors) => {
  try {
    // Call your database service
    const response = await addAdmissionForm(values);
    // Handle success
  } catch (error) {
    setErrors({ submit: error.message });
  }
};
```

2. **Create database service in `src/services/database.js`:**

```javascript
export const addAdmissionForm = async (formData) => {
  const formsRef = collection(db, 'forms');
  const docRef = await addDoc(formsRef, {
    type: 'admission',
    ...formData,
    submittedAt: new Date(),
  });
  return docRef.id;
};
```

---

## 🎨 Customization

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e40af',    // Change primary color
      secondary: '#dc2626',  // Change secondary color
      accent: '#f59e0b',     // Change accent color
    },
  },
}
```

### Update Organization Info

Edit `src/utils/translations.js` and update all organization-related text.

### Add New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

---

## 🚀 Deployment

### Firebase Hosting

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase hosting
firebase init hosting

# Build the project
npm run build

# Deploy
firebase deploy
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 🔒 Security Checklist

- [ ] Change admin password in `AdminDashboard.jsx`
- [ ] Set up proper Firebase Security Rules
- [ ] Enable HTTPS for all communications
- [ ] Add rate limiting for forms
- [ ] Implement proper authentication for admin panel
- [ ] Use environment variables for sensitive data
- [ ] Enable Firebase Authentication
- [ ] Set up email verification for forms
- [ ] Implement CAPTCHA for form submissions
- [ ] Regular security audits

### Firebase Security Rules Example

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Public read for certificates
    match /certificates/{document=**} {
      allow read;
      allow write: if request.auth.token.admin == true;
    }
    
    // Public read for sliders
    match /sliders/{document=**} {
      allow read;
      allow write: if request.auth.token.admin == true;
    }
    
    // Admin only for news
    match /news/{document=**} {
      allow read;
      allow write: if request.auth.token.admin == true;
    }
    
    // Public write for form submissions
    match /forms/{document=**} {
      allow create;
      allow read, write: if request.auth.token.admin == true;
    }
  }
}
```

---

## 🐛 Troubleshooting

### Issue: "Firebase config not working"
- Check `.env.local` file exists
- Verify all credentials are correct
- Restart development server after changing `.env.local`

### Issue: "Forms not submitting"
- Check browser console for errors
- Verify Firestore collections exist
- Check Firebase Security Rules

### Issue: "Images not loading"
- Ensure images are uploaded to Firebase Storage
- Check Storage Security Rules allow reading

### Issue: "Translations not working"
- Clear browser cache
- Restart development server
- Check translation key exists in both en and mr

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev)

---

## ✅ Next Steps After Setup

1. Add your organization logo to `public/` folder
2. Update all placeholder images
3. Configure Firebase email templates for notifications
4. Set up payment gateway for donations (Stripe, Razorpay)
5. Add Google Analytics
6. Set up email notifications for form submissions
7. Test all forms and certificate verification
8. Configure custom domain
9. Set up SSL certificate
10. Deploy to production

---

## 📞 Support & Contact

For issues or questions, refer to:
- Firebase Documentation: https://firebase.google.com/docs
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com/docs
- Project Issues: Check repository or contact the development team

---

**Last Updated**: May 1, 2026
**Version**: 1.0.0
