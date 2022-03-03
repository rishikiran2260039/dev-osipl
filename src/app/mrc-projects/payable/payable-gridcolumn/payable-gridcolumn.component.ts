import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-payable-gridcolumn',
  templateUrl: './payable-gridcolumn.component.html',
  styleUrls: ['./payable-gridcolumn.component.scss']
})
export class PayableGridcolumnComponent implements OnInit {

  gridColumnForm: FormGroup;

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<PayableGridcolumnComponent>) {
    this.createGridColumnGroup();
  }


  ngOnInit() {

  }

  createGridColumnGroup() {

  }
  close(): void {
    this.dialogRef.close();
  }

  saveGridColumns() {
    this.dialogRef.close();
  }

}
