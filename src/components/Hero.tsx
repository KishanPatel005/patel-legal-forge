import { motion } from "framer-motion";
import { Award, Phone } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK =
  "https://wa.me/919824071242?text=Hello%20Advocate%20Bhavin,%20I%20would%20like%20to%20discuss%20a%20legal%20matter.";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Legal advocacy background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4 py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-light/50 px-4 py-2 mb-8"
        >
          <Award className="text-gold" size={16} />
          <span className="text-sm font-medium text-gold">
            Practicing at Gujarat High Court
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6"
        >
          <span className="text-primary-foreground">Justice Through Integrity:</span>{" "}
          <span className="text-gold-gradient">Expert Legal Advocacy</span>{" "}
          <span className="text-primary-foreground">in Ahmedabad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-body"
        >
          Advocate Bhavin Patel provides strategic legal counsel for Civil,
          Criminal, and Corporate litigation with a relentless focus on client
          success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-accent-foreground hover:bg-gold-light transition-colors shadow-lg"
          >
            <Phone size={18} />
            Book Private Consultation
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-gold/40 px-8 py-4 font-semibold text-gold hover:bg-gold/10 transition-colors"
          >
            WhatsApp Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
