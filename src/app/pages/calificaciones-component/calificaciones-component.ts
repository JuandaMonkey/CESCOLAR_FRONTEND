import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Alumno {
  nombre: string;
  matricula: string;
  grupo: string;
  materia: string;
  parcial1: number;
  parcial2: number;
  parcial3: number;
  promedio: number;
}

@Component({
  selector: 'app-calificaciones-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './calificaciones-component.html',
  styleUrl: './calificaciones-component.css',
})
export class CalificacionesComponent {
  grupoSeleccionado: string = '';
  materiaSeleccionada: string = '';
  
  grupos: string[] = ['1° A', '1° B', '2° A', '2° B', '3° A', '3° B'];
  materias: string[] = ['Matemáticas', 'Español', 'Historia', 'Ciencias', 'Inglés'];
  
  alumnos: Alumno[] = [
    {
      nombre: 'Sofía Mendivil',
      matricula: 'A-2026-001',
      grupo: '3° A',
      materia: 'Matemáticas',
      parcial1: 7,
      parcial2: 7.5,
      parcial3: 7,
      promedio: 7.2
    },
    {
      nombre: 'Carlos Rodríguez',
      matricula: 'A-2026-002',
      grupo: '3° A',
      materia: 'Matemáticas',
      parcial1: 9,
      parcial2: 10,
      parcial3: 9.5,
      promedio: 9.5
    },
    {
      nombre: 'María González',
      matricula: 'A-2026-003',
      grupo: '3° A',
      materia: 'Matemáticas',
      parcial1: 5,
      parcial2: 6,
      parcial3: 5,
      promedio: 5.3
    },
    {
      nombre: 'Juan López',
      matricula: 'A-2026-004',
      grupo: '3° B',
      materia: 'Matemáticas',
      parcial1: 8,
      parcial2: 9,
      parcial3: 8.5,
      promedio: 8.5
    },
    {
      nombre: 'Ana Martínez',
      matricula: 'A-2026-005',
      grupo: '3° A',
      materia: 'Español',
      parcial1: 10,
      parcial2: 9,
      parcial3: 9,
      promedio: 9.3
    }
  ];

  get alumnosFiltrados(): Alumno[] {
    return this.alumnos.filter(alumno => {
      const filtroGrupo = this.grupoSeleccionado === '' || alumno.grupo === this.grupoSeleccionado;
      const filtroMateria = this.materiaSeleccionada === '' || alumno.materia === this.materiaSeleccionada;
      return filtroGrupo && filtroMateria;
    });
  }

  calcularPromedio(alumno: Alumno): void {
    // Si todos los parciales están vacíos (0), mostrar guion
    if (alumno.parcial1 === 0 && alumno.parcial2 === 0 && alumno.parcial3 === 0) {
      alumno.promedio = 0;
      return;
    }
    
    const suma = alumno.parcial1 + alumno.parcial2 + alumno.parcial3;
    alumno.promedio = Math.round((suma / 3) * 10) / 10;
  }

  verBoleta(alumno: Alumno): void {
    console.log('Ver boleta del alumno:', alumno.nombre);
    // Aquí puedes agregar la lógica para mostrar la boleta del alumno
  }
}
