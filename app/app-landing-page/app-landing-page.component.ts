import { Component, Input, OnInit } from '@angular/core';
import { MobileApp } from '../mobile-app';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-landing-page',
  templateUrl: './app-landing-page.component.html',
  styleUrls: ['./app-landing-page.component.css']
})
export class AppLandingPageComponent implements OnInit {
  mobileApp: MobileApp;
  constructor() { }

  ngOnInit() {
    this.mobileApp = BBAPP
  }

}

 export const BBAPP: MobileApp = {
   title: 'Baby Badge',
	 short: 'babybadge',
	 time: '2016',
   overview: "Age badges to mark every age milestone of your little one!", 
	 detail: "Babies grow up fast!  Capture every step with a Baby Badge.  Don't spend $10+ for 12 paper baby stickers when you can create hundreds of combinations for any day, week, month or year milestone for free with Baby Badge.",
	 image: [{ss: "assets/img/bb/website1.jpg"}, {ss: "assets/img/bb/website2.jpg"}, {ss: "assets/img/bb/website3.jpg"}, {ss: "assets/img/bb/website4.jpg"}],
	 icon: "assets/img/bb/appIcon2_3x180.png",
	 link: "https://itunes.apple.com/us/app/baby-badge/id1097938477?mt=8"
	}
