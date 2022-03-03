import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-parts-and-materials-popup',
  templateUrl: './parts-and-materials-popup.component.html',
  styleUrls: ['./parts-and-materials-popup.component.scss']
})
export class PartsAndMaterialsPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef< PartsAndMaterialsPopupComponent >,@Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}