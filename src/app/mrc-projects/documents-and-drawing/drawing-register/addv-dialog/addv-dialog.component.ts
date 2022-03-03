import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addv-dialog',
  templateUrl: './addv-dialog.component.html',
  styleUrls: ['./addv-dialog.component.scss']
})
export class AddvDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddvDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}
