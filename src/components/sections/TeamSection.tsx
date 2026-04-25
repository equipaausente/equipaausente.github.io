import SectionBlock from '../SectionBlock';
import { sections } from '../../data/content';
import { Users } from 'lucide-react';

const { sobre } = sections;

export default function TeamSection() {
  return (
    <SectionBlock
      id={sobre.id}
      index={sobre.index}
      label={sobre.label}
      title={sobre.title}
      nextId={undefined}
      nextLabel={undefined}
    >
      <div className="space-y-10">
        <div className="space-y-5">
          {sobre.text.map((p, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sobre.team?.map((member) => (
            <div
              key={member.name}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="mb-6 overflow-hidden rounded-lg bg-zinc-800 h-48">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-400 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex items-start gap-4">
          <Users size={24} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-semibold mb-2">Trabalho em Equipa</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Este projeto demonstra como uma equipa multidisciplinar pode alcançar objetivos complexos através da colaboração, dedicação e conhecimento técnico partilhado.
            </p>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
