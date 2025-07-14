import { Button } from "@/components/ui/button";
import { Check, Zap, Users, Bot, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-secondary/10 pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fidelize Seus Clientes no{" "}
              <span className="gradient-text">WhatsApp</span>{" "}
              com Inteligência Artificial
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A primeira ferramenta de relacionamento e fidelização que roda 100% no WhatsApp. 
              Sem app novo, sem complicação, sem barreiras - resultados reais através da IA mais avançada do mercado.
            </p>

            <div className="mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 animate-pulse-glow"
                onClick={scrollToContact}
              >
                <Zap className="mr-2" />
                🚀 Começar Agora Grátis
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Sem cartão de crédito. Configuração em 2 minutos.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Check className="text-primary bg-accent rounded-full p-1" size={24} />
                <span className="text-sm">Zero fricção: Clientes usam o WhatsApp que já têm</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-primary bg-accent rounded-full p-1" size={24} />
                <span className="text-sm">100% automatizado: IA conversa e fideliza por você</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-primary bg-accent rounded-full p-1" size={24} />
                <span className="text-sm">Democrático: Funciona para qualquer tamanho de negócio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-primary bg-accent rounded-full p-1" size={24} />
                <span className="text-sm">Resultado imediato: Primeiros clientes fidelizados em 24h</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card border rounded-2xl p-8 shadow-2xl glass">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">VerticalZap IA</h3>
                  <span className="text-sm text-muted-foreground">Online agora</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm">
                    "Oi Maria! 😊 Que bom te ver aqui! O vestido azul marinho que você viu é perfeito para você. 
                    Como você comprou a bolsa preta semana passada, eles combinam perfeitamente!"
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg ml-8">
                  <p className="text-sm">"Nossa, perfeito! Pode separar sim!"</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-6 space-x-6">
                <div className="text-center">
                  <Users className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-xs text-muted-foreground">Preferem WhatsApp</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold">+40%</div>
                  <div className="text-xs text-muted-foreground">Ticket Médio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};