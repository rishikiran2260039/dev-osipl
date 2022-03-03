import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-edit-requisition',
  templateUrl: './add-edit-requisition.component.html',
  styleUrls: ['./add-edit-requisition.component.scss']
})
export class AddEditRequisitionComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddEditRequisitionComponent>){
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
