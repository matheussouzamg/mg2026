import React, { useState, useEffect } from 'react';
import { initialSiteConfig, courseModulesData, carouselResultsData, galleryResultsData, testimonialsData, faqData } from './config/siteData';
import { SiteConfig, ResultItem } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoVSL } from './components/VideoVSL';
import { ResultsCarousel } from './components/ResultsCarousel';
import { AboutExpert } from './components/AboutExpert';
import { CourseModules } from './components/CourseModules';
import { TargetAudience } from './components/TargetAudience';
import { ProfessionalOpportunity } from './components/ProfessionalOpportunity';
import { ResultsGallery } from './components/ResultsGallery';
import { Testimonials } from './components/Testimonials';
import { OfferSection } from './components/OfferSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';
import { LegalModal } from './components/LegalModal';
import { CustomizerModal } from './components/CustomizerModal';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('matheus_smp_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        const isPreviousImage = !parsed.expertPhotoUrl || parsed.expertPhotoUrl.includes('matheus_souza_clinic_1790667637437');
        return {
          ...initialSiteConfig,
          ...parsed,
          expertPhotoUrl: isPreviousImage ? initialSiteConfig.expertPhotoUrl : parsed.expertPhotoUrl,
        };
      }
    } catch (e) {
      console.error('Failed to load local config', e);
    }
    return initialSiteConfig;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeLightboxItem, setActiveLightboxItem] = useState<ResultItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleSaveConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('matheus_smp_config', JSON.stringify(newConfig));
    } catch (e) {
      console.error('Failed to save local config', e);
    }
  };

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        checkoutUrl={config.checkoutUrl}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Headline Principal */}
        <Hero onCtaClick={scrollToOffer} />

        {/* 2. Video VSL Player */}
        <VideoVSL
          videoUrl={config.videoVslUrl}
          posterUrl={config.videoPosterUrl}
          onEditVideo={() => setIsCustomizerOpen(true)}
        />

        {/* 3. Prova Visual / Resultados (Carrossel 1) */}
        <ResultsCarousel
          items={carouselResultsData}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 4. Quem é Matheus Souza */}
        <AboutExpert
          nome={config.nome}
          instagram={config.instagram}
          instagramUrl={config.instagramUrl}
          photoUrl={config.expertPhotoUrl}
          bio={config.expertBio}
          onCtaClick={scrollToOffer}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 5. O Que Você Vai Aprender (10 Módulos) */}
        <CourseModules modules={courseModulesData} />

        {/* 6. Para Quem É o Curso */}
        <TargetAudience onCtaClick={scrollToOffer} />

        {/* 7. Oportunidade Profissional */}
        <ProfessionalOpportunity />

        {/* 8. Galeria de Resultados (Segunda Galeria com Filtros) */}
        <ResultsGallery
          items={galleryResultsData}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 9. Depoimentos */}
        <Testimonials
          testimonials={testimonialsData}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 10 & 11. Oferta & Garantia */}
        <OfferSection
          config={config}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 12. FAQ (Perguntas Frequentes) */}
        <FAQSection items={faqData} />

        {/* 13. CTA Final */}
        <FinalCTA onCtaClick={scrollToOffer} />

        {/* 15. Instagram Section */}
        <InstagramSection
          instagram={config.instagram}
          instagramUrl={config.instagramUrl}
          expertPhotoUrl={config.expertPhotoUrl}
        />
      </main>

      {/* 16. Rodapé */}
      <Footer
        config={config}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* 14. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp
        whatsappNumber={config.whatsappNumber}
        whatsappMessage={config.whatsappMessage}
      />

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      {/* Interactive Legal Modal (Terms & Privacy) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* 18. Administration / Live Quick Customizer */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />
    </div>
  );
}
