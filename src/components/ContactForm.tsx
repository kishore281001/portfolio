import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const FORM_ID = 'service_abc123';
const TEMPLATE_ID = 'template_abc123';
const USER_ID = 'user_abc123';

export default function ContactForm() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = Object.fromEntries(formData.entries());

    try {
      await emailjs.send(FORM_ID, TEMPLATE_ID, templateParams, USER_ID);
      setStatus('Message sent successfully.');
      form.reset();
    } catch {
      setStatus('Unable to send message right now. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[32px] border border-slate-200/90 bg-white/90 p-8 shadow-xl shadow-secondary/10 backdrop-blur-xl">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-600">
          <span>Name</span>
          <input name="from_name" required className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-primary outline-none transition focus:border-accent" />
        </label>
        <label className="space-y-2 text-sm text-slate-600">
          <span>Email</span>
          <input type="email" name="reply_to" required className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-primary outline-none transition focus:border-accent" />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-600">
        <span>Subject</span>
        <input name="subject" required className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-primary outline-none transition focus:border-accent" />
      </label>
      <label className="space-y-2 text-sm text-slate-600">
        <span>Message</span>
        <textarea name="message" rows={6} required className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-primary outline-none transition focus:border-accent" />
      </label>
      <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
        Send Message
      </button>
      {status && <p className="text-sm text-secondary">{status}</p>}
    </form>
  );
}
