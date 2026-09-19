import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Droplet, Clock, Sparkles, X } from 'lucide-react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

export default function TrafficJetSection() {
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

  const galleryImages = [
    {
      src: '/images/trafficjet/gallery/proceso-1-impresion.jpg',
      alt: 'Plotter industrial TrafficJet™ Xpress imprimiendo lámina reflectiva'
    },
    {
      src: '/images/carteleria/4f20f2f2-398d-44ca-9061-e3ce6b69e98b.jpg',
      alt: 'Bobinas de lámina microprismática retrorreflectiva Avery Dennison en planta'
    },
    {
      src: '/images/trafficjet/impresion-microprismatica-detalle.jpg',
      alt: 'Detalle de curado UV sobre estructura microprismática de alta intensidad'
    },
    {
      src: '/images/carteleria/efed8a3c-6e4d-4d5f-9e20-20d38467c75a.jpg',
      alt: 'Cartelería vial terminada de alta visibilidad en mesa de ensamble'
    }
  ];

  return (
    <section id="tecnologia" className="bg-slate-900 border-y border-slate-800 py-16 lg:py-24 px-4 relative scroll-mt-28">
      {/* Anchor complementario para navegación */}
      <div id="planta-tecnologia" className="absolute top-0 scroll-mt-28" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold tracking-wider uppercase" style={MONO}>
            Equipamiento Industrial Homologado
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight" style={HEADING}>
            Impresión Digital Retrorreflectiva: <span className="text-[#FF5A1F]">Avery Dennison TrafficJet™ Xpress</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium" style={BODY}>
            Capacidad de impresión directa sobre láminas prismáticas bajo estrictas normas de Vialidad Nacional y Provincial, garantizando uniformidad cromática y retrorreflexión controlada.
          </p>

          {/* Badges de especificación técnica */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
              Norma ASTM D4956
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
              Tintas Eco-solventes UV
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
              Sobrelaminado Anti-Graffiti
            </span>
          </div>
        </div>

        {/* Layout en 2 Columnas */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Columna Izquierda: Showcase Audiovisual (5 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl aspect-video group">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                poster="/images/trafficjet/video_poster.jpg"
                className="w-full h-full object-cover pointer-events-none"
              >
                <source src="/videos/trafficjet/video_home.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video HTML5.
              </video>

              {/* Overlay sutil de borde técnico */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />

              {/* Badge flotante sobre el video */}
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">
                  En planta: Impresión TrafficJet™ Xpress
                </span>
              </div>
            </div>

            <div className="mt-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/70 px-4 py-3 rounded-xl shadow-lg text-center">
              <p className="text-xs text-slate-300 font-medium" style={MONO}>
                Registro directo en planta — Proceso continuo de impresión digital sobre lámina reflectiva microprismática.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Aval Oficial & 4 Pilares (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Card Institucional con Logos Oficiales sin filtros de color */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-white/20 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <img 
                    src="/images/avery-dennison-official.svg" 
                    alt="Avery Dennison" 
                    className="h-8 md:h-9 w-auto object-contain"
                  />
                  <div className="h-6 w-px bg-slate-200" />
                  <img 
                    src="/images/trafficjet-xpress-official.svg" 
                    alt="TrafficJet™ Xpress" 
                    className="h-6 md:h-7 w-auto object-contain"
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 uppercase tracking-wider" style={MONO}>
                  <ShieldCheck size={14} className="text-emerald-600" /> Convertidor Oficial
                </span>
              </div>
              <div className="pt-4">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1" style={MONO}>
                  Garantía de Retrorreflectividad Homologada (DNV / IRAM 3952)
                </p>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed" style={BODY}>
                  Impresión digital directa sobre láminas microprismáticas Grado Ingeniería y Grado Diamante con tintas eco-solventes homologadas y curado UV. Durabilidad exterior certificada por Avery Dennison de 10 a 12 años.
                </p>
              </div>
            </div>

            {/* 4 Pilares Técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                {
                  icon: <ShieldCheck className="text-orange-400" size={20} />,
                  title: "Láminas Retrorreflectivas Certificadas",
                  desc: "Grado Ingeniería, Alta Intensidad Prismática (HIP) y Grado Diamante (DNV / DPV)."
                },
                {
                  icon: <Droplet className="text-orange-400" size={20} />,
                  title: "Tintas Eco-solventes Homologadas",
                  desc: "Curado UV de alta penetración, estabilidad de color y uniformidad cromática reglamentaria."
                },
                {
                  icon: <Sparkles className="text-emerald-400" size={20} />,
                  title: "Protección Integral Anti-Graffiti",
                  desc: "Blindaje repelente a pinturas sintéticas y aerosoles. Permite limpieza sin degradación."
                },
                {
                  icon: <Clock className="text-orange-400" size={20} />,
                  title: "Garantía Extendida de Fábrica",
                  desc: "Durabilidad a la intemperie de hasta 10 a 12 años certificada por Avery Dennison."
                }
              ].map((pillar, idx) => (
                <div key={idx} className="flex flex-col gap-2 bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 hover:border-orange-500/40 hover:bg-slate-800/80 transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                      {pillar.icon}
                    </div>
                    <h3 className="text-white font-bold text-xs tracking-wide" style={MONO}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed" style={BODY}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mini-Galería */}
        <div className="border-t border-slate-800 pt-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-white text-lg font-bold uppercase tracking-widest" style={MONO}>
              Galería de Proceso
            </h3>
            <div className="h-px bg-slate-800 flex-grow" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 cursor-pointer group hover:border-orange-500/50 transition-colors"
                onClick={() => setSelectedImage(img.src)}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              type="button"
              className="fixed top-4 right-4 z-[60] flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-900/90 hover:bg-orange-600 text-white border border-white/20 transition-all shadow-xl active:scale-95 cursor-pointer"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
            >
              <X size={24} />
            </button>
            <div 
              className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
