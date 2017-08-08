import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Archivo} from '../model/archivo';
import {ArchivoServiceService} from '../service/archivo-service.service';

@Component({
  selector: 'app-lista-de-archivos',
  templateUrl: './lista-de-archivos.component.html',
  styleUrls: ['./lista-de-archivos.component.css'],
  providers: [ArchivoServiceService]

})
export class ListaDeArchivosComponent implements OnInit {

  public archivos: Array<Object>;
  constructor(private archivoService: ArchivoServiceService,) { 
  	
  }

  ngOnInit() {
  	this.peticionExterna();
  	

  }
  peticionExterna(){
  	this.archivoService.getArchivos().subscribe(
  		result=>{
  			
  			this.archivos = result;
  			console.log(this.archivos);

  		});
  }
  refrescar(){
  	this.peticionExterna();
  }

}
