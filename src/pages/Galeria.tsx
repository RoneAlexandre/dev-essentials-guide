import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import saboresImg from "@/assets/sabores-acai.jpg";
import heroImg from "@/assets/hero-acai.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
} as const;

const fotos = [
  { src: heroImg, alt: "Açaí premium na garrafinha", categoria: "produto" },
  { src: saboresImg, alt: "Nossos sabores de açaí", categoria: "produto" },
  { src: heroImg, alt: "Garrafinha artesanal", categoria: "destaque" },
  { src: saboresImg, alt: "Variedade de sabores", categoria: "destaque" },
  { src: heroImg, alt: "Açaí cremoso", categoria: "produto" },
  { src: saboresImg, alt: "Linha completa", categoria: "destaque" },
];

const filtros = ["todos", "produto", "destaque"];

export default function Galeria() {
  const [filtro, setFiltro] = useState("todos");
  const [selected, setSelected] = useState<number | null>(null);

  const fotosFiltradas = filtro === "todos" ? fotos : fotos.filter((f) => f.categoria === filtro);

  return (
    <div className="pt-28 pb-20">
      <div className="container px-4">
        <motion.div initial="hidden" animate="visible" className="text-center mb-12">
          <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-2">
            Nossos registros
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-8xl text-gradient mb-4">
            GALERIA
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-lg mx-auto mb-8">
            Veja nossos produtos, momentos e a qualidade que entregamos em cada garrafinha.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex justify-center gap-3 flex-wrap">
            {filtros.map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`font-body text-sm uppercase tracking-widest px-4 py-2 rounded-full transition-all ${
                  filtro === f
                    ? "bg-gradient-brand text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {fotosFiltradas.map((foto, i) => (
              <motion.div
                key={foto.alt + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <button className="absolute top-6 right-6 text-foreground" onClick={() => setSelected(null)}>
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={fotosFiltradas[selected]?.src}
                alt={fotosFiltradas[selected]?.alt}
                className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
