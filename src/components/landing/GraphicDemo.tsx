import { CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const GraphicDemo = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className={cn("container grid lg:grid-cols-2 gap-12 items-center opacity-0", inView && "animate-fade-up")}>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Veja como é simples transformar sua comunicação
          </h2>
          <p className="text-lg text-muted-foreground">
            Em poucos passos, seus grupos de WhatsApp se tornam canais de venda poderosos e automatizados, trabalhando para você 24/7.
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Conecte seu WhatsApp:</strong> Integração rápida e segura em menos de 5 minutos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Crie e segmente seus grupos:</strong> Organize seus clientes por loja, interesse ou perfil de compra.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Agende suas ofertas:</strong> Programe todas as suas campanhas da semana ou do mês de uma só vez.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Demonstração da plataforma Meu Grupo VIP" 
            className="rounded-lg shadow-2xl shadow-primary/10 w-full h-auto object-cover max-w-lg"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default GraphicDemo;