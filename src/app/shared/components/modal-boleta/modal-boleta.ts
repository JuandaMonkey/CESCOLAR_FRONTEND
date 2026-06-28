import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-modal-boleta',
  imports: [CommonModule],
  templateUrl: './modal-boleta.html',
  styleUrl: './modal-boleta.css',
})
export class ModalBoleta {
  @Input() isVisible: boolean = false;
  @Input() alumno: AlumnoBoleta | null = null;
  @Output() onClose = new EventEmitter<void>();

  cerrarModal(): void {
    this.onClose.emit();
  }

  calcularPromedio(parcial1: number, parcial2: number, parcial3: number): number {
    const suma = parcial1 + parcial2 + parcial3;
    return Math.round((suma / 3) * 10) / 10;
  }

  getPromedioGeneral(): number {
    if (!this.alumno || this.alumno.materias.length === 0) return 0;
    const sumaPromedios = this.alumno.materias.reduce((sum, materia) => sum + materia.promedio, 0);
    return Math.round((sumaPromedios / this.alumno.materias.length) * 10) / 10;
  }
}