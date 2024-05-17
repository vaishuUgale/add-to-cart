import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../service/api.service'
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public productList:any

constructor(private products:ApiService, private cartService: CartService){}

ngOnInit(): void {
  this.products.productsData()
  .subscribe((e)=>{
    this.productList=e;
    // console.log(this.productList);

    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    });
  })
}

 
  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

}
