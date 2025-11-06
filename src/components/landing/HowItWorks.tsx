import { Rocket, Target, BarChart2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Conecte & Configure",
    description: "Integre seu WhatsApp em minutos e defina suas primeiras campanhas e grupos de clientes.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Automatize & Engaje",
    description: "Agende suas ofertas, crie gatilhos automáticos e deixe nossa plataforma trabalhar por você.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: "Analise & Otimize",
    description: "Acompanhe os resultados em tempo real e ajuste suas estratégias para vender cada vez mais.",
  },
];

const HowItWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-card/20">
      <div className={cn("container opacity-0", inView && "animate-fade-up")}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comece a vender no automático em 3 passos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Nosso processo foi desenhado para ser rápido, simples e focado em gerar resultados desde o primeiro dia.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-card/50 border-border/50 text-center h-full">
                  <CardHeader className="items-center">
                    <div className="bg-background rounded-full p-4 border mb-4">
                      {step.icon}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription className="pt-2">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;