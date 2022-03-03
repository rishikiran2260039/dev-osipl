import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-assets-arn',
  templateUrl: './add-assets-arn.component.html',
  styleUrls: ['./add-assets-arn.component.scss']
})
export class AddAssetsArnComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddAssetsArnComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
} 
}
