import { Activity } from 'lucide-react';
import SectionBlock from '../SectionBlock';
import { sections } from '../../data/content';

const { simulacao } = sections;

export default function SimulationSection() {
  return (
    <SectionBlock
      id={simulacao.id}
      index={simulacao.index}
      label={simulacao.label}
      title={simulacao.title}
      nextId="sobre"
      nextLabel="A Equipa"
    >
      <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-6 mb-10 flex gap-4">
        <Activity size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-amber-400 font-semibold mb-2">Análise por simulação</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Estudo do comportamento estrutural de um tripé no SolidWorks, partindo de testes simples para uma análise crítica das peças mais importantes.
          </p>
        </div>
      </div>

      <div className="space-y-14">
        {simulacao.blocks.map((block, index) => (
          <article key={index} className="space-y-6">
            {block.title && (
              <h3 className="text-xl font-bold text-white tracking-tight">{block.title}</h3>
            )}

            {block.text && block.text.length > 0 && (
              <div className="space-y-5 max-w-3xl rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                {block.text.map((paragraph, textIndex) => (
                  <p key={textIndex} className="text-zinc-300 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {block.images && block.images.length > 0 && (
              <div
                className={`grid grid-cols-1 gap-4 ${
                  block.images.length === 1
                    ? 'max-w-3xl'
                    : block.images.length === 2
                      ? 'sm:grid-cols-2'
                      : 'sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {block.images.map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 transition-colors hover:border-amber-400/30"
                  >
                    <div className="aspect-[4/3] bg-white p-3">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    {image.caption && (
                      <div className="border-t border-zinc-800 px-4 py-3">
                        <p className="text-sm text-zinc-300">{image.caption}</p>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
