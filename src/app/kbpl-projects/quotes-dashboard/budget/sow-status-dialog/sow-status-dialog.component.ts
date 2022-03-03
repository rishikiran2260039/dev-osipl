import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sow-status-dialog',
  templateUrl: './sow-status-dialog.component.html',
  styleUrls: ['./sow-status-dialog.component.scss']
})
export class SowStatusDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SowStatusDialogComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
