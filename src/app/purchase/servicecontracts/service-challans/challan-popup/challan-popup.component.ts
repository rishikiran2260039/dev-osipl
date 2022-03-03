import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-challan-popup',
  templateUrl: './challan-popup.component.html',
  styleUrls: ['./challan-popup.component.scss']
})
export class ChallanPopupComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialog1:MatDialogRef<ChallanPopupComponent>) { }
  filterToggle = false;
  ngOnInit() {
  }

  items = [
    { "GatePass": "OM/GP/APR-20/10008", "Conref": "OM/CON/APR-20/1012", "": "",
     "IssueDate": "01-01-2020", 
     "ItemNo": "44" , "TransportDetails": "TS07G01234"},
   
     { "GatePass": "OM/GP/APR-20/12228", "Conref": "OM/CON/MAY-20/1123", "ReleaseDate": "26-08-2021",
     "IssueDate": "03-1-2020", 
     "ItemNo": "89", "TransportDetails": "TS07G07722"},
    
     { "GatePass": "OM/GP/APR-20/13458", "Conref": "OM/CON/JUNE-20/1089", "ReleaseDate": "29-09-2021",
     "IssueDate": "13-1-2020", 
     "ItemNo": "77", "TransportDetails":"TS07G01040"},
    
     { "GatePass": "OM/GP/APR-20/15558", "Conref": "OM/CON/JULY-20/1023", "ReleaseDate": "06-11-2021",
     "IssueDate": "27-01-2020", 
     "ItemNo": "98",  "TransportDetails": "TS07G09922"},
  ];

  ServicesPop(){
    this.dialog.open(ChallanPopupComponent,{
      height:'auto',
      width:'1100px'
    })
  
  }

  close(){
    this.dialog1.close();
  }



  // addService(item){
  //   this.dialog.open(AddServiceChallanComponent, {
  //     data:item,
  //     width: "700px",
  //     height: "auto"
  //   });
  // }

}
