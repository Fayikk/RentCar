import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/catItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.carId===car.carId);//item caritems içerisinde varmı sorgusunu yapmaktadır.
    if (item) {
      item.quantity +=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car=car;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }
  list():CartItem[]{
    return CartItems;
  }
  // removeFromCart(product:Product){
  //   let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
  //   CartItems.splice(CartItems.indexOf(item),1);//splice belirli indeksten itibaren silme işlemini yapmaktadır.
    
  // }
}
