import { AddvDialogComponent } from './addv-dialog/addv-dialog.component';
import { PreviousVersionComponent } from './previous-version/previous-version.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-drawing-register',
  templateUrl: './drawing-register.component.html',
  styleUrls: ['./drawing-register.component.scss']
})
export class DrawingRegisterComponent implements OnInit {
  items=[
    {"serial":"MRC/Rainbow/2020/73","name":"Floor Plan","description":"This is used in drawing","Drawing_Type": "CAD","boqref":"3.1","Drawing_Date" : "14-11-2018","Date_of_Issue": "14-10-2019","Incharge" : "Robert","previous":"2","status":"Active"},
    {"serial":"MRC/Xp/2020/72","name":"Site Plan","description":"This is used in drawing","Drawing_Type": "CAD","boqref":"4.1","Drawing_Date" : "14-11-2018","Date_of_Issue": "14-10-2019","Incharge" : "Robert","previous":"3","status":"Active"},
    {"serial":"MRC/TRS/2020/34","name":"Elevation","description":"This is used in drawing","Drawing_Type": "CAD","boqref":"5.1","Drawing_Date" : "14-11-2018","Date_of_Issue": "14-10-2019","Incharge" : "Robert","previous":"5","status":"Inactive"},
    {"serial":"MRC/IBW/2020/83","name":"Cross Section","description":"This is used in drawing","Drawing_Type": "CAD","boqref":"6.1","Drawing_Date" : "14-11-2018","Date_of_Issue": "14-10-2019","Incharge" : "Robert","previous":"7","status":"Active"},
    {"serial":"MRC/SG/2020/93","name":"Projections","description":"This is used in drawing","Drawing_Type": "CAD","boqref":"3.2","Drawing_Date" : "14-11-2018","Date_of_Issue": "14-10-2019","Incharge" : "Robert","previous":"8","status":"Active"},
    ]
  constructor(public dialog: MatDialog) { }

  filterToggle:boolean;

  ngOnInit() {
  }

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddvDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openNewDialog(id) {
    let dialogRef = this.dialog.open(AddvDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openpreviousDialog(id) {
    let dialogRef = this.dialog.open(PreviousVersionComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
