import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = "+", label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="font-heading text-5xl md:text-6xl font-bold text-gold mb-2"
      >
        {count}
        {suffix}
      </motion.div>
      <p className="text-primary-foreground/70 text-sm md:text-base font-medium">
        {label}
      </p>
    </div>
  );
};

const stats = [
  { end: 52, label: "High-Stakes Criminal Cases Resolved" },
  { end: 89, label: "Family & Matrimonial Matters Settled" },
  { end: 120, label: "Property & Real Estate Title Verifications" },
  { end: 10, label: "Years of Excellence at Gujarat High Court" },
];

const TrackRecord = () => {
  return (
    <section id="stats" className="bg-navy-gradient section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
        >
          Proven <span className="text-gold-gradient">Track Record</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground/60 mb-16 max-w-lg mx-auto"
        >
          Numbers that reflect a decade of dedicated legal service
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <Counter key={s.label} end={s.end} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
