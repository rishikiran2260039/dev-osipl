import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item-po',
  templateUrl: './view-item-po.component.html',
  styleUrls: ['./view-item-po.component.scss']
})
export class ViewItemPOComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {slNo:1, part:"T154289", make:"Tata Hitachi", name:"BUSHING", avail:"Tata Hitachi", type:"Non FOC", qty:"999"},
    {slNo:2, part:"TE23949", make:"Tata Hitachi", name:"HOSE",avail:"Tata Hitachi",  type:"Non FOC", qty:"1023"},
    {slNo:3, part:"TE24010", make:"Tata Hitachi", name:"HOSE", avail:"Tata Hitachi",  type:"Non FOC", qty:"856"},
  ];

  items2 = [
    {date:"03/11/19 7:32:47 PM",stage:"Requisitions",status:"Submitted",user:"Super Admin",remarks:"Test Store"},
    {date:"06/24/19 5:01:46 PM",stage:"Requisitions",status:"Submitted",user:"Super Admin",remarks:"Test"},
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
