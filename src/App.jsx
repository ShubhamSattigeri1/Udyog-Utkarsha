import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CollegeTrainingProgrammesPage from './pages/CollegeTrainingProgrammesPage';
import Publications from './components/Publications';
import CertificateVerification from './components/CertificateVerification';
import ContactForm from './components/ContactForm';
import AdminDashboard from './pages/AdminDashboard';
import DonationForm from './components/DonationForm';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/college-programmes" element={<CollegeTrainingProgrammesPage />} />
              <Route path="/school-programmes" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/health-camps" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/verify-certificate" element={<CertificateVerification />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/donate" element={<DonationForm />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* Placeholder routes */}
              <Route path="/other-programmes" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/agriculture" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/women-empowerment" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/environmental" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/awards" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/success-stories" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/testimonials" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/join-socially" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/govt-resolutions" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/press-notes" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/events" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/csr" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
              <Route path="/portal" element={<div className="container mx-auto py-12"><h1 className="text-3xl font-bold">Coming Soon</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
