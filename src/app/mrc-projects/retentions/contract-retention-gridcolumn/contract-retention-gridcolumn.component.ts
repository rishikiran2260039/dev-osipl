import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contract-retention-gridcolumn',
  templateUrl: './contract-retention-gridcolumn.component.html',
  styleUrls: ['./contract-retention-gridcolumn.component.scss']
})
export class ContractRetentionGridcolumnComponent implements OnInit {

  gridColumnForm: FormGroup;

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<ContractRetentionGridcolumnComponent>) {
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
