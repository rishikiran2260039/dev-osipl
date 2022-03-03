import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-assets-to-published',
  templateUrl: './add-assets-to-published.component.html',
  styleUrls: ['./add-assets-to-published.component.scss']
})
export class AddAssetsToPublishedComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddAssetsToPublishedComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
