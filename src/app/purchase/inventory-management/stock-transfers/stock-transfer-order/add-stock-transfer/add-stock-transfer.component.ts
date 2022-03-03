import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-stock-transfer',
  templateUrl: './add-stock-transfer.component.html',
  styleUrls: ['./add-stock-transfer.component.scss']
})
export class AddStockTransferComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddStockTransferComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  } 
} 
