'use client';
import { useState } from 'react';

export default function UbicacionMapas() {
  const [sedeActiva, setSedeActiva] = useState('comercial');

  const sedes = {
    comercial: {
      nombre: "Sede Comercial y Ventas",
      direccion: "Suipacha 3243, S3000 Santa Fe, Argentina",
      mapUrl: "https://maps.google.com/maps?q=Suipacha+3243,+Santa+Fe,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed",
      gmapsLink: "https://www.google.com/maps/search/?api=1&query=Suipacha+3243,+Santa+Fe,+Argentina"
    },
    planta: {
      nombre: "Planta Industrial y Fabricación",
      direccion: "Parque Industrial Los Polígonos, Santa Fe, Argentina",
      mapUrl: "https://maps.google.com/maps?q=Parque+Industrial+Los+Poligonos,+Santa+Fe,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed",
      gmapsLink: "https://www.google.com/maps/search/?api=1&query=Parque+Industrial+Los+Poligonos,+Santa+Fe,+Argentina"
    }
  };

  const actual = sedes[sedeActiva];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Nuestras Ubicaciones</span>
          <h3 className="text-xl font-bold text-slate-900">{actual.nombre}</h3>
          <p className="text-sm text-slate-600 mt-1">{actual.direccion}</p>
        </div>

        {/* Selector de Sede */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setSedeActiva('comercial')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              sedeActiva === 'comercial'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Sede Comercial
          </button>
          <button
            type="button"
            onClick={() => setSedeActiva('planta')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              sedeActiva === 'planta'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Planta Industrial
          </button>
        </div>
      </div>

      {/* Mapa Interactivo */}
      <div className="w-full h-[380px] rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100 shadow-inner">
        <iframe
          key={sedeActiva}
          title={actual.nombre}
          src={actual.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Botón directo a app móvil de Google Maps */}
      <div className="mt-4 flex justify-end">
        <a
          href={actual.gmapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline"
        >
          <span>Abrir ruta en Google Maps</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
