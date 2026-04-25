import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageCard({ src, alt, caption }: Props) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 cursor-zoom-in"
        onClick={() => setLightbox(true)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn
            size={32}
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          />
        </div>
        {caption && (
          <div className="px-4 py-3 border-t border-zinc-800">
            <p className="text-zinc-400 text-sm">{caption}</p>
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setLightbox(false)}
          >
            <X size={28} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && (
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 text-sm text-center">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
