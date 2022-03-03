import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stospare-parts',
  templateUrl: './stospare-parts.component.html',
  styleUrls: ['./stospare-parts.component.scss']
})
export class STOSparePartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {slNo:1,itemNo:"EAS10002", itemName:"A/C FITER", totalQty:150, surplusQty:150, requiredQty:10,},
    {slNo:1,itemNo:"EAS10005", itemName:"ALTARNATOR", totalQty:120, surplusQty:120, requiredQty:0,},
  ]

}
