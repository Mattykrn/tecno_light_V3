import React from 'react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

// Bloque A: Señalización Vial y Fabricación
const LINEAS_FABRICACION = [
  {
    cat: 'Cartelería Reglamentaria, Preventiva e Informativa',
    items: [
      'Señales reglamentarias, preventivas e informativas bajo pliegos DNV / DPV',
      'Cartelería transitoria de obra y desvíos viales',
      'Pórticos, ménsulas pescantes y estructuras de gran porte en chapa galvanizada',
      'Nomenclatura urbana y vial para municipios y comunas',
      'Pasarelas peatonales y señalización de infraestructura pública',
    ]
  },
  {
    cat: 'Sustratos y Materiales de Producción',
    items: [
      'Fabricación sobre chapa de acero galvanizada y aluminio',
      'Alto impacto, PVC espumado y acrílico para señalización interior/exterior',
      'Plástico corrugado para cartelería transitoria de obra',
      'Estructuras metálicas para instalación en banquina, mástil o pared',
    ]
  },
];

const PILARES = [
  { code: 'DNV', label: 'Dirección Nacional de Vialidad' },
  { code: 'DPV', label: 'Dirección Provincial de Vialidad' },
  { code: 'IRAM 3952', label: 'Señalización reglamentaria homologada' },
  { code: 'ASTM D4956', label: 'Láminas retrorreflectivas tipo I–XI' },
];

export default function CatalogoSenales() {
  return (
    <section id="catalogo" className="py-24 lg:py-32 bg-[#0d0f14] relative overflow-hidden border-b border-white/5 scroll-mt-28">
      <div className="max-w-site mx-auto px-5 lg:px-10 relative z-10">

        {/* Header Institucional */}
        <div className="mb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-primary text-[10px] tracking-[0.32em] uppercase" style={MONO}>
                Bloque A — Señalización Vial y Fabricación
              </span>
            </div>
            <h2
              className="text-white leading-none tracking-tight mb-6"
              style={{ ...HEADING, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              SEÑALIZACIÓN VIAL Y <span className="text-primary">CARTELERÍA</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium mb-6" style={BODY}>
              Producción propia de señalización vial reglamentaria, preventiva, informativa y transitoria conforme a pliegos DNV y DPV. Fabricamos sobre múltiples sustratos con láminas retrorreflectivas Avery Dennison homologadas. Proveemos a constructoras, municipios, organismos viales y distribuidores del sector.
            </p>

            {/* Badges de normativa */}
            <div className="flex flex-wrap gap-3 mt-4 mb-8 text-sm text-slate-300">
              {PILARES.map(p => (
                <span key={p.code} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-semibold tracking-wide" style={MONO}>
                  <span className="text-primary">{p.code}</span> — {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grilla de Líneas de Fabricación */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {LINEAS_FABRICACION.map((bloque) => (
            <div key={bloque.cat} className="bg-slate-900/60 border border-white/8 rounded-xl p-7 hover:border-primary/30 transition-colors">
              <h3 className="text-white text-sm font-extrabold uppercase tracking-wider mb-5 pb-3 border-b border-white/10" style={HEADING}>
                {bloque.cat}
              </h3>
              <ul className="space-y-3">
                {bloque.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed" style={BODY}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nota de distribución */}
        <div className="bg-slate-900/40 border border-slate-700/50 rounded-lg px-6 py-5">
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed" style={BODY}>
            <span className="text-white font-semibold">Distribución y referencias comerciales:</span> Tecno Light S.R.L. provee y trabaja en vinculación con distribuidores del sector como <span className="text-slate-200 font-medium">Rosi Distribuciones</span> y <span className="text-slate-200 font-medium">Parpal</span>, además de municipios, comunas y empresas contratistas de obra pública y privada en las provincias de Santa Fe, Entre Ríos, Córdoba y Buenos Aires.
          </p>
        </div>

      </div>
    </section>
  );
}