import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MaestrosUTL } from '../maestrosUTL';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MaestrosapiService } from '../maestrosapi.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-editar',
  templateUrl: './editar.html',
})
export class Editar implements OnInit {
  formulario!: FormGroup;
  idmaestro: string = '';

  constructor(
    private route: ActivatedRoute,
    public maestrosUtl: MaestrosapiService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      idmaestro: [''],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo: ['']
    });

    this.idmaestro = this.route.snapshot.paramMap.get('idmaestro') || '';

    this.maestrosUtl.getMaestro(this.idmaestro).subscribe({
      next: (response: any) => {
        this.formulario.patchValue(response.maestro || response);
      },
      error: (error) => {
        console.error('Error al consultar el maestro:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const maestro = this.formulario.getRawValue();

    this.maestrosUtl.modificarMaestro(parseInt(this.idmaestro), maestro).subscribe({
      next: (response) => {
        if (response) {
          alert('Maestro actualizado correctamente');
          this.router.navigate(['/utl/maestros']);
        } else {
          alert('No se pudo actualizar el maestro');
        }
      },
      error: (error) => {
        console.error('Error al actualizar:', error);
        alert('Ocurrió un error al actualizar el maestro');
      }
    });
  }
}

//[]
//{}
//<>
//g
//h