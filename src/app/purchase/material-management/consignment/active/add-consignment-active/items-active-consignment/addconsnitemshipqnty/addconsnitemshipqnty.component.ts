import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-addconsnitemshipqnty',
  templateUrl: './addconsnitemshipqnty.component.html',
  styleUrls: ['./addconsnitemshipqnty.component.scss']
})
export class AddconsnitemshipqntyComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddconsnitemshipqntyComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
} 
}