import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { PendingAddFormComponent } from './pending-add-form/pending-add-form.component';
import { PendingRequistionPopUpComponent } from './pending-requistion-pop-up/pending-requistion-pop-up.component';
import { TermsPendingPopUpComponent } from './terms-pending-pop-up/terms-pending-pop-up.component';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog:MatDialog) { }
  public isDisable = false;
  ngOnInit() {
    this.findDisable()
  }

  filterToggle=false;
  items = [
    {assets:"3",gst:"12%",pcode:"E005KA10012",status:"Add",wotype:"MEP",Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "6",update:"12"},
    {assets:"3",gst:"5%",pcode:"E005KA10013",status:"View",wotype:"Sub Contract",Amount:"113000", poref: "OM/BHL/OCT/19-20/1078", Name:"HBVC Systems"    , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "8",update:"23"},
    {assets:"3",gst:"18%",pcode:"E005KA10014",status:"Add",wotype:"MEP",Amount:"78000", poref: "OM/BHL/OCT/19-20/1079", Name:"ABC Contractors" ,podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "8",update:"16"},
    {assets:"3",gst:"28%",pcode:"E005KA10015",status:"View",wotype:"Sub Contract",Amount:"29000", poref: "OM/BHL/OCT/19-20/1080", Name:"HBVC Systems"    ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "4", items: "5",update:"19"},
    {assets:"3",gst:"12%",pcode:"E005KA10016",status:"Add",wotype:"Rentals",Amount:"81000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractors" ,podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "6",update:"29"},
    
  ];

  findDisable(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].wotype == "Rentals"){
        console.log("entered " + i)
        this.isDisable = false
        console.log(this.isDisable)
      }
      else {
        this.isDisable = true
      }
    }
  }
  TermsPopUp(){
    // this.dialog.open(TermsPendingPopUpComponent, {
    //   height: 'auto', 
    //   width: '700px'
    // })

  }
  RequistionPop(){
    this.dialog.open(PendingRequistionPopUpComponent, {
      height: 'auto', 
      width: '700px'
    })

  }    
  uploaddoc()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }
 
  // ItemPop(){
  //   this.dialog.open(PendingItemPopUpComponent, {
  //     height: 'auto', 
  //     width: '1000px'
  //   })
  // }  
    
 addWorkOrder(){
  this.dialog.open(PendingAddFormComponent, {
    height: 'auto', 
    width: '1000px'
  })
 }


}















