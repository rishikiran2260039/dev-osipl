import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-monthly-record-dialog',
  templateUrl: './monthly-record-dialog.component.html',
  styleUrls: ['./monthly-record-dialog.component.scss']
})
export class MonthlyRecordDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MonthlyRecordDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
