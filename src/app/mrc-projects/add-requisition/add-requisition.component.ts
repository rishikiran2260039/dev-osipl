import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-requisition',
  templateUrl: './add-requisition.component.html',
  styleUrls: ['./add-requisition.component.scss']
})
export class AddREquisition1Component implements OnInit {

     
  constructor(public dialogRef: MatDialogRef<AddREquisition1Component>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
