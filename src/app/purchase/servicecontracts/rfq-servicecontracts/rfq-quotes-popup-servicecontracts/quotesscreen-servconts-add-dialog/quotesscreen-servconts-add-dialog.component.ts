import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-quotesscreen-servconts-add-dialog',
  templateUrl: './quotesscreen-servconts-add-dialog.component.html',
  styleUrls: ['./quotesscreen-servconts-add-dialog.component.scss']
})
export class QuotesscreenServcontsAddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< QuotesscreenServcontsAddDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
