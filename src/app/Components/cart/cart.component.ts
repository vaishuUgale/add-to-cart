import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  public products: any= [];
  public grandTotal !: number;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
      this.cartService.getProducts().subscribe(e =>{
        this.products = e;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
