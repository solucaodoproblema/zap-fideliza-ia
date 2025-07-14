import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, MessageCircle, RotateCcw } from "lucide-react";
export const HowItWorksSection = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja Como Seus Clientes Vão Viver a <span className="gradient-text">Experiência VerticalZap</span>
          </h2>
        </div>

        {/* Customer Flow */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Cliente Finaliza Compra</h3>
              <ul className="text-left space-y-2 text-sm text-muted-foreground">
                <li>• Envia foto Cupom fiscal ou Selo Digital para o Whatsapp do Estabelecimento</li>
                <li>• Pontos creditados automaticamente</li>
                <li>• Sugestão de próxima compra baseada em IA</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Cliente Interage</h3>
              <ul className="text-left space-y-2 text-sm text-muted-foreground">
                <li>• Faz perguntas sobre produtos</li>
                <li>• IA responde instantaneamente</li>
                <li>• Sugere complementos personalizados</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <RotateCcw className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Cliente Retorna</h3>
              <ul className="text-left space-y-2 text-sm text-muted-foreground">
                <li>• Recebe ofertas exclusivas</li>
                <li>• Usa pontos para descontos</li>
                <li>• Vira promotor da marca</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Real Conversation Example */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Exemplo Real de Conversa</h3>
          
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              {/* Customer Message */}
              <div className="flex justify-end">
                <div className="bg-muted max-w-xs p-4 rounded-lg">
                  <p className="text-sm">"Oi, gostaria de saber sobre aquele vestido azul"</p>
                </div>
              </div>

              {/* VerticalZap Response */}
              <div className="flex justify-start">
                <div className="bg-primary/10 max-w-lg p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">V</span>
                    </div>
                    <span className="text-sm font-medium">VerticalZap</span>
                  </div>
                  <p className="text-sm">
                    "Oi Maria! 😊 Que bom te ver aqui! O vestido azul marinho que você viu é perfeito para você. 
                    Inclusive, como você comprou a bolsa preta semana passada, eles combinam perfeitamente!
                    <br /><br />
                    Quer que eu separe um na sua numeração? Você tem 150 pontos, dá para ter 15% de desconto! 💙"
                  </p>
                </div>
              </div>

              {/* Customer Response */}
              <div className="flex justify-end">
                <div className="bg-muted max-w-xs p-4 rounded-lg">
                  <p className="text-sm">"Nossa, perfeito! Pode separar sim!"</p>
                </div>
              </div>

              {/* Success indicator */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <span>✅ Venda Convertida Automaticamente</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              <strong>Resultado:</strong> Cliente satisfeita, venda realizada, relacionamento fortalecido - tudo automático!
            </p>
          </div>
        </div>
      </div>
    </section>;
};