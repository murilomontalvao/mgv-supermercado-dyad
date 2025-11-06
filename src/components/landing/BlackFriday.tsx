import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const BlackFriday = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20quero%20automatizar%20os%20grupos%20do%20meu%20supermercado%20com%20a%20ferramenta%20Meu%20Grupo%20VIP.%20Quero%20ver%20os%20planos%20da%20Black%20Friday!";

  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className={cn("container opacity-0", inView && "animate-fade-up")}>
        <div className="rounded-lg p-8 md:p-12 border-l-4 border-accent-orange" style={{ background: 'linear-gradient(135deg, hsl(var(--card)) 0%, #1E2A4A 100%)' }}>
          <div className="grid md:grid-cols-3 items-center gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <Gift className="w-8 h-8 text-accent-orange" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Oferta Especial Black Friday
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Não espere a concorrência sair na frente. Garanta <strong className="text-accent-orange">60% de desconto</strong> em qualquer plano anual e comece a vender mais ainda este mês. Oferta por tempo limitado!
              </p>
            </div>
            <div className="text-center md:text-right">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg font-semibold h-14 px-8 bg-accent-orange hover:bg-orange-700 text-white">
                  Garantir meu Desconto
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackFriday;