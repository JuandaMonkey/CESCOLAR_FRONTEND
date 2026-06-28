import { SideBarModel } from '../models/sidebar.model';

export const sideBarData: SideBarModel = {
  groups: [
    {
      text: 'ESCOLAR',
      items: [
        {
          text: 'PANEL',
          icon: 'fa-solid fa-gauge-high',
          route: '/main/dashboard',
        },
        {
          text: 'ALUMNOS',
          icon: 'fa-solid fa-user-graduate',
          route: '/main/alumnos',
        },
        {
          text: 'CALIFICACIONES',
          icon: 'fa-solid fa-clipboard-list',
          route: '/main/calificaciones',
        },
      ],
    },
    {
      text: 'CERRAR SESIÓN',
      items: [
        {
          text: 'Salir',
          icon: 'fa-solid fa-right-from-bracket',
          onClick: 'logout',
        },
      ],
    },
  ],
};