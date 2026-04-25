export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-zinc-500 text-sm">
          equipa<span className="text-amber-400">_</span>Ausente
        </span>
        <p className="text-zinc-600 text-sm text-center">
          Projeto de Engenharia Mecânica &mdash; Reverse Engineering de Câmara RDA
        </p>
        <span className="font-mono text-zinc-700 text-xs">Made in GDR &rarr; Modelado em PT</span>
      </div>
    </footer>
  );
}
