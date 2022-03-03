import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddIssueComponent>) { }

  ngOnInit() {
  }

  values: any =[
    {date:"23-09-2020",amount:"123000",mode:"Offline",reference:"123456",remarks:"Positive"},
    {date:"25-09-2020",amount:"223000",mode:"Offline",reference:"456123",remarks:"Positive"},
    {date:"29-09-2020",amount:"125000",mode:"Offline",reference:"423436",remarks:"Accurate"},
    {date:"03-10-2020",amount:"232000",mode:"Offline",reference:"513357",remarks:"Positive"}
  ]

  close(): void{
    this.dialogRef.close();
  }

}

