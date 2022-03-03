import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  items = [
    {PartNumberz: "AS78A",Action: "Edit Delete",  PartNamez: "DC Battery",         Serialnumber:"LK234567890SD" ,AvailQty:"70",OrderQty: "30",ReqRef: "OM/REQ/SPA-FEB-19/1057	",Qty:10,  ItemName : "Volvo", ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",DeliveryDate:"21-07-2021",unitprice:"200" },
    {PartNumberz: "CM342",Action: "Edit Delete",  PartNamez: "AC Battery",         Serialnumber:"OE012567890SD" ,AvailQty:"80",OrderQty: "30",ReqRef: "OM/REQ/SPA-APR-19/1213	",Qty:40, ItemName : "Caterpillar", ItemCode: " D85ESS 17",RequisitionRef: "OM/REQ/SPA/APR-20/1005",RequiredQty:"80",DeliveryDate:"24-08-2021",unitprice:"300" },
    {PartNumberz: "LM34A",Action: "Edit Delete",  PartNamez: "Inverter Battery",   Serialnumber:"MN454567890SD" ,AvailQty:"60",OrderQty: "20",ReqRef: "OM/REQ/SPA-MAY-19/1902	",Qty:30, ItemName : "Mercedes", ItemCode: "All Models",RequisitionRef: "OM/REQ/SPA-FEB-19/1041",RequiredQty:"20",DeliveryDate:"12-09-2021",unitprice:"400" },
    {PartNumberz: "NEO34",Action: "Edit Delete",  PartNamez: "Transformer Battery",Serialnumber:"KY289567890SD" ,AvailQty:"20",OrderQty: "40",ReqRef: "OM/REQ/SPA-JUNE-19/3212	",Qty:10, ItemName : "Tata ", ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",DeliveryDate:"16-10-2021",unitprice:"300"},
  ]

}
