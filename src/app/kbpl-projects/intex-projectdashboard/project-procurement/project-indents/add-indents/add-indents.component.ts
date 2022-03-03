import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-indents',
  templateUrl: './add-indents.component.html',
  styleUrls: ['./add-indents.component.scss']
})
export class AddIndentsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIndentsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  } 

}
