import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {        
        title: "Beef Brisket",
        tags: ['dinner', 'beef brisket'],
        imageUrl: '/assets/images/beefBrisket.png',
        cookTime: '6 hrs, 40 min',
        serves: '8'
      },
      {        
        title: 'Chicken Shwarma',
        tags: ['lunch', 'dinner', 'chicken shwarma'],
        imageUrl: '/assets/images/chickenShawarma.png',
        cookTime: '20 min',
        serves: '4-5'
      },
      {        
        title: 'Roast Potatoes',
        tags: ['lunch', 'dinner', 'vegetarian', 'crispy roast potatoes'],
        imageUrl: '/assets/images/crispyRoastPotatoes.png',
        cookTime: '1 hr',
        serves: '4'
      },
      {        
        title: 'Dhal',
        tags: ['dinner', 'vegetarian', 'dhal'],
        imageUrl: '/assets/images/dhal.png',
        cookTime: '1 hr, 30 min',
        serves: '4'
      },
      {        
        title: 'Eggplant Dumplings',
        tags: ['lunch', 'dinner', 'vegetarian', 'eggplant dumplings'],
        imageUrl: '/assets/images/eggplantDumplings.png',
        cookTime: '1 hr, 50 min',
        serves: '4'
      },
      {        
        title: 'Freekeh Salad',
        tags: ['dinner', 'lunch', 'vegetarian', 'freekeh', 'salad'],
        imageUrl: '/assets/images/freekeh.png',
        cookTime: '30 min',
        serves: '8'
      },
      {        
        title: 'Frittata',
        tags: ['lunch', 'dinner', 'vegetarian', 'frittata', 'vegetarian'],
        imageUrl: '/assets/images/frittata.png',
        cookTime: '1 hr',
        serves: '4'
      },
      {        
        title: 'Khao Soi',
        tags: ['lunch', 'dinner', 'khao soi'],
        imageUrl: '/assets/images/khaoSoi.png',
        cookTime: '35 min',
        serves: '4'
      },
      {        
        title: 'Thai Fishcakes',
        tags: ['lunch', 'dinner', 'thai fishcakes'],
        imageUrl: '/assets/images/thaiFishcakes.png',
        cookTime: '35 min',
        serves: '2'
      },
      {
        title: 'Tofu Wontons',
        tags: ['lunch', 'dinner', 'tofu wontons', 'vegetarian'],
        imageUrl: '/assets/images/tofuWontons.png',
        cookTime: '50 min',
        serves: '4'
      },
      {
        title: 'Ramen Chicken',
        tags: ['lunch', 'dinner', 'ramen chicken'],
        imageUrl: '/assets/images/ramenChicken.png',
        cookTime: '45 min', 
        serves: '4'
      },
      {
        title: 'Mongolian Beef',
        tags: ['dinner', 'mongolian beef'],
        imageUrl: '/assets/images/mongolianBeef.png',
        cookTime: '45 min',
        serves: '4'
      },
      {
        title: 'Spicy Dry Beef',
        tags: ['dinner', 'spicy dry beef'],
        imageUrl: '/assets/images/spicyDry.jpg',
        cookTime: '1-2 hrs',
        serves: '4'
      },
      {
        title: 'Veggie Bowl',
        tags: ['dinner', 'veggie bowl', 'vegetarian'],
        imageUrl: '/assets/images/veggieBowl.jpg',
        cookTime: '1 hr',
        serves: '2'
      },
      {
        title: 'Morrocan Chickpea',
        tags: ['lunch', 'dinner', 'morrocan chickpea salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/morrocanChickpea.png',
        cookTime: '1 hr',
        serves: '4'
      },
      {
        title: 'Zucchini Fritters',
        tags: ['lunch', 'breakfast', 'dinner', 'zucchini fritters', 'vegetarian'],
        imageUrl: '/assets/images/zucchiniFritters.png',
        cookTime: '35 min',
        serves: '2'
      },
      {
        title: 'Summer Chickpea',
        tags: ['lunch', 'dinner', 'chickpea salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/summerChickpea.png',
        cookTime: '1 hr',
        serves: '2'
      },
      {
        title: 'Vietnamese Noodle',
        tags: ['dinner','lunch', 'vietnamese noodle salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/vietnameseNoodle.jpg',
        cookTime: '30 min',
        serves: '2'
      },
      {
        title: 'Waldorf Salad',
        tags: ['dinner', 'lunch', 'salad', 'waldorf salad', 'vegetarian'],
        imageUrl: '/assets/images/waldorf.png',
        cookTime: '20 min',
        serves: '2'
      },
      {
        title: 'Peanut Soba',
        tags: ['dinner', 'lunch', 'salad', 'peanut soba', 'vegetarian'],
        imageUrl: '/assets/images/peanutSoba.png',
        cookTime: '25 min',
        serves: ''
      },
      {
        title: 'Ottolenghi Carrot',
        tags: ['dinner', 'ottolenghi carrot', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/roastedCarrots.png',
        cookTime: '1 hr 10 mins',
        serves: '4'
      },
      {
        title: 'White Bean Salad',
        tags: ['dinner', 'white bean salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/whiteBeanSalad.png',
        cookTime: '15 mins',
        serves: '2'
      },
      {
        title: 'Black Bean Brownie',
        tags: ['dessert', 'black bean brownie'],
        imageUrl: '/assets/images/brownie.png',
        cookTime: '40 mins',
        serves: '8'
      },
      {
        title: 'Coconut Cake',
        tags: ['dessert', 'coconut cake'],
        imageUrl: '/assets/images/coconutCake.jpg',
        cookTime: '35 mins',
        serves: '8'
      },
    ]
  }
}


/*
Template
      {
        title: 
        tags: ['dinner'],
        imageUrl: '/assets/images/'
        cookTime: 
      },serves: ''
*/