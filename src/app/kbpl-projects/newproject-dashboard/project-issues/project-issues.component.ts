import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { IssueDialogComponent } from './issue-dialog/issue-dialog.component';

@Component({
  selector: 'app-project-issues',
  templateUrl: './project-issues.component.html',
  styleUrls: ['./project-issues.component.scss']
})
export class ProjectIssuesComponent implements OnInit {

  constructor(public dialog: MatDialog,private titleService: Title) { }
  filterToggle = false;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("CPM | Issues");

  }

  items = [
    { si: "1",req:'OM/REQ/SPA-FEB-19/1057	',date:'28-Feb-2019',issued:'3',status:'Pending',equipment_type: "Backhoe Loader", equipment_make: "Caterpillar", equipment_model: "D85ESS 17",rem:'Items to be issued in 15 days', "Status": 1, stageColour: '#00ff0040'},
    { si: "2",req:'OM/REQ/SPA/APR-20/1005',date:'25-Apr-2020',issued:'6',status:'Active',equipment_type: "Car", equipment_make: "Volvo", equipment_model: "	XC60 D4",rem:'Items can be delayed by max 7 days', "Status": 1, stageColour: '#00ff0040'},
    { si: "3",req:'OM/REQ/SPA-FEB-19/1041	',date:'11-Feb-2019',issued:'2',status:'Active',equipment_type: "Dump Truck", equipment_make: "Scania", equipment_model: "P410",rem:'Same day Issue Needed', "Status": 4, stageColour: '#FFA50069'},
    { si: "4",req:'OM/REQ/SPA/FEB-21/1077',date:'06-Feb-2021',issued:'7',status:'Pending',equipment_type: "Car", equipment_make: "Mercedes Benz", equipment_model: "ACTROS 4841K",rem:'Requires to check dead stock av availability',  "Status": 3, stageColour: '#87CEFA'},
    { si: "5",req:'OM/REQ/SPA/MAR-21/1086',date:'30-Mar-2021',issued:'8',status:'Active',equipment_type: "Dump Truck", equipment_make: "Volvo", equipment_model: "	XC60 D4",rem:'Depends on order quantity',  "Status": 2, stageColour: '#C0C0C0'}
  ];

  statusOptions = [
    { value: 1, name: 'Completed', colorCode: '#00ff0040' },
    { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
    { value: 3, name: 'In Process', colorCode: '#87CEFA' },
    { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  ];

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
    let dialogRef = this.dialog.open(EditIssueComponent,{
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
