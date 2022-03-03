import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-narrations-popup',
  templateUrl: './narrations-popup.component.html',
  styleUrls: ['./narrations-popup.component.scss']
})
export class NarrationsPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NarrationsPopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}