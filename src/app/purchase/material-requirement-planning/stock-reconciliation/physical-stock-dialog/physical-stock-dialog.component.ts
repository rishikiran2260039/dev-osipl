import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-physical-stock-dialog',
  templateUrl: './physical-stock-dialog.component.html',
  styleUrls: ['./physical-stock-dialog.component.scss']
})
export class PhysicalStockDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<PhysicalStockDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
