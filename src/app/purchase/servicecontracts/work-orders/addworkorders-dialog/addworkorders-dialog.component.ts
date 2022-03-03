import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addworkorders-dialog',
  templateUrl: './addworkorders-dialog.component.html',
  styleUrls: ['./addworkorders-dialog.component.scss']
})
export class AddworkordersDialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef< AddworkordersDialogComponent >,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}