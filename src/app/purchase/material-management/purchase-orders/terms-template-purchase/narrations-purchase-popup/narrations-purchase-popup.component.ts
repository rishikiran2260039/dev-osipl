import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-narrations-purchase-popup',
  templateUrl: './narrations-purchase-popup.component.html',
  styleUrls: ['./narrations-purchase-popup.component.scss']
})
export class NarrationsPurchasePopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NarrationsPurchasePopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}