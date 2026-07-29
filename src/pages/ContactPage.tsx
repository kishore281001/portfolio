import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="relative px-6 pb-24 pt-12 xl:px-12">
      <SectionHeading title="Contact" subtitle="Connect With Me" />
      <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[0.95fr_0.6fr]">
        <div className="space-y-8 rounded-[36px] border border-slate-200/80 bg-surface/80 p-8 shadow-xl shadow-secondary/10 backdrop-blur-xl">
          <div className="rounded-[28px] border border-slate-200/70 bg-white/80 p-6">
            <h3 className="text-2xl font-semibold text-primary">Contact Details</h3>
            <p className="mt-4 text-slate-600">Ready to collaborate on robotics systems, automation engineering, or embedded product design. Reach out for technical discussions or career opportunities.</p>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3 text-primary">
                <Mail size={18} /> kishoreofficial16363@gmail.com
              </div>
              <div className="flex items-center gap-3 text-primary">
                <Phone size={18} /> +916363697804
              </div>
              <div className="flex items-center gap-3 text-primary">
                <MapPin size={18} /> Bengaluru, India
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="mt-12 rounded-[36px] border border-slate-800/80 bg-slate-950/80 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white">Location</h3>
        <p className="mt-3 text-slate-300">I am open to remote and hybrid engineering roles in robotics and automation systems across India.</p>
        <div className="mt-6 h-80 overflow-hidden rounded-[28px] border border-slate-800/70 bg-slate-900">
          <iframe
            title="Bengaluru Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.78487340668!2d77.6005761!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f0d9f0ed%3A0xbe4f0ad6f6e88fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701044527838!5m2!1sen!2sin"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
