import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Clock, Mail, Shield } from "lucide-react";

export const ContactSection = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Quero conhecer o VerticalZap e começar a fidelizar meus clientes com IA!", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Revolucionar Seu <span className="gradient-text">Relacionamento com Clientes?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Todos estão no WhatsApp. Não perca nem a Tia do Zap, tenha todos fidelizados no seu VerticalZap
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xl px-12 py-8 animate-pulse-glow"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="mr-3" size={28} />
              Agende uma Consultoria Gratuita no WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Clique para conversar com nossa equipe
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <MessageCircle className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Clock className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Horário</h3>
                <p className="text-sm text-muted-foreground">Segunda a Sexta<br />9h às 18h</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">contato@verticalzap.com.br</p>
              </CardContent>
            </Card>
          </div>

          {/* Guarantee */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center mb-12">
            <Shield className="text-primary mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">💯 Garantia de 30 dias ou seu dinheiro de volta</h3>
            <p className="text-muted-foreground">
              Se não aumentar sua retenção em 30 dias, devolvemos 100% do investimento
            </p>
          </div>

          {/* Final Conversion Section */}
          <div className="bg-gradient-to-r from-destructive/10 to-primary/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Não Deixe Seus Concorrentes Saírem na Frente
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Enquanto você lê isso, seus concorrentes podem estar implementando soluções de fidelização que vão roubar seus clientes. 
              O VerticalZap já está transformando milhares de negócios pelo Brasil.
            </p>
            <p className="text-lg font-medium mb-8">
              A pergunta não é "SE" você vai usar inteligência artificial para fidelizar clientes. 
              A pergunta é "QUANDO" você vai começar.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              onClick={handleWhatsAppContact}
            >
              🚀 Garantir Minha Vantagem Competitiva Agora
            </Button>
            
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Seja os primeiros e garanta esta vantagem para o seu negócio</p>
              <p>Os primeiros a fechar poderão solicitar opções exclusivas na sua IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};