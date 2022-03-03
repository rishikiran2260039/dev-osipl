import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-item-invoice-grn',
  templateUrl: './add-item-invoice-grn.component.html',
  styleUrls: ['./add-item-invoice-grn.component.scss']
})
export class AddItemInvoicegrnComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddItemInvoicegrnComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}