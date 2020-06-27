import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	items = [];
  constructor() { }


	addToCart(x) {
		this.items.push(x);
	}

	getItems() {
	   return this.items;
	}

	clearCart() {
	   this.items = [];
	   return this.items;
	}

}