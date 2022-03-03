import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-requisition',
  templateUrl: './edit-requisition.component.html',
  styleUrls: ['./edit-requisition.component.scss']
})
export class EditRequisitionComponent implements OnInit {

      
  constructor(public dialogRef: MatDialogRef<EditRequisitionComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
