import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-popup-termsmaster',
  templateUrl: './add-popup-termsmaster.component.html',
  styleUrls: ['./add-popup-termsmaster.component.scss']
})
export class AddPopupTermsmasterComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddPopupTermsmasterComponent >,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}