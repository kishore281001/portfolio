import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <ScrollProgress />
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-slate-200/30' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 xl:px-12">
          <a href="/" className="font-semibold tracking-[0.28em] text-primary">
            KISHORE
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => `text-sm transition ${isActive ? 'text-accent' : 'text-slate-600 hover:text-primary'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-surface/80 text-primary md:hidden" onClick={() => setIsOpen((value) => !value)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="border-t border-slate-200/80 bg-surface/95 md:hidden"
            >
              <div className="flex flex-col gap-3 px-6 py-5">
                {navItems.map((item) => (
                  <NavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={({ isActive }) => `rounded-2xl px-4 py-3 text-sm transition ${isActive ? 'bg-surface text-accent' : 'text-slate-600 hover:bg-surface/80 hover:text-primary'}`}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main className="relative pt-24">
        <div className="absolute inset-x-0 top-0 h-96 bg-hero-gradient opacity-80 blur-3xl" />
        <Outlet />
      </main>
      <footer className="border-t border-slate-200/80 bg-surface/90 py-10 text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 xl:px-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary/80">Contact</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><Mail size={16} /> kishoreofficial16363@gmail.com</span>
              <span className="inline-flex items-center gap-2"><Phone size={16} /> +916363697804</span>
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Bengaluru, India</span>
            </div>
          </div>
          <div />
        </div>
        <div className="mt-8 border-t border-slate-200/80 pt-6 text-center text-sm text-slate-500">
          © 2026 Kishore. Designed for robotics, automation, and embedded engineering impact.
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
