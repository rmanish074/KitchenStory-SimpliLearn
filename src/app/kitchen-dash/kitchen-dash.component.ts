import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { StarRatingComponent} from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kitchen-dash',
  templateUrl: './kitchen-dash.component.html',
  styleUrls: ['./kitchen-dash.component.css']
})
export class KitchenDashComponent implements OnInit {

  foods:Foods[]=[]

  constructor(private fs:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(params =>{

      if(params['searchItem'])
      this.foods = this.fs.getAll().filter(food =>food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
      else if(params['tag'])
      this.foods= this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods=this.fs.getAll();
    })

    
  }

}
