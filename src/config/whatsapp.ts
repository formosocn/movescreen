
export const PHONE_NUMBERS = {
  AI_ATTENDANT: '558195918796',
  HUMAN_TEAM: '558181330331',
};

export type LeadIntent = 'simulator' | 'calculator' | 'plan' | 'diagnosis' | 'support';

interface WhatsappLinkOptions {
  intent: LeadIntent;
  data?: Record<string, any>;
  useHumanTeam?: boolean; // Define se vai para a IA ou para a equipe
}

export const buildWhatsappLink = ({
  intent,
  data,
  useHumanTeam = false,
}: WhatsappLinkOptions): string => {
  const phone = useHumanTeam ? PHONE_NUMBERS.HUMAN_TEAM : PHONE_NUMBERS.AI_ATTENDANT;
  let message = '';

  switch (intent) {
    case 'simulator':
      message = `Olá! Simulei um anúncio para a minha empresa "${data?.businessName || 'Meu Negócio'}" no segmento de ${data?.category || 'Geral'} e gostaria de ver as condições disponíveis.`;
      break;

    case 'calculator':
      message = `Olá! Fiz uma estimativa na calculadora para uma frota de ${data?.vehicles || 5} veículos (${data?.estimatedViews || '225 mil'} visualizações/mês) e quero saber mais detalhes.`;
      break;

    case 'plan':
      message = `Olá! Tenho interesse no plano *${data?.planName || 'MoveScreen'}* de ${data?.price || ''}. Como posso iniciar?`;
      break;

    case 'diagnosis':
      message = `Olá! Gostaria de receber um diagnóstico personalizado sobre a viabilidade de divulgar a minha marca nos veículos da MoveScreen.`;
      break;

    case 'support':
    default:
      message = `Olá! Gostaria de falar com a equipe de atendimento sobre o projeto MoveScreen.`;
      break;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// ---------------------------------------------------------------------------
// Compatibilidade: componentes que ainda usam a API antiga
// ---------------------------------------------------------------------------
export const WHATSAPP_CONFIG = {
  phoneNumber: PHONE_NUMBERS.AI_ATTENDANT,
  displayPhone: '(81) 98133-0331',
  contactEmail: '',
  businessHours: 'Segunda a Sexta, das 08h \u00e0s 19h (Atendimento r\u00e1pido)',
  averageResponseTime: 'Geralmente responde em menos de 5 minutos',
};

export interface WhatsAppMessageParams {
  intent?: string;
  businessName?: string;
  segment?: string;
  city?: string;
  planName?: string;
  customDetails?: string;
}

export function buildWhatsAppLink(params: WhatsAppMessageParams = {}): string {
  const { intent = 'geral', businessName, segment, city, planName, customDetails } = params;
  let message = 'Ol\u00e1! Vi a MoveScreen e gostaria de informa\u00e7\u00f5es para anunciar minha empresa nos tablets dos carros de aplicativo.';

  if (intent === 'plano-start') {
    message = `Ol\u00e1! Tenho interesse em contratar o *Plano Start Local* da MoveScreen${businessName ? ` (${businessName})` : ''}. Pode me passar os detalhes para iniciar a veicula\u00e7\u00e3o?`;
  } else if (intent === 'plano-crescimento') {
    message = `Ol\u00e1! Gostaria de contratar o *Plano Crescimento Urbano* da MoveScreen${businessName ? ` para a empresa ${businessName}` : ''}. Como funciona o processo de ativa\u00e7\u00e3o da frota?`;
  } else if (intent === 'plano-dominio') {
    message = `Ol\u00e1! Tenho interesse no *Plano Dom\u00ednio Total* (+30 ve\u00edculos) da MoveScreen. Gostaria de falar com um consultor corporativo.`;
  } else if (intent === 'simulador') {
    message = `Ol\u00e1! Acabei de testar o simulador no site da MoveScreen${segment ? ` para o segmento de *${segment}*` : ''}${businessName ? ` da empresa *${businessName}*` : ''}. Gostaria de saber como colocar meu an\u00fancio no ar!`;
  } else if (intent === 'calculadora') {
    message = `Ol\u00e1! Fiz uma simula\u00e7\u00e3o de alcance na calculadora da MoveScreen${customDetails ? ` (${customDetails})` : ''}. Gostaria de validar a disponibilidade de ve\u00edculos na minha regi\u00e3o.`;
  } else if (intent === 'diagnostico') {
    message = `Ol\u00e1! Gostaria de um diagn\u00f3stico r\u00e1pido da minha empresa${businessName ? ` (${businessName})` : ''}${segment ? ` do setor de ${segment}` : ''}${city ? ` em ${city}` : ''} para criar uma campanha de alta convers\u00e3o na MoveScreen.`;
  }

  return `https://wa.me/${PHONE_NUMBERS.AI_ATTENDANT}?text=${encodeURIComponent(message)}`;
}
