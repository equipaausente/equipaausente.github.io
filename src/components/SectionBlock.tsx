import { useEffect, useRef, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  id: string;
  index: number;
  label: string;
  title: string;
  nextId?: string;
  nextLabel?: string;
  children: ReactNode;
}

export default function SectionBlock({ id, index, label, title, nextId, nextLabel, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (!nextId) return;
    const el = document.getElementById(nextId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      ref={ref}
      className="section-fade py-24 md:py-32 border-t border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start gap-8 mb-12">
          <span className="font-mono text-zinc-700/60 text-5xl font-black leading-none select-none pt-1">
            {String(index).padStart(2, '0')}
          </span>
          <div>
            <p className="font-mono text-amber-400/70 text-xs tracking-[0.3em] uppercase mb-2">
              {label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
          </div>
        </div>

        {children}

        {nextId && nextLabel && (
          <div className="mt-16 pt-8 border-t border-zinc-800/50 flex justify-end">
            <button
              onClick={handleNext}
              className="group inline-flex items-center gap-3 text-zinc-500 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              <span>Continuar para</span>
              <span className="text-white group-hover:text-amber-400 font-semibold">{nextLabel}</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
