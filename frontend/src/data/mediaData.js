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
      id: "fab-carteles-corrugados-04",
      src: "/images/media/fab-carteles-corrugados-04.jpg",
      title: "Carteles Viales y Transitorios de Obra",
      subtitle: "Carteles corrugados de alta visibilidad para delimitación y desvíos.",
      category: "Fabricación",
      alt: "Carteles corrugados de señalización transitoria de obra"
    },
    {
      id: "fab-planta-carteles-industriales-01",
      src: "/images/media/fab-planta-carteles-industriales-01.jpg",
      title: "Fabricación de Señalética Industrial",
      subtitle: "Cartelería para plantas productivas, naves y depósitos.",
      category: "Fabricación",
      alt: "Paneles de señalética y seguridad industrial en nave de producción"
    },
    {
      id: "fab-planta-carteles-industriales-02",
      src: "/images/media/fab-planta-carteles-industriales-02.jpg",
      title: "Cartelería Corporativa y de Seguridad",
      subtitle: "Paneles normados y pictogramas para control de accesos e industrias.",
      category: "Fabricación",
      alt: "Cartelería de seguridad y delimitación industrial terminada"
    }
  ],

  // ─────────────────────────────────────────────────────────────────────
  // SERVICIOS
  // ─────────────────────────────────────────────────────────────────────
  servicios: [
    {
      id: "svc-senalizacion-obra-02",
      src: "/images/media/svc-senalizacion-obra-02.jpg",
      title: "Vallado y Balizamiento de Obra en Vía Pública",
      subtitle: "Delimitación perimetral y seguridad en excavaciones urbanas.",
      category: "Servicios",
      alt: "Señalización y balizamiento de obra vial urbana"
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
