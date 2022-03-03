import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-schedule',
  templateUrl: './action-schedule.component.html',
  styleUrls: ['./action-schedule.component.scss']
})
export class ActionScheduleComponent implements OnInit {

  constructor() { }

  filterToggle: boolean = false;
  filterState: any;


  ngOnInit() {
  }

  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

}
