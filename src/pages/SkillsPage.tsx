import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';

const skillGroups = [
  {
    title: 'Programming & Embedded',
    items: ['C', 'C++', 'Python', 'Embedded Systems', 'Arduino', 'ESP32', 'ESP32-S3', 'NodeMCU'],
    progress: 92,
  },
  {
    title: 'Robotics & Automation',
    items: ['Robot Design', 'Motor Control', 'Sensors', 'Autonomous Robots', 'Drone Technology'],
    progress: 88,
  },
  {
    title: 'IoT & Electronics',
    items: ['IoT', 'Firebase', 'Blynk', 'Sinric Pro', 'PCBs', 'Soldering', 'Circuit Design', 'Relay'],
    progress: 90,
  },
  {
    title: 'Tools & Workflow',
    items: ['Arduino IDE', 'Git', 'GitHub', 'Android Studio', 'VS Code'],
    progress: 95,
  },
];

export default function SkillsPage() {
  return (
    <section className="relative px-6 pb-24 pt-12 xl:px-12">
      <SectionHeading title="Skills" subtitle="Core Engineering Capabilities" />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} title={group.title} items={group.items} progress={group.progress} />
        ))}
      </div>
    </section>
  );
}
