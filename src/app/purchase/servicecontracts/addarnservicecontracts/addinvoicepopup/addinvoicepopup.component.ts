import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addinvoicepopup',
  templateUrl: './addinvoicepopup.component.html',
  styleUrls: ['./addinvoicepopup.component.scss']
})
export class AddinvoicepopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddinvoicepopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
