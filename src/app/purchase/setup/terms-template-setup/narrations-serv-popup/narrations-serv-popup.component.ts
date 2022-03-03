import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-narrations-serv-popup',
  templateUrl: './narrations-serv-popup.component.html',
  styleUrls: ['./narrations-serv-popup.component.scss']
})
export class NarrationsServPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NarrationsServPopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}