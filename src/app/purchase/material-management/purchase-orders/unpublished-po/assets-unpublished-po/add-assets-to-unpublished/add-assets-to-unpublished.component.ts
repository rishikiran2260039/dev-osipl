import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-assets-to-unpublished',
  templateUrl: './add-assets-to-unpublished.component.html',
  styleUrls: ['./add-assets-to-unpublished.component.scss']
})
export class AddAssetsToUnpublishedComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddAssetsToUnpublishedComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
