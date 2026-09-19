import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

export default function ServicesSection() {
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
      <section id="servicios" className="py-20 lg:py-28 bg-[#080A0F] border-b border-white/5">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
                Líneas de Fabricación y Servicios
              </span>
              <div className="h-px w-8 bg-primary flex-shrink-0" />
            </div>
            <h2 className="text-white leading-none tracking-tight mb-6" style={{ ...HEADING, fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              SOLUCIONES VIALES INTEGRALES
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LÍNEAS DE FABRICACIÓN */}
            <div className="flex flex-col">
              <h3 className="text-white/90 text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-3" style={HEADING}>
                Líneas de Fabricación y Productos
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8" style={BODY}>
                Fabricamos cartelería reglamentaria, preventiva, informativa y de obra conforme a pliegos de Dirección Nacional y Provincial de Vialidad. Producimos nomenclatura urbana, pórticos, ménsulas y cartelería corporativa de seguridad industrial. Desarrollamos señalización lumínica de alta tecnología como balizas destellantes a led, flechas lumínicas direccionales y tráilers solares. Asimismo, elaboramos y proveemos dispositivos delimitadores tales como vallas metálicas peatonales, tambores viales, canalizadores, conos y delineadores flexibles.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/media/fab-cartel-radar-dpv.jpg')}>
                  <Image src="/images/media/fab-cartel-radar-dpv.jpg" alt="Cartelería institucional para municipios — Aprobada DPV Santa Fe" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/media/fab-carteles-corrugados-02.jpg')}>
                  <Image src="/images/media/fab-carteles-corrugados-02.jpg" alt="Cartelería corporativa para predios e industrias — Molino Matilde S.A." fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/media/fab-carteles-corrugados-03.jpg')}>
                  <Image src="/images/media/fab-carteles-corrugados-03.jpg" alt="Cartelería de obra y seguridad de camiones — Ecoviar S.A." fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/carteleria/f40ebce6-d6b2-4472-aadf-adeeb591a989.jpg')}>
                  <Image src="/images/carteleria/f40ebce6-d6b2-4472-aadf-adeeb591a989.jpg" alt="Ensamble y terminación de cartelería de seguridad" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* SERVICIOS VIALES */}
            <div className="flex flex-col">
              <h3 className="text-white/90 text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-3" style={HEADING}>
                Servicios Viales
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8" style={BODY}>
                Ofrecemos provisión transitoria y alquiler de carteles, balizas, vallas y dispositivos para el desarrollo de desvíos en obras viales, civiles y eventos masivos. Realizamos demarcación vial e industrial aplicando pintura termoplástica y reflectiva para sendas peatonales, cordones, estacionamientos y sendas de seguridad en naves industriales. Además, contamos con personal capacitado para la instalación y montaje en obra de pórticos viales, defensas metálicas, reductores de velocidad, tachas reflectivas y delineadores, garantizando los más altos estándares de calidad y seguridad.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/vallas/assa-rosario-balizamiento.jpg')}>
                  <Image src="/images/vallas/assa-rosario-balizamiento.jpg" alt="Balizamiento diurno y delimitación de obra urbana — ASSA" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/vallas/-_c5-15.jpg')}>
                  <Image src="/images/vallas/-_c5-15.jpg" alt="Despliegue de vallado en predio" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/media/svc-senalizacion-obra-01.jpg')}>
                  <Image src="/images/media/svc-senalizacion-obra-01.jpg" alt="Balizamiento nocturno con balizas destellantes a LED en obra vial" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImage('/images/vallas/-_c5-17.jpg')}>
                  <Image src="/images/vallas/-_c5-17.jpg" alt="Carga de estructuras con autoelevador" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

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
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 p-2 rounded-full z-50"
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
