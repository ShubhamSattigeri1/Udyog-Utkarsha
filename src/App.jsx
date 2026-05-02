import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './components/AboutUs';
import Programmes from './components/Programmes';
import Publications from './components/Publications';
import CertificateVerification from './components/CertificateVerification';
import ContactForm from './components/ContactForm';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/programmes" element={<Programmes />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/verify-certificate" element={<CertificateVerification />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
