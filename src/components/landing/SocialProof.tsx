import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const logos = [
  "Supermercado Alfa",
  "Rede Beta",
  "Atacarejo Gama",
  "Varejão Delta",
  "Mercado Épsilon",
  "Hiper Zeta",
  "Comercial Eta",
  "Empório Teta",
];

const SocialProof = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-card/20">
      <div className={cn("container opacity-0", inView && "animate-fade-up")}>
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mais de <span className="text-primary">120.000 clientes</span> já confiam na nossa automação
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Junte-se às maiores redes de supermercados e atacarejos do Brasil que estão transformando a comunicação e impulsionando as vendas.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="bg-card/50 border-border/50">
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <span className="text-lg font-semibold text-center text-muted-foreground">{logo}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;