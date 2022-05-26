import { Component, OnInit } from '@angular/core';
import {View, Feature, Map } from 'ol';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';
import OSM, {ATTRIBUTION} from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  map: any;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-56.166914549381275, -34.898285159502]), // hardcode, luego cambiar
        zoom: 16
      })
    });
  }

}
