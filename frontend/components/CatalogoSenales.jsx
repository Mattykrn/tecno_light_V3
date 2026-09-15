import React from 'react';
import Image from 'next/image';
import { obrasData } from '../src/data/obrasData';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

export default function CatalogoSenales() {
  return (
    <section className="py-24 lg:py-32 bg-[#0d0f14] relative overflow-hidden border-b border-white/5">
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
            <p className="text-white/80 text-sm lg:text-base leading-relaxed font-medium mb-8" style={BODY}>
              Producción de cartelería vial, urbana e industrial con sustratos de alta durabilidad y láminas retrorreflectivas Avery Dennison homologadas.
            </p>
          </div>
        </div>

        {/* Galería Limpia de Trabajos y Obras */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {obrasData.map((item) => (
            <div key={item.id} className="flex flex-col h-full bg-slate-900 border border-white/10 rounded-lg overflow-hidden group hover:border-primary/40 transition-all duration-300">
              
              {/* Contenedor de Imagen 100% Limpio, sin textos superpuestos */}
              <div className="relative w-full aspect-[4/3] bg-neutral-900 p-2 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              {/* Contenedor de Texto */}
              <div className="flex-1 p-5 lg:p-6 bg-slate-900 flex flex-col justify-between">
                <h3 className="text-white font-bold text-sm leading-snug" style={BODY}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}