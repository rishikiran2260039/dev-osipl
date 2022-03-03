import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-payable-doc',
  templateUrl: './payable-doc.component.html',
  styleUrls: ['./payable-doc.component.scss']
})
export class PayableDocComponent implements OnInit {

  items = [
    { "name": "Document 1" },
    { "name": "Document 2" },
    { "name": "Document 3" }

  ]

  constructor(public dialogRef: MatDialogRef<PayableDocComponent>) {

  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
