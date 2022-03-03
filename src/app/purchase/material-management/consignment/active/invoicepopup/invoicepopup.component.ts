import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-invoicepopup',
  templateUrl: './invoicepopup.component.html',
  styleUrls: ['./invoicepopup.component.scss']
})
export class InvoicepopupComponent implements OnInit {
  constructor(public dialog:MatDialogRef<InvoicepopupComponent>) { }

  items = [
    {PORef:"#IN-1077",},
    {PORef:"#IN-1079",},
    {PORef:"#IN-1080",},
    {PORef:"#IN-1072",},
    {PORef:"#IN-1093",},
   
  ];

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
