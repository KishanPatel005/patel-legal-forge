import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/919824071242?text=Hello%20Advocate%20Bhavin,%20I%20would%20like%20to%20discuss%20a%20legal%20matter.";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Get in <span className="text-gold-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-lg mx-auto"
        >
          Schedule a confidential consultation to discuss your legal needs
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Office Address</h3>
                <p className="text-muted-foreground text-sm">
                  101 Hilltown Square, Nikol, Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Direct Call / WhatsApp</h3>
                <a
                  href="tel:+919824071242"
                  className="text-gold hover:text-gold-light transition-colors text-sm"
                >
                  +91 98240 71242
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Office Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon – Sat: 10:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-accent-foreground hover:bg-gold-light transition-colors shadow-lg"
            >
              <Phone size={18} />
              Send WhatsApp Message
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border shadow-lg h-[400px]"
          >
            <iframe
              title="Office Location - Hilltown Square Nikol Ahmedabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.65!3d23.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwMzknMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
