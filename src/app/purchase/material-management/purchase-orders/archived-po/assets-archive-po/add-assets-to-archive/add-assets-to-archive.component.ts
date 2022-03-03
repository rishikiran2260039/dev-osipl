import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-assets-to-archive',
  templateUrl: './add-assets-to-archive.component.html',
  styleUrls: ['./add-assets-to-archive.component.scss']
})
export class AddAssetsToArchiveComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddAssetsToArchiveComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
