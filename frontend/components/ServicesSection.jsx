import React from 'react';
import Image from 'next/image';

const MONO = { fontFamily: "'Roboto', sans-serif", fontWeight: 500 };
const HEADING = { fontFamily: "'Raleway', sans-serif", fontWeight: 900, textTransform: 'uppercase' };
const BODY = { fontFamily: "'Roboto', sans-serif" };

export default function ServicesSection() {
  return (
      <section id="servicios" className="py-20 lg:py-28 bg-[#080A0F] border-b border-white/5">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-primary text-[10px] tracking-[0.32em] uppercase font-bold" style={MONO}>
                Líneas de Fabricación y Servicios
              </span>
              <div className="h-px w-8 bg-primary flex-shrink-0" />
            </div>
            <h2 className="text-white leading-none tracking-tight mb-6" style={{ ...HEADING, fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              SOLUCIONES VIALES INTEGRALES
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LÍNEAS DE FABRICACIÓN */}
            <div className="flex flex-col">
              <h3 className="text-white/90 text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-3" style={HEADING}>
                Líneas de Fabricación y Productos
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  { title: 'Carteles Viales y Transitorios de Obra', desc: 'Carteles reglamentarios, preventivos, informativos y de obra conforme a pliegos de Dirección Nacional y Provincial de Vialidad.' },
                  { title: 'Cartelería para Municipios y Empresas', desc: 'Nomencladores urbanos, pórticos, ménsulas, cartelería corporativa y de seguridad para plantas industriales.' },
                  { title: 'Señalización Lumínica Vial', desc: 'Balizas destellantes a led, flechas lumínicas direccionales, tráilers solares para desvíos de obra y paneles chevron.' },
                  { title: 'Dispositivos Delimitadores', desc: 'Vallas metálicas peatonales y de obra, tambores viales, canalizadores de tránsito, conos y delineadores flexibles.' }
                ].map(item => (
                  <li key={item.title} className="flex items-start gap-4 bg-slate-900/50 p-5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-sm" />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm md:text-base mb-1" style={BODY}>{item.title}</span>
                      <span className="block text-white/70 text-sm md:text-sm leading-relaxed" style={BODY}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-3 mt-auto">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image src="/images/carteleria/18244db3-7f2e-4215-be74-cdf5a3a728ed.jpg" alt="Proceso de fabricación" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image src="/images/carteleria/4f20f2f2-398d-44ca-9061-e3ce6b69e98b.jpg" alt="Terminación de señales" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image src="/images/carteleria/a4944ce5-fe4d-4683-a101-257fbe6158f3.jpg" alt="Planta de producción" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* SERVICIOS VIALES */}
            <div className="flex flex-col">
              <h3 className="text-white/90 text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-3" style={HEADING}>
                Servicios Viales
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  { title: 'Alquiler de Señalización', desc: 'Provisión transitoria de carteles, balizas, vallas y dispositivos para desvíos en obras viales, civiles y eventos masivos.' },
                  { title: 'Demarcación Vial e Industrial', desc: 'Aplicación de pintura termoplástica y reflectiva para sendas peatonales, cordones, estacionamientos y sendas de seguridad en naves industriales.' },
                  { title: 'Colocación y Montaje', desc: 'Instalación en obra de pórticos viales, defensas metálicas, lomos de burro de caucho, tachas reflectivas y delineadores.' }
                ].map(item => (
                  <li key={item.title} className="flex items-start gap-4 bg-slate-900/50 p-5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-sm" />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm md:text-base mb-1" style={BODY}>{item.title}</span>
                      <span className="block text-white/70 text-sm md:text-sm leading-relaxed" style={BODY}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-3 mt-auto">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image src="/images/vallas/-_c5-13.jpg" alt="Acopio de vallas" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image src="/images/vallas/-_c5-14.jpg" alt="Colocación de vallas" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image src="/images/vallas/-_c5-15.jpg" alt="Alquiler de vallas" fill className="object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
