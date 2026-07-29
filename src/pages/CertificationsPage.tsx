import SectionHeading from '../components/SectionHeading';
import { certifications } from '../constants/timeline';

export default function CertificationsPage() {
  return (
    <section className="relative px-6 pb-24 pt-12 xl:px-12">
      <SectionHeading title="Certifications" subtitle="Verified Credentials" />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {certifications.map((cert) => (
          <article key={cert.title} className="rounded-[32px] border border-slate-200/80 bg-white/80 p-7 shadow-xl shadow-secondary/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-secondary/80">{cert.year}</p>
            <h3 className="mt-4 text-2xl font-semibold text-primary">{cert.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{cert.issuer}</p>
            <a href={cert.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-slate-200/80 bg-surface/90 px-4 py-3 text-sm font-medium text-primary transition hover:border-accent">
              Download Certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
