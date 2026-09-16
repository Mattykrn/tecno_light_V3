import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import InteractiveRoadHero from '../components/InteractiveRoadHero';
import InfraestructuraIndustrial from '../components/InfraestructuraIndustrial';
import SeguridadIndustrial from '../components/SeguridadIndustrial';
import TrafficJetSection from '../components/TrafficJetSection';
import ErrorBoundary from '../components/ErrorBoundary';
import CatalogoSenales from '../components/CatalogoSenales';
import ServicesSection from '../components/ServicesSection';




const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };


const SERVICIOS_ITEMS = [
  'Señalización y Balizamiento para Obras Urbanas y de Servicios Públicos (ASSA).',
  'Provisión y Alquiler de Vallas Peatonales para Eventos.',
  'Colocación de Señalización Vial Normada en Rutas y Caminos Rurales.',
  'Demarcación Horizontal e Instalación de Elementos de Seguridad Vial.',
];



export default function Home() {

  return (
    <div>
      <Head>
        <title>TECNO LIGHT S.R.L. — Señalización Vial e Industrial | Santa Fe, Argentina</title>
        <meta name="description" content="TECNO LIGHT S.R.L. — Empresa líder en fabricación integral de señales viales de Argentina. Señalización vial e industrial. Más de 30 años de trayectoria. Distribuidores certificados AVERY DENNISON." />
      </Head>

      {/* ══════════ HERO ══════════ */}
      <InteractiveRoadHero />


      {/* ══════════ CLIENTES CORPORATIVOS ══════════ */}
      <section className="py-12 bg-slate-100 bg-hex-pattern border-b border-black/5">
        <div className="max-w-site mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-slate-300 flex-shrink-0" />
            <span className="text-slate-500 text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
              Empresas y Organismos que confían en nosotros
            </span>
            <div className="h-px w-8 bg-slate-300 flex-shrink-0" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos/Textos simulados en texto de alto contraste B2B */}
            <span className="text-slate-900 font-extrabold text-xl tracking-tighter uppercase" style={HEADING}>Grupo Ombú</span>
            <span className="text-slate-900 font-extrabold text-xl tracking-tighter uppercase" style={HEADING}>Vialidad Nacional</span>
            <span className="text-slate-900 font-extrabold text-xl tracking-tighter uppercase" style={HEADING}>DPV Santa Fe</span>
            <span className="text-slate-900 font-extrabold text-xl tracking-tighter uppercase" style={HEADING}>Municipios y Comunas</span>
            <span className="text-slate-900 font-extrabold text-xl tracking-tighter uppercase" style={HEADING}>Constructoras Viales</span>
          </div>
        </div>
      </section>

      {/* ══════════ QUIÉNES SOMOS ══════════ */}
      <section id="nosotros" className="py-20 lg:py-28 bg-white bg-hex-pattern text-slate-900 border-b border-black/5">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-slate-900" style={HEADING}>
            QUIÉNES SOMOS
          </h2>
          <div className="space-y-5 text-base md:text-lg text-slate-700 font-medium leading-relaxed" style={BODY}>
            <p>
              TECNO LIGHT S.R.L. es una empresa de reconocida trayectoria en la fabricación de señalización vial e industrial, y en la comercialización de una amplia gama de productos de protección personal y seguridad industrial.
            </p>
            <p>
              Brindamos asesoramiento especializado a empresas constructoras, organismos viales y municipios, ofreciendo soluciones integrales adaptadas a cada necesidad y garantizando productos que cumplen con los más altos estándares de calidad y normativas vigentes.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ TECNOLOGÍA TRAFFICJET ══════════ */}
      <TrafficJetSection />

      {/* ══════════ INFRAESTRUCTURA Y MEDIA GRID ══════════ */}
      <ErrorBoundary>
        <InfraestructuraIndustrial />
      </ErrorBoundary>

      {/* ══════════ PROCESO INDUSTRIAL DE FABRICACIÓN ══════════ */}
      <section id="planta" className="py-20 lg:py-28 bg-[#0d0f14] relative overflow-hidden border-b border-white/5">
        <div className="max-w-site mx-auto px-5 lg:px-10 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
                Capacidad Operativa e Infraestructura
              </span>
              <div className="h-px w-8 bg-primary flex-shrink-0" />
            </div>
            <h2 className="text-white leading-none tracking-tight mb-6" style={{ ...HEADING, fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              PROCESO INDUSTRIAL DE FABRICACIÓN
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'DISEÑO',
                desc: 'Elaboración de planos técnicos y diagramación bajo normativas vigentes (DNV / DPV).',
              },
              {
                title: 'CORTE',
                desc: 'Corte de chapas y perfiles metálicos mediante guillotina y pantógrafo industrial.',
              },
              {
                title: 'SOLDADURA',
                desc: 'Ensamble y soldadura estructural de marcos, refuerzos y pescantes para cartelería pesada.',
              },
              {
                title: 'PINTURA',
                desc: 'Tratamiento anticorrosivo y pintura horneada de alta durabilidad para intemperie.',
              },
              {
                title: 'ROTULADO',
                desc: 'Aplicación de láminas retrorreflectivas Avery Dennison (grado ingeniería, alta intensidad y grado diamante).',
              }
            ].map(col => (
              <div key={col.title} className="bg-slate-900/50 p-6 rounded-md border border-white/5 hover:border-primary/40 transition-colors flex flex-col items-start">
                <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 shrink-0">
                  <div className="w-2 h-2 bg-primary" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-3" style={MONO}>{col.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed" style={BODY}>{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LÍNEAS DE FABRICACIÓN Y SERVICIOS VIALES ══════════ */}
      <ErrorBoundary>
        <CatalogoSenales />
      </ErrorBoundary>

      {/* ══════════ LÍNEAS DE FABRICACIÓN Y SERVICIOS VIALES ══════════ */}
      <ErrorBoundary>
        <ServicesSection />
      </ErrorBoundary>


      {/* ══════════ SEGURIDAD INDUSTRIAL Y EPP ══════════ */}
      <ErrorBoundary>
        <SeguridadIndustrial />
      </ErrorBoundary>







      {/* ══════════ CONTACTO ══════════ */}
      <section id="contacto" className="py-24 lg:py-32 bg-slate-50 bg-hex-pattern border-t border-black/5 text-slate-900">
        <div className="max-w-site mx-auto px-5 lg:px-10">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-primary text-[10px] tracking-[0.32em] uppercase" style={MONO}>Contacto</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <h2 className="text-black leading-none tracking-tight" style={{ ...HEADING, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
                CANALES DE<br /><span style={{ color: '#F2650E' }}>CONTACTO</span>
              </h2>
              <p className="text-black/55 text-sm max-w-sm leading-relaxed font-medium" style={BODY}>
                Atención comercial de Lunes a Viernes, 8:00 a 17:00 hs. Para pliegos y licitaciones, escribinos por email.
              </p>
            </div>
          </div>

          {/* Cards de canales — 3 columnas en desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-6 mb-10">

            {/* Sede Santa Fe */}
            <div className="flex flex-col gap-4 bg-white border border-black/10 shadow-sm rounded-[6px] p-6">
              <a href="https://www.google.com/maps/search/?api=1&query=Suipacha+3243,+Santa+Fe,+Argentina" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[4px] bg-black/5 border border-black/10 flex items-center justify-center shrink-0 hover:text-orange-500 cursor-pointer transition-colors text-[#333]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </a>
              <div className="flex flex-col h-full">
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1" style={MONO}>Sede Central</div>
                <div className="text-black font-bold text-sm mb-2" style={BODY}>Santa Fe</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Suipacha+3243,+Santa+Fe,+Argentina" target="_blank" rel="noopener noreferrer" className="text-black/60 text-xs mb-3 hover:text-orange-500 cursor-pointer transition-colors block" style={BODY}>Suipacha 3243, Santa Fe Capital</a>
                
                <div className="mt-auto flex flex-col gap-2">
                  <a href="tel:03424553582" className="text-black font-semibold text-sm hover:text-primary transition-colors flex items-center gap-2" style={BODY}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg>
                    (0342) 455-3582
                  </a>
                  <a href="mailto:tecnolightsrl@arnet.com.ar" className="text-black font-semibold text-sm hover:text-primary transition-colors flex items-center gap-2" style={BODY}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    tecnolightsrl@arnet.com.ar
                  </a>
                </div>
              </div>
            </div>

            {/* Sede Rosario */}
            <div className="flex flex-col gap-4 bg-white border border-black/10 shadow-sm rounded-[6px] p-6">
              <a href="https://www.google.com/maps/search/?api=1&query=Gutenberg+1122,+Rosario,+Santa+Fe,+Argentina" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[4px] bg-black/5 border border-black/10 flex items-center justify-center shrink-0 hover:text-orange-500 cursor-pointer transition-colors text-[#333]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </a>
              <div className="flex flex-col h-full">
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1" style={MONO}>Sede Comercial</div>
                <div className="text-black font-bold text-sm mb-2" style={BODY}>Rosario</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Gutenberg+1122,+Rosario,+Santa+Fe,+Argentina" target="_blank" rel="noopener noreferrer" className="text-black/60 text-xs mb-3 hover:text-orange-500 cursor-pointer transition-colors block" style={BODY}>Gutenberg 1122, Rosario, Santa Fe</a>
                
                <div className="mt-auto flex flex-col gap-2">
                  <a href="tel:03414388444" className="text-black font-semibold text-sm hover:text-primary transition-colors flex items-center gap-2" style={BODY}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg>
                    (0341) 438-8444
                  </a>
                  <a href="mailto:tecnolightrsr@arnet.com.ar" className="text-black font-semibold text-sm hover:text-primary transition-colors flex items-center gap-2" style={BODY}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    tecnolightrsr@arnet.com.ar
                  </a>
                </div>
              </div>
            </div>

            {/* Planta Industrial */}
            <div className="flex flex-col gap-4 bg-white border border-black/10 shadow-sm rounded-[6px] p-6">
              <a href="https://www.google.com/maps/search/?api=1&query=Parque+Industrial+Los+Poligonos,+Santa+Fe,+Argentina" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[4px] bg-black/5 border border-black/10 flex items-center justify-center shrink-0 hover:text-orange-500 cursor-pointer transition-colors text-[#333]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </a>
              <div className="flex flex-col h-full">
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1" style={MONO}>PLANTA FABRIL E INDUSTRIAL</div>
                <div className="text-black font-bold text-sm mb-2" style={BODY}>Los Polígonos</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Parque+Industrial+Los+Poligonos,+Santa+Fe,+Argentina" target="_blank" rel="noopener noreferrer" className="text-black/60 text-xs mb-3 hover:text-orange-500 cursor-pointer transition-colors block" style={BODY}>Área Industrial Los Polígonos, Santa Fe</a>
                
                <div className="mt-auto flex flex-col gap-2">
                  <a href="tel:03424553582" className="text-black font-semibold text-sm hover:text-primary transition-colors flex items-center gap-2" style={BODY}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg>
                    (0342) 455-3582
                  </a>
                  <a href="mailto:tecnolightsrl@arnet.com.ar" className="text-black font-semibold text-sm hover:text-primary transition-colors flex items-center gap-2" style={BODY}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    tecnolightsrl@arnet.com.ar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Zona de cobertura */}
          <div className="border border-black/10 shadow-sm rounded-[4px] p-5 bg-[#F8F9FA]">
            <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 mb-3" style={MONO}>Zona de cobertura</div>
            <div className="flex flex-wrap gap-2">
              {['Santa Fe', 'Rosario', 'Gran Rosario', 'Córdoba', 'Entre Ríos', 'Buenos Aires', '+6 provincias'].map(z => (
                <span key={z} className="bg-white border border-black/10 text-black/80 font-medium text-xs px-3 py-1 rounded-[3px]" style={BODY}>{z}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
