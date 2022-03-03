import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-service-sub-cat-popup',
  templateUrl: './service-sub-cat-popup.component.html',
  styleUrls: ['./service-sub-cat-popup.component.scss']
})
export class ServiceSubCatPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ServiceSubCatPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
