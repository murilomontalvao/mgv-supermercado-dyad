import { Header } from "@/components/layout/Header";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        {/* As próximas seções serão adicionadas aqui */}
      </main>
      <footer className="py-8">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;