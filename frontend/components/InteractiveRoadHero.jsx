import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, MessageCircle } from 'lucide-react';
import { getWaLink } from '../utils/whatsapp';

const WA_LINK = getWaLink();
const WA_LINK_CONTACTO = getWaLink();

export default function InteractiveRoadHero() {
  return (
    <section id="inicio" className="relative min-h-[75vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden overflow-x-hidden pt-32 md:pt-40 pb-16 px-4 scroll-mt-28">
      
      {/* Overlay de legibilidad y contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950 pointer-events-none" />

      {/* Contenido Central */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center space-y-6 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Logo institucional con escala monumental y presencia protagónica */}
        <div className="w-full flex justify-center items-center mt-4 sm:mt-6 mb-8 sm:mb-10 px-4">
          <img 
            src="/images/logo-tecnolight-white.png" 
            alt="TECNO LIGHT S.R.L." 
            className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
            style={{ width: '100%', maxWidth: '960px', height: 'auto' }}
          />
        </div>

        {/* Título Principal H1 */}
        <h1 
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide text-center uppercase max-w-4xl mx-auto mt-4 leading-tight"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          TECNO LIGHT <span className="text-[#FF5A1F]">S.R.L.</span>
        </h1>

        {/* Bajada Técnica Directa */}
        <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
          Fabricación y provisión integral de señalización vial, indumentaria de trabajo, elementos de protección personal (EPP) y alquiler de equipamiento para obra bajo normativas DNV, DPV y estándares IRAM.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF5A1F] hover:bg-[#e54e18] text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#FF5A1F]/30"
          >
            <FileText size={18} />
            Solicitar Presupuesto
          </a>
          <a
            href={WA_LINK_CONTACTO}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-sm transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            Contactar por WhatsApp
          </a>
        </div>

        {/* Aval Avery Dennison Inferior */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-4xl mx-auto px-2 sm:px-4">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-200 font-bold text-center sm:text-left leading-snug">
            DISTRIBUIDORES Y CONVERTIDORES <span className="text-[#FF5A1F]">CERTIFICADOS:</span>
          </span>

          <div className="flex items-center gap-3 sm:gap-4 bg-white/95 border border-white/30 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-xl hover:bg-white transition-all max-w-full shrink-0">
            <img 
              src="/images/avery-dennison-official.svg" 
              alt="Avery Dennison" 
              className="h-6 sm:h-8 w-auto object-contain shrink-0" 
            />
            <div className="h-5 sm:h-6 w-px bg-slate-200 shrink-0" />
            <img 
              src="/images/trafficjet-xpress-official.svg" 
              alt="TrafficJet™ Xpress" 
              className="h-5 sm:h-7 w-auto object-contain shrink-0" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
