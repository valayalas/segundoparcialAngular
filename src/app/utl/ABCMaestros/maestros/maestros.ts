
import { MaestrosUTL } from '../maestrosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaestrosapiService } from '../maestrosapi.service';
import { MaestroFilterPipe } from '../maestros-filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maestros',
  imports: [FormsModule, RouterLink, MaestroFilterPipe, CommonModule],
  templateUrl: './maestros.html',
})

export class Maestros implements OnInit {

  listFilter: string = '';
  maestroTitle: string = '';
  dataSource: MaestrosUTL[] = [];

  constructor(
    public maestrosUTL: MaestrosapiService,
    private router: Router
  ) {}

  maestrosIric: MaestrosUTL[] = [
    {
      idmaestro: 1,
      nombre: 'pedro',
      apaterno: 'lopez',
      amaterno: 'muñoz',
      correo: 'pedro@gmail.com'
    }
  ];

  ngOnInit(): void {
    this.cargarMaestros();
  }

  cargarMaestros(): void {
    this.maestrosUTL.getMaestros().subscribe({
      next: (response: any) => {
        console.log('Datos recibidos del API:', response);
        this.dataSource = Array.isArray(response)
          ? response
          : response.maestros ?? [];
      },

      error: (error) => {
        console.error('Error al consultar el API:', error);
      },

      complete: () => {
        console.log('Carga de maestros finalizada');
      }
    });
  }
}


//[]
//{}
//<>
//g
//h