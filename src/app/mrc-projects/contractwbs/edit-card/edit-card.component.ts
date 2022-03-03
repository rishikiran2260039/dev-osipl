import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditCardComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
