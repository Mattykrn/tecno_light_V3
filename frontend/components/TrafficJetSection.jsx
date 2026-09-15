import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Droplet, Clock, Sparkles } from 'lucide-react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

export default function TrafficJetSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    '/images/trafficjet/gallery/1.jpg',
    '/images/trafficjet/gallery/2.jpg',
    '/images/trafficjet/gallery/3.jpg',
    '/images/trafficjet/gallery/4.jpg'
  ];

  return (
    <section id="tecnologia" className="bg-slate-900 border-y border-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold tracking-wider uppercase" style={MONO}>
            Equipamiento Industrial Homologado
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight" style={HEADING}>
            Impresión Digital Retrorreflectiva: <span className="text-[#FF5A1F]">Avery Dennison TrafficJet™ Xpress</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium" style={BODY}>
            Capacidad de impresión directa sobre láminas prismáticas bajo estrictas normas de Vialidad Nacional y Provincial, garantizando uniformidad cromática y retrorreflexión controlada.
          </p>
        </div>

        {/* Layout en 2 Columnas */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Columna Izquierda (Showcase Audiovisual) */}
          <div className="relative group">
            <div className="absolute -top-3 -right-3 z-20">
              <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-emerald-50 border border-emerald-400/50 text-xs font-bold tracking-wider uppercase shadow-lg shadow-emerald-500/20 backdrop-blur-md">Laminado Anti-Graffiti Disponible</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl relative aspect-video">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
                poster="/images/trafficjet/proceso-impresion-poster.jpg"
              >
                <source src="/videos/trafficjet/impresion-trafficjet.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 inset-x-6 bg-slate-800/90 backdrop-blur-sm border border-slate-700 px-4 py-3 rounded-lg shadow-lg text-center">
              <p className="text-xs text-slate-300 font-medium" style={MONO}>
                Registro directo en planta — Proceso continuo de impresión digital sobre lámina reflectiva.
              </p>
            </div>
          </div>

          {/* Columna Derecha (4 Pilares en 2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 lg:mt-0">
            {[
              {
                icon: <ShieldCheck className="text-orange-400" size={22} />,
                title: "Láminas Retrorreflectivas Certificadas",
                desc: "Grado Ingeniería, Alta Intensidad Prismática (HIP) y Grado Diamante (DNV / DPV)."
              },
              {
                icon: <Droplet className="text-orange-400" size={22} />,
                title: "Tintas Eco-solventes Homologadas",
                desc: "Curado UV de alta penetración, estabilidad de color y uniformidad cromática reglamentaria."
              },
              {
                icon: <Sparkles className="text-emerald-400" size={22} />,
                title: "Protección Integral Anti-Graffiti",
                desc: "Blindaje repelente a pinturas sintéticas y aerosoles. Permite limpieza reiterada sin degradar la señal."
              },
              {
                icon: <Clock className="text-orange-400" size={22} />,
                title: "Garantía Extendida de Fábrica",
                desc: "Durabilidad a la intemperie certificada por Avery Dennison de hasta 10 a 12 años en condiciones extremas."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col gap-3 group bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50 hover:border-orange-500/30 hover:bg-slate-800/80 transition-all">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-2 tracking-wide" style={MONO}>
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed" style={BODY}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
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
            {galleryImages.map((src, idx) => (
              <div 
                key={idx}
                className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 cursor-pointer group hover:border-orange-500/50 transition-colors"
                onClick={() => setSelectedImage(src)}
              >
                <Image 
                  src={src} 
                  alt={`Muestra de impresión ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[85vh]">
              <Image
                src={selectedImage}
                alt="Vista ampliada"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
