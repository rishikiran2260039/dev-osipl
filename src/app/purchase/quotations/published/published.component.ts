import { Component, OnInit } from '@angular/core';
import { ViewApprovalComponent } from '../view-approval/view-approval.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.scss']
})
export class PublishedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  filterToggle: boolean = false;
  
  ngOnInit() {
  }

  // items = [
  //   { "requisition_no": "OM/REQ/SPA-FEB-19/1057", "requisition_date": "28-Feb-2019", "requisition_title": "NEED 200 ITEMS AT DIFFERENT PROJECT", "requisition_category": "Dump Truck", "sub_category": "Breakdown Repairs (emergency)", "make": "Volvo", "door_no": "FMX480", "view": "2", "required": "22-Mar-2019", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040'},
  //   { "requisition_no": "OM/REQ/SPA/APR-20/1005", "requisition_date": "25-Apr-2020", "requisition_title": "IMMEDIATE REQUIREMENT OF 500 SPARE PARTS", "requisition_category": "Backhoe Loader", "sub_category": "Running Maintenance", "make": "Caterpillar", "door_no": "D85ESS 17", "view": "5", "required": "30-Apr-2020", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040'},
  //   { "requisition_no": "OM/REQ/SPA-FEB-19/1041", "requisition_date": "11-Feb-2019", "requisition_title": "MAP SPARE PARTS WITH MATERIALS", "requisition_category": "Backhoe Loader", "sub_category": "Breakdown Repairs (emergency)", "make": "Mercedes Benz", "door_no": "All Models", "view": "1", "required": "28-Feb-2019", "approval": "Done", potential:1, toolT:"Done", "Status": 4, stageColour: '#FFA50069'},
  //   { "requisition_no": "OM/REQ/SPA/FEB-21/1077", "requisition_date": "06-Feb-2021", "requisition_title": "NEED 100 ITEMS IMMEDIATELY", "requisition_category": "Dump Truck", "sub_category": "Accident Repairs", "make": "Tata", "door_no": "ACTROS 4841K", "view": "7", "required": "10-Feb-2021", "approval": "Pending", potential:1, toolT:"Done", "Status": 3, stageColour: '#87CEFA'},
  //   { "requisition_no": "OM/REQ/SPA/MAR-21/1086", "requisition_date": "30-Mar-2021", "requisition_title": "NEEDED 10 ITEMS AT THE PROJECT LOCATION", "requisition_category": "Backhoe Loader", "sub_category": "Accident Repairs", "make": "Volvo", "door_no": "D85ESS 86", "view": "9", "required": "31-Mar-2021", "approval": "Done", potential:1 , toolT:"Done", "Status": 2, stageColour: '#C0C0C0'},
  // ];

  items = [
    { "requisition_no": "OM/REQ/SPA-FEB-19/1057", "requisition_date": "28-Feb-2019", "requisition_title": "NEED 200 ITEMS AT DIFFERENT PROJECT", "requisition_category": "Dump Truck", "sub_category": "Breakdown Repairs (emergency)", "make": "Volvo", "door_no": "FMX480", "view": "2", "required": "22-Mar-2019", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040',Submittedby:"Arnold D Cruz",Approvedby:"Perry Barnevik",item:"3/5"},
    { "requisition_no": "OM/REQ/SPA/APR-20/1005", "requisition_date": "25-Apr-2020", "requisition_title": "IMMEDIATE REQUIREMENT OF 500 SPARE PARTS", "requisition_category": "Backhoe Loader", "sub_category": "Running Maintenance", "make": "Caterpillar", "door_no": "D85ESS 17", "view": "5", "required": "30-Apr-2020", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040',Submittedby:"A.J Lundahl",Approvedby:"Abraham Forssell",item:"4/5"},
    { "requisition_no": "OM/REQ/SPA-FEB-19/1041", "requisition_date": "11-Feb-2019", "requisition_title": "MAP SPARE PARTS WITH MATERIALS", "requisition_category": "Backhoe Loader", "sub_category": "Breakdown Repairs (emergency)", "make": "Mercedes Benz", "door_no": "All Models", "view": "1", "required": "28-Feb-2019", "approval": "Done", potential:1, toolT:"Done", "Status": 4, stageColour: '#FFA50069',Submittedby:"Axel adler",Approvedby:"Adolf Fredrik ",item:"4/6"},
    { "requisition_no": "OM/REQ/SPA/FEB-21/1077", "requisition_date": "06-Feb-2021", "requisition_title": "NEED 100 ITEMS IMMEDIATELY", "requisition_category": "Dump Truck", "sub_category": "Accident Repairs", "make": "Tata", "door_no": "ACTROS 4841K", "view": "7", "required": "10-Feb-2021", "approval": "Pending", potential:1, toolT:"Done", "Status": 3, stageColour: '#87CEFA',Submittedby:"Adolf-brat",Approvedby:"Ole Andress Halvorsen",item:"2/4"},
    { "requisition_no": "OM/REQ/SPA/MAR-21/1086", "requisition_date": "30-Mar-2021", "requisition_title": "NEEDED 10 ITEMS AT THE PROJECT LOCATION", "requisition_category": "Backhoe Loader", "sub_category": "Accident Repairs", "make": "Volvo", "door_no": "D85ESS 86", "view": "9", "required": "31-Mar-2021", "approval": "Done", potential:1 , toolT:"Done", "Status": 2, stageColour: '#C0C0C0',Submittedby:"A.J Lundahl",Approvedby:"Adolf Fredrik ",item:"3/5"},
  ];


  public opencontactDialog() {
    let dialogRef = this.dialog.open(ViewApprovalComponent, {
      height: 'auto',
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
