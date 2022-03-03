import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-notes',
  templateUrl: './project-notes.component.html',
  styleUrls: ['./project-notes.component.scss']
})
export class ProjectNotesComponent implements OnInit {

  constructor(public dialog : MatDialogRef<ProjectNotesComponent>) { }

  ngOnInit() {
  } 

  close(){
    this.dialog.close();
  }

}
