import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-sub-setup',
  templateUrl: './add-sub-setup.component.html',
  styleUrls: ['./add-sub-setup.component.scss']
})
export class AddSubSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSubSetupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
