import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AlertBar from './components/AlertBar';
import Hero from './components/Hero';
import IconLinks from './components/IconLinks';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AMLCFTLayout from './pages/AMLCFTLayout';
import AMLCFTPage from './pages/AMLCFTPage';

const Home = () => (
  <>
    <Hero />
    <IconLinks />
    <NewsSection />
    <AboutSection />
  </>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header />
      <Navbar />
      <AlertBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amlcft" element={<AMLCFTLayout />}>
            <Route index element={<AMLCFTPage title="AML/CFT" content="The Virgin Islands, as an International Finance Centre, remains committed to the global fight against money laundering and terrorist financing." />} />
            <Route path="policies" element={<AMLCFTPage title="AML/CFT Policies" />} />
            <Route path="strategies" element={<AMLCFTPage title="AML/CFT Strategies" />} />
            <Route path="guidance" element={<AMLCFTPage title="Guidance" />} />
            <Route path="faqs" element={<AMLCFTPage title="FAQs" />} />
            <Route path="fatf-guidance" element={<AMLCFTPage title="FATF Guidance" />} />
            <Route path="cfatf" element={<AMLCFTPage title="CFATF Public Statements" />} />
            <Route path="public-statements" element={<AMLCFTPage title="Public Statements" />} />
            <Route path="legislation" element={<AMLCFTPage title="Legislation" />} />
            <Route path="risk-assessments" element={<AMLCFTPage title="Risk Assessments" />} />
            <Route path="media" element={<AMLCFTPage title="AML/CFT Media" />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
