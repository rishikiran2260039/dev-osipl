import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddProjectDialogComponent } from 'src/app/kbpl-projects/add-project-dialog/add-project-dialog.component';

@Component({
  selector: 'app-kanban-dialog',
  templateUrl: './kanban-dialog.component.html',
  styleUrls: ['./kanban-dialog.component.scss']
})
export class KanbanDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProjectDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
