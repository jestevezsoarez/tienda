import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  constructor( private _productosService: ProductosService) { }

  ngOnInit(): void {
  }

}
