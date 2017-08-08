import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Archivo} from '../model/archivo';
import {Http, Response, RequestMethod, Request, URLSearchParams} from '@angular/http'
import {ArchivoServiceService} from '../service/archivo-service.service';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css'],
  providers: [ArchivoServiceService]
})
export class ArchivoComponent implements OnInit {

	public archivos = Object;
	public edicionArchivo:Boolean; 
	public modeloArchivo:any;
	@Input()
	archivoInfo:any;
	@Output()
	cambioArchivo:EventEmitter<number> = new EventEmitter();

  	constructor(private http: Http, private archivoService: ArchivoServiceService) { 
  		this.edicionArchivo = false;
  		this.modeloArchivo = {};
  	} 

  	ngOnInit() {
  	}
  	borrar(archivo){
  		this.http.request(
  			new Request({
  				method: RequestMethod.Get,
  				url: 'http://localhost/Backend/servicios/borrar-archivos.php',
  				search: 'ruta-archivo=../'+archivo.ruta+'/'+archivo.nombre
  				})).subscribe((res:Response)=>{
  			console.log("---", res);
  			this.cambioArchivo.emit();
  			});
  	} 
  	activarEdicion(nombre:string){
  		this.edicionArchivo = true;
  		this.modeloArchivo.nuevoNombre = nombre; 
  	}
  	desactivarEdicion(){
  		this.edicionArchivo = false;
  	}
  	renombrar(archivo){
  		let parametros:URLSearchParams = new URLSearchParams();
  		parametros.set('ruta-archivo', '../'+archivo.ruta+'/'+archivo.nombre);
  		parametros.set('nuevo-archivo', '../'+archivo.ruta+'/'+this.modeloArchivo.nuevoNombre);
  		this.http.request(
  			new Request({
  				method: RequestMethod.Get,
  				url: 'http://localhost/Backend/servicios/renombrar-archivos.php',
  				search: parametros 
  				})).subscribe((res:Response)=>{
  			console.log("---", res);
  			this.cambioArchivo.emit();
  			});
  	}
}