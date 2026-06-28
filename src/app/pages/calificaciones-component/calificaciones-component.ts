import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalBoleta } from '../../shared/components/modal-boleta/modal-boleta';

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

interface MateriaCalificacion {
  nombre: string;
  parcial1: number;
  parcial2: number;
  parcial3: number;
  promedio: number;
}

interface AlumnoBoleta {
  nombre: string;
  matricula: string;
  grupo: string;
  materias: MateriaCalificacion[];
}

@Component({
  selector: 'app-calificaciones-component',
  imports: [CommonModule, FormsModule, ModalBoleta],
  templateUrl: './calificaciones-component.html',
  styleUrl: './calificaciones-component.css',
})
export class CalificacionesComponent {
  grupoSeleccionado: string = '';
  materiaSeleccionada: string = '';
  
  mostrarModalBoleta: boolean = false;
  alumnoBoleta: AlumnoBoleta | null = null;
  
  paginaActual: number = 1;
  elementosPorPagina: number = 10;
  
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
      nombre: 'Sofía Mendivil',
      matricula: 'A-2026-001',
      grupo: '3° A',
      materia: 'Español',
      parcial1: 8,
      parcial2: 8.5,
      parcial3: 9,
      promedio: 8.5
    },
    {
      nombre: 'Sofía Mendivil',
      matricula: 'A-2026-001',
      grupo: '3° A',
      materia: 'Historia',
      parcial1: 6,
      parcial2: 7,
      parcial3: 6.5,
      promedio: 6.5
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
      nombre: 'Carlos Rodríguez',
      matricula: 'A-2026-002',
      grupo: '3° A',
      materia: 'Español',
      parcial1: 8,
      parcial2: 9,
      parcial3: 8.5,
      promedio: 8.5
    },
    {
      nombre: 'Carlos Rodríguez',
      matricula: 'A-2026-002',
      grupo: '3° A',
      materia: 'Ciencias',
      parcial1: 9,
      parcial2: 9,
      parcial3: 10,
      promedio: 9.3
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
      nombre: 'María González',
      matricula: 'A-2026-003',
      grupo: '3° A',
      materia: 'Español',
      parcial1: 6,
      parcial2: 6.5,
      parcial3: 7,
      promedio: 6.5
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
      nombre: 'Juan López',
      matricula: 'A-2026-004',
      grupo: '3° B',
      materia: 'Inglés',
      parcial1: 7,
      parcial2: 8,
      parcial3: 7.5,
      promedio: 7.5
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
    },
    {
      nombre: 'Ana Martínez',
      matricula: 'A-2026-005',
      grupo: '3° A',
      materia: 'Matemáticas',
      parcial1: 9,
      parcial2: 8.5,
      parcial3: 9,
      promedio: 8.8
    }
  ];

  get alumnosFiltrados(): Alumno[] {
    return this.alumnos.filter(alumno => {
      const filtroGrupo = this.grupoSeleccionado === '' || alumno.grupo === this.grupoSeleccionado;
      const filtroMateria = this.materiaSeleccionada === '' || alumno.materia === this.materiaSeleccionada;
      return filtroGrupo && filtroMateria;
    });
  }

  get alumnosPaginados(): Alumno[] {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    return this.alumnosFiltrados.slice(inicio, fin);
  }

  get totalPaginas(): number {
    return Math.ceil(this.alumnosFiltrados.length / this.elementosPorPagina);
  }

  getPaginas(): number[] {
    const paginas: number[] = [];
    for (let i = 1; i <= this.totalPaginas; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
    }
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  paginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
    }
  }

  resetPagina(): void {
    this.paginaActual = 1;
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
    // Obtener todas las materias del alumno
    const materiasDelAlumno = this.alumnos
      .filter(a => a.matricula === alumno.matricula)
      .map(a => ({
        nombre: a.materia,
        parcial1: a.parcial1,
        parcial2: a.parcial2,
        parcial3: a.parcial3,
        promedio: a.promedio
      }));

    this.alumnoBoleta = {
      nombre: alumno.nombre,
      matricula: alumno.matricula,
      grupo: alumno.grupo,
      materias: materiasDelAlumno
    };
    
    this.mostrarModalBoleta = true;
  }

  cerrarModalBoleta(): void {
    this.mostrarModalBoleta = false;
    this.alumnoBoleta = null;
  }
}
