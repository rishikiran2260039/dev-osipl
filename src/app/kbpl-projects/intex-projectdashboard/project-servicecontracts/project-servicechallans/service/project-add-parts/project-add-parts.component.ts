import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-add-parts',
  templateUrl: './project-add-parts.component.html',
  styleUrls: ['./project-add-parts.component.scss']
})
export class ProjectAddPartsComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ProjectAddPartsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(){
    this.dialog.close();
  }

}
