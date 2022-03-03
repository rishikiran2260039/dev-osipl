import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddActivityComponent>) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }
}
