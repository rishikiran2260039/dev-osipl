import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-projectsadddialog',
  templateUrl: './projectsadddialog.component.html',
  styleUrls: ['./projectsadddialog.component.scss']
})
export class ProjectsadddialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<ProjectsadddialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(){
    this.dialog.close();
  }
}
