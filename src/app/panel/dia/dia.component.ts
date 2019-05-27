import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  //traigo el array día del padre para poder trabajar con los datos en el DOM
  @Input('datos') datos: any; 

  constructor( ){
  }

  ngOnInit() {
    
  }

}
