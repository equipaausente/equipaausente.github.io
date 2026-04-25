import SectionBlock from '../SectionBlock';
import ContentBlocks from '../ContentBlocks';
import { sections } from '../../data/content';
import { Zap } from 'lucide-react';

const { animacao } = sections;

export default function AnimacaoSection() {
  return (
    <SectionBlock
      id={animacao.id}
      index={animacao.index}
      label={animacao.label}
      title={animacao.title}
      nextId="sobre"
      nextLabel="A Equipa"
    >
      <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-6 mb-10 flex gap-4">
        <Zap size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-amber-400 font-semibold mb-2">Animação e vídeo final</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Esta secção acompanha o processo desde o scan inicial da mão até ao vídeo final renderizado em Blender.
          </p>
        </div>
      </div>

      <ContentBlocks blocks={animacao.blocks} />
    </SectionBlock>
  );
}
