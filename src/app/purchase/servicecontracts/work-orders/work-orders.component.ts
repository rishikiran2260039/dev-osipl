import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddworkordersDialogComponent } from './addworkorders-dialog/addworkorders-dialog.component';
import { WorkOrderItemComponent } from './work-order-item/work-order-item.component';
import { WorkOrderRequistionComponent } from './work-order-requistion/work-order-requistion.component';
import { WorkinfoDialogComponent } from './workinfo-dialog/workinfo-dialog.component';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit {
 

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  filterToggle=false;
  items = [
    {Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "6",update:"Update"},
    {Amount:"113000", poref: "OM/BHL/OCT/19-20/1078", Name:"HBVC Systems"    , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "8",update:"Update"},
    {Amount:"78000", poref: "OM/BHL/OCT/19-20/1079", Name:"ABC Contractors" ,podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "8",update:"Update"},
    {Amount:"29000", poref: "OM/BHL/OCT/19-20/1080", Name:"HBVC Systems"    ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "4", items: "5",update:"Update"},
    {Amount:"81000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractors" ,podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "6",update:"Update"},
    
  ];

  requsitionpop(){

    
  }    
  itemspop(){
    
  }    

}