import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRequisitionDialogComponent } from 'src/app/purchase/requisition/add-requisition-dialog/add-requisition-dialog.component';
import { AddIndentsComponent } from './add-indents/add-indents.component';

@Component({
  selector: 'app-project-indents',
  templateUrl: './project-indents.component.html',
  styleUrls: ['./project-indents.component.scss']
})
export class ProjectIndentsComponent implements OnInit {

 
  constructor(public dialog: MatDialog) { }
  filterToggle = false;

  ngOnInit() {
  }

  // {{item.Submittedby}}
  //                 </td>
  //                 <td style="min-width: 70px !important; text-align: center!important;">
  //                   {{item.Approvedby}}

  items = [
    { "requisition_no": "OM/REQ/SPA-FEB-19/1057", "requisition_date": "28-Feb-2019", "requisition_title": "NEED 200 ITEMS AT DIFFERENT PROJECT", "requisition_category": "Dump Truck", "sub_category": "Breakdown Repairs (emergency)", "make": "Volvo", "door_no": "FMX480", "view": "2", "required": "22-Mar-2019", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040',Submittedby:"Arnold D Cruz",Approvedby:"Perry Barnevik",item:"7"},
    { "requisition_no": "OM/REQ/SPA/APR-20/1005", "requisition_date": "25-Apr-2020", "requisition_title": "IMMEDIATE REQUIREMENT OF 500 SPARE PARTS", "requisition_category": "Backhoe Loader", "sub_category": "Running Maintenance", "make": "Caterpillar", "door_no": "D85ESS 17", "view": "5", "required": "30-Apr-2020", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040',Submittedby:"A.J Lundahl",Approvedby:"Abraham Forssell",item:"3"},
    { "requisition_no": "OM/REQ/SPA-FEB-19/1041", "requisition_date": "11-Feb-2019", "requisition_title": "MAP SPARE PARTS WITH MATERIALS", "requisition_category": "Backhoe Loader", "sub_category": "Breakdown Repairs (emergency)", "make": "Mercedes Benz", "door_no": "All Models", "view": "1", "required": "28-Feb-2019", "approval": "Done", potential:1, toolT:"Done", "Status": 4, stageColour: '#FFA50069',Submittedby:"Axel adler",Approvedby:"Adolf Fredrik ",item:"5"},
    { "requisition_no": "OM/REQ/SPA/FEB-21/1077", "requisition_date": "06-Feb-2021", "requisition_title": "NEED 100 ITEMS IMMEDIATELY", "requisition_category": "Dump Truck", "sub_category": "Accident Repairs", "make": "Tata", "door_no": "ACTROS 4841K", "view": "7", "required": "10-Feb-2021", "approval": "Pending", potential:1, toolT:"Done", "Status": 3, stageColour: '#87CEFA',Submittedby:"Adolf-brat",Approvedby:"Ole Andress Halvorsen",item:"9"},
    { "requisition_no": "OM/REQ/SPA/MAR-21/1086", "requisition_date": "30-Mar-2021", "requisition_title": "NEEDED 10 ITEMS AT THE PROJECT LOCATION", "requisition_category": "Backhoe Loader", "sub_category": "Accident Repairs", "make": "Volvo", "door_no": "D85ESS 86", "view": "9", "required": "31-Mar-2021", "approval": "Done", potential:1 , toolT:"Done", "Status": 2, stageColour: '#C0C0C0',Submittedby:"A.J Lundahl",Approvedby:"Adolf Fredrik ",item:"3"},
  ];


  statusOptions = [
    { value: 1, name: 'Completed', colorCode: '#00ff0040' },
    { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
    { value: 3, name: 'In Process', colorCode: '#87CEFA' },
    { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  ];

  updateNewLead(item:any) {
    console.log(item, 'item');
    delete item['meeting_time']
    if (item['potential'] == 0) {
      item['potential'] = 1;
      item["toolT"] = "Done";
    } else if (item['potential'] == 1) {
      item['potential'] = 2;
      item["toolT"] = "Pending";
    } else if (item['potential'] == 2) {
      item['potential'] = 3;
      item["toolT"] = "Partial";
    } else if (item['potential'] == 3) {
      item['potential'] = 4;
      item["toolT"] = "Declined";
    } else if (item['potential'] == 4) {
      item['potential'] = 1;
      item["toolT"] = "Done";
    }
  
  }

  public opencontactDialog() {
    // let dialogRef = this.dialog.open(AddEditRequisitionComponent, {
    //   height: 'auto',
    //   width: '700px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }

  public opencontactDialog1(item) {
    // let dialogRef = this.dialog.open(AddEditRequisitionComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '700px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }

  
  public addrequisition(item) { 
    let dialogRef = this.dialog.open(AddIndentsComponent, {
      data:item,
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}