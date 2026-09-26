import React from 'react';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

const WA_ALQUILER = 'https://wa.me/5493424278117?text=Hola,%20me%20comunico%20desde%20el%20sitio%20web%20para%20solicitar%20presupuesto%20por%20alquiler%20de%20vallas%20y%20equipamiento.';

// ── Bloque destacado: Alquiler de Vallas y Dispositivos ───────────────────────
const VALLAS_ITEMS = [
  {
    cat: 'Vallas de Seguridad y Cerramiento',
    items: [
      'Vallas metálicas peatonales para canalización de flujos y contención de público.',
      'Vallas de obra pesadas con elementos reflectivos homologados.',
      'Pasarelas peatonales metálicas con barandas reglamentarias.',
    ],
  },
  {
    cat: 'Balizamiento y Señalización Luminosa',
    items: [
      'Balizas luminosas intermitentes / destellantes autónomas a LED (solar y eléctrica).',
      'Semáforos viales portátiles para desvíos de tránsito en obra.',
      'Flechas luminosas direccionales para esquemas de desvío.',
    ],
  },
  {
    cat: 'Dispositivos de Delineación',
    items: [
      'Tambores canalizadores viales plásticos retrorreflectivos.',
      'Conos reflectivos y delineadores flexibles de PVC.',
      'Chapones de acero reforzados para cruce y tapado de zanjas sobre pavimento.',
      'Banderilleros mecánicos de aviso continuo para obras con tránsito activo.',
    ],
  },
  {
    cat: 'Logística de Servicio',
    items: [
      'Entrega y retiro directo en obrador, frente de avance o locación indicada por el contratista.',
      'Montaje de esquemas de desvío conforme a normativa DNV / DPV.',
      'Reposición y mantenimiento preventivo durante el plazo de ejecución del proyecto.',
    ],
  },
];

// ── Bloque D — Datos generales de servicios viales ───────────────────────────
const LOGISTICA_ITEMS = [
  'Traslado, colocación en traza y mantenimiento de dispositivos de seguridad en zona de camino.',
  'Entrega directamente en obrador o centro logístico asignado por la empresa contratista.',
  'Señalización y balizamiento para obras urbanas, servicios públicos (ASSA) y eventos masivos.',
  'Colocación de señalización vial normada en rutas, caminos rurales y accesos urbanos.',
  'Demarcación horizontal con pintura termoplástica y reflectiva para sendas, cordones y estacionamientos.',
];

const SERVICIOS_ITEMS = [
  {
    title: 'Montaje de Señalización Vertical en Rutas y Autovías',
    desc: 'Hincado de postes de acero, hormigonado de bases y fijación antivandálica de carteles preventivos y reglamentarios en banquinas y zonas de camino.',
  },
  {
    title: 'Cartelería de Gran Porte y Señalización Aérea',
    desc: 'Fabricación y montaje de pescantes, ménsulas y pórticos viales con láminas microprismáticas Avery Dennison de alta reflectividad.',
  },
  {
    title: 'Demarcación, Vallado y Balizamiento de Obras Urbanas',
    desc: 'Delimitación de intervenciones en vía pública, zanjeos y obras de saneamiento/pavimento con defensas metálicas, cartelería transitoria de obra y balizamiento nocturno.',
  },
];

// ── Icono WhatsApp ────────────────────────────────────────────────────────────
const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#080A0F] border-b border-white/5 scroll-mt-28">
      <div className="max-w-site mx-auto px-5 lg:px-10">

        {/* ── Header de la sección ────────────────────────────────────────── */}
        <div className="mb-14 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary flex-shrink-0" />
            <span className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
              Bloque D — Servicios y Alquiler de Equipamiento
            </span>
          </div>
          <h2 className="text-white leading-none tracking-tight mb-6" style={{ ...HEADING, fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            ALQUILER DE EQUIPAMIENTO VIAL Y <span className="text-primary">SERVICIOS EN OBRA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium" style={BODY}>
            Provisión y alquiler de dispositivos de seguridad vial para desvíos, obras civiles y eventos. Logística de colocación y mantenimiento directamente en traza. Entrega en obrador o depósito asignado.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            BLOQUE DESTACADO: ALQUILER DE VALLAS Y DISPOSITIVOS VIALES
        ══════════════════════════════════════════════════════════════════ */}
        <div
          id="alquiler-vallas"
          className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 my-10 scroll-mt-28"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-6 bg-primary flex-shrink-0" />
            <span
              className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold"
              style={MONO}
            >
              Servicio disponible en Santa Fe y Rosario
            </span>
          </div>

          {/* Título principal del bloque */}
          <h3
            className="text-white leading-tight tracking-tight mb-3"
            style={{ ...HEADING, fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            ALQUILER Y PROVISIÓN DE VALLAS Y{' '}
            <span className="text-primary">DISPOSITIVOS DE SEGURIDAD VIAL</span>
          </h3>

          {/* Bajada técnica */}
          <p
            className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-8 max-w-3xl"
            style={BODY}
          >
            Servicio integral de provisión transitoria, traslado y mantenimiento en sitio de
            cerramientos y balizamiento para obras viales, civiles, zanjeos urbanos y eventos masivos.
          </p>

          {/* Grilla de categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {VALLAS_ITEMS.map((bloque) => (
              <div
                key={bloque.cat}
                className="bg-[#080A0F]/70 border border-slate-700/60 rounded-xl p-5 hover:border-primary/40 transition-colors"
              >
                {/* Cabecera de categoría */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-1 h-5 bg-primary rounded-full shrink-0" />
                  <h4
                    className="text-white text-xs font-extrabold uppercase tracking-widest leading-snug"
                    style={MONO}
                  >
                    {bloque.cat}
                  </h4>
                </div>
                {/* Items */}
                <ul className="space-y-2.5">
                  {bloque.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      <span
                        className="text-slate-300 text-sm sm:text-base leading-snug"
                        style={BODY}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 mb-7" />

          {/* CTA de contacto directo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg" style={BODY}>
              <span className="text-slate-200 font-semibold">Modalidad:</span> Alquiler por jornada,
              semana o plazo de obra. Cotización sin cargo para obras con pliego o por adjudicación
              directa.
            </p>
            <a
              id="btn-cotizar-vallas"
              href={WA_ALQUILER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/25 whitespace-nowrap shrink-0"
              style={MONO}
            >
              <WaIcon />
              Cotizar Alquiler de Vallas y Dispositivos
            </a>
          </div>
        </div>
        {/* ── Fin bloque destacado ─────────────────────────────────────────── */}

        {/* ── Logística Operativa ──────────────────────────────────────────── */}
        <div className="mb-14">
          <h3
            className="text-white/90 text-sm font-extrabold uppercase tracking-wider mb-6 pb-3 border-b border-white/10"
            style={HEADING}
          >
            Logística Operativa y Colocación en Traza
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOGISTICA_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-md border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                <span
                  className="text-white/80 text-xs sm:text-sm font-medium leading-snug"
                  style={BODY}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Instalación y Montaje ────────────────────────────────────────── */}
        <div id="instalacion" className="scroll-mt-28">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary flex-shrink-0" />
            <span
              className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold"
              style={MONO}
            >
              Despliegue Operativo
            </span>
            <div className="h-px w-8 bg-primary flex-shrink-0" />
          </div>
          <h3
            className="text-white leading-none tracking-tight mb-8 text-center"
            style={{ ...HEADING, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
          >
            INSTALACIÓN Y MONTAJE EN RUTA Y CIUDAD
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICIOS_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 shrink-0">
                  <div className="w-2 h-2 bg-primary" />
                </div>
                <h4
                  className="text-sm sm:text-base font-black tracking-wide text-white leading-snug mb-3"
                  style={HEADING}
                >
                  {item.title}
                </h4>
                <p
                  className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow"
                  style={BODY}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
