import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-new-store-setup',
  templateUrl: './add-new-store-setup.component.html',
  styleUrls: ['./add-new-store-setup.component.scss']
})
export class AddNewStoreSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewStoreSetupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  checked = false;

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
  
 
  
}
