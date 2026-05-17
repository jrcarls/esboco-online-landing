import type { IconName } from '../types/icons';

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'pencil',
    title: 'Esboços de Sermões',
    description: 'Crie, organize e edite esboços com um editor rico. Nunca mais perca uma ideia.',
  },
  {
    icon: 'book-open',
    title: 'Bíblia Integrada',
    description: 'Leia, destaque versículos em 4 cores e salve suas referências favoritas.',
  },
  {
    icon: 'calendar',
    title: 'Agenda Ministerial',
    description: 'Organize pregações, cultos e compromissos em um calendário visual.',
  },
  {
    icon: 'star',
    title: 'Versículos Favoritos',
    description: 'Salve os versículos mais importantes para acessar rapidamente.',
  },
];
