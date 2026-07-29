import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants/projects';

export default function ProjectsPage() {
  return (
    <section className="relative px-6 pb-24 pt-12 xl:px-12">
      <SectionHeading title="Projects" subtitle="Advanced Robotics Portfolio" />
      <div className="mx-auto grid max-w-7xl gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
