import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { CalificacionesComponent } from './pages/calificaciones-component/calificaciones-component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'calificaciones', component: CalificacionesComponent },
      { path: '', redirectTo: '/calificaciones', pathMatch: 'full' }
    ]
  }
];
