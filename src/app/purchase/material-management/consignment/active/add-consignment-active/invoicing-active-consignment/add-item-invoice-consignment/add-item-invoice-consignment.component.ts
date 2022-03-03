import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-item-invoice-consignment',
  templateUrl: './add-item-invoice-consignment.component.html',
  styleUrls: ['./add-item-invoice-consignment.component.scss']
})
export class AddItemInvoiceConsignmentComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddItemInvoiceConsignmentComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

} 