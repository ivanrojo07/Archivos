import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroExtension'
})
export class FiltroExtensionPipe implements PipeTransform {

  transform(value: any, args?: any): any {

  	let iconoClase:string;
  	switch(value){
  		case 'zip':
  			iconoClase = "fa fa-file-archive-o";
  			break;
  		case 'jpg':
  			iconoClase = "fa fa-file-image-o";
  			break;
  		case 'txt':
  			iconoClase = "fa fa-file-text-o";
  			break;
  		default:
  			iconoClase = "fa fa-file-o";
  			break;
  	}
    return iconoClase;
  }

}
