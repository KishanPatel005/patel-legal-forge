import { motion } from "framer-motion";
import { Shield, Users, Home, FileText, Briefcase, Landmark } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Criminal Defense",
    subtitle: "Bail & Trial",
    desc: "Aggressive defense strategy for all criminal matters including bail applications, trial representation, and appeals.",
  },
  {
    icon: Users,
    title: "Family & Matrimonial Law",
    subtitle: "Divorce & Custody",
    desc: "Compassionate yet firm advocacy in divorce, child custody, maintenance, and domestic violence cases.",
  },
  {
    icon: Home,
    title: "Property & Real Estate",
    subtitle: "Litigation & Titles",
    desc: "End-to-end property dispute resolution, title verification, and real estate documentation services.",
  },
  {
    icon: FileText,
    title: "Civil Litigation",
    subtitle: "Documentation & Disputes",
    desc: "Expert handling of civil suits, recovery proceedings, injunctions, and contractual disputes.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Commercial",
    subtitle: "Business Law",
    desc: "Corporate structuring, compliance advisory, partnership disputes, and commercial contract drafting.",
  },
  {
    icon: Landmark,
    title: "Revenue & Land Matters",
    subtitle: "Government & Revenue",
    desc: "Specialized representation in revenue tribunal matters, land acquisition cases, and government disputes.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Legal <span className="text-gold-gradient">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-lg mx-auto"
        >
          Comprehensive legal solutions tailored to protect your rights and interests
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-gold group-hover:bg-gold group-hover:text-accent-foreground transition-colors">
                <svc.icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                {svc.title}
              </h3>
              <p className="text-sm text-gold font-medium mb-3">{svc.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
