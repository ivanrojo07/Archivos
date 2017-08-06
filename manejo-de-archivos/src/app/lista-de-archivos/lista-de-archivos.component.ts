import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';


@Component({
  selector: 'app-lista-de-archivos',
  templateUrl: './lista-de-archivos.component.html',
  styleUrls: ['./lista-de-archivos.component.css']
})
export class ListaDeArchivosComponent implements OnInit {

  public archivos: Array<Object>;
  constructor(private http: Http) { 
  }

  ngOnInit() {
  	this.peticionExterna();
  	

  }
  peticionExterna(){
  	this.http.get('http://localhost/Backend/leercarpeta.php').subscribe((res:Response)=>{
  		this.archivos = res.json();
  	});
  }

}
