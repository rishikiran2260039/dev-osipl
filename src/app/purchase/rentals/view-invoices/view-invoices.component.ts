import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-invoices',
  templateUrl: './view-invoices.component.html',
  styleUrls: ['./view-invoices.component.scss']
})
export class ViewInvoicesComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ViewInvoicesComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
