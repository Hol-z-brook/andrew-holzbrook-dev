import { WorkProjectId, type WorkProject } from './WorkProject';

export const workProjectsById: Record<WorkProjectId, WorkProject> = {
  [WorkProjectId.FlutterDesktop]: {
    id: WorkProjectId.FlutterDesktop,
    name: 'Flutter Desktop',
    description:
      'Optimized Flutter codebase by transitioning a mobile-first design to a fully responsive, desktop-ready solution, significantly improving cross-device performance.',
    tech: ['Flutter', 'Dart', 'Responsive Design'],
  },
  [WorkProjectId.NextJsPlatform]: {
    id: WorkProjectId.NextJsPlatform,
    name: 'Next.js Platform',
    description:
      'Launched a greenfield Next.js project, making key architectural decisions for scalable state management and form handling, laying the foundation for future development.',
    tech: ['Next.js', 'React', 'TypeScript'],
  },
  [WorkProjectId.WebCart]: {
    id: WorkProjectId.WebCart,
    name: 'Web Cart',
    description:
      'Led the development of a web cart, driving cross-functional collaboration and delivering a seamless shopping experience with improved performance.',
    tech: ['React', 'TypeScript', 'State Management'],
  },
  [WorkProjectId.MarketingSite]: {
    id: WorkProjectId.MarketingSite,
    name: 'Marketing Site',
    description:
      'Transitioned marketing site from WordPress to React + Prismic, modernizing the user experience and optimizing content management workflows.',
    tech: ['React', 'Prismic CMS', 'TypeScript'],
  },
};
