import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gridcol-popup',
  templateUrl: './gridcol-popup.component.html',
  styleUrls: ['./gridcol-popup.component.scss']
})
export class GridcolPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridcolPopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
