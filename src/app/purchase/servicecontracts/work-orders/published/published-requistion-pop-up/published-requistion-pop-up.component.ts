import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-published-requistion-pop-up',
  templateUrl: './published-requistion-pop-up.component.html',
  styleUrls: ['./published-requistion-pop-up.component.scss']
})
export class PublishedRequistionPopUpComponent implements OnInit {

  constructor(public dialog:MatDialogRef<PublishedRequistionPopUpComponent>) { } 
  ngOnInit() { } 

  items = [ 
    {Labour: "Laborers",Amount: "1200", Rate:"35",      Hours: "8",Qty: "4",      JobCode: "LB-01",  Value:40000, ItemName : "Volvo", ReqValues: 6, ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",RequiredBy:"21-07-2021" }, 
    {Labour: "Site-Supervisor",Amount: "300",Rate:"90",Hours: "6",Qty: "1",JobCode: "SS-0190", Value:10000, ItemName : "Mercedes", ReqValues: 12, ItemCode: "All Models",RequisitionRef: "OM/REQ/SPA-FEB-19/1041",RequiredQty:"20",RequiredBy:"12-09-2021" }, 
    {Labour: "Electrician",Amount: "500",Rate:"85",    Hours: "9",Qty: "1",    JobCode: "EL-010",Value:2500, ItemName : "Tata ", ReqValues: 12, ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",RequiredBy:"16-10-2021"}, 
   ]   
   close(){ this.dialog.close(); } }