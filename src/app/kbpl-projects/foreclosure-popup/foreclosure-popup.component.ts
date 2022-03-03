import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-foreclosure-popup',
  templateUrl: './foreclosure-popup.component.html',
  styleUrls: ['./foreclosure-popup.component.scss']
})
export class ForeclosurePopupComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ForeclosurePopupComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialog.close()
  }
}
