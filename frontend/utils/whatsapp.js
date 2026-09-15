export const WA_NUMBER = '5493424278117';

export const getWaLink = (text = 'Hola Tecno Light S.R.L., me interesa solicitar un presupuesto para mi obra.') => {
  return `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(text)}`;
};
