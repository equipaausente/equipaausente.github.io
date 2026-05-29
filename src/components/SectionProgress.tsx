import { useEffect, useState } from 'react';
import { sections as contentSections } from '../data/content';

const buildSections = () => {
  const dynamicSections = Object.values(contentSections).map((section) => ({
    id: section.id,
    label: section.label,
  }));
  return [{ id: 'inicio', label: 'Início' }, ...dynamicSections];
};

const sections = buildSections();

export default function SectionProgress() {
  const [active, setActive] = useState('inicio');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);

      const scrollMid = window.scrollY + window.innerHeight / 3;
      let current = 'inicio';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollMid) current = s.id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: id === 'simulacao' ? 'auto' : 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
      }`}
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => navigate(s.id)}
          title={s.label}
          className="group flex items-center justify-end gap-2"
        >
          <span
            className={`text-xs font-mono tracking-wide whitespace-nowrap transition-all duration-200 ${
              active === s.id
                ? 'opacity-100 text-amber-400'
                : 'opacity-0 group-hover:opacity-100 text-zinc-500'
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? 'w-3 h-3 bg-amber-400'
                : 'w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-400 group-hover:scale-125'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
