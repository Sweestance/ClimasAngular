import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  //extraigo el objeto del padre mediante el decorador input, de esta forma puedo rellenar el DOM utilizando los atributos de este objeto
  @Input('diaActual') diaActual: any; 


  constructor(){
  }


  

  ngOnInit() {
    
    }

}
