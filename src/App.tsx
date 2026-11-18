import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { LanguageProvider } from './i18n/LanguageContext';
import { AboutPage } from './pages/AboutPage';
import { BookPage } from './pages/BookPage';
import { ContactPage } from './pages/ContactPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { FaqPage } from './pages/FaqPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { LocationPage } from './pages/LocationPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { RoomsPage } from './pages/RoomsPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:slug" element={<RoomDetailPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
