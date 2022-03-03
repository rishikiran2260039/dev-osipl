import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addgrnitemshipqnty',
  templateUrl: './addgrnitemshipqnty.component.html',
  styleUrls: ['./addgrnitemshipqnty.component.scss']
})
export class AddgrnitemshipqntyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddgrnitemshipqntyComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
} 
}
