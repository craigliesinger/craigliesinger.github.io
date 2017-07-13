import { Component, OnInit } from '@angular/core';
import { Hack } from '../hack';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hacks',
  templateUrl: './hacks.component.html',
  styleUrls: ['./hacks.component.css']
})
export class HacksComponent implements OnInit {
  hacks: Hack[];
  constructor(private dataService: DataService) { }
  getHacks(): void {
    this.hacks = this.dataService.getHack();
  }
  ngOnInit(): void {
    this.getHacks();
  }

}
