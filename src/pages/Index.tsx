import { Header } from "@/components/layout/Header";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import GraphicDemo from "@/components/landing/GraphicDemo";
import Features from "@/components/landing/Features";
import NumericSocialProof from "@/components/landing/NumericSocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import PlatformDemo from "@/components/landing/PlatformDemo";
import BlackFriday from "@/components/landing/BlackFriday";
import Pricing from "@/components/landing/Pricing";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <GraphicDemo />
        <Features />
        <NumericSocialProof />
        <HowItWorks />
        <PlatformDemo />
        <BlackFriday />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;