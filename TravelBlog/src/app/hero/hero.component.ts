import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	heroHeading: string;

  heroText: string;

 heroBtnText : string;

 heroBtnUrl:   string ;
  constructor() { }

  ngOnInit(): void {
  }

}
