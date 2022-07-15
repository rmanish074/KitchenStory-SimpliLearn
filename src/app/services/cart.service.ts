import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { CartItem } from '../shared/model/cartitem';
import { Foods } from '../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart= new Cart();

  addToCart(food:Foods) :void{
    let cartItem = this.cart.item.find(item => item.food.id === food.id)
    if (cartItem){
      this.changeQuantity(food.id , cartItem.quantity +1)
      return;
    }
    this.cart.item.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void{

    this.cart.item = this.cart.item.filter(item => item.food.id != foodId)
  }
  changeQuantity(quantity:number, foodId:number){

    let cartItem = this.cart.item.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    
  }

  getCart():Cart{
    return this.cart
  }

}
