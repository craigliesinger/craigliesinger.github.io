import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { DataService } from '../data.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools: School[];
  constructor(private dataService: DataService) { }
  getSchools(): void {
    this.schools = this.dataService.getSchool();
  }
  ngOnInit(): void {
    this.getSchools();
  }

}
