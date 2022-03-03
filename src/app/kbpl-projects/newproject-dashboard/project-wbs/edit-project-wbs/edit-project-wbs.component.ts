import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-project-wbs',
  templateUrl: './edit-project-wbs.component.html',
  styleUrls: ['./edit-project-wbs.component.scss']
})
export class EditProjectWBSComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProjectWBSComponent>) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }
}
