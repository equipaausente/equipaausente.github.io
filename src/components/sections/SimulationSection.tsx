import { Activity } from 'lucide-react';
import SectionBlock from '../SectionBlock';
import ContentBlocks from '../ContentBlocks';
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

      <ContentBlocks blocks={simulacao.blocks} />
    </SectionBlock>
  );
}
