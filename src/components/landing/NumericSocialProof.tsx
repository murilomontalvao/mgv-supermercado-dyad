import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { cn } from "@/lib/utils";

const StatCard = ({ value, label, suffix, inView }: { value: number, label: string, suffix: string, inView: boolean }) => {
  const count = useAnimatedCounter(value, 2000, inView);
  return (
    <div className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-primary">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground mt-2 text-lg">{label}</p>
    </div>
  );
};

const testimonials = [
  {
    name: "João Silva",
    role: "Gerente de Marketing, Supermercado Alfa",
    avatar: "/placeholder.svg",
    quote: "A ferramenta revolucionou nossa comunicação. As vendas via WhatsApp cresceram 60% em 3 meses. É simplesmente indispensável hoje.",
  },
  {
    name: "Maria Oliveira",
    role: "Diretora Comercial, Rede Beta",
    avatar: "/placeholder.svg",
    quote: "O suporte é incrível e a plataforma é muito fácil de usar. Nossos clientes amam receber as ofertas em primeira mão e o retorno é imediato.",
  },
];

const NumericSocialProof = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className={cn("container opacity-0", inView && "animate-fade-up")}>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Resultados que falam por si
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Os números comprovam: automação de WhatsApp é o caminho mais curto para o crescimento do seu supermercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <StatCard value={45} suffix="%" label="Aumento médio em Vendas" inView={inView} />
          <StatCard value={12} suffix="h/semana" label="Economizadas pela equipe" inView={inView} />
          <StatCard value={98} suffix="%" label="Taxa de Abertura das mensagens" inView={inView} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <blockquote className="text-lg text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 mt-6">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumericSocialProof;