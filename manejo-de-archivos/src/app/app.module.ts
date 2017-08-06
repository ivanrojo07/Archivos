import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaDeArchivosComponent } from './lista-de-archivos/lista-de-archivos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeArchivosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
