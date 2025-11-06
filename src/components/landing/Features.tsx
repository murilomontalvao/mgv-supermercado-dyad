import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarClock, Users, BarChart, Zap, Code, LifeBuoy } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <CalendarClock className="w-8 h-8 text-primary" />,
    title: "Agendamento Inteligente",
    description: "Programe suas ofertas para os melhores horários e dias da semana, garantindo o máximo impacto.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Segmentação de Grupos",
    description: "Crie grupos por filial ou perfil de cliente e envie a mensagem certa para a pessoa certa.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Relatórios Completos",
    description: "Acompanhe o desempenho das suas campanhas com métricas claras e objetivas para tomar decisões.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Gatilhos Automáticos",
    description: "Envie mensagens de boas-vindas, aniversário ou lembretes de forma 100% automática.",
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "API de Integração",
    description: "Conecte o Meu Grupo VIP com seu sistema de PDV ou CRM e potencialize ainda mais suas ações.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-primary" />,
    title: "Suporte Humanizado",
    description: "Nossa equipe de especialistas está pronta para te ajudar a extrair o máximo da ferramenta.",
  },
];

const Features = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-card/20">
      <div className={cn("container opacity-0", inView && "animate-fade-up")}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Funcionalidades pensadas para o seu resultado
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Tudo que você precisa para vender mais, com menos esforço. Uma plataforma completa para automação de ponta a ponta.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-border/50 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                {feature.icon}
                <CardTitle className="pt-4">{feature.title}</CardTitle>
                <CardDescription className="pt-1">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;