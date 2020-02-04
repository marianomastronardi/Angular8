import { Injectable } from '@angular/core';
import { ContadorService } from './contador.service';

@Injectable({
  providedIn: 'root'
})
export class AcumuladorService {

  acum : number;

  constructor(private contService: ContadorService) { 
    this.acum = contService.getCount();
  }

  acumular() {
    this.acum += this.contService.getCount();
  }

  getAcum() : number {
    return this.acum;
  }
}
