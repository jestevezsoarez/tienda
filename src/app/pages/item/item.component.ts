import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  constructor( private activatedRoute: ActivatedRoute, 
                public productosService: ProductosService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {            
      this.productosService.getProducto(params['id']).subscribe( (res) => {
        console.log(res);
        this.productosService.loading = false;        
      });       
    })

  }

}
