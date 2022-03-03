import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }

  items=[
    {name:'Quote',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Administration',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Research',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Field',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Drafting',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Quality Control',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Management',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Calculations',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    {name:'Expenses',awardDate:'-',awardBy:'-',close:'-',quoted:'$0.00',awarded:'-',actual:'$0.00',profit:'$0.00',invoiced:'-',invoice:'-'},
    
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

}
