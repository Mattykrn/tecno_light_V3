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
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8" style={BODY}>
                Fabricamos cartelería reglamentaria, preventiva, informativa y de obra conforme a pliegos de Dirección Nacional y Provincial de Vialidad. Producimos nomenclatura urbana, pórticos, ménsulas y cartelería corporativa de seguridad industrial. Desarrollamos señalización lumínica de alta tecnología como balizas destellantes a led, flechas lumínicas direccionales y tráilers solares. Asimismo, elaboramos y proveemos dispositivos delimitadores tales como vallas metálicas peatonales, tambores viales, canalizadores, conos y delineadores flexibles.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/carteleria/18244db3-7f2e-4215-be74-cdf5a3a728ed.jpg" alt="Proceso de fabricación" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/carteleria/4f20f2f2-398d-44ca-9061-e3ce6b69e98b.jpg" alt="Terminación de señales" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/carteleria/a4944ce5-fe4d-4683-a101-257fbe6158f3.jpg" alt="Planta de producción" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/carteleria/f40ebce6-d6b2-4472-aadf-adeeb591a989.jpg" alt="Equipamiento" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* SERVICIOS VIALES */}
            <div className="flex flex-col">
              <h3 className="text-white/90 text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-3" style={HEADING}>
                Servicios Viales
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8" style={BODY}>
                Ofrecemos provisión transitoria y alquiler de carteles, balizas, vallas y dispositivos para el desarrollo de desvíos en obras viales, civiles y eventos masivos. Realizamos demarcación vial e industrial aplicando pintura termoplástica y reflectiva para sendas peatonales, cordones, estacionamientos y sendas de seguridad en naves industriales. Además, contamos con personal capacitado para la instalación y montaje en obra de pórticos viales, defensas metálicas, reductores de velocidad, tachas reflectivas y delineadores, garantizando los más altos estándares de calidad y seguridad.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/vallas/-_c5-13.jpg" alt="Acopio de vallas" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/vallas/-_c5-14.jpg" alt="Colocación de vallas" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/vallas/-_c5-15.jpg" alt="Alquiler de vallas" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                  <Image src="/images/vallas/-_c5-16.jpg" alt="Dispositivos" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
