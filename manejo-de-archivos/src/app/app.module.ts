import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaDeArchivosComponent } from './lista-de-archivos/lista-de-archivos.component';
import { ArchivoComponent } from './archivo/archivo.component';
import { FiltroExtensionPipe } from './filtro-extension.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeArchivosComponent,
    ArchivoComponent,
    FiltroExtensionPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
