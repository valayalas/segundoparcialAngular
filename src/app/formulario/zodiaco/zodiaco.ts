import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './zodiaco.html',
  styleUrl: './zodiaco.css',
})
export class Zodiaco {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';
  
  nombreC: string = '';
  edad: number = 0;
  signo: string = '';
  imagenSigno: string = ''; 
  resultado: boolean = false; 

  signos = [
    { nombre: "rata", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg"},
    { nombre: "buey", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg"},
    { nombre: "tigre", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg"},
    { nombre: "conejo", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg"},
    { nombre: "dragón", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg"},
    { nombre: "serpiente", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg"},
    { nombre: "caballo", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg"},
    { nombre: "cabra", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg"},
    { nombre: "mono", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg"},
    { nombre: "gallo", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg"},
    { nombre: "perro", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg"},
    { nombre: "cerdo", imagen: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg"}
  ];

  calcular() : void {
    this.nombreC = `${this.nombre} ${this.apaterno} ${this.amaterno}`;
    
    const anioActual = new Date().getFullYear();
    this.edad = anioActual - this.anio;

    const index = (this.anio - 1900) % 12;
    const signoObj = this.signos[index >= 0 ? index : index + 12];
    
    this.signo = signoObj.nombre;
    this.imagenSigno = signoObj.imagen;

    this.resultado = true;
  }
}
//[]
//{}
//<>
//g
//h
