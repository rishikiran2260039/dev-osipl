import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
