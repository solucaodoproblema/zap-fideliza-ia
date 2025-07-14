import { Card, CardContent } from "@/components/ui/card";
import { Bot, Star, Target, Clock, BarChart3 } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "IA Conversacional Avançada",
      subtitle: "Sua Nova Vendedora que Nunca Dorme",
      benefits: [
        "Responde perguntas dos clientes 24/7",
        "Aprende com cada conversa",
        "Sugere produtos baseado no histórico",
        "Converte dúvidas em vendas automaticamente"
      ],
      testimonial: '"A IA do VerticalZap entende o que meus clientes querem antes deles mesmos saberem" - Marina, Boutique Eleganza',
      color: "primary"
    },
    {
      icon: Star,
      title: "Sistema de Pontos Inteligente",
      subtitle: "Gamificação que envolve os Clientes",
      benefits: [
        "Pontos automáticos a cada compra",
        "Hipersegmentação dos seus clientes",
        "Recompensas que geram mais vendas",
        "Lembretes inteligentes para usar pontos"
      ],
      testimonial: '"Meus clientes agora perguntam quantos pontos têm antes mesmo de escolher o produto" - Carlos, Loja de Esportes',
      color: "secondary"
    },
    {
      icon: Target,
      title: "Segmentação Comportamental",
      subtitle: "Mensagens Certeiras para Cada Tipo de Cliente",
      benefits: [
        "Análise automática do comportamento",
        "Campanhas personalizadas por perfil",
        "Timing perfeito para cada abordagem",
        "Reativação inteligente de clientes inativos"
      ],
      testimonial: '"A segmentação do VerticalZap dobrou nossa taxa de conversão" - Ana, E-commerce de Moda',
      color: "primary"
    },
    {
      icon: Clock,
      title: "Automação de Relacionamento",
      subtitle: "Relacionamento em Escala Humana",
      benefits: [
        "Parabéns automáticos em datas especiais",
        "Follow-up pós-compra personalizado",
        "Pesquisas de satisfação inteligentes",
        "Indicações e referências automatizadas"
      ],
      testimonial: '"Nunca mais esqueci o aniversário de um cliente. A IA cuida de tudo!" - Roberto, Restaurante Premium',
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Dashboard Analítico",
      subtitle: "Inteligência de Negócio em Tempo Real",
      benefits: [
        "Métricas de fidelização ao vivo",
        "Análise de LTV (Lifetime Value)",
        "Identificação de clientes em risco",
        "Previsões de comportamento futuro"
      ],
      testimonial: '"Agora eu sei exatamente qual cliente vai comprar antes dele saber" - Fernanda, Joalheria Luxo',
      color: "primary"
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recursos Que Transformam <span className="gradient-text">Conversas em Vendas Recorrentes</span>
          </h2>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${feature.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'} rounded-full flex items-center justify-center`}>
                      <feature.icon className={`${feature.color === 'primary' ? 'text-primary' : 'text-secondary'}`} size={24} />
                    </div>
                      <div>
                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.subtitle}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 ${feature.color === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-full mt-2`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`${feature.color === 'primary' ? 'bg-primary/10 border-l-4 border-primary' : 'bg-secondary/10 border-l-4 border-secondary'} p-4 rounded-lg`}>
                      <p className="italic text-sm">{feature.testimonial}</p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${feature.color === 'primary' ? 'bg-gradient-to-br from-primary/5 to-primary/10' : 'bg-gradient-to-br from-secondary/5 to-secondary/10'} p-8 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="w-full max-w-sm">
                      <div className="bg-card rounded-lg p-6 shadow-lg">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-8 h-8 ${feature.color === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-full flex items-center justify-center`}>
                            <feature.icon className="text-white" size={16} />
                          </div>
                          <span className="font-medium">VerticalZap IA</span>
                        </div>
                        <div className="space-y-2">
                          <div className={`h-2 ${feature.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'} rounded`} />
                          <div className={`h-2 ${feature.color === 'primary' ? 'bg-primary/30' : 'bg-secondary/30'} rounded w-3/4`} />
                          <div className={`h-2 ${feature.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'} rounded w-1/2`} />
                        </div>
                      </div>
                    </div>
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