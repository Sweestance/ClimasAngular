import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { TituloComponent } from './panel/titulo/titulo.component';
import { TiempoComponent } from './panel/tiempo/tiempo.component';
import { DiaComponent } from './panel/dia/dia.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggingService } from './LoggingService.service';
import { DataServices } from './data.services';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TituloComponent,
    TiempoComponent,
    DiaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DataServices, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
