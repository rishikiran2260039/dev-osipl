import { Component, OnInit } from '@angular/core';
import { ProjectstpmodalComponent } from '../projectstpmodal/projectstpmodal.component';
import { MatDialog } from '@angular/material';
import { ProjectsreqmodalComponent } from '../projectsreqmodal/projectsreqmodal.component';
import { ProjectsitemmodalComponent } from '../projectsitemmodal/projectsitemmodal.component';

@Component({
  selector: 'app-po-pending',
  templateUrl: './po-pending.component.html',
  styleUrls: ['./po-pending.component.scss']
})
export class PoPendingComponent implements OnInit {
  constructor(public dialog:MatDialog) { }

  filterToggle=false;
  items = [
    {Terms: "10", Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "6",update:"12"},
    {Terms: "12", Amount:"113000", poref: "OM/BHL/OCT/19-20/1078", Name:"HBVC Systems"    , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "8",update:"20"},
    {Terms: "16", Amount:"78000", poref: "OM/BHL/OCT/19-20/1079", Name:"ABC Contractors" ,podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "8",update:"18"},
    {Terms: "18", Amount:"29000", poref: "OM/BHL/OCT/19-20/1080", Name:"HBVC Systems"    ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "4", items: "5",update:"19"},
    {Terms: "19", Amount:"81000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractors" ,podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "6",update:"24"},
    
  ];
  TermsUnPublishPop(){
    this.dialog.open(ProjectstpmodalComponent,{
      height:'auto',
      width:'700px',
    });

  }
  requsitionpop(){
    this.dialog.open(ProjectsreqmodalComponent ,{
      height:'auto',
      width:'1000px'
    });
  }    
  itemspop(){
    this.dialog.open(ProjectsitemmodalComponent,{
      height:'auto',
      width:'1000px'
    });
  }    

ngOnInit(){
  
}








}
