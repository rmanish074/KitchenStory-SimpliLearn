import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food'; 
import { Tag } from 'src/app/shared/model/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id ==id)!;

  }

  getAllFoodByTag(tag:string): Foods[]{



    if (tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=> food.tags?.includes(tag));

    //you can write this statement is very simple type 

  }

  getAllTag():Tag[]{

    return[
      {name: 'All', count:8},
      {name: 'FastFood', count:2},
      {name: 'Pizza', count:1},
      {name: 'Lunch', count:2},
      {name: 'Dessert', count:2},
      {name: 'Starter', count:1},
      {name: 'Breakfast', count:1}
    ]
  }

  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'Dal Tadka',
        deliverTime: '20',
        price: 20,
        favorite: false,
        origin:['India', 'asia'],
        star:4.0,
        imageUrl:'/assets/food1.jpg',
        tags: ['Lunch', 'Dinner']
        
      },

      {
        id: 2,
        name: 'Chicken Kabab',
        deliverTime: '25',
        price: 50,
        favorite: false,
        origin:['India', 'asia', 'World'],
        star:3.0,
        imageUrl:'/assets/food2.jpg',
        tags: ['Starter']
        
      },
      {
        id: 3,
        name: 'Cake',
        deliverTime: '10',
        price: 40,
        favorite: false,
        origin:['India', 'asia'],
        star:4.5,
        imageUrl:'/assets/food3.jpg',
        tags: ['Dessert']
        
      },
      {
        id: 4,
        name: 'IceCream',
        deliverTime: '10',
        price: 65,
        favorite: false,
        origin:['India', 'asia', 'World'],
        star:3.0,
        imageUrl:'/assets/food4.jpg',
        tags: ['Dessert']
        
      },
      {
        id: 5,
        name: 'Oatmeal',
        deliverTime: '30',
        price: 110,
        favorite: false,
        origin:['India', 'asia'],
        star:5.0,
        imageUrl:'/assets/food5.jpg',
        tags: ['Breakfast']
        
      },
      {
        id: 6,
        name: 'Chole Chawal',
        deliverTime: '10-25',
        price: 70,
        favorite: false,
        origin:['India', 'asia'],
        star:3.0,
        imageUrl:'/assets/food6.jpg',
        tags: ['Dinner', 'Lunch']
        
      },
      {
        id: 7,
        name: 'Egg Pizza',
        deliverTime: '35',
        price: 150,
        favorite: false,
        origin:['India', 'asia'],
        star:3.0,
        imageUrl:'/assets/food7.jpg',
        tags: ['FastFood', 'Pizza' ]
        
      },
      {
        id: 8,
        name: 'Burger',
        deliverTime: '25',
        price: 85,
        favorite: false,
        origin:['India', 'Russia'],
        star:4.5,
        imageUrl:'/assets/food8.jpg',
        tags: ['FastFood',]
        
      }

    ];
  }
}
