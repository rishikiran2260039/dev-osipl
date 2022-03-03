import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-update-data-dialog',
  templateUrl: './update-data-dialog.component.html',
  styleUrls: ['./update-data-dialog.component.scss']
})
export class UpdateDataDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UpdateDataDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
