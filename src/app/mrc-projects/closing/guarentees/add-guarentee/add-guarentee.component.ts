import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-guarentee',
  templateUrl: './add-guarentee.component.html',
  styleUrls: ['./add-guarentee.component.scss']
})
export class AddGuarenteeComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddGuarenteeComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}