import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Business Owner, Ahmedabad",
    text: "Advocate Bhavin Patel handled our complex property dispute with exceptional professionalism. His deep knowledge of real estate law and strategic approach led to a favorable outcome within months. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Client – Family Law",
    text: "During the most difficult time of my life, Advocate Patel provided compassionate yet firm legal guidance. He ensured my rights were protected throughout the divorce proceedings and child custody matter. Forever grateful.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "CEO, Desai Enterprises",
    text: "We've relied on Advocate Patel for all our corporate legal needs for over five years. His attention to detail in contract drafting and compliance advisory has saved us from potential legal pitfalls multiple times.",
    rating: 5,
  },
  {
    name: "Sunita Patel",
    role: "Client – Criminal Defense",
    text: "When my family faced false charges, Advocate Bhavin fought relentlessly for justice. His courtroom presence and thorough preparation secured our acquittal. A truly dedicated and fearless lawyer.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-navy-gradient">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
        >
          Client <span className="text-gold-gradient">Testimonials</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground/60 mb-16 max-w-lg mx-auto"
        >
          Hear from those who trust us with their most critical legal matters
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl border border-gold/10 bg-navy-light/50 backdrop-blur-sm p-8"
            >
              <Quote className="absolute top-6 right-6 text-gold/15" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading font-semibold text-primary-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-gold/70">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
