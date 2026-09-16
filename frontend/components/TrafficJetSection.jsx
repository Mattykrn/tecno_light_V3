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
    <section id="tecnologia" className="bg-slate-900 border-y border-slate-800 py-16 lg:py-24 px-4 relative">
      {/* Anchor complementario para navegación */}
      <div id="planta-tecnologia" className="absolute -top-20" />

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
        </div>

        {/* Layout en 2 Columnas */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Columna Izquierda: Showcase Audiovisual (5 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-700/80 bg-black shadow-2xl aspect-video">
              <div className="absolute top-3 right-3 z-20">
                <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white border border-emerald-400/50 text-[11px] font-bold tracking-wider uppercase shadow-lg shadow-emerald-500/20 backdrop-blur-md">
                  Laminado Anti-Graffiti
                </span>
              </div>
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase" style={MONO}>
                  Planta Activa
                </span>
              </div>

              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="w-full h-full object-cover"
                poster="/images/trafficjet/proceso-impresion-poster.jpg"
              >
                <source src="/videos/trafficjet-impresion.mp4" type="video/mp4" />
                <source src="/videos/trafficjet/impresion-trafficjet.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
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
