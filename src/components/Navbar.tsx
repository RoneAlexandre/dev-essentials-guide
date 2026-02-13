import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5515996325883?text=Olá! Quero fazer um pedido 🍇";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Cardápio", path: "/cardapio" },
  { label: "Sobre", path: "/sobre" },
  { label: "Galeria", path: "/galeria" },
  { label: "Contato", path: "/contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-display text-2xl md:text-3xl text-gradient">
          GARRAFINHA DE AÇAÍ
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm uppercase tracking-widest transition-colors ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className="bg-gradient-brand text-primary-foreground font-bold animate-pulse-glow"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Pedir agora
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-left text-lg uppercase tracking-widest transition-colors ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className="bg-gradient-brand text-primary-foreground font-bold w-full"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Pedir agora
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
