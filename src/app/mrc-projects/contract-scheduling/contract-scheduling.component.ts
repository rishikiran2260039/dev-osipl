import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-scheduling',
  templateUrl: './contract-scheduling.component.html',
  styleUrls: ['./contract-scheduling.component.scss']
})
export class ContractSchedulingComponent implements OnInit {
  filterToggle: boolean;
  tabNumber: number = 1;

  constructor() { }

  ngOnInit() {
  }

  navigatePage(value) {
    this.tabNumber = value;
  }

}
