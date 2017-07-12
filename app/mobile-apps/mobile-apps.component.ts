import { Component, OnInit } from '@angular/core';
import { MobileApp } from '../mobile-app';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobile-apps',
  templateUrl: './mobile-apps.component.html',
  styleUrls: ['./mobile-apps.component.css']
})
export class MobileAppsComponent implements OnInit {
  mobileApps: MobileApp[];
  constructor(private dataService: DataService) { }
  getMobileApps(): void {
    this.mobileApps = this.dataService.getMobileApp();
  }
  ngOnInit(): void {
    this.getMobileApps();
  }


}
