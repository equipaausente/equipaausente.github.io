import ImageCard from './ImageCard';

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface VideoItem {
  src: string;
  type?: string;
  caption?: string;
}

interface ContentBlockItem {
  text?: string[];
  images?: ImageItem[];
  videos?: VideoItem[];
}

interface Props {
  blocks: ContentBlockItem[];
}

export default function ContentBlocks({ blocks }: Props) {
  return (
    <div className="space-y-14">
      {blocks.map((block, blockIndex) => (
        <div key={blockIndex} className="space-y-6">
          {block.text && block.text.length > 0 && (
            <div className="space-y-5 max-w-3xl">
              {block.text.map((paragraph, textIndex) => (
                <p key={textIndex} className="text-zinc-400 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {block.images && block.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {block.images.map((image) => (
                <ImageCard
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                />
              ))}
            </div>
          )}

          {block.videos && block.videos.length > 0 && (
            <div className="space-y-6">
              {block.videos.map((video) => (
                <figure
                  key={video.src}
                  className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900"
                >
                  <video controls preload="metadata" className="w-full bg-black">
                    <source src={video.src} type={video.type || 'video/mp4'} />
                    O teu browser não suporta vídeo HTML5.
                  </video>

                  {video.caption && (
                    <figcaption className="px-4 py-3 border-t border-zinc-800 text-zinc-400 text-sm">
                      {video.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
