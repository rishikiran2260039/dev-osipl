import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-issue-dialog',
  templateUrl: './issue-dialog.component.html',
  styleUrls: ['./issue-dialog.component.scss']
})
export class IssueDialogComponent implements OnInit {

  constructor(public dialog: MatDialog,public dialogRef:MatDialogRef<IssueDialogComponent>) { }

  ngOnInit() {
  }

  tableList=[
    {name:'Backhole Bucket Cylinder', date:"11/08/2021", requested:2, issued:3},
    {name:'Swing Cylinder',  date:"23/11/2021", requested:5, issued:8},
    {name:'Stabilizer Arm',  date:"18/09/2021", requested:11, issued:14}
  ]

  
  close():void{
    this.dialogRef.close()
  }

}
