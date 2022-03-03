import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gridcol-popup-servicecontracts',
  templateUrl: './gridcol-popup-servicecontracts.component.html',
  styleUrls: ['./gridcol-popup-servicecontracts.component.scss']
})
export class GridcolPopupServicecontractsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridcolPopupServicecontractsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}


