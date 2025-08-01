import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5547996938040?text=Olá! Quero conhecer o VerticalZap e fidelizar meus clientes com IA!", "_blank");
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        size="lg"
        className="bg-primary hover:bg-primary-glow shadow-lg rounded-full w-16 h-16 p-0 animate-float group"
        onClick={handleWhatsAppContact}
      >
        <MessageCircle className="text-primary-foreground group-hover:scale-110 transition-transform" size={28} />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
      </div>
    </div>
  );
};