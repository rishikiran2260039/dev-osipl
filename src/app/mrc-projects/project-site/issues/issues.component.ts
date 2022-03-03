import { ShowIssueComponent } from './show-issue/show-issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  items=[
    {"reference":"125/54","subject":"Concrete mixer","description":"The Concrete mixer machine is not working","department":"Earth work","loggedDate":"15-03-2020","incharge":"Parmeet","targetDate":"20-03-2020","docs":"3","priority":"High","status":"In process","loggedBy":"Rishi"},
    {"reference":"126/53","subject":"Steel Cutter","description":"The Steel cutter is not working","department":"Earth work","loggedDate":"16-03-2020","incharge":"Gurmeet","targetDate":"21-03-2020","docs":"4","priority":"Medium","status":"Pending","loggedBy":"Rishi"},
    {"reference":"127/55","subject":"Cement Mixer","description":"The Cement mixer machine is not working","department":"Earth work","loggedDate":"17-03-2020","incharge":"Parmeet","targetDate":"22-03-2020","docs":"2","priority":"Hign","status":"In process","loggedBy":"Rishi"},
    {"reference":"128/56","subject":"Pipe Cutter","description":"The Pipe cutter machine is not working","department":"Earth work","loggedDate":"18-03-2020","incharge":"Robert","targetDate":"23-03-2020","docs":"3","priority":"Low","status":"Done","loggedBy":"Rishi"},
    {"reference":"129/57","subject":"Tile Cutter","description":"The Concrete mixer machine is not working","department":"Earth work","loggedDate":"19-03-2020","incharge":"Parmeet","targetDate":"24-03-2020","docs":"2","priority":"Medium","status":"Pending","loggedBy":"Rishi"},
    ]

    filterToggle:boolean;
    
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  public addlabour() {
    let dialogRef = this.dialog.open(AddIssueComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public opendocs() {
  let dialogRef = this.dialog.open(ShowIssueComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
}
