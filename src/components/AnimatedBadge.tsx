import { motion } from 'framer-motion';

interface AnimatedBadgeProps {
  label: string;
  value: string;
}

export default function AnimatedBadge({ label, value }: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white/50 px-6 py-5 text-center shadow-lg shadow-secondary/10 backdrop-blur-xl"
    >
      <p className="text-3xl font-semibold text-primary">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </motion.div>
  );
}
