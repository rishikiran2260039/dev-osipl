import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IssueDialogComponent } from '../issue-dialog/issue-dialog.component';
import { MaterialIssuesItemsComponent } from '../material-issues-items/material-issues-items.component';
import { NotesActiveMaterialIssuesComponent } from './notes-active-material-issues/notes-active-material-issues.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  items = [
   {status:"Requested",projectcode:'QWW5FA10012',issuerequestref:"OM/MI/OCT-19/10005",issuedate:"15-Oct-2019, 6.30 PM",issuedto:"Rajesh Kumar",items:"2",notes:"",Status: 1,stageColour: '#00ff0040',},
   {status:"On Hold",projectcode:'WWW5FA10012',issuerequestref:"OM/MI/OCT-19/10006",issuedate:"18-Nov-2019, 4.30 PM",issuedto:"Suresh Reddy",items:"5",notes:"",Status: 2,stageColour: '#C0C0C0',},
   {status:"Pending",projectcode:'FWW5FA10012',issuerequestref:"OM/MI/OCT-19/10007",issuedate:"20-Dec-2020, 6.30 AM",issuedto:"Rajesh Kumar",items:"3",notes:"",Status: 3,stageColour: '#FFA50069'},
   {status:"Cancelled",projectcode:'CWW5FA10012',issuerequestref:"OM/MI/OCT-19/10008",issuedate:"19-Sep-2021, 2.30 PM",issuedto:"Suresh Reddy",items:"6",notes:"",Status: 4,stageColour: '#87CEFA'},
   {status:"Requested",projectcode:'GWW5FA10012',issuerequestref:"OM/MI/OCT-19/10009",issuedate:"20-Aug-2020, 1.30 AM",issuedto:"Rajesh Kumar",items:"5",notes:"",Status: 1,stageColour: '#00ff0040'},
  ]

  
  statusOptions = [
    {value:1, name: 'Requested', colorCode: '#00ff0040'},
    {value:2, name: 'Issued', colorCode: '#C0C0C0'},
    {value:3, name: 'On Hold', colorCode: '#87CEFA'},
    {value:4, name: 'Cancelled', colorCode: '#FFA50069'},
  ]
 

  addIssueDialog(item) {
    this.dialog.open(IssueDialogComponent, {
      data:item,
      height:'auto',
      width:'700px'
    })
  }

  notes() {
    this.dialog.open(NotesActiveMaterialIssuesComponent, {
     height:'auto',
      width:'700px'
    })
  }
  issueitems() {
    this.dialog.open(MaterialIssuesItemsComponent,{
   height:'auto',
   width:'800px'

    })


  }

}
