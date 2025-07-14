import { Card, CardContent } from "@/components/ui/card";
import { X, Check, Smartphone, Bot, DollarSign, Heart } from "lucide-react";

export const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Smartphone,
      title: "Zero Barreira de Entrada",
      others: "Forçam clientes a baixar apps",
      verticalzap: "Funciona no WhatsApp que já usam",
      description: "Seus clientes não precisam aprender nada novo - eles já sabem usar o WhatsApp!"
    },
    {
      icon: Bot,
      title: "IA Brasileira Contextual",
      others: "Bots robóticos que irritam",
      verticalzap: "IA que entende linguagem e cultura brasileira",
      description: "Nossa IA foi treinada especificamente para o mercado brasileiro e suas particularidades."
    },
    {
      icon: DollarSign,
      title: "Custo Democrático",
      others: "Sistemas caros e complexos",
      verticalzap: "Preço justo para qualquer negócio",
      description: "Desde o pequeno empreendedor até grandes empresas podem usar o VerticalZap."
    },
    {
      icon: Heart,
      title: "Suporte Humanizado",
      others: "Suporte técnico frio",
      verticalzap: "Time brasileiro que entende seu negócio",
      description: "Suporte real, em português, por pessoas que entendem o mercado brasileiro."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que Escolher VerticalZap ao <span className="gradient-text">Invés da Concorrência?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <differential.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{differential.title}</h3>
                </div>

                <div className="space-y-4">
                  {/* Others */}
                  <div className="flex items-start space-x-3 p-3 bg-destructive/10 rounded-lg">
                    <X className="text-destructive mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="font-medium text-destructive-foreground">Outros:</p>
                      <p className="text-sm text-muted-foreground">{differential.others}</p>
                    </div>
                  </div>

                  {/* VerticalZap */}
                  <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="font-medium text-primary">VerticalZap:</p>
                      <p className="text-sm text-foreground">{differential.verticalzap}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic">
                    {differential.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">A Diferença Está nos Detalhes</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enquanto outros focam em tecnologia complexa, nós focamos em <strong>resultados simples</strong>. 
              O VerticalZap foi criado pensando no empresário brasileiro que quer vender mais, 
              fidelizar melhor e crescer sem complicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
