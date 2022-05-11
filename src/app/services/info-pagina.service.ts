import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada: boolean = false; // para hacer un loading

  constructor( private _http: HttpClient ) {

    console.log('Service ready!');
    
    // Leer el archivo JSON
    this._http.get('assets/data/data-pagina.json')
        .subscribe( (resp: any) => {

          this.cargada = true;
          this.info = resp;
          console.log(resp);
          
        })
   }
}
