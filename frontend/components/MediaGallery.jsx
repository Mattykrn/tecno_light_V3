/**
 * MediaGallery.jsx
 * Galería interactiva de imágenes reales de TECNO LIGHT S.R.L.
 * Muestra grilla con hover/lightbox y metadata exacta de cada imagen.
 */
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, RefreshCcw } from 'lucide-react';

const BODY = { fontFamily: "'Roboto', sans-serif" };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };

export default function MediaGallery({ items = [], columns = 3 }) {
  const [lightbox, setLightbox] = useState(null);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns] ?? 'sm:grid-cols-2 lg:grid-cols-3';

  // Lightbox Close Logic
  const closeLightbox = () => {
    setLightbox(null);
    setScale(1);
    setPan({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    if (lightbox) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  // Mouse Handlers for Panning
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    // Optional wheel zoom logic could be added here, leaving out for simplicity unless strictly required, 
    // replacing with simple button handlers below.
  };

  return (
    <>
      {/* GRILLA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightbox(item)}
            className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-slate-700/60 hover:border-orange-500/60 transition-all duration-300 flex flex-col bg-[#0d0f14] text-left w-full shadow-xl hover:-translate-y-1"
            aria-label={`Ver: ${item.title}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
          >
            {/* Contenedor de Imagen con Aspect Ratio Fijo */}
            <div className="relative w-full aspect-[4/3] bg-neutral-900 rounded-t-lg overflow-hidden shrink-0">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-lg">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
            
            {/* Contenedor de Textos (Abajo de la foto) */}
            <div className="p-4 flex-1 flex flex-col bg-slate-900 rounded-b-lg">
              <div className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={MONO}>
                {item.category}
              </div>
              <div className="text-white text-[15px] font-bold leading-snug mb-2" style={HEADING}>
                {item.title}
              </div>
              <div className="text-white/60 text-xs leading-relaxed line-clamp-2 mt-auto" style={BODY}>
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {mounted && lightbox && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 select-none touch-none"
          onClick={closeLightbox}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Botón de Cierre Flotante de Alta Prioridad */}
          <button
            type="button"
            aria-label="Cerrar imagen"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); closeLightbox(); }}
            style={{ touchAction: 'manipulation' }}
            className="fixed top-4 right-4 z-[60] flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-900/90 hover:bg-orange-600 text-white border border-white/20 shadow-2xl active:scale-95 transition-all cursor-pointer"
          >
            <X size={24} className="text-white" />
          </button>

          <div
            className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientY)}
            onTouchEnd={(e) => {
              if (!touchStart) return;
              const touchEnd = e.changedTouches[0].clientY;
              // Si desliza hacia abajo más de 80px y no hay zoom
              if (touchEnd - touchStart > 80 && scale === 1) {
                closeLightbox();
              }
              setTouchStart(null);
            }}
          >
            {/* Controles de Zoom */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[9995] flex gap-2 bg-black/60 p-1.5 rounded-full backdrop-blur-md border border-white/10">
              <button 
                onClick={() => setScale(s => Math.max(1, s - 0.5))} 
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Alejar"
              >
                <ZoomOut size={18} />
              </button>
              <button 
                onClick={() => { setScale(1); setPan({x:0, y:0}); }} 
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Restablecer"
              >
                <RefreshCcw size={16} />
              </button>
              <button 
                onClick={() => setScale(s => Math.min(4, s + 0.5))} 
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Acercar"
              >
                <ZoomIn size={18} />
              </button>
            </div>

            {/* Contenedor de Imagen con Pan & Zoom */}
            <div 
              className={`relative w-full max-w-[92vw] overflow-hidden flex items-center justify-center select-none ${scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}`} 
              style={{ height: '75vh', maxHeight: '80vh' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
            >
              <div 
                style={{ 
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`, 
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out' 
                }}
                className="relative w-full h-full max-w-[92vw] max-h-[80vh] flex items-center justify-center"
              >
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain select-none"
                  sizes="100vw"
                  priority
                  draggable={false}
                />
              </div>
            </div>

            {/* Metadata del lightbox */}
            <div className="mt-4 bg-[#0d0f14]/80 backdrop-blur-md border border-white/8 rounded-[6px] p-5 w-full max-w-4xl z-[9995]">
              <div className="text-primary text-[10px] tracking-widest uppercase mb-1.5" style={MONO}>
                {lightbox.category}
              </div>
              <h3 className="text-white text-base font-bold mb-1" style={HEADING}>
                {lightbox.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed" style={BODY}>
                {lightbox.subtitle}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
