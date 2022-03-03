import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-make-master',
  templateUrl: './add-make-master.component.html',
  styleUrls: ['./add-make-master.component.scss']
})
export class AddMakeMasterComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddMakeMasterComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
