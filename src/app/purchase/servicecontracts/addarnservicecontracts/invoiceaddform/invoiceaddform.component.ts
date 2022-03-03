import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-invoiceaddform',
  templateUrl: './invoiceaddform.component.html',
  styleUrls: ['./invoiceaddform.component.scss']
})
export class InvoiceaddformComponent implements OnInit {

  constructor(public dialog : MatDialogRef<InvoiceaddformComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
