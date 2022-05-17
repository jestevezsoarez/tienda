import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading: boolean = true;
  url: string = 'https://bbb-tienda-default-rtdb.firebaseio.com/';

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos() {

    this.http.get(`${ this.url }productos_idx.json`)
        .subscribe( (res: Producto) => {

          console.log(res);
          this.loading = false;
        });
  }

}
