import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { obrasData } from '../src/data/obrasData';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

export default function CatalogoSenales() {
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
    <section id="catalogo" className="py-24 lg:py-32 bg-[#0d0f14] relative overflow-hidden border-b border-white/5">
      <div className="max-w-site mx-auto px-5 lg:px-10 relative z-10">
        
        {/* Header Institucional Sobrio */}
        <div className="mb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-primary text-[10px] tracking-[0.32em] uppercase" style={MONO}>
                Portfolio Corporativo
              </span>
            </div>
            <h2
              className="text-white leading-none tracking-tight mb-6"
              style={{ ...HEADING, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              FABRICACIÓN DE SEÑALIZACIÓN VIAL DE <span className="text-primary">PRIMER NIVEL</span>
            </h2>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed font-medium mb-4" style={BODY}>
              Producción de cartelería vial, urbana e industrial con sustratos de alta durabilidad y láminas retrorreflectivas Avery Dennison homologadas.
            </p>
            <div className="flex flex-wrap gap-3 mt-4 mb-8 text-sm text-slate-300">
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
                ✓ Cartelería Transitoria y Obras en Corrugado Plástico
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
                ✓ Círculos Reglamentarios de Velocidad Homologados (IRAM 3952)
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
                ✓ Señalización Urbana e Institucional para Municipios
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
                ✓ Señales Preventivas y Reglamentarias en Ruta
              </span>
            </div>
          </div>
        </div>

        {/* Galería Limpia de Trabajos y Obras */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {obrasData.map((item) => (
            <div key={item.id} className="flex flex-col h-full bg-slate-900 border border-white/10 rounded-lg overflow-hidden group hover:border-primary/40 transition-all duration-300">
              
              {/* Contenedor de Imagen 100% Limpio en 4:3 */}
              <div 
                className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden cursor-zoom-in group-hover:opacity-95 transition-opacity"
                onClick={() => setSelectedImage(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow bg-slate-900/90 border-t border-white/5">
                <h3 className="text-white font-bold text-sm leading-tight mb-1" style={MONO}>
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-white/60 text-xs leading-relaxed mt-auto" style={BODY}>
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
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
            className="bg-black/90 backdrop-blur-md z-50 fixed inset-0 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="fixed top-4 right-4 z-[60] flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-900/90 hover:bg-orange-600 text-white border border-white/20 transition-all shadow-xl active:scale-95 cursor-pointer"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
            >
              <X size={24} className="text-white" />
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