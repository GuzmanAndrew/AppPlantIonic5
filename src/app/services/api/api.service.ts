import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 1, name: 'Presión arterial', img: 'assets/imgs/blood-donation.png' },
    { id: 2, name: 'Frecuencia cardiaca', img: 'assets/imgs/heart-rate.png' },
    { id: 3, name: 'Temperatura corporal', img: 'assets/imgs/thermometer.png' },
    { id: 5, name: 'Oxigenacion en sangre', img: 'assets/imgs/red-blood-cells.png' },
  ];

  constructor() { }

  getItem(id) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
