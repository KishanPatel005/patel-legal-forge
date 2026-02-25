import { motion } from "framer-motion";
import { Scale, ShieldCheck, Eye, IndianRupee } from "lucide-react";
import advocatePhoto from "@/assets/advocate-photo.jpg";

const values = [
  { icon: ShieldCheck, title: "Confidentiality", desc: "Your matters remain strictly private and privileged." },
  { icon: Scale, title: "Expertise", desc: "Deep knowledge across multiple legal domains." },
  { icon: IndianRupee, title: "Transparent Fees", desc: "Clear, upfront pricing with no hidden charges." },
  { icon: Eye, title: "Integrity", desc: "Honest counsel, even when it's hard to hear." },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        {/* Photo + Text */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl mb-6"
          >
            <img src={advocatePhoto} alt="Advocate Bhavin Patel" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-gold-gradient">Advocate Bhavin Patel</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of dedicated practice at the Gujarat High Court
                and District Courts across Ahmedabad, Advocate Bhavin Patel has
                built a formidable reputation as a trusted legal advisor in the
                Nikol and greater Ahmedabad legal circuit.
              </p>
              <p>
                His <strong className="text-foreground">"Client-First" philosophy</strong> drives every
                case — from meticulous preparation and transparent communication to
                relentless courtroom advocacy. Whether navigating complex criminal
                trials or resolving sensitive family matters, Advocate Patel brings
                unwavering commitment and deep procedural expertise to the table.
              </p>
              <p>
                Rooted in the Ahmedabad community, he combines a deep understanding
                of local legal nuances with a modern, strategic approach to
                litigation, ensuring his clients receive the best possible outcomes.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
              Core Values
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-card border border-border p-6 text-center hover:border-gold/30 transition-colors"
                >
                  <div className="mx-auto mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold">
                    <v.icon size={22} />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {v.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
