import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'A Nossa Câmara', href: '#camara' },
  { label: 'Ideias', href: '#ideias' },
  { label: 'Desmontagem', href: '#desmontagem' },
  { label: 'Peças', href: '#pecas' },
  { label: 'Assemblagem', href: '#assemblagem' },
  { label: 'Desenhos', href: '#desenhos' },
  { label: 'Mala', href: '#mala' },
  { label: 'Renderização', href: '#renderizacao' },
  { label: 'Animação', href: '#animacao' },
  { label: 'Simulação', href: '#simulacao' },
  { label: 'Sobre', href: '#sobre' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-lg font-bold tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
        >
          equipa_<span className="text-white">Ausente</span>
        </button>

        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-xs lg:text-sm text-zinc-400 hover:text-amber-400 transition-colors tracking-wide font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-sm text-zinc-300 hover:text-amber-400 transition-colors tracking-wide text-left py-1"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
