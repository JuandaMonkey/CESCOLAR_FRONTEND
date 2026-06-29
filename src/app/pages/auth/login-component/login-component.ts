import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario {
  username: string;
  password: string;
  nombre: string;
  rol: string;
}

@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
   username = '';
  password = '';
  errorMsg = '';
 
  private usuarios: Usuario[] = [
    { username: 'carlos', password: '12345', nombre: 'Carlos Melendrez', rol: 'Administrador' },
    { username: 'juan', password: '12345', nombre: 'Juan Rodriguez', rol: 'Docente' },
    { username: 'alex', password: '12345', nombre: 'Alex Cantu', rol: 'Docente' },
    { username: 'manuel', password: '12345', nombre: 'Manuel Pacheco', rol: 'Docente' },
  ];
 
  constructor(private router: Router) {}
 
  login() {
    const found = this.usuarios.find(
      u => u.username === this.username && u.password === this.password
    );
 
    if (found) {
      this.errorMsg = '';
      // Guarda sesión básica
      localStorage.setItem('usuario', JSON.stringify(found));
      // Redirige según rol
      if (found.rol === 'Administrador') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/docente']);
      }
    } else {
      this.errorMsg = 'Usuario o contraseña incorrectos.';
    }
  }

}
