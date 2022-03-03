import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-works-hours',
  templateUrl: './add-works-hours.component.html',
  styleUrls: ['./add-works-hours.component.scss']
})
export class AddWorksHoursComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddWorksHoursComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
