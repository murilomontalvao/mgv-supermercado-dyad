import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const PlatformDemo = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className={cn("container text-center opacity-0", inView && "animate-fade-up")}>
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Uma plataforma robusta, com uma interface intuitiva
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Gerencie múltiplos grupos, agende centenas de mensagens e analise relatórios detalhados em um só lugar.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Dashboard da plataforma Meu Grupo VIP" 
            className="rounded-lg border-2 border-border/50 shadow-2xl shadow-primary/10 w-full h-auto object-cover max-w-5xl"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformDemo;