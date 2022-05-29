import { Component, Input, OnInit } from '@angular/core';
import {View, Feature, Map } from 'ol';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';
import OSM, {ATTRIBUTION} from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  @Input() indice: number | undefined;
  @Input() longitud: number | undefined;
  @Input() latitud: number | undefined;
  map: any;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: `map-${this.indice}`,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([this.longitud!, this.latitud!]),
        zoom: 16
      })
    });       
  }

}
