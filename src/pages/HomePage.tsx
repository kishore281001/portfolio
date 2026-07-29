import { motion } from 'framer-motion';
import { Download, ArrowRight, Cpu } from 'lucide-react';

const tags = ['Embedded Systems Engineer', 'Robotics Enthusiast', 'IoT Developer', 'Drone Developer', 'Automation Engineer'];

export default function HomePage() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-6 xl:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.8fr] xl:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-sm text-primary shadow-sm shadow-slate-200/50">
            <Cpu size={18} /> Robotics & Automation Engineering Student
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.34em] text-secondary/80">Hello, I am</p>
              <h1 className="text-5xl font-semibold leading-tight text-primary md:text-6xl xl:text-7xl">KISHORE E</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-700">Engineering advanced robotics, embedded systems, IoT automation, and aerial platforms with polished hardware/software integration.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {tags.map((tag) => (
                <div key={tag} className="rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-primary shadow-sm shadow-slate-200/50">
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/resume" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95">
                <Download size={18} /> Download Resume
              </a>
              <a href="/projects" className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent">
                View Projects <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative flex items-center justify-center">
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-white p-6 shadow-xl shadow-secondary/20 backdrop-blur-xl">
            <div className="relative mx-auto h-[520px] w-full overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 shadow-inner">
              <img src="/profile.jpg" alt="Kishore profile" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
            </div>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-center shadow-sm shadow-slate-200/40">
              <p className="text-sm uppercase tracking-[0.24em] text-secondary/80">KISHORE E</p>
              <p className="mt-3 text-base font-semibold text-primary">Robotics, Embedded Systems, Automation.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { label: 'Projects Completed', value: '6+' },
          { label: 'Technologies Learned', value: '15+' },
          { label: 'Hands-on Learning', value: '100%' },
        ].map((item) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-slate-200/90 bg-surface/80 px-6 py-7 text-center shadow-xl shadow-secondary/10 backdrop-blur-xl">
            <p className="text-4xl font-semibold text-primary">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
