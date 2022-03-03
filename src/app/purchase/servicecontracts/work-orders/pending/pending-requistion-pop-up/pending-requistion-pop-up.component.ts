import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pending-requistion-pop-up',
  templateUrl: './pending-requistion-pop-up.component.html',
  styleUrls: ['./pending-requistion-pop-up.component.scss']
})
export class PendingRequistionPopUpComponent implements OnInit {

  constructor(public dialog:MatDialogRef<PendingRequistionPopUpComponent>) { } 
  ngOnInit() { } 
  
  items = [ 
  {Ddate:"21-07-2021",Labour: "OM/REQ/SPA-FEB-19/1057",Amount: "1200", Rate:"35",      Hours: "8",Qty: "4",      JobCode: "6",  Value:40000, ItemName : "Volvo", ReqValues: 6, ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",RequiredBy:"21-07-2021" }, 
  {Ddate:"24-07-2021",Labour: "OM/REQ/SPA/APR-20/1005",Amount: "300",Rate:"90",Hours: "6",Qty: "1",JobCode: "8", Value:10000, ItemName : "Mercedes", ReqValues: 12, ItemCode: "All Models",RequisitionRef: "OM/REQ/SPA-FEB-19/1041",RequiredQty:"20",RequiredBy:"12-09-2021" }, 
  {Ddate:"12-07-2021",Labour: "OM/REQ/SPA-FEB-19/1041",Amount: "500",Rate:"85",    Hours: "9",Qty: "1",    JobCode: "12",Value:2500, ItemName : "Tata ", ReqValues: 12, ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",RequiredBy:"16-10-2021"}, 
 ] 
  close(){ this.dialog.close(); } }
