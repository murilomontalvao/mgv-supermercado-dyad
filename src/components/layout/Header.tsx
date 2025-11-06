import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Header = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20quero%20automatizar%20os%20grupos%20do%20meu%20supermercado%20com%20a%20ferramenta%20Meu%20Grupo%20VIP.%20Quero%20ver%20os%20planos%20da%20Black%20Friday!";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Meu Grupo VIP Logo" className="h-9 w-auto" />
          <span className="font-bold text-lg hidden sm:inline-block font-heading">Meu Grupo VIP</span>
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="hidden sm:inline-flex">
            <MessageCircle className="mr-2" /> Fale com um especialista
          </Button>
          <Button size="icon" className="sm:hidden">
            <MessageCircle />
          </Button>
        </a>
      </div>
    </header>
  );
};