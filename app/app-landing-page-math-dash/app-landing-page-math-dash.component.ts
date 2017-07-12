import { Component, OnInit } from '@angular/core';
import { MobileApp } from '../mobile-app';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-landing-page-math-dash',
  templateUrl: './app-landing-page-math-dash.component.html',
  styleUrls: ['./app-landing-page-math-dash.component.css']
})
export class AppLandingPageMathDashComponent implements OnInit {
  mobileApp: MobileApp;
  constructor() { }

  ngOnInit() {
    this.mobileApp = MEAPP
  }

}

 export const MEAPP: MobileApp = {
   title: 'Math Espresso',
	 short: 'mathespresso',
	 time: '2015',
  overview: "A game to awaken your brain by solving basic math problems as quickly as possible.", 
	 detail: "Wake up your brain with a shot of Math Espresso!  See how quickly you can correctly answer addition, subtraction, multiplication and division questions.",
	 image: [{ss: "/assets/img/md/website1_updated.jpg"}, {ss: "/assets/img/md/website2_updated.jpg"}, {ss: "/assets/img/md/website3_updated.jpg"}],
	 icon: "/assets/img/md/iTunesArtwork@2x.png",
	 link: "https://itunes.apple.com/vn/app/math-espresso/id972446911?mt=8"
	 }
