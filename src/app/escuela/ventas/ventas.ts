import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-ventas',
  styleUrl: './ventas.css',
  templateUrl: './ventas.html',
})
export class Ventas {
  formulario!: FormGroup;
  cliente: Cliente[] = [];
  indiceEdicion: number = -1;
  mostrarFormulario: boolean = false; 

  nuevoCliente: any = {
    nombre: '',
    compradores: '',
    boletos: '',
    tarjeta: '',
    total: '',
  };

  ngOnInit(): void {
    this.cargarClientes();
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      boletos: new FormControl(''),
      tarjeta: new FormControl(''),
      total: new FormControl(''),
    });
  }

  agregarCliente(): void {
    if (
      this.nuevoCliente.nombre === '' ||
      this.nuevoCliente.compradores === '' ||
      this.nuevoCliente.boletos === '' ||
      this.nuevoCliente.tarjeta === '' ||
      this.nuevoCliente.total === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (this.indiceEdicion !== -1) {
      this.cliente[this.indiceEdicion] = {
        ...this.nuevoCliente
      };
    } else {
      this.cliente.push({ ...this.nuevoCliente });
    }

    localStorage.setItem(
      'clientes',
      JSON.stringify(this.cliente)
    );

    this.limpiarCampos(); 
  }

  cargarCliente(): void {
    const datos = localStorage.getItem('clientes');
    if (datos) {
      this.cliente = JSON.parse(datos);
    }
  }

  editarAlumno(index: number): void {
    this.nuevoCliente = {
      ...this.cliente[index]
    };
    const c = this.cliente[index];
    this.formulario.patchValue({
      nombre: c.nombre,
      compradores: c.compradores,
      boletos: c.boletos,
      tarjeta: c.tarjeta,
      total: c.total,
    });

    this.indiceEdicion = index;
    this.mostrarFormulario = true; 
  }

  eliminarAlumno(index: number): void {
    this.cliente.splice(index, 1);
    localStorage.setItem(
      'clientes',
      JSON.stringify(this.cliente)
    );
  }

  limpiarCampos(): void {
    this.nuevoCliente = {
      nombre: '',
      compradores: '',
      boletos: '',
      tarjeta: '',
      total: '',
    };
    this.formulario.patchValue({
      nombre: this.nuevoCliente.nombre,
      compradores: this.nuevoCliente.compradores,
      boletos: this.nuevoCliente.boletos,
      tarjeta: this.nuevoCliente.tarjeta,
      total: this.nuevoCliente.total,
    });
    this.indiceEdicion = -1;
    this.mostrarFormulario = false; 
  }

  muestraAlumno(): void {
    this.nuevoCliente.nombre = this.formulario.value.nombre;
    this.nuevoCliente.compradores = this.formulario.value.compradores;
    this.nuevoCliente.boletos = this.formulario.value.boletos;
    this.nuevoCliente.tarjeta = this.formulario.value.tarjeta;
    this.nuevoCliente.total = this.formulario.value.total;
    this.agregarCliente();
  }

  cargarClientes(): void {
    const datos = localStorage.getItem('clientes');

    if (datos) {
      this.cliente = JSON.parse(datos);
    }
  }
}