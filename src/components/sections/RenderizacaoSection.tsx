import SectionBlock from '../SectionBlock';
import ContentBlocks from '../ContentBlocks';
import { sections } from '../../data/content';
import { Palette } from 'lucide-react';

const { renderizacao } = sections;

export default function RenderizacaoSection() {
  return (
    <SectionBlock
      id={renderizacao.id}
      index={renderizacao.index}
      label={renderizacao.label}
      title={renderizacao.title}
      nextId="animacao"
      nextLabel="Animação"
    >
      <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-6 mb-10 flex gap-4">
        <Palette size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-amber-400 font-semibold mb-2">Processo de Renderização</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Esta secção documenta a evolução da modelação da capa, do suporte e da preparação para renderização.
          </p>
        </div>
      </div>

      <ContentBlocks blocks={renderizacao.blocks} />
    </SectionBlock>
  );
}
