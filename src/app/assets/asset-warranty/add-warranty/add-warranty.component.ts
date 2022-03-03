import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-warranty',
  templateUrl: './add-warranty.component.html',
  styleUrls: ['./add-warranty.component.scss']
})
export class AddWarrantyComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddWarrantyComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
