import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
export const TestimonialsSection = () => {
  const testimonials = [{
    name: "Marina Silva",
    business: "Boutique Eleganza",
    text: "A IA do VerticalZap entende o que meus clientes querem antes deles mesmos saberem. Meu faturamento aumentou 65% em apenas 3 meses!",
    rating: 5,
    image: "M"
  }, {
    name: "Carlos Roberto",
    business: "Loja de Esportes Champion",
    text: "Meus clientes agora perguntam quantos pontos têm antes mesmo de escolher o produto. A fidelização virou automática!",
    rating: 5,
    image: "C"
  }, {
    name: "Ana Beatriz",
    business: "E-commerce Moda & Estilo",
    text: "A segmentação do VerticalZap dobrou nossa taxa de conversão. É impressionante como a IA acerta o timing das ofertas.",
    rating: 5,
    image: "A"
  }, {
    name: "Roberto Martins",
    business: "Restaurante Premium",
    text: "Nunca mais esqueci o aniversário de um cliente. A IA cuida de tudo e ainda sugere o prato favorito de cada um!",
    rating: 5,
    image: "R"
  }, {
    name: "Fernanda Costa",
    business: "Joalheria Luxo",
    text: "Agora eu sei exatamente qual cliente vai comprar antes dele saber. O VerticalZap transformou meu relacionamento com os clientes.",
    rating: 5,
    image: "F"
  }, {
    name: "Paulo Santos",
    business: "Farmácia Saúde Total",
    text: "Os clientes adoram receber lembretes personalizados no WhatsApp. Nossa retenção aumentou 80% desde que começamos a usar.",
    rating: 5,
    image: "P"
  }];
  return <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que Nossos Clientes Estão <span className="gradient-text">Falando</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Relacionamentos com Clientes transformados com o VerticalZap</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </div>
                  <Quote className="text-primary/30" size={24} />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={16} />)}
                </div>

                <p className="text-sm leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-0">
          
          
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte Ativo</div>
          </div>
        </div>
      </div>
    </section>;
};