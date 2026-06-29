import { Routes } from '@angular/router';
// layout
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/auth/login-component/login-component').then((m) => m.LoginComponent)
    },
    {
        path: 'admin',
        redirectTo: 'main/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./pages/admin/dashboard-component/dashboard-component').then((m) => m.DashboardComponent)
            },
            {
                path: 'alumnos',
                loadComponent: () =>
                    import('./pages/admin/alumnos-component/alumnos-component').then((m) => m.AlumnosComponent),
                children: [
                    {
                        path: 'agregar-alumno',
                        loadComponent: () =>
                            import('./shared/components/modal-agregar-alumno/modal-agregar-alumno').then((m) => m.ModalAgregarAlumno)
                    }
                ]
            },
            {
                path: 'calificaciones',
                loadComponent: () =>
                    import('./pages/calificaciones-component/calificaciones-component').then((m) => m.CalificacionesComponent),
                children: [
                    {
                        path: 'boleta',
                        loadComponent: () =>
                            import('./shared/components/modal-boleta/modal-boleta').then((m) => m.ModalBoleta)
                    }
                ]
            }
        ]
    }
];
