import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-gate-pass-popup-in',
  templateUrl: './new-gate-pass-popup-in.component.html',
  styleUrls: ['./new-gate-pass-popup-in.component.scss']
})
export class NewGatePassPopupInComponent implements OnInit {

  constructor(public dialog : MatDialogRef< NewGatePassPopupInComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}