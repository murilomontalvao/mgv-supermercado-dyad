import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Essencial",
    price: "R$ 197",
    description: "Para quem está começando a automatizar.",
    features: [
      "1 Número de WhatsApp",
      "Até 10 grupos",
      "Agendamento de mensagens",
      "Relatórios básicos",
    ],
    cta: "Começar Agora",
  },
  {
    name: "Profissional",
    price: "R$ 397",
    description: "O mais popular para redes em crescimento.",
    features: [
      "3 Números de WhatsApp",
      "Grupos ilimitados",
      "Gatilhos automáticos",
      "Suporte prioritário",
    ],
    cta: "Falar com Especialista",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Customizado",
    description: "Para grandes redes com necessidades específicas.",
    features: [
      "Números ilimitados",
      "API de integração",
      "Gerente de contas dedicado",
      "Treinamento de equipe",
    ],
    cta: "Solicitar Contato",
  },
];

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20quero%20saber%20mais%20sobre%20os%20planos%20do%20Meu%20Grupo%20VIP.";

  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className={cn("container opacity-0", inView && "animate-fade-up")}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Planos flexíveis para o tamanho do seu negócio
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta à sua realidade e comece a ver os resultados hoje mesmo.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn("bg-card/50 border-border/50 flex flex-col h-full", plan.popular && "border-primary shadow-2xl shadow-primary/10")}>
              <CardHeader className="relative">
                {plan.popular && <div className="absolute top-0 right-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-md">MAIS POPULAR</div>}
                <CardTitle className="text-2xl pt-6">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price.startsWith("R$") && <span className="text-muted-foreground">/mês</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" className="w-full" variant={plan.popular ? "default" : "secondary"}>
                    {plan.cta}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;