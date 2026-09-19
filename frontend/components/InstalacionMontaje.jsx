import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

const INSTALACION_DATA = [
  {
    title: 'Montaje de Señalización Vertical en Rutas y Autovías',
    desc: 'Hincado de postes de acero, hormigonado de bases y fijación antivandálica de carteles preventivos y reglamentarios en banquinas y zonas de camino.',
    img: '/images/instalacion_curada/montaje-ruta-rp70.jpg'
  },
  {
    title: 'Cartelería de Gran Porte y Señalización Aérea',
    desc: 'Fabricación y montaje de pescantes, ménsulas y pórticos viales con láminas microprismáticas Avery Dennison de alta reflectividad.',
    img: '/images/instalacion_curada/cartel-gran-porte-ruta13.jpg'
  },
  {
    title: 'Demarcación, Vallado y Balizamiento de Obras Urbanas',
    desc: 'Delimitación de intervenciones en vía pública, zanjeos y obras de saneamiento/pavimento con defensas metálicas, cartelería transitoria de obra y balizamiento nocturno.',
    img: '/images/instalacion_curada/balizamiento-obra-urbana.jpg'
  }
];

export default function InstalacionMontaje() {
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
    <section id="instalacion" className="py-20 lg:py-28 bg-[#0d0f14] border-b border-white/5 relative z-10 scroll-mt-28">
      <div className="max-w-site mx-auto px-5 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary flex-shrink-0" />
            <span className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
              Despliegue Operativo
            </span>
            <div className="h-px w-8 bg-primary flex-shrink-0" />
          </div>
          <h2 className="text-white leading-none tracking-tight mb-6" style={{ ...HEADING, fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
            INSTALACIÓN Y MONTAJE DE CARTELERÍA VIAL EN RUTA Y CIUDAD
          </h2>
          <p className="text-white/70 text-sm lg:text-base leading-relaxed font-medium mx-auto max-w-3xl" style={BODY}>
            Cuadrillas especializadas, equipamiento pesado y logística para la colocación de estructuras, pórticos y señalización vertical reglamentaria bajo normas DNV y provinciales.
          </p>
        </div>

        {/* Grilla 3 Columnas Técnicas */}
        <div className="grid md:grid-cols-3 gap-8">
          {INSTALACION_DATA.map((item, index) => (
            <div key={index} className="bg-slate-900/50 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-colors group flex flex-col">
              {/* Foto Limpia Arriba */}
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden cursor-zoom-in"
                onClick={() => setSelectedImage(item.img)}
              >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              {/* Ficha Técnica Abajo */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-3" style={HEADING}>
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed" style={BODY}>
                  {item.desc}
                </p>
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
