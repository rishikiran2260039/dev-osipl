import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-requisition',
  templateUrl: './add-requisition.component.html',
  styleUrls: ['./add-requisition.component.scss']
})
export class AddRequisitionComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<AddRequisitionComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}