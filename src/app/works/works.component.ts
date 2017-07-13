import { Component, OnInit } from '@angular/core';
import { Work } from '../work';
import { DataService } from '../data.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  jobs: Work[];
  constructor(private dataService: DataService) { }
  getWorks(): void {
    this.jobs = this.dataService.getWork();
  }
  ngOnInit(): void {
    this.getWorks();
  }

}
