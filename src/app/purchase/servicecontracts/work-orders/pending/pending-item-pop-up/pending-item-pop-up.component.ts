import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pending-item-pop-up',
  templateUrl: './pending-item-pop-up.component.html',
  styleUrls: ['./pending-item-pop-up.component.scss']
})
export class PendingItemPopUpComponent implements OnInit {


  ngOnInit() { } 

  items = [ 
  {gst:"12%",uom:"sqmt",jname:"Repair of Machinery",Ddate:"21-07-2021",Category:"Hand Tools",Naam: "Reinforcement Steel", co: "FMX480",Amount: "2500", Price: "10,000",AvailQty:"70",ReqRef: "OM/IN/SPA-FEB-19/1057	",Qty:"120 Ton",  IName : "Reinforcement Steel", ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",DeliveryDate:"21-07-2021",unitprice:"200" }, 
  {gst:"5%", uom:"sqmt",jname:"Repair of Machinery",Ddate:"21-07-2021",Category:"Back Hoe Loader",Naam: "Electrical Wire(14-Gauge)",co: "D85ESS 17	",Amount: "12,000",Price: "12",AvailQty:"20",ReqRef: "OM/IN/SPA-JUNE-19/3212	",Qty:"30M",IName:"Electric Wire(14-Gauge)	", ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",DeliveryDate:"16-10-2021",unitprice:"300"},
  {gst:"18%",uom:"sqmt",jname:"Repair of Machinery",Ddate:"22-07-2021",Category:"Heavy Equipment",Naam: "Electrical Wire(14-Gauge)",co: "D85ESS 18	",Amount: "7,000",Price: "13",AvailQty:"40",ReqRef: "OM/IN/SPA-JUNE-19/3202	",Qty:"40M",IName:"Electric Wire(14-Gauge)	", ItemCode: "ACTROS 6841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1076",RequiredQty:"50",DeliveryDate:"16-10-2021",unitprice:"350"},
  {gst:"28%",uom:"sqmt",jname:"Repair of Machinery",Ddate:"23-07-2021",Category:" Hand Tools",Naam: "Electrical Wire(14-Gauge)",co: "D85ESS 15	",Amount: "8,000",Price: "27",AvailQty:"57",ReqRef: "OM/IN/SPA-JUNE-19/2212	",Qty:"10M",IName:"Electric Wire(14-Gauge)	", ItemCode: "ACTROS 4842K",RequisitionRef: "OM/REQ/SPA/FEB-21/1067",RequiredQty:"35",DeliveryDate:"17-10-2021",unitprice:"320"},
  {gst:"12%",uom:"sqmt",jname:"Repair of Machinery",Ddate:"24-07-2021",Category:"Bulldozer",Naam: "Electrical Wire(14-Gauge)",co: "D85ESS 13	",Amount: "17,000",Price: "32",AvailQty:"17",ReqRef: "OM/IN/SPA-JUNE-19/3292	",Qty:"12M",IName:"Electric Wire(14-Gauge)	", ItemCode: "ACTROS 5841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1097",RequiredQty:"40",DeliveryDate:"19-10-2021",unitprice:"360"},
  
  ] 

}