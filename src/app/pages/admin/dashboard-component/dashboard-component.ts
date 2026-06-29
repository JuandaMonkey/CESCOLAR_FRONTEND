import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
 
interface Usuario {
  username: string;
  nombre: string;
  rol: string;
}

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent implements OnInit {
 usuario: Usuario = { username: '', nombre: '', rol: '' };
 
  stats = {
    alumnosActivos: 5,
    grupos: 3,
    promediosPendientes: 3,
    promediosReprobatorios: 0
  };
 
  navItems = [
    { label: 'Panel', ruta: '/dashboard', activo: true },
    { label: 'Alumnos', ruta: '/alumnos', activo: false },
    { label: 'Calificaciones', ruta: '/calificaciones', activo: false },
  ];
 
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
 
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const data = window.localStorage.getItem('usuario');
    if (data) {
      this.usuario = JSON.parse(data);
    } else {
      this.router.navigate(['/login']);
    }
  }
 
  cerrarSesion() {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.removeItem('usuario');
    }
    this.router.navigate(['/login']);
  }
 
  restablecerDatos() {
    this.stats = {
      alumnosActivos: 5,
      grupos: 3,
      promediosPendientes: 3,
      promediosReprobatorios: 0
    };
  }
 
  navegar(item: any) {
    this.navItems.forEach(n => n.activo = false);
    item.activo = true;
    this.router.navigate([item.ruta]);
  }
}
