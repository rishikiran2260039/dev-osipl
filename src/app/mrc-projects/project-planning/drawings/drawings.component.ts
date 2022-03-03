import { PreviousVersionComponent } from './previous-version/previous-version.component';
import { AddVersionComponent } from './add-version/add-version.component';
import { MatDialog } from '@angular/material';
import { AddDrawingComponent } from './add-drawing/add-drawing.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {

  filterToggle:boolean;
  items=[
    {"serial":"MRC/Rainbow/2020/73","name":"Floor Plan","description":"This is used in drawing","boqref":"3.1","activities":"3.2","prepared":"Robert","status":"Active","previous":"2"},
    {"serial":"MRC/Xp/2020/72","name":"Site Plan","description":"This is used in drawing","boqref":"4.1","activities":"4.2","prepared":"John","status":"Active","previous":"3"},
    {"serial":"MRC/TRS/2020/34","name":"Elevation","description":"This is used in drawing","boqref":"5.1","activities":"5.2","prepared":"Mark","status":"Inactive","previous":"5"},
    {"serial":"MRC/IBW/2020/83","name":"Cross Section","description":"This is used in drawing","boqref":"6.1","activities":"6.2","prepared":"Hasley","status":"Active","previous":"7"},
    {"serial":"MRC/SG/2020/93","name":"Projections","description":"This is used in drawing","boqref":"3.2","activities":"3.3","prepared":"Rock","status":"Active","previous":"8"},
    ]
    
    
    
    
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddDrawingComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openNewDialog(id) {
    let dialogRef = this.dialog.open(AddVersionComponent, {
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
