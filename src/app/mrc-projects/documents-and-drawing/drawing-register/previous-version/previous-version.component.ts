import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-previous-version',
  templateUrl: './previous-version.component.html',
  styleUrls: ['./previous-version.component.scss']
})
export class PreviousVersionComponent implements OnInit {

  filterToggle:boolean;
  items=[
    {"serial":"MRC/Rainbow/2020/73","name":"Floor Plan","description":"This is used in drawing","boqref":"3.1","activities":"3.2","prepared":"Robert","status":"Active","previous":"2.1"},
    {"serial":"MRC/Xp/2020/72","name":"Site Plan","description":"This is used in drawing","boqref":"4.1","activities":"4.2","prepared":"John","status":"Active","previous":"3.2"},
    {"serial":"MRC/TRS/2020/34","name":"Elevation","description":"This is used in drawing","boqref":"5.1","activities":"5.2","prepared":"Mark","status":"Inactive","previous":"5.3"},
    {"serial":"MRC/IBW/2020/83","name":"Cross Section","description":"This is used in drawing","boqref":"6.1","activities":"6.2","prepared":"Hasley","status":"Active","previous":"6.4"},
    {"serial":"MRC/SG/2020/93","name":"Projections","description":"This is used in drawing","boqref":"3.2","activities":"3.3","prepared":"Rock","status":"Active","previous":"7.2"},
    ]
    
    
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<PreviousVersionComponent>) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}