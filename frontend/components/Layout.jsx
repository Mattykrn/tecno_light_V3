import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { getWaLink } from '../utils/whatsapp';

const WA_LINK = getWaLink();

const WaIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IgIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const MENU_LINKS = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Fabricación & Catálogo', href: '/#catalogo' },
  { label: 'Servicios & Instalación en Ruta', href: '/#instalacion' },
  { label: 'Seguridad Industrial y EPP', href: '/#seguridad' },
  { label: 'Planta Industrial & Tecnología', href: '/#planta' },
  { label: 'Quiénes Somos', href: '/#nosotros' },
  { label: 'Sedes & Contacto', href: '/#contacto' },
];

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [router.pathname]);

  const isHome = router.pathname === '/';
  const isAtTop = !scrolled && isHome;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#1db954] transition-all hover:scale-105 active:scale-95"
        style={{ boxShadow: '0 6px 28px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.4)' }}
      >
        <WaIcon size={22} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <header className="fixed inset-x-0 top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          <Link href="/#inicio" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
            <Image src="/images/logo-tecnolight.png" alt="Tecno Light S.R.L." width={160} height={48} style={{ width: 'auto', height: '44px' }} />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-none tracking-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>TECNO LIGHT S.R.L.</span>
              <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase mt-1">Señalización Vial e Industrial</span>
            </div>
          </Link>

          <button onClick={() => setMenuOpen(true)} className="text-slate-300 hover:text-white p-1.5 transition-colors" aria-label="Abrir Menú">
            <Menu size={28} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full max-w-sm bg-slate-950/95 backdrop-blur-md border-l border-slate-800 z-[70] shadow-2xl flex flex-col"
              >
                <div className="flex justify-end p-6 border-b border-slate-800">
                  <button onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1.5 bg-slate-800/50 hover:bg-slate-800 rounded-full">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col py-6 px-8 overflow-y-auto h-full space-y-2">
                  {MENU_LINKS.map(l => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-left py-4 text-slate-300 border-b border-slate-800/50 last:border-0 hover:text-orange-500 hover:pl-2 transition-all duration-300 text-lg font-medium"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      <main className="min-h-screen overflow-x-hidden">{children}</main>

      <footer className="bg-[#080A0F] border-t border-white/5 py-14 lg:py-16">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            
            {/* Col 1: Logo e Institucional */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="mb-6">
                <Image src="/images/logo-tecnolight.png" alt="Tecno Light S.R.L." width={160} height={48} loading="lazy" style={{ width: 'auto', height: '44px' }} />
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-8" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Señalización & Protección Personal. Referentes en seguridad vial, demarcación horizontal y seguridad industrial. Lunes a Viernes de 8:00 a 17:00 hs.
              </p>
              
              <div className="flex flex-col items-start gap-2.5 mb-8">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Aval oficial y convertidor certificado:
                </span>
                <div className="bg-white/95 rounded-lg px-3.5 py-2 flex items-center gap-3.5 shadow-md border border-white/20">
                  <img 
                    src="/images/avery-dennison-official.svg" 
                    alt="Avery Dennison" 
                    className="h-6 w-auto object-contain"
                  />
                  <div className="h-5 w-px bg-slate-200" />
                  <img 
                    src="/images/trafficjet-xpress-official.svg" 
                    alt="TrafficJet™ Xpress" 
                    className="h-5 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Redes Sociales - Sin redundancia */}
              <a
                href="https://www.instagram.com/tecnolight.srl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-[#E1306C]/10 border border-[#E1306C]/20 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-all mt-auto"
                aria-label="Instagram Oficial"
              >
                <IgIcon size={18} />
              </a>
            </div>

            {/* Col 2: Sedes Institucionales */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-8 lg:gap-4 xl:gap-8">
              {/* Sede Santa Fe */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-white/10 pb-2 inline-block max-w-max">
                  Sede Central Santa Fe
                </h4>
                <div className="flex flex-col gap-2 text-slate-300 text-sm leading-relaxed">
                  <p>Suipacha 3243<br/>Santa Fe Capital</p>
                  <a href="tel:03424553582" className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span className="font-semibold text-slate-400 group-hover:text-primary/70 transition-colors">Tel/Fax:</span> (0342) 455-3582
                  </a>
                  <a href="mailto:tecnolightsrl@arnet.com.ar" className="hover:text-primary transition-colors text-[13.5px]">
                    tecnolightsrl@arnet.com.ar
                  </a>
                </div>
              </div>

              {/* Sede Rosario */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-white/10 pb-2 inline-block max-w-max">
                  Sede Rosario
                </h4>
                <div className="flex flex-col gap-2 text-slate-300 text-sm leading-relaxed">
                  <p>Gutenberg 1122<br/>Rosario, Santa Fe</p>
                  <a href="tel:03414388444" className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span className="font-semibold text-slate-400 group-hover:text-primary/70 transition-colors">Tel/Fax:</span> (0341) 438-8444
                  </a>
                  <a href="mailto:tecnolightrsr@arnet.com.ar" className="hover:text-primary transition-colors text-[13.5px]">
                    tecnolightrsr@arnet.com.ar
                  </a>
                </div>
              </div>
            </div>

            {/* Col 3: Canal Digital / Navegación */}
            <div className="lg:col-span-3 flex flex-col lg:items-end">
              <h4 className="text-white font-bold text-[13px] tracking-wide uppercase mb-4 lg:text-right">Canal Comercial Digital</h4>
              <a 
                href={WA_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[#25D366] hover:text-white transition-all w-full sm:w-auto lg:w-full max-w-[220px] mb-8"
              >
                <WaIcon size={18} />
                Cotizaciones Rápidas
              </a>

              <div className="text-white/20 text-[10px] uppercase tracking-widest mb-3 mt-auto" style={{ fontFamily: "'Roboto', sans-serif" }}>Navegación</div>
              <nav className="flex flex-col gap-2.5 lg:items-end">
                {MENU_LINKS.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-orange-500 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            
          </div>

          {/* Copyright Row */}
          <div className="pt-7 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-white/20 text-xs" style={{ fontFamily: "'Roboto', sans-serif" }}>
              &copy; {new Date().getFullYear()} Tecno Light S.R.L. &mdash; CUIT: 30-69238932-4 | Todos los derechos reservados.
            </div>
            <div className="text-white/20 text-xs" style={{ fontFamily: "'Roboto', sans-serif" }}>Rosario &middot; Santa Fe &middot; Argentina</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
