import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-projectsgriddialog',
  templateUrl: './projectsgriddialog.component.html',
  styleUrls: ['./projectsgriddialog.component.scss']
})
export class ProjectsgriddialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectsgriddialogComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
