import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  

  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
    console.log(this._servicio);
    
  }

}
