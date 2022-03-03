import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {slNo:1, status:"Success", partno:"14X-03-11215", partName:"RADIATOR ASSY", eqpModel:	"	D85ESS", loc:0, uom:"No.", avail:0, req:25, pref:"Mercedes Benz"},
    {slNo:1, status:"Success", partno:"14X-03-11215", partName:"RADIATOR ASSY", eqpModel:	"	D85ESS", loc:0, uom:"No.", avail:0, req:25, pref:"Mercedes Benz"},
    {slNo:1, status:"Success", partno:"14X-03-11215", partName:"RADIATOR ASSY", eqpModel:	"	D85ESS", loc:0, uom:"No.", avail:0, req:25, pref:"Mercedes Benz"},
  ];

  items2 = [
    {date:"03/11/19 7:32:47 PM",stage:"Requisitions",status:"Submitted",user:"Super Admin",remarks:"Test Store"},
    {date:"06/24/19 5:01:46 PM",stage:"Requisitions",status:"Submitted",user:"Super Admin",remarks:"Added 4 Items"},
  ];

  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]

}

