import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editwbs',
  templateUrl: './editwbs.component.html',
  styleUrls: ['./editwbs.component.scss']
})
export class EditwbsComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<EditwbsComponent>) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }
}
