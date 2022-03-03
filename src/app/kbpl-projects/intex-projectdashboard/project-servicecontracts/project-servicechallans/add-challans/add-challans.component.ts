import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-challans',
  templateUrl: './add-challans.component.html',
  styleUrls: ['./add-challans.component.scss']
})
export class AddChallansComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddChallansComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
