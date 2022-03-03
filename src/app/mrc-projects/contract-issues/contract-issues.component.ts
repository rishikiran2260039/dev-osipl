import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { IssueDialogComponent } from './issue-dialog/issue-dialog.component';

@Component({
  selector: 'app-contract-issues',
  templateUrl: './contract-issues.component.html',
  styleUrls: ['./contract-issues.component.scss']
})
export class ContractIssuesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  filterToggle = false;

  ngOnInit() {
  }

  items = [
    // { "si_no": "1", "job_card": "233333", "job_card_date": "15-Oct-2019", "maintenance_type": "Overhauling", "equipment_type": "Backhoe Loader", "equipment_make": "Caterpillar", "equipment_model": "D85ESS 17", "door_no": "11112", "HMR": "121", "KMR": "N/A", "material_issues": "1", "status": "Pending" },
    // { "si_no": "2", "job_card": "444444", "job_card_date": "09-Apr-2020", "maintenance_type": "Miscellaneous", "equipment_type": "Car", "equipment_make": "Volvo", "equipment_model": "	XC60 D4", "door_no": "1", "HMR": "N/A", "KMR": "N/A", "material_issues": "0", "status": "Active" },
    // { "si_no": "3", "job_card": "777777", "job_card_date": "10-Apr-2020", "maintenance_type": "Running", "equipment_type": "Dump Truck", "equipment_make": "Scania", "equipment_model": "P410", "door_no": "3", "HMR": "N/A", "KMR": "N/A", "material_issues": "0", "status": "Done" },
    // { "si_no": "4", "job_card": "888888", "job_card_date": "13-Apr-2020", "maintenance_type": "Scheduled", "equipment_type": "Car", "equipment_make": "Mercedes Benz", "equipment_model": "ACTROS 4841K", "door_no": "4", "HMR": "N/A", "KMR": "N/A", "material_issues": "1", "status": "Pending" },
    // { "si_no": "5", "job_card": "999999", "job_card_date": "14-Apr-2020", "maintenance_type": "Preventative", "equipment_type": "Dump Truck", "equipment_make": "Volvo", "equipment_model": "	XC60 D4", "door_no": "1343", "HMR": "N/A", "KMR": "N/A", "material_issues": "2", "status": "Done" },

    { si: "1",req:'OM/REQ/SPA-FEB-19/1057	',date:'28-Feb-2019',issued:'2/3',status:'Pending',equipment_type: "Backhoe Loader", equipment_make: "Caterpillar", equipment_model: "D85ESS 17",rem:'Items to be issued in 15 days', plannedQty:4, actualQty:2, potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040'},
    { si: "2",req:'OM/REQ/SPA/APR-20/1005',date:'25-Apr-2020',issued:'5/8',status:'Active',equipment_type: "Car", equipment_make: "Volvo", equipment_model: "	XC60 D4",rem:'Items can be delayed by max 7 days',  plannedQty:6, actualQty:5, potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040'},
    { si: "3",req:'OM/REQ/SPA-FEB-19/1041	',date:'11-Feb-2019',issued:'11/14',status:'Active',equipment_type: "Dump Truck", equipment_make: "Scania", equipment_model: "P410",rem:'Same day Issue Needed',  plannedQty:5, actualQty:3, potential:1, toolT:"Done", "Status": 4, stageColour: '#FFA50069'},
    { si: "4",req:'OM/REQ/SPA/FEB-21/1077',date:'06-Feb-2021',issued:'8/13',status:'Pending',equipment_type: "Car", equipment_make: "Mercedes Benz", equipment_model: "ACTROS 4841K",rem:'Requires to check dead stock av availability',  plannedQty:8, actualQty:6, potential:1, toolT:"Done",  "Status": 3, stageColour: '#87CEFA'},
    { si: "5",req:'OM/REQ/SPA/MAR-21/1086',date:'30-Mar-2021',issued:'2/5',status:'Active',equipment_type: "Dump Truck", equipment_make: "Volvo", equipment_model: "	XC60 D4",rem:'Depends on order quantity',  plannedQty:4, actualQty:2, potential:1, toolT:"Done", "Status": 2, stageColour: '#C0C0C0'}
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
    }
  
  }


  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddIssueComponent, {

      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openIssueDialog() {
    let dialogRef = this.dialog.open(IssueDialogComponent, {

      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  editIssue(){
    let matRef = this.dialog.open(EditIssueComponent, {
      height:'auto',
      width:"700px"
    });
  }

}