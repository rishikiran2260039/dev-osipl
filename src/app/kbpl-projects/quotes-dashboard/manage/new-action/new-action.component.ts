import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.scss']
})
export class NewActionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewActionComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
