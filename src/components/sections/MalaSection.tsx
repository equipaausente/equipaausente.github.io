import SectionBlock from '../SectionBlock';
import ImageCard from '../ImageCard';
import { sections } from '../../data/content';
import { Package } from 'lucide-react';

const { mala } = sections;

const photos = [
  'Foto 1 da mala',
  'Foto 2 da mala',
  'Foto 3 da mala',
];

export default function MalaSection() {
  return (
    <SectionBlock
      id={mala.id}
      index={mala.index}
      label={mala.label}
      title={mala.title}
      nextId="renderizacao"
      nextLabel="Renderização"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          {mala.text.map((p, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-base">
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Package size={18} className="text-amber-400" />
            <span className="text-white font-semibold text-sm tracking-wide">
              Fotos da Mala
            </span>
          </div>
          <ol className="space-y-3">
            {photos.map((photo, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-amber-400/60 text-xs mt-0.5 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-zinc-400 text-sm leading-relaxed">{photo}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {mala.images.length > 0 && (
        <div className="mt-10">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-4">Fotos da Mala</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mala.images.map((img) => (
              <ImageCard key={img.src} src={img.src} alt={img.alt} caption={img.caption} />
            ))}
          </div>
        </div>
      )}
    </SectionBlock>
  );
}
