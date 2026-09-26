import React from 'react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

// Bloque C — EPP e Indumentaria ampliado con detalle técnico real
const EPP_GRUPOS = [
  {
    grupo: 'Indumentaria de Trabajo',
    items: [
      'Ropa de trabajo homologada (mameluco, pantalón, camisa y campera)',
      'Indumentaria de alta visibilidad — chalecos clase 2 y clase 3',
      'Indumentaria térmica para bajas temperaturas',
      'Trajes impermeables para lluvia y waders de pescador',
      'Botas pescadoras y calzado de goma para trabajo en agua',
    ]
  },
  {
    grupo: 'Calzado de Seguridad',
    items: [
      'Calzado con puntera de acero y suela antiperforación',
      'Calzado dieléctrico para trabajos eléctricos',
      'Botines de cuero con suela de goma antideslizante',
    ]
  },
  {
    grupo: 'Protección Respiratoria',
    items: [
      'Semimáscaras faciales con filtros intercambiables',
      'Filtros para vapores orgánicos y partículas (P100)',
      'Mascarillas desechables N95 y quirúrgicas',
    ]
  },
  {
    grupo: 'Protección Auditiva',
    items: [
      'Protectores endoaurales (tapones reutilizables y descartables)',
      'Protectores de copa con banda de cabeza y de nuca',
      'Protectores adosables a casco',
    ]
  },
  {
    grupo: 'Protección Ocular y Facial',
    items: [
      'Anteojos de seguridad con lente policarbonato',
      'Antiparras ventiladas e indiferentes para uso industrial',
      'Caretas para soldar con visor de electro-oscurecimiento',
      'Pantallas faciales para proyecciones y productos químicos',
    ]
  },
  {
    grupo: 'Protección en Altura y Personal',
    items: [
      'Arneses de seguridad full body con punto de anclaje dorsal/esternal',
      'Colas de amarre con absorbedor de energía',
      'Fajas lumbares de soporte para esfuerzos',
      'Guantes de vaqueta, descarne, nitrilo y anticorte',
      'Cascos de seguridad clase A, B y E (dieléctrico)',
    ]
  },
  {
    grupo: 'Seguridad contra Incendio y Primeros Auxilios',
    items: [
      'Matafuegos de polvo ABC y CO₂ (revisión y recarga)',
      'Botiquines reglamentarios para obra y empresa',
      'Señalización de seguridad para plantas e instalaciones',
    ]
  },
];

export default function SeguridadIndustrial() {
  return (
    <section id="seguridad" className="py-24 lg:py-32 bg-[#0B0F17] relative overflow-hidden border-b border-white/5 scroll-mt-28">
      <div id="seguridad-industrial" className="absolute top-0 scroll-mt-28" />
      <div className="max-w-site mx-auto px-5 lg:px-10 relative z-10">

        {/* Header */}
        <div className="mb-14 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary flex-shrink-0" />
            <span className="text-primary text-[10px] tracking-[0.32em] uppercase" style={MONO}>
              Bloque C — EPP e Indumentaria
            </span>
          </div>
          <h2
            className="text-white leading-none tracking-tight mb-6"
            style={{ ...HEADING, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            ELEMENTOS DE PROTECCIÓN PERSONAL <span className="text-primary">E INDUMENTARIA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium" style={BODY}>
            Comercialización de indumentaria de trabajo homologada y equipamiento de protección personal (EPP) para obras civiles, viales e industriales. Provisión por unidad o por volumen con entrega en obra o centro logístico asignado.
          </p>
        </div>

        {/* Grid de categorías EPP */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {EPP_GRUPOS.map((grupo) => (
            <div key={grupo.grupo} className="flex flex-col bg-slate-900/60 p-5 rounded-xl border border-white/8 hover:border-primary/40 transition-colors">
              <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3 pb-2 border-b border-white/10" style={MONO}>
                {grupo.grupo}
              </h3>
              <ul className="space-y-2 flex-grow">
                {grupo.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                    <span className="text-white/80 text-xs leading-relaxed" style={BODY}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Corporativo */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-medium text-left" style={BODY}>
            Provisión de EPP e indumentaria para obras públicas y privadas. Cotizaciones por pliego, por lote o por proveedor único. Entrega directa en obrador o depósito designado por el contratista.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:tecnolightsrl@arnet.com.ar?subject=Cotizaci%C3%B3n%20EPP%20e%20Indumentaria"
              className="inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-[4px] transition-colors uppercase tracking-wider text-xs"
              style={MONO}
            >
              Solicitar Cotización de EPP
            </a>
            <a
              href="mailto:tecnolightrsr@arnet.com.ar?subject=Cotizaci%C3%B3n%20EPP%20e%20Indumentaria"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-3.5 rounded-[4px] transition-colors uppercase tracking-wider text-xs"
              style={MONO}
            >
              Sede Rosario
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
