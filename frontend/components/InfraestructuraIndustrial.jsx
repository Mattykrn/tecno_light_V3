import React from 'react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

const PROCESO_STEPS = [
  {
    title: 'DISEÑO',
    desc: 'Elaboración de planos técnicos y diagramación conforme a pliegos DNV / DPV y normativas IRAM vigentes.',
  },
  {
    title: 'CORTE',
    desc: 'Corte de chapas y perfiles metálicos mediante guillotina y pantógrafo industrial de alta precisión.',
  },
  {
    title: 'SOLDADURA',
    desc: 'Ensamble y soldadura estructural de marcos, refuerzos y pescantes para cartelería de gran porte.',
  },
  {
    title: 'PINTURA',
    desc: 'Tratamiento anticorrosivo y pintura horneada de alta durabilidad para exposición a la intemperie.',
  },
  {
    title: 'ROTULADO',
    desc: 'Aplicación de láminas retrorreflectivas Avery Dennison grado Ingeniería, HIP y Diamante mediante sistema TrafficJet™ Xpress.',
  },
];

const CAPACIDAD_ITEMS = [
  'Planta fabril en Área Industrial Los Polígonos, Santa Fe',
  'Maquinaria de corte, plegado y soldadura de chapa metálica',
  'Sistema de impresión digital TrafficJet™ Xpress (Avery Dennison)',
  'Flota propia para traslado y colocación en traza',
  'Cuadrillas capacitadas para montaje en ruta y obra urbana',
  'Depósito de equipamiento en alquiler para desvíos y eventos',
  'Sedes comerciales en Santa Fe y Rosario',
  'Cobertura operativa en Santa Fe, Córdoba, Entre Ríos y Buenos Aires',
];

export default function InfraestructuraIndustrial() {
  return (
    <section id="infraestructura" className="py-20 lg:py-28 bg-[#04060A] border-b border-white/5 relative z-10 scroll-mt-28">
      <div id="obras" className="absolute top-0 scroll-mt-28" />
      <div className="max-w-site mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary flex-shrink-0" />
            <span className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
              Capacidad Operativa e Infraestructura
            </span>
            <div className="h-px w-8 bg-primary flex-shrink-0" />
          </div>
          <h2 className="text-white leading-none tracking-tight mb-6" style={{ ...HEADING, fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            PROCESO INDUSTRIAL DE FABRICACIÓN
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium" style={BODY}>
            Fabricación integral desde diseño hasta rotulado final. Proceso continuo en planta propia con equipamiento especializado y control de calidad en cada etapa.
          </p>
        </div>

        {/* Proceso de 5 etapas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PROCESO_STEPS.map(col => (
            <div key={col.title} className="bg-slate-900/50 p-5 sm:p-6 rounded-md border border-white/5 hover:border-primary/40 transition-colors flex flex-col items-start">
              <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 shrink-0">
                <div className="w-2 h-2 bg-primary" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-3" style={MONO}>{col.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed" style={BODY}>{col.desc}</p>
            </div>
          ))}
        </div>

        {/* Capacidad instalada */}
        <div className="bg-slate-900/40 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-white text-sm font-extrabold uppercase tracking-wider mb-6 pb-3 border-b border-white/10" style={HEADING}>
            Capacidad Instalada y Recursos Operativos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPACIDAD_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm leading-relaxed" style={BODY}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
