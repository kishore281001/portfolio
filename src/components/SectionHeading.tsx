import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 max-w-3xl text-center mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-4 text-sm uppercase tracking-[0.24em] text-secondary/80">{subtitle}</p>
      <h2 className="text-4xl font-semibold text-primary md:text-5xl">{title}</h2>
    </motion.div>
  );
}
