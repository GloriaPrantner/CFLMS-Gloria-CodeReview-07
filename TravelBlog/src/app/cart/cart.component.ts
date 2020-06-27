import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items;
	sum: number = 0;
	newSum: number = 0;
	printIt;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
	this.items = this.cartService.getItems();

	for(let j of this.items){
		this.sum += j.price;
  	}

  	if(this.sum >= 5000){
  		this.newSum = this.sum * 0.8
  		this.printIt = `Your escape will cost ${this.sum}. You get 20% Discount. So you pay only ${this.newSum} €.`
  	}
  	else if(this.sum >= 2000) {
  		this.newSum = this.sum * 0.9
  		this.printIt = `Your escape will cost ${this.sum}. You get 10% Discount. So you pay only ${this.newSum} €.`
  	}
  	else {
  		this.newSum = this.sum
  		this.printIt = `Your escape will cost ${this.sum}.`
  	}

  }

}
