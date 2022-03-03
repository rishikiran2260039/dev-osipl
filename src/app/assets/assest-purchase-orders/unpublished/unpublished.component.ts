import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import {Location} from '@angular/common';
import { IndentUnpublishedComponent } from './indent-unpublished/indent-unpublished.component';

// import { TermsPurchaseOrdersPopUpComponent } from './terms-purchase-orders-pop-up/terms-purchase-orders-pop-up.component';

@Component({
  selector: 'app-unpublished',
  templateUrl: './unpublished.component.html',
  styleUrls: ['./unpublished.component.scss']
})
export class UnpublishedComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog:MatDialog,private _location: Location) { }

  ngOnInit() {
  }
  filterToggle=false;
  items = [
    {gst:"12%",status:"Add",projectcode:"G505KA10012",Terms: "10", Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "2", items: "0",update:"12"},
    {gst:"5%", status:"View",projectcode:"H905KA10012",Terms: "12", Amount:"113000", poref: "OM/BHL/OCT/19-20/1078", Name:"HBVC Systems"    , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "11",update:"20"},
    {gst:"18%",status:"View",projectcode:"T05K1A10012",Terms: "16", Amount:"78000", poref: "OM/BHL/OCT/19-20/1079", Name:"ABC Contractors" ,podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "2", items: "0",update:"18"},
    {gst:"28%",status:"Add",projectcode:"A005KA10012",Terms: "18", Amount:"29000", poref: "OM/BHL/OCT/19-20/1080", Name:"HBVC Systems"    ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "4", items: "7",update:"19"},
    {gst:"12%",status:"View",projectcode:"X005KA10012",Terms: "19", Amount:"81000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractors" ,podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "6",update:"24"},
    
  ];
  addrequisition()
  {
  //   let dialogRef = this.dialog.open(UploadDocComponent, {
  //     data: null,
  //     height:'auto',
  //     width:'600px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //    // this.getAllUsers();
  //   });
  // }
  // openPO(){
    // this.dialog.open(ApprovalbystageUnpublishedpopupComponent ,{
    //   height:'auto',
    //   width:'700px'
    // });
  }  
  requsitionpop(){
    this.dialog.open(IndentUnpublishedComponent ,{
      height:'auto',
      width:'1000px'
    });
  }  
  backClicked() {
    this._location.back();
  }  
  uploaddoc()
  {
    // let dialogRef = this.dialog.open(UploadDocComponent, {
    //   data: null,
    //   height:'auto',
    //   width:'600px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    //  // this.getAllUsers();
    // });
  }
  itemspop(){
    // this.dialog.open(ItemsUnpublishPopupComponent,{
    //   height:'auto',
    //   width:'70%'
    // });

}
}
