import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string = '';
  producto!: ProductoDescripcion;

  constructor( private activatedRoute: ActivatedRoute, 
                public productosService: ProductosService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.id = params['id'];            
      this.productosService.getProducto(params['id']).subscribe( (res: any) => {
        //console.log(res);
        this.producto = res;
        console.log(this.producto);
        
        this.productosService.loading = false;        
      });       
    })

  }

}
