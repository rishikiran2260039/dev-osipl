import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-projectsreqmodal',
  templateUrl: './projectsreqmodal.component.html',
  styleUrls: ['./projectsreqmodal.component.scss']
})
export class ProjectsreqmodalComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ProjectsreqmodalComponent>) { }

  ngOnInit() {
  }
  
  items = [
    {Value:40000, ItemName : "Volvo", ReqValues: 6, ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",RequiredBy:"21-07-2021" },
    {Value:40000, ItemName : "Caterpillar", ReqValues: 8, ItemCode: " D85ESS 17",RequisitionRef: "OM/REQ/SPA/APR-20/1005",RequiredQty:"80",RequiredBy:"24-08-2021" },
    {Value:10000, ItemName : "Mercedes", ReqValues: 12, ItemCode: "All Models",RequisitionRef: "OM/REQ/SPA-FEB-19/1041",RequiredQty:"20",RequiredBy:"12-09-2021" },
    {Value:2500, ItemName : "Tata ", ReqValues: 12, ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",RequiredBy:"16-10-2021"},
    {Value:2500, ItemName : "Volvo", ReqValues: 4, ItemCode: "D85ESS 86",RequisitionRef: "OM/REQ/SPA/MAR-21/1086",RequiredQty:"50",RequiredBy:"13-12-2021"},
  ]

  close(){
    this.dialog.close();
  }


}
