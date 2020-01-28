import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validar-driven',
  templateUrl: './validar-driven.component.html',
  styleUrls: ['./validar-driven.component.css']
})
export class ValidarDrivenComponent implements OnInit {
  registroform: FormGroup
  generos = ['Femnino', 'Masculino'];

  constructor(private formBuilder: FormBuilder) {
    this.crearForm();
  }

  ngOnInit() {
  }

  crearForm(): FormGroup {
    return this.registroform = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      director: ['', [Validators.required]],
     // genero: ['', [Validators.requiredTrue]]
    })
  }

  onSubmit() {
    console.log(this.registroform.controls)
  }
}
