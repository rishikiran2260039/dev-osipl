import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editspopup-approveitems',
  templateUrl: './editspopup-approveitems.component.html',
  styleUrls: ['./editspopup-approveitems.component.scss']
})
export class EditspopupApproveitemsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditspopupApproveitemsComponent>,) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
  
}