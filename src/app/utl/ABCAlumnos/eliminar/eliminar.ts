import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlumnosUTL } from '../alumnosUTL';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ProyectoapiService } from '../alumnosapi.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  selector: 'app-eliminar',
  templateUrl: './eliminar.html',
})
export class Eliminar implements OnInit {
  formulario!: FormGroup;
  matricula: string = '';
  regAlumno: AlumnosUTL = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private route: ActivatedRoute,
    public alumnosUtl: ProyectoapiService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      matricula: [''],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo: ['']
    });

    this.matricula = this.route.snapshot.paramMap.get('matricula') || '';

    this.alumnosUtl.getAlumno(this.matricula).subscribe({
      next: (response: any) => {
        this.regAlumno = response.alumno || response;
      },
      error: (error) => {
        console.error('Error al consultar el alumno:', error);
      }
    });
  }

  eliminarAlumno(): void {
    this.alumnosUtl.EliminaAlumno(parseInt(this.matricula)).subscribe({
      next: () => {
        alert('Alumno eliminado correctamente');
        this.router.navigate(['/utl/alumnos']);
      },
      error: (error) => {
        console.error('Error al eliminar:', error);
        alert('Ocurrió un error al eliminar el alumno');
      }
    });
  }
}


//[]
//{}
//<>
//g
//h