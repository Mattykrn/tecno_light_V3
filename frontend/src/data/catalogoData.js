/**
 * catalogoData.js — TECNO LIGHT S.R.L.
 *
 * Fichas técnicas del catálogo de señalización normada.
 * Normativa de referencia:
 *   - Ley Nacional de Tránsito N° 24.449 (Anexo L)
 *   - Manual de Señalamiento Vial — Dirección Nacional de Vialidad (DNV)
 *   - IRAM 3950 / IRAM 3952 / IRAM 10033
 *   - ASTM D4956: Tipo I (GIP), Tipo III/IV (AIP), Tipo XI (OmniCube)
 *   - Avery Dennison TrafficJet™ Xpress — Convertidor / Procesador Autorizado
 *
 * Clasificación visual:
 *   REGLAMENTARIAS — círculo rojo · fondo blanco (prohibición/obligación)
 *   PREVENTIVAS    — rombo amarillo (peligro/advertencia)
 *   INFORMATIVAS   — rectángulo verde/azul (orientación/servicios)
 *   TRANSITORIAS   — naranja flúor (obra / modificación transitoria)
 *   VEHICULAR      — vinilo / disco reflectivo (CNRT/Ley 24.449)
 */

export const catalogoData = {
  // ─────────────────────────────────────────────────────────────────────
  // REGLAMENTARIAS
  // ─────────────────────────────────────────────────────────────────────
  reglamentarias: [
    {
      id: 'reg-R15-velocidad',
      src: '/images/catalogo/reglamentaria-velocidad.jpg',
      codigo: 'R-15',
      denominacion: 'Límite de Velocidad Máxima',
    },
    {
      id: 'reg-R15-campo',
      src: '/images/catalogo/reglamentaria-campo.jpg',
      codigo: 'R — Campo',
      denominacion: 'Señal Reglamentaria Instalada en Ruta',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────
  // PREVENTIVAS
  // ─────────────────────────────────────────────────────────────────────
  preventivas: [],

  // ─────────────────────────────────────────────────────────────────────
  // INFORMATIVAS
  // ─────────────────────────────────────────────────────────────────────
  informativas: [
    {
      id: 'inf-I1-destino-ruta',
      src: '/images/catalogo/informativa-panel.jpg',
      codigo: 'I — Orientación',
      denominacion: 'Cartel de Destino y Distancia en Ruta (DPV)',
    },
    {
      id: 'inf-velocidades-carril',
      src: '/images/catalogo/preventiva-curva.jpg',
      codigo: 'I — Informativa',
      denominacion: 'Cartel Informativo de Velocidades Máximas por Carril',
    }
  ],

  // ─────────────────────────────────────────────────────────────────────
  // TRANSITORIAS
  // ─────────────────────────────────────────────────────────────────────
  transitorias: [
    {
      id: 'trans-T1-obra',
      src: '/images/catalogo/transitoria-obra.jpg',
      codigo: 'T-1 / T-4 / T-8',
      denominacion: 'Cartelería Transitoria de Obra en Corrugado Plástico',
    },
    {
      id: 'trans-T-desnivel',
      src: '/images/catalogo/transitoria-desnivel.jpg',
      codigo: 'T-8',
      denominacion: 'Peligro Desnivel / Badén Transitorio',
    },
    {
      id: 'trans-nocturno-balizas',
      src: '/images/catalogo/transitoria-balizas.jpg',
      codigo: 'BN-1',
      denominacion: 'Señalización Nocturna — Barril Balizador + Flecha',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────
  // VEHICULAR
  // ─────────────────────────────────────────────────────────────────────
  vehicular: [
    {
      id: 'vehicular-discos-velocidad',
      src: '/images/catalogo/insumo-velocidad-cnrt.jpg',
      codigo: 'CNRT / IRAM 3952',
      denominacion: 'Círculos Retrorreflectivos de Velocidad para Transporte (Norma IRAM 3952 / CNRT)',
    },
    {
      id: 'vehicular-epp',
      src: '/images/catalogo/vehicular-epp.jpg',
      codigo: 'EPP / ISO 11612',
      denominacion: 'Equipamiento de Protección Personal — Seguridad Vial',
    },
  ],
};
