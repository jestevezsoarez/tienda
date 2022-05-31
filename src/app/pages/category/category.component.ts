import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  category: string;
  products: Producto[];

  constructor( public _productosService: ProductosService, private _activatedRoute: ActivatedRoute) {
    this.category = '';
    this.products = [];
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: Params) => {
        this.category = params['categoria'];        
        this.products = this._productosService.filtrarPorCategoria(this.category);
        //console.log(this.products);
        
      }
    )
  }

}
