import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false; // para hacer un loading

  constructor( private _http: HttpClient ) {

    console.log('Service ready!');
    
    // Leer el archivo JSON
    this._http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;
          // console.log(resp);
          
        })
   }
}
