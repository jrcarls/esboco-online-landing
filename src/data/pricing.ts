export interface Plan {
  name: string;
  price: string;
  period?: string;
  note?: string;
  features: string[];
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Grátis',
    price: 'R$ 0',
    period: '/ para sempre',
    features: [
      'Até 5 esboços',
      'Até 10 eventos na agenda',
      'Até 10 favoritos',
      'Acesso à Bíblia',
    ],
  },
  {
    name: 'Mensal',
    price: 'R$ 19,90',
    period: '/mês',
    features: [
      'Esboços ilimitados',
      'Agenda ilimitada',
      'Favoritos ilimitados',
      'Acesso completo à Bíblia',
      'Suporte por e-mail',
    ],
  },
  {
    name: 'Anual',
    price: 'R$ 11,90',
    period: '/mês',
    note: 'cobrado anualmente',
    features: [
      'Tudo do plano Mensal',
      'Economia de R$ 96 por ano',
      'Acesso antecipado a novidades',
      'Suporte prioritário',
    ],
    highlighted: true,
  },
];
