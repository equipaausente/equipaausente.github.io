import SectionBlock from '../SectionBlock';
import ImageCard from '../ImageCard';
import { sections } from '../../data/content';
import { Wrench } from 'lucide-react';

const { desmontagem } = sections;

const steps = [
  'Remoção da tampa traseira e acesso ao interior',
  'Desmontagem do sistema de obturador',
  'Extração do conjunto ótico e lentes',
  'Separação dos mecanismos de avanço do filme',
  'Catalogação e fotografia de cada componente',
  'Seleção das peças a modelar em 3D',
];

export default function DisassemblySection() {
  return (
    <SectionBlock
      id={desmontagem.id}
      index={desmontagem.index}
      label={desmontagem.label}
      title={desmontagem.title}
      nextId="pecas"
      nextLabel="Peças Modeladas"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          {desmontagem.text.map((p, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-base">
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Wrench size={18} className="text-amber-400" />
            <span className="text-white font-semibold text-sm tracking-wide">
              Processo de Desmontagem
            </span>
          </div>
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-amber-400/60 text-xs mt-0.5 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-zinc-400 text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {desmontagem.images.length > 0 && (
        <div className="mt-10">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-4">Fotografia da Desmontagem</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {desmontagem.images.map((img) => (
              <ImageCard key={img.src} src={img.src} alt={img.alt} caption={img.caption} />
            ))}
          </div>
        </div>
      )}
    </SectionBlock>
  );
}
