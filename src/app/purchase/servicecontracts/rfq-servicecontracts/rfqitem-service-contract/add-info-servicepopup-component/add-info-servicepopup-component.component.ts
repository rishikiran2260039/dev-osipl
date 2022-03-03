import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-info-servicepopup-component',
  templateUrl: './add-info-servicepopup-component.component.html',
  styleUrls: ['./add-info-servicepopup-component.component.scss']
})
export class AddInfoServicepopupComponentComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddInfoServicepopupComponentComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
