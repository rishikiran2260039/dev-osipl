import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-quantity-update-popup',
  templateUrl: './add-quantity-update-popup.component.html',
  styleUrls: ['./add-quantity-update-popup.component.scss']
})
export class AddQuantityUpdatePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddQuantityUpdatePopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
} 
}
