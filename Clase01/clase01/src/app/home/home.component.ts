import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'hola';
    dias :string[] = ['lunes','martes','domingo'];
  constructor() { 
    }

  ngOnInit() {
  }

    showdias(dia: string): void {
      alert(`selecciono el dia ${dia}`)
    }
}
