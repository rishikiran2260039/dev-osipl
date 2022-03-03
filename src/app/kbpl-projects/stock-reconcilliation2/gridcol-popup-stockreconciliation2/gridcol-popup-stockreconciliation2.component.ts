import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gridcol-popup-stockreconciliation2',
  templateUrl: './gridcol-popup-stockreconciliation2.component.html',
  styleUrls: ['./gridcol-popup-stockreconciliation2.component.scss']
})
export class GridcolPopupStockreconciliation2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridcolPopupStockreconciliation2Component>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
