import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-issue-request',
  templateUrl: './add-issue-request.component.html',
  styleUrls: ['./add-issue-request.component.scss']
})
export class AddIssueRequestComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIssueRequestComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }
}
