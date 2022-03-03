import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddServiceChallanComponent } from 'src/app/purchase/servicecontracts/service-challans/add-service-challan/add-service-challan.component';
import { AddChallansComponent } from './add-challans/add-challans.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { PartsComponent } from './parts/parts.component';

@Component({
  selector: 'app-project-servicechallans',
  templateUrl: './project-servicechallans.component.html',
  styleUrls: ['./project-servicechallans.component.scss']
})
export class ProjectServicechallansComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  filterToggle = false;
  ngOnInit() {
  }

  items = [
    {Equipment: "10", Parts: "12", Description: " Goods Being Supplied on Approval", "challan": "SC/OM/JUL-21-22/001", "vendor": "WO-019", "ReleaseDate": "16-05-2021",
     "wOrder": "01-09-2022", 
     "VendorName": "TATA HITACHI", "remarks": "Need to Release the invoice immediately", "cat": 2},
   
     {Equipment: "12",Parts: "14",Description: "  Goods Being Transported for Job Work", "challan": "SC/OM/JUL-21-22/002", "vendor": "WO-051", "ReleaseDate": "26-08-2021",
     "wOrder": "03-12-2022", 
     "VendorName": "CaterPillar", "remarks": "Need to Procure the invoice immediately", "cat": 1},
    
     {Equipment: "13",Parts: "14",Description: " Transportation of goods from one Warehouse to another Warehouse of the supplier ", "challan": "SC/OM/JUL-21-22/002", "vendor": "WO-079", "ReleaseDate": "29-09-2021",
     "wOrder": "13-11-2022", 
     "VendorName": "CaterPillar", "remarks": "Need to Acquire the invoice immediately", "cat": 3},
    
     {Equipment: "15",Parts: "16",Description: " Goods Supply. Supply of Cement and Iron, Where the quantity of supply from place of supplier is not known at the time of Supply  ", "challan": "SC/OM/JUL-21-22/002", "vendor": "WO-786", "ReleaseDate": "06-11-2021",
     "wOrder": "27-08-2022", 
     "VendorName": "CaterPillar", "remarks": "Need to Release the invoice immediately", "cat": 4},
  ];

  ServicesPop(){
    this.dialog.open(AddChallansComponent,{
      height:'auto',
      width:'700px'
    })
  
  }
  ItemServicePopUp(){
    this.dialog.open(PartsComponent,{
      height:'auto',
      width:'1100px'
    })

  }
  ItemEquipmentPopUp(){
    this.dialog.open(EquipmentComponent,{
      height:'auto',
      width:'1100px'
    })

  }
  NotesPop(){
  //   this.dialog.open(NotesPopupComponent,{
  //     height:'auto',
  //     width:'1100px'
  //   })

  }


  addService(item){
    this.dialog.open(AddChallansComponent, {
      data:item,
      width: "700px", 
      height: "auto"
    });
  }

}
