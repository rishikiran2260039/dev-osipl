import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {

     
  constructor(public dialogRef: MatDialogRef<AddIssueComponent>) { }

  ngOnInit() {
  }


  
  
  
  close(): void {
    this.dialogRef.close();
  }





}

