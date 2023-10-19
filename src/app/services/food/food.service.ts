import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/beefBrisket.png',
      '/assets/images/chickenShawarma.png',
      '/assets/images/crispyRoastPotatoes.png',
      '/assets/images/dhal.png',
      '/assets/images/eggplantDumplings.png',
      '/assets/images/freekeh.png',
      '/assets/images/frittata.png',
      '/assets/images/khaoSoi.png',
    ]
  }
}
