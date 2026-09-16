import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, MessageCircle } from 'lucide-react';
import { getWaLink } from '../utils/whatsapp';

const WA_LINK = getWaLink('Hola, necesito solicitar una cotización de pliego de señalización vial.');
const WA_LINK_INGENIERIA = getWaLink('Hola, me contacto con el departamento de Ingeniería/Ventas para consultas sobre obras y licitaciones.');

export default function InteractiveRoadHero() {
  return (
    <section id="inicio" className="relative min-h-[75vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden overflow-x-hidden pb-16 pt-28 md:pt-36 px-4">
      
      {/* Contenido Central */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center space-y-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Logo institucional centrado sobre el H1 */}
        <div className="flex justify-center items-center mb-8">
          <img 
            src="/images/logo-tecnolight-white.png" 
            alt="TECNO LIGHT S.R.L." 
            className="h-32 sm:h-40 md:h-48 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Título Principal H1 */}
        <h1 
          className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white uppercase mt-4"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          EMPRESA LÍDER EN FABRICACIÓN INTEGRAL DE SEÑALES VIALES DE <span className="text-[#FF5A1F]">ARGENTINA</span>
        </h1>

        {/* Bajada Técnica */}
        <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
          TECNO LIGHT S.R.L. — Señalización vial e industrial, protección personal y seguridad industrial bajo normativas DNV y DPV.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF5A1F] hover:bg-[#e54e18] text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#FF5A1F]/30"
          >
            <FileText size={18} />
            Solicitar Cotización
          </a>
          <a
            href={WA_LINK_INGENIERIA}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-sm transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            Contactar por WhatsApp
          </a>
        </div>

        {/* Aval Avery Dennison Inferior */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-4xl mx-auto px-4">
          <span className="text-sm sm:text-base uppercase tracking-widest text-slate-300 font-bold text-center sm:text-left">
            Distribuidores y convertidores certificados:
          </span>

          <div className="flex items-center gap-4 bg-white/5 border border-white/15 px-6 py-4 rounded-2xl shadow-inner">
            {/* Isotipo Avery Dennison en SVG puro con tamaño real */}
            <svg 
              viewBox="0 0 100 90" 
              className="h-12 w-auto fill-white shrink-0" 
              aria-label="Avery Dennison"
            >
              <path d="M47.2 4.5c1.2-2 3.8-2.7 5.8-1.5.5.3.9.7 1.2 1.2l44.3 75.2c1.2 2 .5 4.6-1.5 5.8-.6.4-1.3.6-2 .6H5c-2.3 0-4.2-1.9-4.2-4.2 0-.7.2-1.5.6-2.1L47.2 4.5zm2.8 15.8L16.4 75.8h67.2L50 20.3zm0 21.2l18.5 31.3H31.5L50 41.5z" />
            </svg>

            {/* Textos tipográficos nítidos y legibles sin depender de imágenes comprimidas */}
            <div className="flex flex-col text-left leading-none justify-center">
              <span className="text-white font-black text-xl sm:text-2xl tracking-tighter uppercase font-sans">
                AVERY DENNISON
              </span>
              <span className="text-orange-400 font-bold text-sm sm:text-base tracking-wide mt-1">
                TrafficJet™ Xpress
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
