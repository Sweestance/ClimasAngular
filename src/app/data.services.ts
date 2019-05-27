import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()

export class DataServices {
    constructor(private httpClient: HttpClient){}

   cargarDatos(ciudad: string){ 
        return this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad},es&APPID=26b690b31ad6b4ec26347352e7ed59fe`)
    }

}