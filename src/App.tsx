/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import LayananSection from './components/LayananSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import HowItWorkSection from './components/HowItWorkSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="antialiased">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <LayananSection />
      <PortfolioSection />
      <AboutSection />
      <HowItWorkSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
}
