import SectionBlock from '../SectionBlock';
import ImageCard from '../ImageCard';
import { sections } from '../../data/content';
import { FileText, Info } from 'lucide-react';

const { desenhos } = sections;

const drawingInfo = [
  {
    author: 'Nuno',
    part: 'Peça estrutural — perfil e cortes',
    views: ['Vista frontal', 'Vista lateral', 'Corte A-A'],
    standard: 'ISO 128',
    note: 'Inclui cotas de posicionamento dos braços e detalhes da geometria poligonal.',
  },
  {
    author: 'Equipa',
    part: 'Conjunto geral da câmara',
    views: ['Vista isométrica', 'Vista explodida', 'Lista de peças'],
    standard: 'ISO 128',
    note: 'Assembly geral com explodida e balões de identificação.',
  },
  {
    author: 'Kika',
    part: 'Tampa inferior — detalhes de geometria',
    views: ['Vista frontal', 'Vista superior', 'Detalhe X'],
    standard: 'ISO 128',
    note: 'Geometria complexa com pormenores de extrusões e cortes.',
  },
];

export default function DrawingsSection() {
  return (
    <SectionBlock
      id={desenhos.id}
      index={desenhos.index}
      label={desenhos.label}
      title={desenhos.title}
      nextId="mala"
      nextLabel="Mala"
    >
      <div className="space-y-5 mb-10 max-w-2xl">
        {desenhos.text.map((p, i) => (
          <p key={i} className="text-zinc-400 leading-relaxed text-base">
            {p}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {desenhos.images.map((img, i) => (
          <div key={img.src} className="flex flex-col gap-0">
            <ImageCard src={img.src} alt={img.alt} />
            <div className="bg-zinc-900 border border-t-0 border-zinc-800 rounded-b-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={13} className="text-amber-400 flex-shrink-0" />
                <span className="text-white text-sm font-semibold">{drawingInfo[i]?.author}</span>
                <span className="text-zinc-600 text-xs ml-auto font-mono">{drawingInfo[i]?.standard}</span>
              </div>
              <p className="text-zinc-500 text-xs mb-3">{drawingInfo[i]?.part}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {drawingInfo[i]?.views.map((v) => (
                  <span
                    key={v}
                    className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <p className="text-zinc-600 text-xs leading-relaxed">{drawingInfo[i]?.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-zinc-700/50 bg-zinc-900/50 p-5 flex gap-3">
        <Info size={16} className="text-zinc-500 flex-shrink-0 mt-0.5" />
        <p className="text-zinc-500 text-sm leading-relaxed">
          Os desenhos foram realizados em SolidWorks com norma ISO 128. Inclui vistas de conjunto,
          explodida com balões e cotagem das peças principais. Algumas folhas poderão beneficiar
          de informação adicional como tolerâncias e acabamentos superficiais.
        </p>
      </div>
    </SectionBlock>
  );
}
