import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive } from '@angular/router';
// sidebar
import { sideBarData } from '../../../core/data/sidebar.data';
import { SideBarModel, SideBarItem } from '../../../core/models/sidebar.model';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [ 
    RouterLink, 
    RouterLinkActive],
  templateUrl: './sidebar-layout.html',
  styleUrl: './sidebar-layout.css',
})
export class SidebarLayout {
  nombreUsuario = 'Lucía Reyes';
  rolUsuario = 'administrador';

  sideBar: SideBarModel = sideBarData;

  manejarClick(item: SideBarItem): void {
    if (item.onClick === 'logout') {
      this.cerrarSesion();
    }
  }
  
  private cerrarSesion(): void {
    console.log('Cerrar sesión (pendiente de conectar)');
  } 
}
