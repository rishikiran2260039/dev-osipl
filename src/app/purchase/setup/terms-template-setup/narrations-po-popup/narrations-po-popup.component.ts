import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-narrations-po-popup',
  templateUrl: './narrations-po-popup.component.html',
  styleUrls: ['./narrations-po-popup.component.scss']
})
export class NarrationsPoPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NarrationsPoPopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}