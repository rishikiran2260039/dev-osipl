import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrls: ['./addreport.component.scss']
})
export class AddreportComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddreportComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}
