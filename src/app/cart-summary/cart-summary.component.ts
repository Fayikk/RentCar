import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/catItem';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]=[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems=this.cartService.list();
  }
}
