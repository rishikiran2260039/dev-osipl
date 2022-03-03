import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-issue-slip-dialog',
  templateUrl: './issue-slip-dialog.component.html',
  styleUrls: ['./issue-slip-dialog.component.scss']
})
export class IssueSlipDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<IssueSlipDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
