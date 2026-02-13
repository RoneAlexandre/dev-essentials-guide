import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Star, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-acai.jpg";

const WHATSAPP_LINK = "https://wa.me/5515996325883?text=Olá! Quero fazer um pedido 🍇";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
} as const;

const sabores = [
  { nome: "Açaí Tradicional", desc: "O clássico que você ama, puro e cremoso", emoji: "🍇", cor: "from-purple-600 to-purple-900" },
  { nome: "Açaí com Morango", desc: "Combinação perfeita de açaí com morangos frescos", emoji: "🍓", cor: "from-pink-500 to-purple-700" },
  { nome: "Açaí com Nutella", desc: "Para os chocólatras de plantão", emoji: "🍫", cor: "from-amber-700 to-purple-800" },
];

const depoimentos = [
  { nome: "Maria S.", texto: "Melhor açaí da região! A garrafinha é super prática.", rating: 5 },
  { nome: "João P.", texto: "Peço toda semana, qualidade impecável. Entrega rápida!", rating: 5 },
  { nome: "Ana L.", texto: "O de morango com nutella é viciante! Recomendo demais.", rating: 5 },
];

export default function Index() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ opacity: heroOpacity, scale: heroScale }}>
          <img src={heroImg} alt="Garrafinha de Açaí" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </motion.div>

        <div className="relative z-10 container text-center px-4 pt-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-secondary mb-4">
            Experiência em cada garrafinha
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="font-display text-6xl md:text-8xl lg:text-9xl leading-none text-gradient mb-6">
            AÇAÍ COMO
            <br />
            VOCÊ NUNCA VIU
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="font-body text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-8">
            Garrafinhas artesanais com os melhores sabores. Entrega e retirada em Sorocaba.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-brand text-primary-foreground text-lg font-bold px-8 py-6 animate-pulse-glow" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Peça pelo WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground text-lg px-8 py-6 hover:bg-primary/10" asChild>
              <Link to="/cardapio">
                Ver cardápio
                <ChevronDown className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* SABORES DESTAQUES */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-2">Destaques</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-5xl md:text-7xl text-gradient">NOSSOS FAVORITOS</motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {sabores.map((sabor, i) => (
              <motion.div key={sabor.nome} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
                <div className={`absolute inset-0 bg-gradient-to-br ${sabor.cor} opacity-80`} />
                <div className="relative z-10 p-8 md:p-10 flex flex-col items-center text-center min-h-[280px] justify-center">
                  <span className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">{sabor.emoji}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">{sabor.nome}</h3>
                  <p className="font-body text-primary-foreground/80 text-sm">{sabor.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary-foreground/60 group-hover:text-accent transition-colors">
                    Pedir agora <MessageCircle className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
              <Link to="/cardapio">Ver cardápio completo →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-2">Simples e rápido</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-5xl md:text-7xl text-gradient">COMO FUNCIONA</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MessageCircle, title: "1. Faça seu pedido", desc: "Chame no WhatsApp e escolha seu sabor favorito" },
              { icon: Clock, title: "2. Preparamos na hora", desc: "Açaí fresquinho e artesanal, feito com carinho" },
              { icon: MapPin, title: "3. Entrega ou retirada", desc: "Receba em casa ou retire no ponto de entrega" },
            ].map((step, i) => (
              <motion.div key={step.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass rounded-2xl p-8 text-center hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-2">Quem provou aprovou</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-5xl md:text-7xl text-gradient">DEPOIMENTOS</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {depoimentos.map((dep, i) => (
              <motion.div key={dep.nome} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: dep.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-foreground mb-4 leading-relaxed">"{dep.texto}"</p>
                <p className="font-body text-sm text-muted-foreground">— {dep.nome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container px-4 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-5xl md:text-8xl text-gradient mb-4">BORA PEDIR?</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="font-body text-lg text-muted-foreground max-w-md mx-auto mb-8">
              Não fique na vontade. Peça agora sua garrafinha de açaí e sinta a experiência!
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Button size="lg" className="bg-gradient-brand text-primary-foreground text-xl font-bold px-12 py-7 animate-pulse-glow" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
                <MessageCircle className="w-6 h-6 mr-2" />
                Pedir pelo WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
