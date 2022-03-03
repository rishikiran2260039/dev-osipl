import { AddFileComponent } from './add-file/add-file.component';
import { LabourDialogComponent } from './labour-dialog/labour-dialog.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { AddLabourComponent } from './add-labour/add-labour.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit {


  items=[
    {"serial":"5.2.1","category":"Furniture","item":"Work Tables","unit":"No's","quantity":"18","materials":"5","labour":"3","budget":"$310,000"},
    {"serial":"5.2.2","category":"Furniture","item":"Doors","unit":"No's","quantity":"10","materials":"5","labour":"2","budget":"$110,000"},
    {"serial":"6.2.1","category":"Plumbing","item":"Flush Pipes","unit":"No's","quantity":"15","materials":"5","labour":"2","budget":"$500,000"},
    {"serial":"6.2.2","category":"Plumbing","item":"Water Taps","unit":"No's","quantity":"18","materials":"5","labour":"3","budget":"$31,000"},
    {"serial":"7.2.1","category":"Flooring","item":"Tiles","unit":"No's","quantity":"40","materials":"5","labour":"5","budget":"$300,000"},
    
    ]

    filterToggle:boolean;
  
    
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public addlabour() {
    let dialogRef = this.dialog.open(AddLabourComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public addmaterial() {
  let dialogRef = this.dialog.open(AddMaterialComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
public openmaterial() {
  let dialogRef = this.dialog.open(MaterialDialogComponent, {
   
      height: 'auto',
      width: '750px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

public openlabour() {
  let dialogRef = this.dialog.open(LabourDialogComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

public addfile() {
  let dialogRef = this.dialog.open(AddFileComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}