import { Component } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';
import { AcumuladorService } from './services/acumulador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /* providers: [ ContadorService]*/
})
export class AppComponent {
  title = 'clase3-servicios-v1';

  contador: number;

  constructor(
    public contService: ContadorService,
    public acumService: AcumuladorService
    ) {
    this.contador = contService.getCount();
  }

  sumar(): void {
    console.log('AppComponent');

    this.contService.sum();
    this.contador = this.contService.getCount();

    this.acumService.acumular();

  }

  sumarEnAppComponent(valor: number ): void {
    this.contService.incrementar(valor);
    this.contador = this.contService.getCount();

    this.acumService.acumular();
  }

}
