import { useEffect, useRef } from 'react';
import { ArrowRight, Camera, Layers, PenTool, Wrench } from 'lucide-react';

const stats = [
  { icon: Wrench, label: 'Peças Modeladas', value: '6+' },
  { icon: PenTool, label: 'Desenhos Técnicos', value: '3' },
  { icon: Layers, label: 'Mates no Assembly', value: '20+' },
  { icon: Camera, label: 'Câmara RDA', value: '1' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const children = el.querySelectorAll<HTMLElement>('.hero-animate');
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      setTimeout(() => {
        child.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, 150 + i * 120);
    });
  }, []);

  const handleStart = () => {
    const el = document.querySelector('#camara');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_rgba(251,191,36,0.08)_0%,_transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div ref={containerRef} className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="hero-animate inline-flex items-center gap-2 border border-zinc-700 rounded-full px-5 py-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-mono text-zinc-400 text-xs tracking-[0.25em] uppercase">
            Projeto de Engenharia Mecânica &mdash; 2024/25
          </span>
        </div>

        <h1 className="hero-animate font-mono text-7xl md:text-9xl font-black tracking-tight text-white leading-[0.9] mb-6">
          equipa
          <br />
          <span className="text-amber-400">_Ausente</span>
        </h1>

        <div className="hero-animate w-20 h-px bg-amber-400/40 mx-auto my-8" />

        <p className="hero-animate text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
          Reverse engineering de uma câmara fotográfica analógica fabricada na{' '}
          <span className="text-zinc-200 font-medium">República Democrática Alemã</span>.
        </p>
        <p className="hero-animate text-zinc-600 text-base leading-relaxed max-w-xl mx-auto mb-14">
          Desmontagem, modelação 3D em SolidWorks, desenhos técnicos e assemblagem completa
          documentados neste espaço.
        </p>

        <div className="hero-animate grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-3xl mx-auto">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col items-center gap-2"
            >
              <Icon size={18} className="text-amber-400" />
              <span className="text-2xl font-bold font-mono text-white">{value}</span>
              <span className="text-zinc-500 text-xs text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="hero-animate inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:gap-4 group text-sm tracking-wide"
        >
          Explorar o Projeto
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>

        <p className="hero-animate mt-6 text-zinc-700 text-xs font-mono tracking-wider">
          Role para baixo para navegar &darr;
        </p>
      </div>
    </section>
  );
}
