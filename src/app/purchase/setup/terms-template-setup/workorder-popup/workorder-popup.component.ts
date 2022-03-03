import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-workorder-popup',
  templateUrl: './workorder-popup.component.html',
  styleUrls: ['./workorder-popup.component.scss']
})
export class WorkorderPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<WorkorderPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}