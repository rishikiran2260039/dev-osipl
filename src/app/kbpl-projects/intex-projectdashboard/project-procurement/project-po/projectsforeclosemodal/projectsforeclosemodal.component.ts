import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-projectsforeclosemodal',
  templateUrl: './projectsforeclosemodal.component.html',
  styleUrls: ['./projectsforeclosemodal.component.scss']
})
export class ProjectsforeclosemodalComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ProjectsforeclosemodalComponent>) { }
  

  ngOnInit() {
  }

  close(){
    this.dialog.close()
  }

 

}