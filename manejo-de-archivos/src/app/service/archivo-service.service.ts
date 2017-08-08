import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Archivo} from '../model/archivo';

@Injectable()
export class ArchivoServiceService {

  constructor(public http: Http) { }

  getArchivos(){
  	return this.http.get('http://localhost/Backend/leercarpeta.php').map(res=> res.json());
  }

}
