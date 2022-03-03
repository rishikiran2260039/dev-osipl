import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-upload-physical-stock',
  templateUrl: './upload-physical-stock.component.html',
  styleUrls: ['./upload-physical-stock.component.scss']
})
export class UploadPhysicalStockComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadPhysicalStockComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
