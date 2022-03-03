import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddupdateDialogComponent } from 'src/app/mrc-projects/project-site/dlr/addupdate-dialog/addupdate-dialog.component';

@Component({
  selector: 'app-addreturn',
  templateUrl: './addreturn.component.html',
  styleUrls: ['./addreturn.component.scss']
})
export class AddreturnComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddupdateDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}
