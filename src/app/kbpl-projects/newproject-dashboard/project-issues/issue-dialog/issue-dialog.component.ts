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
    {name:'Backhole Bucket Cylinder'},
    {name:'Swing Cylinder'},
    {name:'Stabilizer Arm'}
  ]

  
  close():void{
    this.dialogRef.close()
  }

}
