
export const PHONE_NUMBERS = {
  AI_ATTENDANT: '558195918796',
  HUMAN_TEAM: '558181330331',
};

export type LeadIntent = 'simulator' | 'calculator' | 'plan' | 'diagnosis' | 'support';

interface WhatsappLinkOptions {
  intent: LeadIntent;
  data?: Record<string, any>;
  useHumanTeam?: boolean; // Define se vai para a IA ou para a equipa
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
      message = `Olá! Gostaria de falar com a equipa de atendimento sobre o projeto MoveScreen.`;
      break;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};