# Developer Quick Reference Guide

## 🏃 Getting Started (1 minute)

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local file with Firebase credentials
# Copy from .env.example and add your Firebase keys

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:5173
```

---

## 🎨 Common Customization Tasks

### 1. Change Organization Name
- **File**: `src/utils/translations.js`
- **Find**: `organizationName`
- **Update**: Both EN and MR versions

### 2. Update Color Scheme
- **File**: `tailwind.config.js`
- **Edit**: `colors` section in theme.extend
- **Options**: primary, secondary, accent, dark, light

### 3. Add New Translation
- **File**: `src/utils/translations.js`
- **Add key** in both `en` and `mr` objects
- **Use in component**: `t(language, 'keyName')`

### 4. Create New Form
1. Create component in `src/components/MyForm.jsx`
2. Use `useForm` hook for state management:
   ```javascript
   const { values, errors, handleChange, handleSubmit } = useForm(
     { field1: '', field2: '' },
     handleSubmitFunction
   );
   ```
3. Add route in `src/App.jsx`
4. Add navigation link in `Header.jsx`

### 5. Add New Page
1. Create file: `src/pages/NewPage.jsx`
2. Import and add route in `src/App.jsx`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `Header.jsx`

### 6. Update Logo
- Replace logo file in `public/` folder
- Update `Header.jsx` logo image path
- Update `Footer.jsx` logo if needed

---

## 🔥 Firebase Operations

### Verify Certificate
```javascript
import { verifyCertificate } from '../services/database';

const cert = await verifyCertificate('UUS-2024-001', 'John Doe');
```

### Get Slider Images
```javascript
import { getSliderImages } from '../services/database';

const images = await getSliderImages('upcoming');
```

### Add Success Story
```javascript
import { addSuccessStory } from '../services/database';

await addSuccessStory({
  name: 'John',
  story: 'My success story...',
  image: 'url/to/image'
});
```

### Query Data
```javascript
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const q = query(collection(db, 'certificates'), 
  where('candidateName', '==', 'John'));
const docs = await getDocs(q);
```

---

## 📋 Form Handling

### Add Form Validation
```javascript
import { validateForm } from '../utils/validators';

const errors = validateForm(values, ['email', 'name']);
if (errors) {
  setErrors(errors);
  return;
}
```

### Custom Validation
```javascript
import { validateEmail, validatePhone } from '../utils/validators';

if (!validateEmail(email)) {
  errors.email = 'Invalid email';
}
```

### Submit Form Data
```javascript
try {
  const docId = await addAdmissionForm(values);
  console.log('Submitted:', docId);
} catch (error) {
  setErrors({ submit: error.message });
}
```

---

## 🎯 Component Usage Examples

### Use Language Context
```javascript
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';

function MyComponent() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <>
      <h1>{t(language, 'homeTitle')}</h1>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'हिंदी' : 'English'}
      </button>
    </>
  );
}
```

### Use Custom Hooks
```javascript
import { useForm } from '../hooks';

const { values, errors, handleChange, handleSubmit } = useForm(
  { name: '', email: '' },
  async (values) => {
    await submitForm(values);
  }
);
```

### Use Global State
```javascript
import { useAppStore } from '../utils/store';

function MyComponent() {
  const isLoading = useAppStore(state => state.isLoading);
  const setLoading = useAppStore(state => state.setIsLoading);
  
  return <div>{isLoading ? 'Loading...' : 'Ready'}</div>;
}
```

---

## 📱 Responsive Design Patterns

### Mobile-First Layout
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Single column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### Hide on Mobile
```javascript
<div className="hidden md:block">
  {/* Visible on tablet and desktop only */}
</div>
```

### Show on Mobile
```javascript
<div className="md:hidden">
  {/* Visible on mobile only */}
</div>
```

---

## 🐛 Debugging Tips

### Check Language Issue
```javascript
// In browser console
localStorage.setItem('language', 'en'); // Reset language
window.location.reload();
```

### Debug Form Values
```javascript
const { values } = useForm(...);
console.log('Form values:', values);
```

### Check Firebase Connection
```javascript
import { db } from '../services/firebase';
console.log('Firestore instance:', db);
```

### View API Response
```javascript
const response = await verifyCertificate('UUS-2024-001', 'John');
console.log('Certificate data:', response);
```

---

## 📦 Build & Deployment

### Development Build
```bash
npm run dev
# Runs on http://localhost:5173
```

### Production Build
```bash
npm run build
# Creates /dist folder with optimized files
```

### Preview Production Build
```bash
npm run preview
# Preview the production build locally
```

### Deploy to Firebase Hosting
```bash
firebase deploy
```

### Deploy to Vercel
```bash
vercel
```

---

## 🔑 Key File Locations

| Task | File |
|------|------|
| Add Translation | `src/utils/translations.js` |
| Change Colors | `tailwind.config.js` |
| Add Route | `src/App.jsx` |
| Update Header | `src/components/Header.jsx` |
| Database Queries | `src/services/database.js` |
| Firebase Config | `src/services/firebase.js` |
| Global State | `src/utils/store.js` |
| Custom Hooks | `src/hooks/index.js` |

---

## 📊 Environment Variables

```env
# Required for Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Optional
VITE_ADMIN_PASSWORD=admin123
```

---

## 🎨 Tailwind CSS Quick Classes

```javascript
// Colors
className="text-blue-600 bg-gray-50 border-red-200"

// Spacing
className="p-4 m-2 gap-3"

// Layout
className="flex justify-center items-center"
className="grid grid-cols-2 md:grid-cols-4"

// Responsive
className="text-sm md:text-base lg:text-lg"

// Hover & Transitions
className="hover:bg-blue-700 transition-colors"

// Display
className="hidden md:block"
className="md:hidden"
```

---

## 🚨 Common Errors & Solutions

| Error | Solution |
|-------|----------|
| Firebase not initializing | Check .env.local has all credentials |
| Forms not submitting | Verify Firestore collection exists |
| Translations not showing | Clear browser cache, restart dev server |
| Images not loading | Check Firebase Storage URLs and rules |
| Admin login not working | Change password in AdminDashboard.jsx |
| Mobile menu not working | Check Tailwind classes in Header.jsx |

---

## 📚 Useful Links

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Firebase](https://firebase.google.com/docs)
- [Vite](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/en/main)

---

## 💡 Pro Tips

1. **Use ESLint** - Run `npm run lint` to find code issues
2. **Browser DevTools** - F12 to debug React components
3. **React DevTools Extension** - Inspect component tree
4. **Firebase Console** - Monitor Firestore queries in real-time
5. **Lighthouse** - Test performance, accessibility, best practices
6. **Mobile View** - Ctrl+Shift+M in Chrome to test mobile

---

**Quick Reference Version**: 1.0
**Last Updated**: May 1, 2026
