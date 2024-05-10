import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false;
  msgs: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      fecha: [null, Validators.required],
      telefono: ['', [Validators.required, Validators.pattern("[0-9]{9}")]]
    });
  }

  ngOnInit() {
  }

  submitForm() {

 // Array para almacenar los campos faltantes
 let camposFaltantes: string[] = [];

 // Verificar cada campo del formulario
 Object.keys(this.form.controls).forEach(key => {
   const control = this.form.get(key);
   if (control && control.invalid) { // Verificar si control no es nulo
     camposFaltantes.push(key);
   }
 });
 
 // Mostrar alerta para cada campo faltante
 camposFaltantes.forEach(campo => {
   alert(`El campo ${campo} es requerido.`);
 });
 

    this.formSubmitted = true;
    if (this.form.valid) {
      console.log('Formulario enviado correctamente');
      console.log('Datos del formulario:', this.form.value);
      this.msgs = [{ severity: 'success', summary: 'Éxito', detail: 'Datos guardados correctamente.' }];
      this.form.reset();
      this.formSubmitted = false;
    } else {
      console.log('Por favor, completa todos los campos correctamente');
      this.msgs = [{ severity: 'error', summary: 'Error', detail: 'Por favor, completa todos los campos correctamente.' }];
    }

  }
}
