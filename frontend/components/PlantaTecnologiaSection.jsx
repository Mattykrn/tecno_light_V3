/**
 * PlantaTecnologiaSection.jsx — TECNO LIGHT S.R.L.
 * Sección "Tecnología de Planta y Fabricación".
 * Muestra 3 videos reales del proceso productivo en bucle silenciado.
 * Transmite respaldo industrial y proceso de fabricación propio.
 */
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';

const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const MONO    = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const BODY    = { fontFamily: "'Roboto', sans-serif" };

const VIDEOS = [
  {
    id: 'v1',
    src: '/videos/cartel-fabricacion.mp4',
    title: 'Fabricación de Carteles',
    desc: 'Corte de sustratos y proceso de laminado manual/mecánico para señalización vial en planta propia.',
    badge: 'Planta Propia',
  },
  {
    id: 'v2',
    src: '/videos/senales-instalacion.mp4',
    title: 'Instalación en Terreno',
    desc: 'Visualización de cartelería vial terminada e instalada sobre postes en campo abierto bajo normativa DNV.',
    badge: 'Trabajo en Terreno',
  },
  {
    id: 'v3',
    src: '/videos/reel-produccion.mp4',
    title: 'Impresión y Armado',
    desc: 'Secuencias de impresión digital reflectiva sobre láminas Avery Dennison y ensamblado industrial de señales.',
    badge: 'Control de Calidad',
  },
];

function VideoCard({ video, index }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <motion.div
      className="relative rounded-[6px] overflow-hidden bg-[#0d0f18] border border-white/[0.07] group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Video */}
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          preload="metadata"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f18] via-black/20 to-transparent" />

        {/* Badge */}
        <span
          className="absolute top-3 left-3 bg-[#FF5A1F] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-[3px]"
          style={MONO}
        >
          {video.badge}
        </span>

        {/* Mute toggle */}
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-black/70 transition-all backdrop-blur-sm"
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>

        {/* Play indicator on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ opacity: hovered ? 0 : 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
            <Play size={18} className="text-white ml-0.5" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-white text-sm font-bold mb-2 leading-tight"
          style={HEADING}
        >
          {video.title}
        </h3>
        <p className="text-white/50 text-xs leading-relaxed" style={BODY}>
          {video.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function PlantaTecnologiaSection() {
  return (
    <section id="planta" className="py-24 lg:py-32 bg-[#08090E] relative overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,90,31,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,31,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top edge glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/30 to-transparent" />

      <div className="max-w-site mx-auto px-5 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF5A1F] flex-shrink-0" />
            <span className="text-[#FF5A1F] text-[10px] tracking-[0.32em] uppercase" style={MONO}>
              Proceso Industrial
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="text-white leading-none tracking-tight"
              style={{ ...HEADING, fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
            >
              TECNOLOGÍA DE PLANTA<br />
              <span className="text-[#FF5A1F]">Y FABRICACIÓN</span>
            </h2>
            <p
              className="text-white/50 text-sm max-w-sm leading-relaxed lg:text-right"
              style={BODY}
            >
              Producción integral con planta propia. Desde la materia prima hasta la señal terminada,
              cada etapa bajo control de calidad con materiales Avery Dennison certificados.
            </p>
          </div>
        </motion.div>

        {/* Capacidades técnicas — chips */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            'Corte CNC',
            'Soldadura MIG',
            'Impresión Digital Reflectiva',
            'Laminado Avery Dennison',
            'Control de Calidad IRAM',
            'Armado y Despacho',
          ].map((cap) => (
            <span
              key={cap}
              className="text-[11px] font-semibold text-white/55 border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 rounded-md"
              style={MONO}
            >
              {cap}
            </span>
          ))}
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          className="mt-10 border border-white/[0.07] rounded-[6px] bg-white/[0.02] px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/25 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div>
              <div className="text-white text-xs font-bold" style={MONO}>Planta de Producción</div>
              <div className="text-white/40 text-[11px]" style={BODY}>
                Parque Industrial Los Polígonos — Santa Fe Capital, Argentina
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/5493424278117?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20la%20capacidad%20productiva%20de%20TECNO%20LIGHT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#e54e18] text-white font-semibold px-5 py-2.5 rounded-lg text-xs transition-all hover:-translate-y-0.5 shadow-md shadow-[#FF5A1F]/20 shrink-0"
            style={BODY}
          >
            Consultar capacidad productiva
          </a>
        </motion.div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/20 to-transparent" />
    </section>
  );
}
