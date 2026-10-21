/**
 * Analytics & CRO Event Tracker
 * Despacha eventos de conversão de forma limpa, respeitando integrações existentes
 * sem inventar credenciais ou IDs fictícios.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export type ConversionEvent =
  | 'click_quero_anunciar_hero'
  | 'click_quero_anunciar_header'
  | 'click_quero_anunciar_final'
  | 'click_conhecer_planos'
  | 'change_pricing_seconds'
  | 'change_pricing_vehicles'
  | 'click_contratar_plano'
  | 'click_whatsapp_comercial'
  | 'click_whatsapp_atendimento'
  | 'click_rastrear_anuncio'
  | 'submit_rastrear_anuncio'
  | 'expand_faq';

export function trackEvent(name: ConversionEvent, data?: Record<string, any>) {
  try {
    // 1. DataLayer (Google Tag Manager)
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: name,
        ...data,
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Google Analytics (gtag)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', name, data);
    }

    // 3. Meta Pixel (fbq)
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', name, data);
    }

    // 4. Custom DOM Event for extensible listener integrations
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('movescreen_event', {
          detail: { event: name, ...data },
        })
      );
    }
  } catch (err) {
    // Silently continue to never break user journey
  }
}
