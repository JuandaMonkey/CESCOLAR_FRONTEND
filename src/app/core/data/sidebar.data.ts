import { SideBarModel } from '../models/sidebar.model';

export const sideBarData: SideBarModel = {
  groups: [
    {
      text: 'ESCOLAR',
      items: [
        {
          text: 'PANEL',
          icon: 'mdi mdi-view-dashboard',
          route: '/main/dashboard',
        },
        {
          text: 'ALUMNOS',
          icon: 'mdi mdi-account-school',
          route: '/main/alumnos',
        },
        {
          text: 'CALIFICACIONES',
          icon: 'mdi mdi-clipboard-text',
          route: '/main/calificaciones',
        },
      ],
    },
    {
      text: 'CERRAR SESIÓN',
      items: [
        {
          text: 'Salir',
          icon: 'mdi mdi-logout',
          onClick: 'logout',
        },
      ],
    },
  ],
};