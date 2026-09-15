import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { getWaLink } from '../utils/whatsapp';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

const WA_LINK_VISITA = getWaLink('Hola, me interesa coordinar una visita técnica a la planta o solicitar una memoria descriptiva de sus procesos.');

const PROYECTOS_Y_PLANTA = [
  "/images/instaladas/img_20250925_104539925.jpg",
  "/images/instaladas/img_20250925_105022718.jpg",
  "/images/instaladas/img_20250925_105339730_hdr_ae.jpg",
  "/images/instaladas/img_20250925_110019437_portrait.jpg",
  "/images/instaladas/img_20250925_110259680.jpg",
  "/images/instaladas/img_20250925_112732180.jpg"
];

export default function InfraestructuraIndustrial() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      <section id="infraestructura" className="py-20 lg:py-28 bg-[#04060A] border-b border-white/5 relative z-10">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          
          {/* Header de la sección */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
                Infraestructura Industrial y Obras
              </span>
              <div className="h-px w-8 bg-primary flex-shrink-0" />
            </div>
            <h2 className="text-white leading-none tracking-tight mb-6" style={{ ...HEADING, fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              TRABAJOS Y SOLUCIONES VIALES INSTALADAS
            </h2>
            <p className="text-white/70 text-sm lg:text-base leading-relaxed font-medium" style={BODY}>
              Registro visual de obras, cartelería reglamentaria, señalización transitoria y equipamiento.
            </p>
          </div>

          {/* Galería de Imágenes Limpia */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {PROYECTOS_Y_PLANTA.map((src, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg aspect-[4/3] group cursor-zoom-in hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(src)}
              >
                <Image 
                  src={src} 
                  alt="Trabajo realizado - Tecno Light S.R.L."
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* CTA Secundario */}
          <div className="text-center mt-12">
            <a
              href={WA_LINK_VISITA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-sm transition-all duration-300"
              style={BODY}
            >
              Coordinar visita técnica a planta o solicitar memoria descriptiva
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar vista previa"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh] h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Vista previa ampliada"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
