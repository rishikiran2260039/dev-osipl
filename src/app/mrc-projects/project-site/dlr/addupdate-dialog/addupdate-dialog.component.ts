import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addupdate-dialog',
  templateUrl: './addupdate-dialog.component.html',
  styleUrls: ['./addupdate-dialog.component.scss']
})
export class AddupdateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddupdateDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}
