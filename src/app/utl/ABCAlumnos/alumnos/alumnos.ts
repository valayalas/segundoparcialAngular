import { AlumnosUTL } from '../alumnosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../alumnosapi.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-alumnos',
  imports: [FormsModule, RouterLink, AlumnoFilterPipe, CommonModule],
  templateUrl: './alumnos.html',
})

export class Alumnos implements OnInit {
  listFilter:string=''
  alumnoTitle:string
  dataSource:AlumnosUTL[]=[];

  constructor(public alumnosUTL:ProyectoapiService, private router: Router){}

  alumnosIric:AlumnosUTL[]=[
    {
      matricula:1234,
      nombre: 'pedro',
      apaterno: 'lopez',
      amaterno: 'muñoz',
      correo: 'pedro@gmail.com'
    }
  ]
  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    this.alumnosUTL.getAlumnos().subscribe({
      next: (response: AlumnosUTL[]) => {
        console.log('Datos recibidos del API:', response);
        this.dataSource  = (response as any). alumnos;
      },

      error: (error) => {
        console.error('Error al consultar el API:', error);
      },

      complete: () => {
        console.log('Carga de alumnos finalizada');
      }

    });
  }
}


//[]
//{}
//<>
//g
//h