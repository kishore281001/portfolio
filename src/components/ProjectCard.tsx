import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../constants/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-surface/80 p-6 shadow-xl shadow-secondary/10 backdrop-blur-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <a
          href={project.image}
          target="_blank"
          rel="noreferrer"
          className="group relative block mb-5 overflow-hidden rounded-3xl bg-white/80 transition-all duration-300 hover:scale-[1.01]"
        >
          <div className="absolute inset-0 bg-slate-950/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <img
            src={project.image}
            alt={project.title}
            className="h-full min-h-[260px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-3 mx-auto inline-flex rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-white shadow-lg shadow-slate-900/20">
            Click to view
          </span>
        </a>
        <span className="inline-flex rounded-full border border-secondary/40 bg-secondary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary">
          {project.status}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-primary">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
        <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
          <div>
            <p className="font-medium text-primary">Technology</p>
            <p className="mt-2">{project.technologies.join(', ')}</p>
          </div>
          <div>
            <p className="font-medium text-primary">Hardware</p>
            <p className="mt-2">{project.hardware.join(', ')}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-600"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {/* Live Preview removed per request */}
        </div>
      </div>
    </motion.div>
  );
}
