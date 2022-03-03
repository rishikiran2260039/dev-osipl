import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-unbilled',
  templateUrl: './new-unbilled.component.html',
  styleUrls: ['./new-unbilled.component.scss']
})
export class NewUnbilledComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}
