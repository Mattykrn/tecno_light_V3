/**
 * mediaData.js — TECNO LIGHT S.R.L.
 * Mapeo centralizado: imagen real → metadata descriptiva exacta.
 * 
 * Fuente: Contenido Tecno light-20260908T001333Z-1-002
 * Clasificación: nombre de carpeta origen + análisis visual directo de cada archivo.
 */

export const mediaData = {

  // ─────────────────────────────────────────────────────────────────────
  // FABRICACIÓN
  // ─────────────────────────────────────────────────────────────────────
  fabricacion: [
    {
      id: "fab-carteles-corrugados-01",
      src: "/images/media/fab-carteles-corrugados-01.jpg",
      title: "Carteles Viales y Transitorios de Obra",
      subtitle: "Carteles corrugados: Calle Cerrada, Precaución Zona de Obras, Desnivel de Calzada",
      category: "Fabricación",
      alt: "Carteles corrugados naranjas y amarillos de señalización transitoria de obra"
    },
    {
      id: "fab-circulos-velocidad",
      src: "/images/media/fab-circulos-velocidad.jpg",
      title: "Discos Retrorreflectivos de Velocidad Máxima",
      subtitle: "Homologados para transporte de carga y pasajeros (IRAM 3952).",
      category: "Fabricación",
      alt: "Círculos reflectivos reglamentarios de velocidad máxima"
    },
    {
      id: "fab-cartel-radar-dpv",
      src: "/images/media/fab-cartel-radar-dpv.jpg",
      title: "Cartelería Institucional para Municipios",
      subtitle: "Cartel informativo vial para control de tránsito urbano.",
      category: "Fabricación",
      alt: "Cartel rectangular azul de Control de Tránsito"
    }
  ],

  // ─────────────────────────────────────────────────────────────────────
  // SERVICIOS
  // ─────────────────────────────────────────────────────────────────────
  servicios: [
    {
      id: "svc-senalizacion-obra-01",
      src: "/images/media/svc-senalizacion-obra-01.jpg",
      title: "Vallado y Balizamiento de Obra en Vía Pública",
      subtitle: "Delimitación perimetral y seguridad en excavaciones urbanas.",
      category: "Servicios",
      alt: "Señalización nocturna completa de obra vial urbana"
    },
    {
      id: "svc-senales-rp70-01",
      src: "/images/media/svc-senales-rp70-01.jpg",
      title: "Colocación de Señales Viales — RP70 Santa Fe",
      subtitle: "Señal preventiva de curva izquierda colocada en Ruta Provincial 70 — DPV Santa Fe",
      category: "Servicios",
      alt: "Señal preventiva amarilla instalada en Ruta Provincial 70"
    },
    {
      id: "svc-senales-campo-01",
      src: "/images/media/svc-senales-campo-01.jpg",
      title: "Instalación de Cartelería en Ruta",
      subtitle: "Señal vial reglamentaria instalada en poste en zona rural.",
      category: "Servicios",
      alt: "Cartel vial instalado en poste metálico al borde de camino rural"
    }
  ],
};

/** Lista plana unificada para componentes de galería o carrusel */
export const galleryItems = [
  ...mediaData.fabricacion,
  ...mediaData.servicios,
];

/** Filtra por categoría: "Fabricación" | "Servicios" */
export const getByCategory = (category) =>
  galleryItems.filter((item) => item.category === category);
