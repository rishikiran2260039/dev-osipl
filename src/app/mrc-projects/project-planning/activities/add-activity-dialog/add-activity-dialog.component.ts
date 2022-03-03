import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity-dialog.component.scss']
})
export class AddActivityDialogComponent implements OnInit {

  constructor( public dialogRef : MatDialogRef<AddActivityDialogComponent> ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
