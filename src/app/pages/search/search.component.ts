import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  busqueda: Producto[] = [];
  termino: string = '';

  constructor( private activatedRoute: ActivatedRoute,
                public productosService: ProductosService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];            
      this.busqueda = this.productosService.buscarProducto(this.termino);
    })

  }

}
