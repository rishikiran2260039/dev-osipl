import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-site-status-dialog',
  templateUrl: './site-status-dialog.component.html',
  styleUrls: ['./site-status-dialog.component.scss']
})
export class SiteStatusDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SiteStatusDialogComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
