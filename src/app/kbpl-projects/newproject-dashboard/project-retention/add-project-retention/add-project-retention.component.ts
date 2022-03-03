import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-project-retention',
  templateUrl: './add-project-retention.component.html',
  styleUrls: ['./add-project-retention.component.scss']
})
export class AddProjectRetentionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProjectRetentionComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
