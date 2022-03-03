import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-service-cat-dialog',
  templateUrl: './add-service-cat-dialog.component.html',
  styleUrls: ['./add-service-cat-dialog.component.scss']
})
export class AddServiceCatDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddServiceCatDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
