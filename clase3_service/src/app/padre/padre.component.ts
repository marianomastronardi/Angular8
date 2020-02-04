import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  padre: any;
  
  constructor() { 
     this.padre = {
      edad: 15,
      apellido: 'lopez',
    };
    console.log(this.padre);
  }

  ngOnInit() {
  }

  recibirAviso(valor: number): void{
    +valor;
    console.log(valor);
  } 
}
