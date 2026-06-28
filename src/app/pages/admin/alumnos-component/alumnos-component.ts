import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalAgregarAlumno } from '../../../shared/components/modal-agregar-alumno/modal-agregar-alumno';

export interface Alumno {
  id: number;
  matricula: string;
  nombre: string;
  grupo: string;
  grado: string;
  tutor: string;
  alergias: string;
  activo: boolean;
}

@Component({
  selector: 'app-alumnos-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalAgregarAlumno],
  templateUrl: './alumnos-component.html',
  styleUrls: ['./alumnos-component.css'],
})
export class AlumnosComponent {

  rutaActual: string = '';
  busqueda: string = '';
  grupoSeleccionado: string = '';

  mostrarModal: boolean = false;
  alumnoEditando: Alumno | null = null;

  private siguienteId = 6;

  alumnos: Alumno[] = [
    { id: 1, matricula: 'A-2026-001', nombre: 'Sofía Mendívil', grupo: '3° A', grado: '3°', tutor: 'Marisol Mendívil', alergias: 'Ninguna', activo: true },
    { id: 2, matricula: 'A-2026-002', nombre: 'Diego Armenta', grupo: '3° A', grado: '3°', tutor: 'Raúl Armenta', alergias: 'Polen', activo: true },
    { id: 3, matricula: 'A-2026-003', nombre: 'Valeria Quintero', grupo: '3° B', grado: '3°', tutor: 'Carmen Quintero', alergias: 'Ninguna', activo: true },
    { id: 4, matricula: 'A-2026-004', nombre: 'Emilio Borbón', grupo: '3° B', grado: '3°', tutor: 'Patricia Borbón', alergias: 'Lactosa', activo: true },
    { id: 5, matricula: 'A-2026-005', nombre: 'Renata Soto', grupo: '2° A', grado: '2°', tutor: 'Hugo Soto', alergias: 'Ninguna', activo: true },
  ];

  constructor(private router: Router) {
    this.rutaActual = this.router.url;
  }

  get grupos(): string[] {
    return [...new Set(this.alumnos.map(a => a.grupo))].sort();
  }

  get alumnosFiltrados(): Alumno[] {
    return this.alumnos.filter(a => {
      if (!a.activo) return false;

      const coincideBusqueda =
        !this.busqueda ||
        a.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        a.matricula.toLowerCase().includes(this.busqueda.toLowerCase());

      const coincideGrupo =
        !this.grupoSeleccionado || a.grupo === this.grupoSeleccionado;

      return coincideBusqueda && coincideGrupo;
    });
  }

  abrirModalNuevo(): void {
    this.alumnoEditando = null;
    console.log('abrirModalNuevo llamado — antes:', this.mostrarModal);
    this.mostrarModal = true;
    console.log('abrirModalNuevo — después:', this.mostrarModal);
  }

  abrirModalEditar(alumno: Alumno): void {
    console.log('abrirModalEditar llamado para:', alumno);
    this.alumnoEditando = { ...alumno };
    this.mostrarModal = true;
    console.log('mostrarModal ahora:', this.mostrarModal);
  }

  cerrarModal(): void {
    console.log('cerrarModal llamado — antes:', this.mostrarModal);
    this.mostrarModal = false;
    this.alumnoEditando = null;
    console.log('cerrarModal — después:', this.mostrarModal);
  }

 guardarAlumno(datos: any): void {
  if (this.alumnoEditando) {
    const index = this.alumnos.findIndex(
      a => a.id === this.alumnoEditando!.id
    );

    if (index !== -1) {
      this.alumnos[index] = {
        ...this.alumnos[index],
        ...datos,
      };
    }
  } else {
    this.alumnos.push({
      id: this.siguienteId++,
      activo: true,
      ...datos,
    });
  }

  this.cerrarModal();
}

  darDeBaja(alumno: Alumno): void {
    const confirmado = confirm(`¿Dar de baja a ${alumno.nombre}?`);
    if (!confirmado) return;

    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index].activo = false;
    }
  }
}