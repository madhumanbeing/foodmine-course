import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAll().filter(food => {
          return food.tags.some(tag => tag.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        });
      } else {
        this.foods = this.foodService.getAll();
      }

      this.shuffleFoods();
    });
  }

  shuffleFoods() {
    for (let i = this.foods.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.foods[i], this.foods[j]] = [this.foods[j], this.foods[i]];
    }
  }
}
