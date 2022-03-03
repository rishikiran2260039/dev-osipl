import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-scheduling-screen',
  templateUrl: './contract-scheduling-screen.component.html',
  styleUrls: ['./contract-scheduling-screen.component.scss']
})
export class ContractSchedulingScreenComponent implements OnInit {

  tabNumber: number = 1;

  constructor() { }

  ngOnInit() {
  }

  navigatePage(value) {
    this.tabNumber = value;
  }

}
