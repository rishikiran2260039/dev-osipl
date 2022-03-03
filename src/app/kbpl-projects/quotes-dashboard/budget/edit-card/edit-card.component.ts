import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any ,public dialogRef: MatDialogRef<EditCardComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }


}
