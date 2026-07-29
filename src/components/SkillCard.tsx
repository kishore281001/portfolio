import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface SkillCardProps {
  title: string;
  items: string[];
  progress: number;
}

export default function SkillCard({ title, items, progress }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-[26px] border border-slate-200/80 bg-surface/80 p-6 shadow-xl shadow-secondary/10 transition-all duration-300"
    >
        <h3 className="mb-4 text-xl font-semibold text-primary">{title}</h3>
      <div className="space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-full bg-slate-900/70 p-1">
        <div className="h-3 rounded-full bg-gradient-to-r from-accent via-secondary to-cyan-300" style={{ width: `${progress}%` }} />
      </div>
        <p className="mt-3 text-sm text-slate-500">Proficiency</p>
    </motion.div>
  );
}
