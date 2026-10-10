import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cinepolis.html',
  styleUrls: ['./cinepolis.css']
})
export class Cinepolis {
  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    cantidadCompradores: new FormControl(),
    tarjetaCineco: new FormControl(''),
    cantidadBoletas: new FormControl(),
  });
  
  pagar: number = 0;

  error: string = '';

  salir(): void{
    this.formulario.setValue({
      nombre: this.formulario.value.nombre,
      cantidadCompradores: this.formulario.value.cantidadCompradores,
      tarjetaCineco: '',
      cantidadBoletas: '',
    });
    this.pagar = 0;
    this.error = '';
  }

  procesarCompra(): void {
    if (this.formulario.invalid) {
      this.error = 'Completa correctamente los campos, recuerda que el máximo son 7 boletas :))';
      return;
    }

    this.error = '';
    const valores = this.formulario.value;
    const boletas = Number(valores.cantidadBoletas);
    const tarjeta = valores.tarjetaCineco == 'Si';
    const precio = 12;

    let subtotal = boletas * precio;
    let descuento = 0;

    if (boletas > 5) {
      descuento = 0.15;
    } else if (boletas >= 3) {
      descuento = 0.10;
    } else {
      descuento = 0;
    }

    let totalDescuento = subtotal * (1 - descuento);

    if (tarjeta) {
      totalDescuento = totalDescuento * 0.90;
    }

    this.pagar = totalDescuento;
  }
}