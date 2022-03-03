import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-indent-published',
  templateUrl: './indent-published.component.html',
  styleUrls: ['./indent-published.component.scss']
})
export class IndentPublishedComponent implements OnInit {

  constructor(public dialog:MatDialogRef<IndentPublishedComponent>) { }

  ngOnInit() {
  }
  
  items = [
    {rate:4000,price:"20000", ItemName : "Volvo", Qty: 6, ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",RequiredBy:"21-07-2021" },
    {rate:4000,price:"30000", ItemName : "Caterpillar", Qty: 8, ItemCode: " D85ESS 17",RequisitionRef: "OM/REQ/SPA/APR-20/1005",RequiredQty:"80",RequiredBy:"24-08-2021" },
    {rate:1000,price:"40000", ItemName : "Mercedes", Qty: 12, ItemCode: "All Models",RequisitionRef: "OM/REQ/SPA-FEB-19/1041",RequiredQty:"20",RequiredBy:"12-09-2021" },
    {rate:2500,price:"50000", ItemName : "Tata ", Qty: 12, ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",RequiredBy:"16-10-2021"},
    {rate:2500,price:"60000", ItemName : "Volvo", Qty: 4, ItemCode: "D85ESS 86",RequisitionRef: "OM/REQ/SPA/MAR-21/1086",RequiredQty:"50",RequiredBy:"13-12-2021"},
  ]

  close(){
    this.dialog.close();
  }


}
