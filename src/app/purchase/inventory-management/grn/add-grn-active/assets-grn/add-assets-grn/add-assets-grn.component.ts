import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-assets-grn',
  templateUrl: './add-assets-grn.component.html',
  styleUrls: ['./add-assets-grn.component.scss']
})
export class AddAssetsGrnComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAssetsGrnComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
} 
}
