import React from 'react';
import Image from 'next/image';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

const EPP_ITEMS = [
  "Protección Ocular (antiparras, anteojos de seguridad)",
  "Protección Auditiva (protectores de copa y endoaurales)",
  "Protección Craneana (cascos homologados)",
  "Protección Respiratoria (semimáscaras, filtros)",
  "Indumentaria y Alta Visibilidad (chalecos clase 2/3)",
  "Calzado de Seguridad (puntera de acero/dieléctrica)",
  "Protección para Manos (nitrilo, vaqueta, descarne)",
  "Trabajo en Altura (arneses, colas de amarre)",
  "Extintores y Protección contra Incendios",
  "Señalización para Plantas y Edificios"
];

export default function SeguridadIndustrial() {
  return (
    <section id="seguridad" className="py-24 lg:py-32 bg-[#0B0F17] relative overflow-hidden border-b border-white/5">
      <div className="max-w-site mx-auto px-5 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="mb-14 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <span className="text-primary text-[10px] tracking-[0.32em] uppercase" style={MONO}>
              Protección para Trabajadores
            </span>
            <div className="h-px w-16 bg-primary flex-shrink-0" />
          </div>
          <h2
            className="text-white leading-none tracking-tight mb-6"
            style={{ ...HEADING, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            SEGURIDAD INDUSTRIAL Y <span className="text-primary">EPP</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-center">
          <div className="lg:col-span-5 relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="/images/epp/portada.jpg" 
              alt="Preparación de pedidos de EPP y Seguridad Industrial" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {EPP_ITEMS.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-900/60 p-4 md:p-5 rounded-md border border-white/5 hover:border-primary/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                <span className="text-white/90 text-sm font-medium leading-snug" style={BODY}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Corporativo */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center max-w-3xl mx-auto backdrop-blur-sm">
          <blockquote className="text-white/90 text-lg lg:text-xl leading-relaxed mb-6 font-medium italic border-l-4 border-primary pl-6 py-2 text-left" style={BODY}>
            "Brindamos asesoramiento especializado en seguridad laboral, garantizando equipamiento homologado y de máxima durabilidad."
          </blockquote>
          <a
            href="mailto:tecnolight@tecnolightsrl.com?subject=Cotizaci%C3%B3n%20por%20Volumen"
            className="inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-[4px] transition-colors uppercase tracking-wider text-xs"
            style={MONO}
          >
            Solicitar Cotización de EPP
          </a>
        </div>

      </div>
    </section>
  );
}
