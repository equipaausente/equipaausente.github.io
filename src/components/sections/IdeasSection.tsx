import { Lightbulb, Target, Eye } from 'lucide-react';
import SectionBlock from '../SectionBlock';
import ImageCard from '../ImageCard';
import { sections } from '../../data/content';

const { ideias } = sections;

const criteria = [
  {
    icon: Lightbulb,
    title: 'Utilidade Atual',
    desc: 'Relevância do objeto no contexto atual e aplicações práticas da sua reconstrução 3D.',
  },
  {
    icon: Target,
    title: 'Acessibilidade',
    desc: 'Facilidade de obtenção do objeto e disponibilidade de documentação técnica de referência.',
  },
  {
    icon: Eye,
    title: 'Apelo Estético',
    desc: 'O fator determinante — a câmara oferece complexidade mecânica e uma forte identidade visual vintage.',
  },
];

export default function IdeasSection() {
  return (
    <SectionBlock id={ideias.id} index={ideias.index} label={ideias.label} title={ideias.title} nextId="desmontagem" nextLabel="Desmontagem">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
        <div className="space-y-5">
          {ideias.text.map((p, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-base">
              {p}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {criteria.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-400/30 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-amber-400/10 flex items-center justify-center">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {ideias.images.length > 0 && (
        <div>
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-4">Ideias Descartadas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ideias.images.map((img) => (
              <ImageCard key={img.src} src={img.src} alt={img.alt} caption={img.caption} />
            ))}
          </div>
        </div>
      )}
    </SectionBlock>
  );
}
