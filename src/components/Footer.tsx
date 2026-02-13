import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5515996325883?text=Olá! Quero fazer um pedido 🍇";
const INSTAGRAM_LINK = "https://instagram.com/asgarrafinhasdeacai";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="font-display text-2xl text-gradient">
              GARRAFINHA DE AÇAÍ
            </Link>
            <p className="font-body text-xs text-muted-foreground mt-2">
              Experiência em cada garrafinha 🍇
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-3">NAVEGAÇÃO</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Cardápio", path: "/cardapio" },
                { label: "Sobre", path: "/sobre" },
                { label: "Galeria", path: "/galeria" },
                { label: "Contato", path: "/contato" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-3">CONTATO</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5515996325883"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> (15) 99632-5883
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" /> @asgarrafinhasdeacai
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <p className="font-body text-xs text-muted-foreground text-center pt-6 border-t border-border">
          © 2026 Garrafinha de Açaí. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
