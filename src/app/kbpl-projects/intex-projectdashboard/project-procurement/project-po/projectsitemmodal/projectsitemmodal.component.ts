import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-projectsitemmodal',
  templateUrl: './projectsitemmodal.component.html',
  styleUrls: ['./projectsitemmodal.component.scss']
})
export class ProjectsitemmodalComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ProjectsitemmodalComponent>) { }

  ngOnInit() {
  }
  
  items = [
    {AvailQty:"70",OrderQty: "30",ReqRef: "OM/REQ/SPA-FEB-19/1057	",Qty:10,  ItemName : "Volvo", ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",DeliveryDate:"21-07-2021",unitprice:"200" },
    {AvailQty:"80",OrderQty: "30",ReqRef: "OM/REQ/SPA-APR-19/1213	",Qty:40, ItemName : "Caterpillar", ItemCode: " D85ESS 17",RequisitionRef: "OM/REQ/SPA/APR-20/1005",RequiredQty:"80",DeliveryDate:"24-08-2021",unitprice:"300" },
    {AvailQty:"60",OrderQty: "20",ReqRef: "OM/REQ/SPA-MAY-19/1902	",Qty:30, ItemName : "Mercedes", ItemCode: "All Models",RequisitionRef: "OM/REQ/SPA-FEB-19/1041",RequiredQty:"20",DeliveryDate:"12-09-2021",unitprice:"400" },
    {AvailQty:"20",OrderQty: "40",ReqRef: "OM/REQ/SPA-JUNE-19/3212	",Qty:10, ItemName : "Tata ", ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",DeliveryDate:"16-10-2021",unitprice:"300"},
    {AvailQty:"30",OrderQty: "60",ReqRef: "OM/REQ/SPA-SEP-19/1343	",Qty:50, ItemName : "Volvo", ItemCode: "D85ESS 86",RequisitionRef: "OM/REQ/SPA/MAR-21/1086",RequiredQty:"50",DeliveryDate:"13-12-2021",unitprice:"200"},
  ]

  close(){
    this.dialog.close();
  }


}