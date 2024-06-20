import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../shared/usuario/usuario.service';
import { Usuario } from '../../interface/usuario.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false;
  msgs: any[] = [];
  usuarioRegistrado: Usuario | null = null;


  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {

  }

  submitForm() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.usuarioService.create(this.form.value as Partial<Usuario>).subscribe(
        response => {
          this.usuarioRegistrado = response;
          console.log(this.usuarioRegistrado)
          this.msgs = [{severity: 'success', summary: 'Éxito', detail: 'Datos guardados correctamente.'}];
          this.form.reset();
          this.formSubmitted = false;
        },
        error => {
          console.error('Error al enviar el formulario', error);
          this.msgs = [{severity: 'error', summary: 'Error', detail: 'Error al guardar los datos.'}];
        }
      );
    } else {
      console.log('Por favor, completa todos los campos correctamente');
      this.msgs = [{severity: 'error', summary: 'Error', detail: 'Por favor, completa todos los campos correctamente.'}];
    }
  }
}
