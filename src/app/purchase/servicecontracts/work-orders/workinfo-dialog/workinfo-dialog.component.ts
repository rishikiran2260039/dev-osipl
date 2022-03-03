import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-workinfo-dialog',
  templateUrl: './workinfo-dialog.component.html',
  styleUrls: ['./workinfo-dialog.component.scss']
})
export class WorkinfoDialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<  WorkinfoDialogComponent >) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}