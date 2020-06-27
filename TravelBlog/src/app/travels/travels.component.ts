import { Component, OnInit } from '@angular/core';
import { travels } from '../travels';
import { CartService } from '../cart.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
	travels = travels;

	
  constructor(private cartService: CartService) { }

  addToCart(x) {
	  this.cartService.addToCart(x)
    Swal.fire(
      'Added to cart!',
    )
  }

  ngOnInit(): void {
  }

}
