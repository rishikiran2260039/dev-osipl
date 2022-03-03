import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { EditquotationspopupQutotationsComponent } from './editquotationspopup-qutotations/editquotationspopup-qutotations.component';
import { ItemsAndQuotesPopupQuotationsComponent } from './items-and-quotes-popup-quotations/items-and-quotes-popup-quotations.component';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm  Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog: MatDialog) { }

  filterToggle: boolean = false;
  
  ngOnInit() {
  }


  items = [
    {"status":"Add" ,"projectcode":"E005KA10012","requisition_no": "OM/REQ/SPA-FEB-19/1057", "requisition_date": "28-Feb-2019", "requisition_title": "Procurement for Machinery for demolition", "requisition_category": "Dump Truck", "sub_category": "Breakdown Repairs (emergency)", "make": "Volvo", "door_no": "FMX480", "view": "2", "required": "22-Mar-2019", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040',Submittedby:"Arnold D Cruz",Approvedby:"Perry Barnevik",item:"5/5"},
    {"status":"View" ,  "projectcode":"A005KA10012","requisition_no": "OM/REQ/SPA/APR-20/1005", "requisition_date": "25-Apr-2020", "requisition_title": "Procurement Procurement for Machinery for demolition", "requisition_category": "Backhoe Loader", "sub_category": "Running Maintenance", "make": "Caterpillar", "door_no": "D85ESS 17", "view": "5", "required": "30-Apr-2020", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040',Submittedby:"A.J Lundahl",Approvedby:"Abraham Forssell",item:"5/5"},
    { "status":"Add" ,"projectcode":"E005KA10012","requisition_no": "OM/REQ/SPA-FEB-19/1041", "requisition_date": "11-Feb-2019", "requisition_title": "Procurement for Machinery for demolition", "requisition_category": "Backhoe Loader", "sub_category": "Breakdown Repairs (emergency)", "make": "Mercedes Benz", "door_no": "All Models", "view": "1", "required": "28-Feb-2019", "approval": "Done", potential:1, toolT:"Done", "Status": 4, stageColour: '#FFA50069',Submittedby:"Axel adler",Approvedby:"Adolf Fredrik ",item:"5/5"},
    {"status":"View" ,"projectcode":"Q05KA10012", "requisition_no": "OM/REQ/SPA/FEB-21/1077", "requisition_date": "06-Feb-2021", "requisition_title": "Procurement for Machinery for demolition", "requisition_category": "Dump Truck", "sub_category": "Accident Repairs", "make": "Tata", "door_no": "ACTROS 4841K", "view": "7", "required": "10-Feb-2021", "approval": "Pending", potential:1, toolT:"Done", "Status": 3, stageColour: '#87CEFA',Submittedby:"Adolf-brat",Approvedby:"Ole Andress Halvorsen",item:"5/5"},
    {"status":"Add" , "projectcode":"S005KA10012","requisition_no": "OM/REQ/SPA/MAR-21/1086", "requisition_date": "30-Mar-2021", "requisition_title": "Procurement Procurement for Machinery for demolition", "requisition_category": "Backhoe Loader", "sub_category": "Accident Repairs", "make": "Volvo", "door_no": "D85ESS 86", "view": "9", "required": "31-Mar-2021", "approval": "Done", potential:1 , toolT:"Done", "Status": 2, stageColour: '#C0C0C0',Submittedby:"A.J Lundahl",Approvedby:"Adolf Fredrik ",item:"5/5"},
  ];


  public  Editquotationspopup() {
    let dialogRef = this.dialog.open( EditquotationspopupQutotationsComponent, {
      height: 'auto',
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public  itemsandquotespop(){
    let dialogRef = this.dialog.open( ItemsAndQuotesPopupQuotationsComponent, {
      height: 'auto',
      width: 'auto'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  deleteUser(){

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
}
