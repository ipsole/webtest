import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { ModalProvider } from './context/ModalContext';
import Services from './pages/Services';
import ServicesWebDevelopment from './pages/ServicesWebDevelopment';
import ServicesWebDevelopmentWebAppDevelopment from './pages/ServicesWebDevelopmentWebAppDevelopment';
import ServicesWebDevelopmentWebAppDevelopmentContact from './pages/ServicesWebDevelopmentWebAppDevelopmentContact';
import ServicesWebDevelopmentSaasWebsiteDevelopment from './pages/ServicesWebDevelopmentSaasWebsiteDevelopment';
import ServicesWebDevelopmentSaasWebsiteDevelopmentContact from './pages/ServicesWebDevelopmentSaasWebsiteDevelopmentContact';
import ServicesWebDevelopmentContact from './pages/ServicesWebDevelopmentContact';
import ServicesContentCreation from './pages/ServicesContentCreation';
import ServicesContentCreationShortFormVideoEditing from './pages/ServicesContentCreationShortFormVideoEditing';
import ServicesContentCreationShortFormVideoEditingContact from './pages/ServicesContentCreationShortFormVideoEditingContact';
import ServicesContentCreationLongFormVideoEditing from './pages/ServicesContentCreationLongFormVideoEditing';
import ServicesContentCreationLongFormVideoEditingContact from './pages/ServicesContentCreationLongFormVideoEditingContact';
import ServicesContentCreationContact from './pages/ServicesContentCreationContact';
import ServicesContentCreationBeatMaking from './pages/ServicesContentCreationBeatMaking';
import ServicesContentCreationBeatMakingContact from './pages/ServicesContentCreationBeatMakingContact';
import ServicesContentCreationAiVideoProduction from './pages/ServicesContentCreationAiVideoProduction';
import ServicesContentCreationAiVideoProductionContact from './pages/ServicesContentCreationAiVideoProductionContact';
import ServicesContact from './pages/ServicesContact';
import ServicesBrandingGrowth from './pages/ServicesBrandingGrowth';
import ServicesBrandingGrowthSocialMediaManagement from './pages/ServicesBrandingGrowthSocialMediaManagement';
import ServicesBrandingGrowthSocialMediaManagementContact from './pages/ServicesBrandingGrowthSocialMediaManagementContact';
import ServicesBrandingGrowthPitchDeckDesign from './pages/ServicesBrandingGrowthPitchDeckDesign';
import ServicesBrandingGrowthPitchDeckDesignContact from './pages/ServicesBrandingGrowthPitchDeckDesignContact';
import ServicesBrandingGrowthGraphicDesignServices from './pages/ServicesBrandingGrowthGraphicDesignServices';
import ServicesBrandingGrowthGraphicDesignServicesContact from './pages/ServicesBrandingGrowthGraphicDesignServicesContact';
import ServicesBrandingGrowthContact from './pages/ServicesBrandingGrowthContact';
import ServicesBrandingGrowthConsultancyServices from './pages/ServicesBrandingGrowthConsultancyServices';
import ServicesBrandingGrowthConsultancyServicesContact from './pages/ServicesBrandingGrowthConsultancyServicesContact';
import ServicesBrandingGrowthBrandIdentityDesign from './pages/ServicesBrandingGrowthBrandIdentityDesign';
import ServicesBrandingGrowthBrandIdentityDesignContact from './pages/ServicesBrandingGrowthBrandIdentityDesignContact';
import ServicesAiAutomation from './pages/ServicesAiAutomation';
import ServicesAiAutomationContact from './pages/ServicesAiAutomationContact';
import ServicesAiAutomationAutomationServices from './pages/ServicesAiAutomationAutomationServices';
import ServicesAiAutomationAutomationServicesContact from './pages/ServicesAiAutomationAutomationServicesContact';
import ServicesAiAutomationAiAgents from './pages/ServicesAiAutomationAiAgents';
import ServicesAiAutomationAiAgentsContact from './pages/ServicesAiAutomationAiAgentsContact';
import Policy from './pages/Policy';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';
import About from './pages/About';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-gray-100 transition-colors duration-300 relative z-0">

          <CustomCursor />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<ServicesWebDevelopment />} />
            <Route path="/services/web-development/web-app-development" element={<ServicesWebDevelopmentWebAppDevelopment />} />
            <Route path="/services/web-development/web-app-development/contact" element={<ServicesWebDevelopmentWebAppDevelopmentContact />} />
            <Route path="/services/web-development/saas-website-development" element={<ServicesWebDevelopmentSaasWebsiteDevelopment />} />
            <Route path="/services/web-development/saas-website-development/contact" element={<ServicesWebDevelopmentSaasWebsiteDevelopmentContact />} />
            <Route path="/services/web-development/contact" element={<ServicesWebDevelopmentContact />} />
            <Route path="/services/content-creation" element={<ServicesContentCreation />} />
            <Route path="/services/content-creation/short-form-video-editing" element={<ServicesContentCreationShortFormVideoEditing />} />
            <Route path="/services/content-creation/short-form-video-editing/contact" element={<ServicesContentCreationShortFormVideoEditingContact />} />
            <Route path="/services/content-creation/long-form-video-editing" element={<ServicesContentCreationLongFormVideoEditing />} />
            <Route path="/services/content-creation/long-form-video-editing/contact" element={<ServicesContentCreationLongFormVideoEditingContact />} />
            <Route path="/services/content-creation/contact" element={<ServicesContentCreationContact />} />
            <Route path="/services/content-creation/beat-making" element={<ServicesContentCreationBeatMaking />} />
            <Route path="/services/content-creation/beat-making/contact" element={<ServicesContentCreationBeatMakingContact />} />
            <Route path="/services/content-creation/ai-video-production" element={<ServicesContentCreationAiVideoProduction />} />
            <Route path="/services/content-creation/ai-video-production/contact" element={<ServicesContentCreationAiVideoProductionContact />} />
            <Route path="/services/contact" element={<ServicesContact />} />
            <Route path="/services/branding-growth" element={<ServicesBrandingGrowth />} />
            <Route path="/services/branding-growth/social-media-management" element={<ServicesBrandingGrowthSocialMediaManagement />} />
            <Route path="/services/branding-growth/social-media-management/contact" element={<ServicesBrandingGrowthSocialMediaManagementContact />} />
            <Route path="/services/branding-growth/pitch-deck-design" element={<ServicesBrandingGrowthPitchDeckDesign />} />
            <Route path="/services/branding-growth/pitch-deck-design/contact" element={<ServicesBrandingGrowthPitchDeckDesignContact />} />
            <Route path="/services/branding-growth/graphic-design-services" element={<ServicesBrandingGrowthGraphicDesignServices />} />
            <Route path="/services/branding-growth/graphic-design-services/contact" element={<ServicesBrandingGrowthGraphicDesignServicesContact />} />
            <Route path="/services/branding-growth/contact" element={<ServicesBrandingGrowthContact />} />
            <Route path="/services/branding-growth/consultancy-services" element={<ServicesBrandingGrowthConsultancyServices />} />
            <Route path="/services/branding-growth/consultancy-services/contact" element={<ServicesBrandingGrowthConsultancyServicesContact />} />
            <Route path="/services/branding-growth/brand-identity-design" element={<ServicesBrandingGrowthBrandIdentityDesign />} />
            <Route path="/services/branding-growth/brand-identity-design/contact" element={<ServicesBrandingGrowthBrandIdentityDesignContact />} />
            <Route path="/services/ai-automation" element={<ServicesAiAutomation />} />
            <Route path="/services/ai-automation/contact" element={<ServicesAiAutomationContact />} />
            <Route path="/services/ai-automation/automation-services" element={<ServicesAiAutomationAutomationServices />} />
            <Route path="/services/ai-automation/automation-services/contact" element={<ServicesAiAutomationAutomationServicesContact />} />
            <Route path="/services/ai-automation/ai-agents" element={<ServicesAiAutomationAiAgents />} />
            <Route path="/services/ai-automation/ai-agents/contact" element={<ServicesAiAutomationAiAgentsContact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          <Modals />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
