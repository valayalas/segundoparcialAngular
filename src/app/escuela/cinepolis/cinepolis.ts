
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cinepolis.html',
  styleUrls: ['./cinepolis.css']
})
export class Cinepolis {

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    cantidadCompradores: new FormControl(''),
    tarjetaCineco: new FormControl(''),
    cantidadBoletas: new FormControl('')
  });

  pagar: number = 0;
  total: number = 0;
  mensaje: string = '';
  nombre: string = '';
  error: string = '';

  clientes: Cliente[] = [];

  nuevoCliente: Cliente = {
    compradores: 0,
    nombre: '',
    boletos: 0,
    total: '',
    tarjeta: ''
  };

  procesarCompra(): void {

    const valores = this.formulario.value;
    const nombre = valores.nombre.trim();
    const compradores = Number(valores.cantidadCompradores);
    const boletas = Number(valores.cantidadBoletas);
    const tarjeta = valores.tarjetaCineco;
    const precio = 12;

    // Validar campos
    if (!nombre || !compradores || !boletas || !tarjeta) {
      this.error = 'Llena todos los campos por favor';
      this.mensaje = '';
      return;
    }

    // Validar cantidad de boletos
    if (!Number.isInteger(compradores) || compradores < 1 ||
        !Number.isInteger(boletas) || boletas < 1) {
      this.error = 'Ingresa cantidades enteras mayores a cero';
      this.mensaje = '';
      return;
    }

    if (boletas > compradores * 7) {
      this.error = 'Máximo 7 boletos por persona';
      this.mensaje = '';
      return;
    }

    // Calcular subtotal
    let subtotal = boletas * precio;
    let descuento = 0;

    // Descuento por boletos
    if (boletas > 5) {
      descuento = 0.15;
    } else if (boletas >= 3) {
      descuento = 0.10;
    }

    let totalDescuento = subtotal * (1 - descuento);

    // Descuento por tarjeta Cineco
    if (tarjeta == 'Si') {
      totalDescuento = totalDescuento * 0.90;
    }

    this.pagar = totalDescuento;
    this.total = totalDescuento;
    this.nombre = nombre;
    this.error = '';
    this.mensaje = 'Compra realizada correctamente';

    // Guardar datos del cliente
    this.nuevoCliente.nombre = nombre;
    this.nuevoCliente.compradores = compradores;
    this.nuevoCliente.boletos = boletas;
    this.nuevoCliente.tarjeta = tarjeta;
    this.nuevoCliente.total = String(this.total);

    this.clientes.push({ ...this.nuevoCliente });

    localStorage.setItem(
      'clientes',
      JSON.stringify(this.clientes)
    );
  }

  MuestraCliente(): void {
    this.procesarCompra();
  }

  salir(): void {
    this.formulario.reset({
      nombre: '',
      cantidadCompradores: '',
      tarjetaCineco: '',
      cantidadBoletas: ''
    });

    this.pagar = 0;
    this.total = 0;
    this.nombre = '';
    this.mensaje = '';
    this.error = '';
  }
}
