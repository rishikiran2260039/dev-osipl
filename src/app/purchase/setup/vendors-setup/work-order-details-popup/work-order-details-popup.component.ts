import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-work-order-details-popup',
  templateUrl: './work-order-details-popup.component.html',
  styleUrls: ['./work-order-details-popup.component.scss']
})
export class WorkOrderDetailsPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<WorkOrderDetailsPopupComponent>) { }

  ngOnInit() {
  }
  
  close(){
    this.dialog.close();
  }
}
