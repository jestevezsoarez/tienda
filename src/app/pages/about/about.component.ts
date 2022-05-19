import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor( public _servicio: InfoPaginaService,
                public productosService: ProductosService ) {   
    
  }

  ngOnInit(): void {
    
  }

}
