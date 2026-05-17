import type { IconName } from '../types/icons';

export interface Differential {
  icon: IconName;
  title: string;
  description: string;
}

export const differentials: Differential[] = [
  {
    icon: 'shield',
    title: '100% seguro',
    description: 'Seus dados protegidos e sempre disponíveis.',
  },
  {
    icon: 'smartphone',
    title: 'Qualquer dispositivo',
    description: 'Desktop, tablet e celular.',
  },
  {
    icon: 'globe',
    title: 'Sempre disponível',
    description: 'Acesse de qualquer lugar, a qualquer hora.',
  },
];
