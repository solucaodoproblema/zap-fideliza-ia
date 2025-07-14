import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">VerticalZap</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("recursos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection("diferenciais")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
              onClick={() => scrollToSection("contato")}
            >
              Testar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection("recursos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection("diferenciais")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection("depoimentos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow mt-4"
                onClick={() => scrollToSection("contato")}
              >
                Testar Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};