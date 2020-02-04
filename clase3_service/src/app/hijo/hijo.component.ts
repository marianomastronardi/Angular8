import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() apellidoPaterno : any;
  
  @Output() aviso = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.apellidoPaterno);
  }

  informarAlPadre(valor: string){
    console.log('hijo envia'+ valor);
    this.aviso.emit(valor);
  }
}
