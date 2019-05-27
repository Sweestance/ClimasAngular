import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { CompileNgModuleMetadata } from '@angular/compiler';
import { PanelComponent } from '../panel.component';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  
  //aquí también me traigo el objeto "diaActual" que tiene todos los datos del response que necesito
  @Input('diaActual') diaActual: any; 
  
  constructor(  ){ }

  
  ngOnInit() {
  }

}
