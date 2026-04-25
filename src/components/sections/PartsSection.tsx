import SectionBlock from '../SectionBlock';
import ImageCard from '../ImageCard';
import { sections } from '../../data/content';

const { pecas } = sections;

export default function PartsSection() {
  return (
    <SectionBlock id={pecas.id} index={pecas.index} label={pecas.label} title={pecas.title} nextId="assemblagem" nextLabel="Assemblagem">
      <div className="space-y-5 mb-12 max-w-2xl">
        {pecas.text.map((p, i) => (
          <p key={i} className="text-zinc-400 leading-relaxed text-base">
            {p}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pecas.parts.map((part) => (
          <div
            key={part.name}
            className="rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors"
          >
            {part.image && (
              <ImageCard src={part.image.src} alt={part.image.alt} caption={part.image.caption} />
            )}
            {!part.image && (
              <div className="aspect-[4/3] bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-600 text-sm font-mono">Imagem em breve</span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-3">{part.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{part.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
