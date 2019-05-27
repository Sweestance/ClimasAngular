import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { DataServices } from '../data.services'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {

  ciudad: string;
  dias: (Date | number | any) [] = [] //array de dias (app-dia)
  signoTemperatura: string = '+'
  diaActual: any // datos del día actual

  constructor(private dataServices: DataServices){ }

  ngOnInit() {
  }

  
  onSubmit(){
    this.dataServices.cargarDatos(this.ciudad).subscribe( //hago la llamada a la api completando la ciudad con 
                                                          //la que recibo en el formulario
      (response:any) => { 
        this.dias = []
        this.diaActual = { //voy a generar un objeto con todos los datos que necesito para mandarlo a los
                          // componentes hijos
          fecha : new Date(response.list[0].dt_txt),
          ciudad : (response.city.name),
          temperatura : (response.list[0].main.temp) -273,
          clima: obtenerClima(response.list[0].weather[0].icon),
          cielo: response.list[0].weather[0].description,
          icono: response.list[0].weather[0].icon,
          humedad: response.list[0].main.humidity,
          presion: response.list[0].main.pressure,
          viento: response.list[0].wind.speed,
          signoTemperatura: '+'
        }
        
        if (response.list[0].main.temp < 273 ) { //controlo el signo que lleva la temperatura
          this.diaActual.signoTemperatura = '-' // si es menor que 273 es negativa
        } 
        
        console.log(response) 
        let diaActual = new Date(response.list[0].dt_txt).getDate();

        for (let i = 0; i < response.list.length; i++){ //bucle para recorrer el objeto de la llamada e ir rellenando los diferentes app-dia con cada uno de los 5 días que me devuelve la api
          let signoTemperatura = '+'
          if (response.list[i].main.temp < 273 ) {
            signoTemperatura = '-' // si es menor que 273 la temp es negativa
          } 
          let diaIterando = new Date(response.list[i].dt_txt).getDate();

          if(diaIterando != diaActual){ //aquí cambia de día
            diaActual = diaIterando
            // como vienen datos cada 3 horas, 
            // nos adelantamos 4 posiciones para coger los datos del medio día (12:00 4*3)
            i = i + 4
            let dia = { 
              fecha : new Date(response.list[i].dt_txt),
              temperatura : (response.list[i].main.temp) -273,
              clima: obtenerClima(response.list[i].weather[0].icon),
              signoTemperatura: signoTemperatura
            }
            console.log(response.list[i])
            this.dias.push(dia)
          } 
        }

            
        function obtenerClima (weatherIcon: string) { //relaciono los iconos que me manda la api con los climas
          //con esta función vamos a rellenar la clase de los elementos <i> para elegir el icono que debe aparecer
          switch (weatherIcon) { 
            case '10n': return 'lluvia'
          	case '10d': return 'lluvia'
          	case '01d': return 'soleado'
          	case '02d': return 'pocasNubes'
          	case '03d': return 'pocasNubes'
          	case '01n': return 'noche'
          	case '04n': return 'muyNublado'
          	case '04d': return 'muyNublado'
          	case '03n': return 'nublado' 
          }
        }
  //  this.fecha = new Date(this.datos.list[0].dt_txt)
  
        }
      )
    } 
}
