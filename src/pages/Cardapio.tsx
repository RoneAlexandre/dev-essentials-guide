import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5515996325883?text=Olá! Quero fazer um pedido 🍇";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
} as const;

const categorias = [
  {
    titulo: "Garrafinhas Clássicas",
    itens: [
      { nome: "Açaí Tradicional", desc: "Açaí puro e cremoso", preco: "R$ 12,00", emoji: "🍇" },
      { nome: "Açaí com Morango", desc: "Açaí com morangos frescos", preco: "R$ 15,00", emoji: "🍓" },
      { nome: "Açaí com Banana", desc: "Açaí com banana nanica", preco: "R$ 14,00", emoji: "🍌" },
      { nome: "Açaí com Nutella", desc: "Para os chocólatras", preco: "R$ 18,00", emoji: "🍫" },
    ],
  },
  {
    titulo: "Garrafinhas Premium",
    itens: [
      { nome: "Açaí com Leite Ninho", desc: "Cremosidade extra com leite ninho", preco: "R$ 20,00", emoji: "🥛" },
      { nome: "Açaí Tropical", desc: "Com manga, kiwi e granola", preco: "R$ 22,00", emoji: "🥭" },
      { nome: "Açaí com Paçoca", desc: "Sabor brasileiro inconfundível", preco: "R$ 19,00", emoji: "🥜" },
      { nome: "Açaí Especial da Casa", desc: "Mix secreto com frutas e toppings", preco: "R$ 25,00", emoji: "✨" },
    ],
  },
  {
    titulo: "Adicionais",
    itens: [
      { nome: "Granola", desc: "Granola crocante artesanal", preco: "+ R$ 2,00", emoji: "🌾" },
      { nome: "Leite Condensado", desc: "O clássico que não pode faltar", preco: "+ R$ 2,00", emoji: "🍯" },
      { nome: "Frutas Extras", desc: "Morango, banana ou kiwi", preco: "+ R$ 3,00", emoji: "🍇" },
      { nome: "Nutella Extra", desc: "Dose extra de Nutella", preco: "+ R$ 4,00", emoji: "🍫" },
    ],
  },
];

export default function Cardapio() {
  return (
    <div className="pt-28 pb-20">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-2">
            Nosso cardápio
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-8xl text-gradient mb-4">
            CARDÁPIO
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-lg mx-auto">
            Todas as nossas garrafinhas são preparadas com açaí de qualidade premium. Escolha a sua e peça pelo WhatsApp!
          </motion.p>
        </motion.div>

        {categorias.map((cat, catIdx) => (
          <motion.div
            key={cat.titulo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-5xl text-gradient mb-8 text-center">
              {cat.titulo}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.itens.map((item, i) => (
                <motion.div
                  key={item.nome}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group hover:border-primary/30 transition-colors"
                  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                >
                  <span className="text-5xl mb-3 group-hover:scale-110 transition-transform">{item.emoji}</span>
                  <h3 className="font-display text-xl text-foreground mb-1">{item.nome}</h3>
                  <p className="font-body text-xs text-muted-foreground mb-3">{item.desc}</p>
                  <span className="font-display text-2xl text-accent">{item.preco}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-brand text-primary-foreground text-lg font-bold px-10 py-6 animate-pulse-glow"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fazer meu pedido
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
