import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading: boolean = true;
  url: string = 'https://bbb-tienda-default-rtdb.firebaseio.com/';
  productos: Producto[] = [];
  searchProducts: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
    this.obtenerBusquedaSessionStorage();
  }

  private cargarProductos() {

    return new Promise( (resolve, reject) => {
      
      this.http.get(`${ this.url }productos_idx.json`)
          .subscribe( (res: any) => {
            this.productos = res;
            this.loading = false;
          });
    })

  }

  getProducto(id: string) {    
    return this.http.get(`https://bbb-tienda-default-rtdb.firebaseio.com/productos/${ id }.json`);    
  }

  buscarProducto(termino: string):Producto[] {

    if (this.productos.length === 0) {
      // Hay que cargar los productos
      this.cargarProductos().then( () => {
        // aplicar el filtro
        this.searchProducts = this.filtrarProductos(termino);        
      })
    } else {
      // Los datos ya estan cargados entonces se filtran los productos
      this.searchProducts = this.filtrarProductos(termino);      
    }
    this.guardarBusquedaSessionStorage();
    return this.searchProducts;
  }
  
  private filtrarProductos(termino: string): Producto[] {        
    termino = termino.toLowerCase();
    this.searchProducts = [];
    this.searchProducts = this.productos.filter( producto => producto.titulo?.toLowerCase().includes(termino) );
    this.guardarBusquedaSessionStorage();
    return this.searchProducts;        
  }

  public filtrarPorCategoria(category: string): Producto[] {
    this.searchProducts = [];
    this.searchProducts = this.productos.filter( producto => producto.categoria?.includes(category) );
    return this.searchProducts;
  }

  private guardarBusquedaSessionStorage() {
    sessionStorage.setItem('busqueda', JSON.stringify(this.searchProducts));
  }

  public obtenerBusquedaSessionStorage() {
    this.searchProducts = JSON.parse(sessionStorage.getItem('busqueda') || "[]");
    
    return this.searchProducts;
  }

}
