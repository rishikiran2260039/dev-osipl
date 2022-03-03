import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [{reference:"OM/BHL/OCT/19-20/1077",item_name:"Tambour Cupbards",item_code:"FMX480",order_qty:"46",ship_qty:"40"},
  {reference:"OM/BHL/OCT/19-20/1078",item_name:"Planter Boxes",item_code:"D85ESS 17",order_qty:"60",ship_qty:"60"},
  {reference:"OM/BHL/OCT/19-20/1079",item_name:"Arificial Plants",item_code:"ACTROS 4841K",order_qty:"125",ship_qty:"100"},
  {reference:"OM/BHL/OCT/19-20/1080",item_name:"Filling Cabinet",item_code:"D85ESS 86",order_qty:"83",ship_qty:"83"},
  {reference:"OM/BHL/OCT/19-20/1082",item_name:"Metal Lockers",item_code:"MELO98",order_qty:"91",ship_qty:"80"}]
}
