import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/5515996325883?text=Olá! Quero fazer um pedido 🍇";
const INSTAGRAM_LINK = "https://instagram.com/asgarrafinhasdeacai";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
} as const;

export default function Contato() {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}.\n\n${form.mensagem}\n\nMeu telefone: ${form.telefone}`
    );
    window.open(`https://wa.me/5515996325883?text=${msg}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp!", description: "Sua mensagem foi preparada." });
    setForm({ nome: "", telefone: "", mensagem: "" });
  };

  return (
    <div className="pt-28 pb-20">
      <div className="container px-4">
        <motion.div initial="hidden" animate="visible" className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-2">
            Fale conosco
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-8xl text-gradient mb-4">
            CONTATO
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-lg mx-auto">
            Quer fazer um pedido, tirar dúvidas ou dar sugestões? Entre em contato!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formulário */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <motion.h3 variants={fadeUp} custom={0} className="font-display text-2xl text-foreground mb-2">
              ENVIE UMA MENSAGEM
            </motion.h3>
            <motion.div variants={fadeUp} custom={1}>
              <Label htmlFor="nome" className="text-muted-foreground">Nome</Label>
              <Input
                id="nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                required
                className="mt-1"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={2}>
              <Label htmlFor="telefone" className="text-muted-foreground">Telefone</Label>
              <Input
                id="telefone"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                placeholder="(15) 99999-9999"
                required
                className="mt-1"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={3}>
              <Label htmlFor="mensagem" className="text-muted-foreground">Mensagem</Label>
              <Textarea
                id="mensagem"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                placeholder="Escreva sua mensagem ou pedido..."
                rows={4}
                required
                className="mt-1"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={4}>
              <Button type="submit" className="bg-gradient-brand text-primary-foreground font-bold w-full">
                <Send className="w-4 h-4 mr-2" />
                Enviar via WhatsApp
              </Button>
            </motion.div>
          </motion.form>

          {/* Info lateral */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} custom={0} className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl text-foreground mb-4">CANAIS DE ATENDIMENTO</h3>
              <div className="space-y-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="font-body text-xs text-muted-foreground">(15) 99632-5883</p>
                  </div>
                </a>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Instagram</p>
                    <p className="font-body text-xs text-muted-foreground">@asgarrafinhasdeacai</p>
                  </div>
                </a>
                <a
                  href="tel:+5515996325883"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Telefone</p>
                    <p className="font-body text-xs text-muted-foreground">(15) 99632-5883</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl text-foreground mb-4">INFORMAÇÕES</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="font-body text-sm text-muted-foreground">Sorocaba - SP</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="font-body text-sm text-muted-foreground">Seg a Sáb, 10h às 20h</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
