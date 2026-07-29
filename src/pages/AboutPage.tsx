import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AnimatedBadge from '../components/AnimatedBadge';
import { education, experience } from '../constants/timeline';

export default function AboutPage() {
  return (
    <section className="relative px-6 pb-24 pt-12 xl:px-12">
      <SectionHeading title="About Me" subtitle="Professional Introduction" />
      <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[0.85fr_0.5fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8 rounded-[36px] border border-slate-200/80 bg-surface/80 p-8 shadow-xl shadow-secondary/10 backdrop-blur-xl">
          <div>
            <p className="text-base leading-8 text-slate-300">
              I am a Robotics & Automation Engineering student focused on integrated hardware/software solutions. My work combines embedded systems, sensor-driven automation, and real-time robotics control with a practical engineering mindset.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.year} className="rounded-3xl border border-slate-200/70 bg-white/80 p-6">
                <p className="text-sm uppercase tracking-[0.26em] text-secondary/80">{item.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.details}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">Career Objective</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Seeking opportunities to build resilient automation systems and intelligent robotics platforms that translate engineering research into industry-ready solutions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <AnimatedBadge label="Projects Completed" value="6+" />
            <AnimatedBadge label="Technologies Learned" value="15+" />
            <AnimatedBadge label="Hands-on Learning" value="100%" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-8">
          <div className="rounded-[36px] border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Experience</h3>
            <div className="mt-6 space-y-5">
              {experience.map((item) => (
                <div key={item.year} className="space-y-2 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.year}</p>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[36px] border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Technical Focus</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Embedded Systems', 'Autonomous Robotics', 'IoT Platforms', 'Drone Architecture', 'Motor Control', 'Circuit Design'].map((skill) => (
                <div key={skill} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 px-4 py-4 text-sm text-slate-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
