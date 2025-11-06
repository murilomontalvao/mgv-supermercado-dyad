import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20quero%20automatizar%20os%20grupos%20do%20meu%20supermercado%20com%20a%20ferramenta%20Meu%20Grupo%20VIP.%20Quero%20ver%20os%20planos%20da%20Black%20Friday!";

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter leading-tight">
          Automatize os Grupos de Ofertas do seu Supermercado
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
          Transforme seu WhatsApp em uma máquina de vendas com a automação Nº1 para supermercados e atacarejos.
        </p>
        <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            <span>Comunicação direta e em massa</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            <span>Aumento de vendas comprovado</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            <span>Fidelização de clientes no piloto automático</span>
          </li>
        </ul>
        <div className="pt-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg font-semibold h-14 px-8 animate-pulse-glow">
              Quero Automatizar Agora
              <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <img 
          src="/placeholder.svg" 
          alt="Demonstração da plataforma Meu Grupo VIP" 
          className="rounded-lg shadow-2xl shadow-primary/10 w-full h-auto object-cover"
          width={1200}
          height={800}
        />
      </div>
    </section>
  );
};

export default Hero;