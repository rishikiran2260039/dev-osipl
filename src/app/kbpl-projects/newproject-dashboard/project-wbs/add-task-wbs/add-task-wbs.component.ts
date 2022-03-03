import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-task-wbs',
  templateUrl: './add-task-wbs.component.html',
  styleUrls: ['./add-task-wbs.component.scss']
})
export class AddTaskWbsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTaskWbsComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
