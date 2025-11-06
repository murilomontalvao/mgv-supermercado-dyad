import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Preciso ter conhecimento técnico para usar a plataforma?",
    answer: "Não! Nossa plataforma foi desenhada para ser extremamente intuitiva. Em poucos cliques você já consegue agendar suas primeiras campanhas. Além disso, oferecemos um treinamento inicial e suporte contínuo.",
  },
  {
    question: "A ferramenta é segura? Meus dados e dos meus clientes estão protegidos?",
    answer: "Sim, a segurança é nossa prioridade máxima. Utilizamos a API oficial do WhatsApp, o que garante total conformidade e segurança. Todos os dados são criptografados e seguimos as melhores práticas de proteção de dados.",
  },
  {
    question: "Posso integrar com meu sistema de frente de caixa (PDV)?",
    answer: "Sim, nosso plano Enterprise oferece uma API de integração que permite conectar o Meu Grupo VIP com outros sistemas, como seu PDV, CRM ou sistema de e-commerce, potencializando ainda mais suas estratégias.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte humanizado via WhatsApp e e-mail em todos os planos. No plano Profissional, você tem acesso a suporte prioritário, e no Enterprise, um gerente de contas dedicado para te auxiliar estrategicamente.",
  },
  {
    question: "Existe um período de teste?",
    answer: "Não oferecemos um período de teste gratuito, mas temos uma política de satisfação garantida. Se em 7 dias você não estiver satisfeito com os resultados, devolvemos seu dinheiro. Fale com um de nossos especialistas para entender melhor.",
  },
];

const Faq = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-card/20">
      <div className={cn("container max-w-4xl mx-auto opacity-0", inView && "animate-fade-up")}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Encontre aqui as respostas para as perguntas mais comuns sobre nossa plataforma.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;