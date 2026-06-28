import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// sidebar
import { SidebarLayout } from './sidebar-layout/sidebar-layout';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarLayout],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
