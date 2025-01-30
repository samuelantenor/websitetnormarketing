import { Locale } from '@/config/i18n.config';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface LocalizedFAQs {
  [key: string]: {
    [K in Locale]: FAQItem[];
  };
}

export const faqData: LocalizedFAQs = {
  'business': {
    en: [
      {
        id: 'biz-1',
        question: 'What digital marketing services do you offer?',
        answer: 'We offer a comprehensive suite of digital marketing services including SEO optimization, Google My Business management, SMS marketing, and website development. Each service is tailored to meet your specific business needs and goals.',
        category: 'Business'
      },
      {
        id: 'biz-2',
        question: 'How long does it take to see results from your services?',
        answer: 'Results typically start showing within 1-2 months for services like SEO and digital marketing. SEO typically shows initial results in 3-6 months, while paid advertising can show immediate results.',
        category: 'Business'
      },
      {
        id: 'biz-3',
        question: 'Are there any hidden fees?',
        answer: 'No, all fees are outlined upfront. If additional services are requested, we will provide a clear quote before proceeding.',
        category: 'Business'
      },
      {
        id: 'biz-4',
        question: 'Can I cancel anytime?',
        answer: 'Yes, you can cancel anytime with 30 days\' notice for most monthly services. Website hosting may require a longer commitment.',
        category: 'Business'
      },
      {
        id: 'biz-5',
        question: 'What kind of support do you offer?',
        answer: 'We provide email and phone support during business hours.',
        category: 'Business'
      },
      {
        id: 'biz-6',
        question: 'Do you provide training for tools you set up?',
        answer: 'Absolutely! We include a training session as part of our onboarding process.',
        category: 'Business'
      },
      {
        id: 'biz-7',
        question: 'What if I don\'t like the designs or content?',
        answer: 'We offer up to 2 free revisions per project to ensure you\'re satisfied.',
        category: 'Business'
      },
      {
        id: 'biz-8',
        question: 'Can you guarantee results?',
        answer: 'While we cannot guarantee specific numbers, we commit to providing data-driven strategies designed to maximize your ROI.',
        category: 'Business'
      },
      {
        id: 'biz-9',
        question: 'What happens after the onboarding process?',
        answer: 'After onboarding, we provide regular updates, monthly reports, and strategy adjustments to ensure continued success.',
        category: 'Business'
      },
      {
        id: 'biz-10',
        question: 'What is SEO and why is it important?',
        answer: 'SEO (Search Engine Optimization) is the process of improving your website\'s visibility in search engine results. It\'s crucial because it helps your business get found by potential customers when they search for services like yours, driving organic traffic and increasing credibility.',
        category: 'Business'
      }
    ],
    fr: [
      {
        id: 'biz-1',
        question: 'Quels services de marketing digital proposez-vous ?',
        answer: 'Nous proposons une gamme complète de services de marketing digital comprenant l\'optimisation SEO, la gestion Google My Business, le marketing SMS et le développement de sites web. Chaque service est adapté pour répondre à vos besoins et objectifs spécifiques.',
        category: 'Services'
      },
      {
        id: 'biz-2',
        question: 'Combien de temps faut-il pour voir les résultats de vos services ?',
        answer: 'Les résultats commencent généralement à se manifester dans les 1-2 mois pour les services comme le SEO et le marketing digital. Le SEO montre généralement des résultats initiaux en 3-6 mois, tandis que la publicité payante peut montrer des résultats immédiats.',
        category: 'Services'
      },
      {
        id: 'biz-3',
        question: 'Y a-t-il des frais cachés ?',
        answer: 'Non, tous les frais sont détaillés à l\'avance. Si des services supplémentaires sont demandés, nous fournirons un devis clair avant de procéder.',
        category: 'Services'
      },
      {
        id: 'biz-4',
        question: 'Puis-je annuler à tout moment ?',
        answer: 'Oui, vous pouvez annuler à tout moment avec un préavis de 30 jours pour la plupart des services mensuels. L\'hébergement de sites web peut nécessiter un engagement plus long.',
        category: 'Services'
      },
      {
        id: 'biz-5',
        question: 'Quel type de support proposez-vous ?',
        answer: 'Nous fournissons un support par email et téléphone pendant les heures de bureau.',
        category: 'Services'
      },
      {
        id: 'biz-6',
        question: 'Proposez-vous une formation pour les outils que vous mettez en place ?',
        answer: 'Absolument ! Nous incluons une session de formation dans notre processus d\'intégration.',
        category: 'Services'
      },
      {
        id: 'biz-7',
        question: 'Que se passe-t-il si je n\'aime pas les designs ou le contenu ?',
        answer: 'Nous offrons jusqu\'à 2 révisions gratuites par projet pour garantir votre satisfaction.',
        category: 'Services'
      },
      {
        id: 'biz-8',
        question: 'Pouvez-vous garantir des résultats ?',
        answer: 'Bien que nous ne puissions pas garantir des chiffres spécifiques, nous nous engageons à fournir des stratégies basées sur les données conçues pour maximiser votre retour sur investissement.',
        category: 'Services'
      },
      {
        id: 'biz-9',
        question: 'Que se passe-t-il après le processus d\'intégration ?',
        answer: 'Après l\'intégration, nous fournissons des mises à jour régulières, des rapports mensuels et des ajustements de stratégie pour assurer un succès continu.',
        category: 'Services'
      },
      {
        id: 'biz-10',
        question: 'Qu\'est-ce que le SEO et pourquoi est-ce important ?',
        answer: 'Le SEO (Search Engine Optimization) est le processus d\'amélioration de la visibilité de votre site web dans les résultats des moteurs de recherche. C\'est crucial car cela aide votre entreprise à être trouvée par des clients potentiels lorsqu\'ils recherchent des services comme les vôtres, générant du trafic organique et augmentant la crédibilité.',
        category: 'Services'
      }
    ]
  }
}; 