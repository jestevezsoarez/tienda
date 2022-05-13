import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false; // para hacer un loading
  sucursales: any[] = [];

  constructor( private _http: HttpClient ) {

    //console.log('Service ready!');
    this.cargarInfo();
    this.cargarSucursales();     
   }

   private cargarInfo() {
     // Leer el archivo JSON
     this._http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {

       this.cargada = true;
       this.info = resp;                 
     });
   }

   private cargarSucursales() {
    this._http.get('https://bbb-tienda-default-rtdb.firebaseio.com/sucursal.json')
     .subscribe( (resp: any) => {
       
       this.sucursales = resp;
       //console.log(this.sucursales);                
     });
   }

}
