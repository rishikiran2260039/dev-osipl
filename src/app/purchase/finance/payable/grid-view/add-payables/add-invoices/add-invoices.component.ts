import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-invoices',
  templateUrl: './add-invoices.component.html',
  styleUrls: ['./add-invoices.component.scss']
})
export class AddInvoicesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddInvoicesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
  mytime: Date = new Date();
}
