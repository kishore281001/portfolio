import SectionHeading from '../components/SectionHeading';

export default function ResumePage() {
  return (
    <section className="relative px-6 pb-24 pt-12 xl:px-12">
      <SectionHeading title="Resume" subtitle="Professional Summary" />
      <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-surface/90 p-8 shadow-xl shadow-secondary/10 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-primary">Download my full resume</h2>
            <p className="mt-2 text-slate-600">Explore the complete engineering portfolio, coursework, and project experience in a production-ready curriculum vitae.</p>
          </div>
          <a href="/resume.pdf" download className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95">
            Download Resume
          </a>
        </div>
        <div className="mt-8 h-[720px] overflow-hidden rounded-[28px] border border-slate-200/80 bg-white">
          <iframe
            src="/resume.pdf"
            title="Kishore Resume"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
