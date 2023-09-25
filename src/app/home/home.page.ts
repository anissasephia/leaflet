import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;

  constructor() { }
  // ngOnInit() {

  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView(
      [-0.055738866725349605, 129.6108071576666],
      13
    );

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    const markerIcon = L.icon({
      // iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconUrl: 'assets/icon/pin.png',
      // iconRetinaUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
      // shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize: [25, 25],
      iconAnchor: [13, 41],

    });
    //Marker
    const marker = L.marker([-0.03788608990024549, 129.60737392674687], { icon: markerIcon }).addTo(
      this.map
    );
    const marker2 = L.marker([0.012925673819618382, 129.63209316761476], { icon: markerIcon }).addTo(
      this.map
    );

    //Pop-up information
    marker.bindPopup('Pulau Omnial').openPopup();
    marker2.bindPopup('Pulau Uta').openPopup();

    //Basemap
    const baseMaps = {
      OpenStreetMap: L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ),
      Satellite: L.tileLayer(
        'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution:
            '&copy; <a href="https://maps.google.com">Google Maps</a>',
        }
      ),
      Watercolor: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
        maxZoom: 17,
        attribution:
          '&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors',
      })
    };
    //LayerControl
    L.control.layers(baseMaps).addTo(this.map);
  }
}