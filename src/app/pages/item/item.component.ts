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
  nextId: string = '';
  producto!: ProductoDescripcion;

  constructor( private activatedRoute: ActivatedRoute, 
                public productosService: ProductosService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      //console.log(params['id']);
      this.id = params['id'];            
      this.productosService.getProducto(params['id']).subscribe( (res: any) => {
        //console.log(res);
        this.producto = res;
        //console.log(this.producto);
        
        this.productosService.loading = false;
        this.nextId = this.siguienteArticulo(this.id);        
      });       
    })

  }

  siguienteArticulo(codigo: string): string {

    let arr = codigo.split('-');
    let siguiente = Number.parseInt(arr[1]) + 1;

    // controlar que si es el 15 vuelvo al 1
    if (siguiente > 15)
      siguiente = 1;

    arr[1] = siguiente.toString();
    
    let resultado = arr.join('-');
    
    return resultado;
  }

}
