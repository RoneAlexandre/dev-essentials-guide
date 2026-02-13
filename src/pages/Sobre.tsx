import { motion } from "framer-motion";
import { Heart, Leaf, Award, Users, MessageCircle, MapPin, Phone } from "lucide-react";
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

const valores = [
  { icon: Heart, titulo: "Paixão", desc: "Cada garrafinha é feita com amor e dedicação, do açaí à entrega." },
  { icon: Leaf, titulo: "Qualidade", desc: "Ingredientes selecionados e açaí premium direto do Pará." },
  { icon: Award, titulo: "Excelência", desc: "Padrão artesanal em cada etapa da produção." },
  { icon: Users, titulo: "Comunidade", desc: "Orgulho de servir Sorocaba com o melhor açaí da região." },
];

export default function Sobre() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-20">
        <img src={heroImg} alt="Garrafinha de Açaí" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-2">Nossa história</p>
          <h1 className="font-display text-5xl md:text-8xl text-gradient">SOBRE NÓS</h1>
        </motion.div>
      </section>

      <div className="container px-4">
        {/* História */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-6xl text-gradient mb-6">
            NOSSA HISTÓRIA
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="font-body text-muted-foreground leading-relaxed mb-4">
            A Garrafinha de Açaí nasceu de uma paixão genuína pelo açaí e pelo desejo de levar essa experiência incrível para Sorocaba de um jeito prático e irresistível. Começamos pequeno, com receitas artesanais e muita vontade de fazer diferente.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground leading-relaxed mb-4">
            Hoje, somos referência em açaí na garrafinha na região, com sabores exclusivos e uma qualidade que nossos clientes reconhecem e amam. Cada garrafinha é preparada com ingredientes selecionados e o carinho de quem realmente se importa.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="font-body text-foreground leading-relaxed font-medium">
            Nosso açaí vem direto do Pará, garantindo sabor autêntico e qualidade premium em cada dose.
          </motion.p>
        </motion.div>

        {/* Valores */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-6xl text-gradient text-center mb-12">
            NOSSOS VALORES
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={v.titulo}
                variants={fadeUp}
                custom={i}
                className="glass rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{v.titulo}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="glass rounded-2xl p-8 max-w-2xl mx-auto text-center"
        >
          <h3 className="font-display text-3xl text-gradient mb-6">ONDE ESTAMOS</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary" />
              <a href="tel:+5515996325883" className="font-body text-foreground hover:text-secondary transition-colors">
                (15) 99632-5883
              </a>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="font-body text-muted-foreground">Sorocaba - SP</span>
            </div>
          </div>
          <Button
            className="bg-gradient-brand text-primary-foreground font-bold animate-pulse-glow"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Fale conosco
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
