import SectionBlock from '../SectionBlock';
import ImageCard from '../ImageCard';
import { sections } from '../../data/content';

const { camara } = sections;

export default function CameraSection() {
  return (
    <SectionBlock id={camara.id} index={camara.index} label={camara.label} title={camara.title} nextId="ideias" nextLabel="Ideias Iniciais">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          {camara.text.map((p, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-base">
              {p}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {camara.images.map((img) => (
            <div key={img.src} className={camara.images.indexOf(img) === 0 ? 'sm:col-span-2' : ''}>
              <ImageCard src={img.src} alt={img.alt} caption={img.caption} />
            </div>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}
