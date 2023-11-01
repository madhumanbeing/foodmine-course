import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CalenderFormComponent } from '../calender-form/calender-form.component';
import { CalenderComponent } from '../calender/calender.component';
import { CalenderService } from '../services/calender/calender.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  selectedDay: string = '';

  @ViewChild(CalenderComponent) calenderComponent!: CalenderComponent;

  constructor (private activatedRoute:ActivatedRoute, private foodService: FoodService, private calenderService: CalenderService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['title'])
      this.food = foodService.getFoodByTitle(params['title']);
    })
  }

  selectDay(selectedDay: string) {
    this.selectedDay = selectedDay;
  }

  ngOnInit(): void {
    
  }

  
}

