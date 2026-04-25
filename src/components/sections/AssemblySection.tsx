import SectionBlock from '../SectionBlock';
import ImageCard from '../ImageCard';
import { sections } from '../../data/content';
import { CheckCircle, AlertCircle, Layers } from 'lucide-react';

const { assemblagem } = sections;

const mateTypes = [
  {
    type: 'Coincident',
    count: 'Maioria',
    status: 'ok',
    desc: 'Faces e eixos alinhados — base estrutural do assembly.',
  },
  {
    type: 'Concentric',
    count: 'Vários',
    status: 'ok',
    desc: 'Eixos cilíndricos centrados — usados nas peças circulares da objetiva.',
  },
  {
    type: 'Angle Limit',
    count: 'Alguns',
    status: 'ok',
    desc: 'Limitação de ângulo entre componentes para simular movimento real da abertura.',
  },
  {
    type: 'Distance',
    count: 'Poucos',
    status: 'warn',
    desc: 'Algumas distâncias com pequenas discrepâncias face às medidas reais.',
  },
];

const highlights = [
  'Camadas de borracha frontais modeladas para acabamento exterior realista',
  'Aspeto exterior da câmara finalizado esteticamente com fidelidade visual',
  'Movimentos angulares simulados com mates de limite de ângulo',
  'Peças internas posicionadas de acordo com a desmontagem documentada',
];

export default function AssemblySection() {
  return (
    <SectionBlock
      id={assemblagem.id}
      index={assemblagem.index}
      label={assemblagem.label}
      title={assemblagem.title}
      nextId="desenhos"
      nextLabel="Desenhos Técnicos"
    >
      <div className="space-y-5 mb-10 max-w-2xl">
        {assemblagem.text.map((p, i) => (
          <p key={i} className="text-zinc-400 leading-relaxed text-base">
            {p}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Layers size={18} className="text-amber-400" />
            <span className="text-white font-semibold text-sm">Tipos de Mates Utilizados</span>
          </div>
          <div className="space-y-4">
            {mateTypes.map((m) => (
              <div key={m.type} className="flex items-start gap-3">
                {m.status === 'ok' ? (
                  <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white text-sm font-medium font-mono">{m.type}</span>
                    <span className="text-zinc-600 text-xs">{m.count}</span>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <CheckCircle size={18} className="text-amber-400" />
            <span className="text-white font-semibold text-sm">Destaques do Assembly</span>
          </div>
          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-amber-400/50 text-xs mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-zinc-400 text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-5 mb-10">
        <p className="text-amber-300/80 text-sm leading-relaxed">
          <span className="font-semibold text-amber-400">Nota:</span> Existem algumas discrepâncias
          nas medidas entre peças modeladas individualmente, o que resultou em pequenos erros de
          posicionamento em alguns mates. Estas divergências não comprometem o aspeto visual final
          do assembly.
        </p>
      </div>

      {assemblagem.images.length > 0 && (
        <div>
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-4">Resultado Visual</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {assemblagem.images.map((img) => (
              <ImageCard key={img.src} src={img.src} alt={img.alt} caption={img.caption} />
            ))}
          </div>
        </div>
      )}
    </SectionBlock>
  );
}
