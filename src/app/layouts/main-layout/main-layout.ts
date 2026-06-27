import { Component } from '@angular/core';
import { SidebarLayout } from './sidebar-layout/sidebar-layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [SidebarLayout, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
