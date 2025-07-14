import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Users, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que o VerticalZap é a <span className="gradient-text">Revolução da Fidelização?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              O VerticalZap nasceu de uma percepção simples: <strong>93% dos brasileiros usam WhatsApp diariamente</strong>, 
              mas as empresas ainda tentam forçar seus clientes a baixar apps que ninguém quer usar.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Desenvolvemos a primeira ferramenta de fidelização que trabalha onde seus clientes já estão - no WhatsApp. 
              Nossa inteligência artificial conversa naturalmente com cada cliente, criando relacionamentos genuínos que geram vendas recorrentes.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              <strong>Não é mais um bot robótico.</strong> É uma IA que entende contexto, lembra preferências, 
              sugere produtos e constrói relacionamentos reais - tudo através de conversas no WhatsApp.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg font-medium italic">
                "Seja efetivo na retenção de clientes"
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Smartphone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">93%</h3>
                    <p className="text-muted-foreground">dos brasileiros usam WhatsApp diariamente</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Users className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">85%</h3>
                    <p className="text-muted-foreground">dos clientes preferem conversar no WhatsApp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">+40%</h3>
                    <p className="text-muted-foreground">aumento no ticket médio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};