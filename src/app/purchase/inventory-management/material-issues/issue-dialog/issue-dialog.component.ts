import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-issue-dialog',
  templateUrl: './issue-dialog.component.html',
  styleUrls: ['./issue-dialog.component.scss']
})
export class IssueDialogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<IssueDialogComponent>, @Inject(MAT_DIALOG_DATA) public issueData:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
