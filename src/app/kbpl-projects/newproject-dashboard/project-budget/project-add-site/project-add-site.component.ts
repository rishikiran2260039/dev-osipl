import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-add-site',
  templateUrl: './project-add-site.component.html',
  styleUrls: ['./project-add-site.component.scss']
})
export class ProjectAddSiteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectAddSiteComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
