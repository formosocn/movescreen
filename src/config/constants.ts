/**
 * MoveScreen - Configurações Centrais Oficiais
 * Centraliza assets, contatos oficiais, regras comerciais e geradores de links.
 */

export const ASSETS = {
  logo: 'https://res.cloudinary.com/dzw4kv0ue/image/upload/v1790793900/Gemini_Generated_Image_gdybgigdybgigdyb_zrkzey.jpg',
  heroVideo: 'https://res.cloudinary.com/dzw4kv0ue/video/upload/v1792503369/gemini_generated_video_b1de7e10_frptd5.mp4',
};

export const CONTACTS = {
  // WhatsApp da equipe comercial: contratação, seleção de planos, dúvidas de preços e intenção de anunciar
  commercialWhatsApp: '558181330331',
  commercialPhoneFormatted: '(81) 8133-0331',

  // WhatsApp de atendimento: suporte aos anunciantes atuais, rastreamento e dúvidas operacionais
  supportWhatsApp: '558195918796',
  supportPhoneFormatted: '(81) 9591-8796',
};

export const PRICING_RULES = {
  basePricePer10s: 200, // R$ 200,00 por 10s por veículo/mês
  minSeconds: 10,
  maxSeconds: 120, // Limite máximo de 2 minutos por anunciante por veículo
  stepSeconds: 10,
};

/**
 * Calcula o valor mensal proporcional:
 * Preço mensal = (tempo em segundos ÷ 10) × R$ 200,00 × quantidade de veículos
 */
export function calculateMonthlyPrice(seconds: number, vehicles: number = 1): number {
  const safeSeconds = Math.min(
    Math.max(seconds, PRICING_RULES.minSeconds),
    PRICING_RULES.maxSeconds
  );
  const safeVehicles = Math.max(1, vehicles);
  return (safeSeconds / PRICING_RULES.stepSeconds) * PRICING_RULES.basePricePer10s * safeVehicles;
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Gera URL oficial do WhatsApp Comercial com mensagem contextualizada
 */
export function buildCommercialWhatsAppUrl(seconds?: number, vehicles: number = 1): string {
  let message = 'Olá! Tenho interesse em anunciar na MoveScreen e gostaria de receber mais informações.';

  if (seconds && seconds >= PRICING_RULES.minSeconds) {
    const total = calculateMonthlyPrice(seconds, vehicles);
    const formattedTotal = formatBRL(total);
    message = `Olá! Tenho interesse em anunciar na MoveScreen. Quero contratar ${seconds} segundos por veículo, para ${vehicles} veículo(s), no valor de R$ ${formattedTotal} por mês. Gostaria de receber as condições para contratar.`;
  }

  return `https://wa.me/${CONTACTS.commercialWhatsApp}?text=${encodeURIComponent(message)}`;
}

/**
 * Gera URL oficial do WhatsApp de Atendimento/Suporte
 */
export function buildSupportWhatsAppUrl(campaignCode?: string): string {
  let message = 'Olá! Sou anunciante da MoveScreen e gostaria de atendimento sobre minha campanha.';

  if (campaignCode && campaignCode.trim()) {
    message = `Olá! Sou anunciante da MoveScreen e gostaria de suporte sobre o status da campanha código [${campaignCode.trim()}].`;
  }

  return `https://wa.me/${CONTACTS.supportWhatsApp}?text=${encodeURIComponent(message)}`;
}
