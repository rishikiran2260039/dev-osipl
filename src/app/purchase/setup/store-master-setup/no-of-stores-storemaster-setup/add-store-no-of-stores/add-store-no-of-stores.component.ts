import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-store-no-of-stores',
  templateUrl: './add-store-no-of-stores.component.html',
  styleUrls: ['./add-store-no-of-stores.component.scss']
})
export class AddStoreNoOfStoresComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddStoreNoOfStoresComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
  
}
