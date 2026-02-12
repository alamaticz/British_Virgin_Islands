import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IconLinks from './components/IconLinks';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AMLCFTLayout from './pages/AMLCFTLayout';
import AMLCFTPage from './pages/AMLCFTPage';

// Placeholder pages to prevent routing errors until full pages are built
const PlaceholderPage = ({ title }) => (
  <div className="py-20 bvi-container text-center">
    <h1 className="text-4xl font-serif text-bvi-navy mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction as part of the UI recreation.</p>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <IconLinks />
    <NewsSection />
  </>
);

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white relative">
      <Header />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* AML/CFT Section with Sidebar Layout */}
          <Route path="/amlcft" element={<AMLCFTLayout />}>
            <Route index element={<AMLCFTPage title="AML/CFT Overview" />} />
            <Route path="policies" element={<AMLCFTPage title="AML/CFT Policies" />} />
            <Route path="strategies" element={<AMLCFTPage title="AML/CFT Strategies" />} />
            <Route path="guidance" element={<AMLCFTPage title="Guidance" />} />
            <Route path="faqs" element={<AMLCFTPage title="FAQs" />} />
            <Route path="fatf-guidance" element={<AMLCFTPage title="FATF Guidance" />} />
            <Route path="cfatf" element={<AMLCFTPage title="CFATF" />} />
            <Route path="public-statements" element={<AMLCFTPage title="Public Statements" />} />
            <Route path="legislation" element={<AMLCFTPage title="Legislation" />} />
            <Route path="risk-assessments" element={<AMLCFTPage title="Risk Assessments" />} />
            <Route path="media" element={<AMLCFTPage title="AML/CFT Media" />} />
          </Route>

          {/* Placeholder Routes for Menu Items */}
          <Route path="/about-us" element={<PlaceholderPage title="About Us" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
