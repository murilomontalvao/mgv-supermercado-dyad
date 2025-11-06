import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20quero%20automatizar%20os%20grupos%20do%20meu%20supermercado%20com%20a%20ferramenta%20Meu%20Grupo%20VIP.";

  return (
    <footer className="border-t border-border/40">
      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Pronto para transformar sua comunicação?</h3>
            <p className="text-muted-foreground">Fale com um de nossos especialistas e veja na prática como podemos impulsionar suas vendas.</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg font-semibold h-14 px-8">
                Quero Vender Mais Agora
                <ArrowRight className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center text-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <img src="/logo.png" alt="Meu Grupo VIP Logo" className="h-6 w-auto" />
            <span>© {new Date().getFullYear()} Meu Grupo VIP. Todos os direitos reservados.</span>
          </div>
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;