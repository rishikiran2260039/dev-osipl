import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-service-labor-details-popup',
  templateUrl: './service-labor-details-popup.component.html',
  styleUrls: ['./service-labor-details-popup.component.scss']
})
export class ServiceLaborDetailsPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef< ServiceLaborDetailsPopupComponent >,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}