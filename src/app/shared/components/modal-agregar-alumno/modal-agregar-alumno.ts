import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../../pages/admin/alumnos-component/alumnos-component';

@Component({
  selector: 'app-modal-agregar-alumno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modal-agregar-alumno.html',
  styleUrls: ['./modal-agregar-alumno.css'],
})
export class ModalAgregarAlumno implements OnChanges {
  @Input() isVisible: boolean = false;
  @Input() alumno: Alumno | null = null;

  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<Omit<Alumno, 'id' | 'activo'>>();

  matricula = '';
  nombre = '';
  grupo = '';
  grado = '';
  tutor = '';
  alergias = '';

  error = '';

  get esEdicion(): boolean {
    return !!this.alumno;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alumno'] || changes['isVisible']) {
      this.cargarFormulario();
    }
  }

  private cargarFormulario(): void {
    this.error = '';

    if (this.alumno) {
      this.matricula = this.alumno.matricula;
      this.nombre = this.alumno.nombre;
      this.grupo = this.alumno.grupo;
      this.grado = this.alumno.grado;
      this.tutor = this.alumno.tutor;
      this.alergias = this.alumno.alergias;
    } else {
      this.matricula = '';
      this.nombre = '';
      this.grupo = '';
      this.grado = '';
      this.tutor = '';
      this.alergias = '';
    }
  }

  guardar(): void {
    const camposObligatorios = [this.matricula, this.nombre, this.grupo, this.grado, this.tutor];

    if (camposObligatorios.some(campo => !campo || campo.trim().length === 0)) {
      this.error = 'Completa todos los campos obligatorios.';
      return;
    }

    this.onSave.emit({
      matricula: this.matricula.trim(),
      nombre: this.nombre.trim(),
      grupo: this.grupo.trim(),
      grado: this.grado.trim(),
      tutor: this.tutor.trim(),
      alergias: this.alergias.trim() || 'Ninguna',
    });
  }

  cerrar(): void {
    this.onClose.emit();
  }
}
