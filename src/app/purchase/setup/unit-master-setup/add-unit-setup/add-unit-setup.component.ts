import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-unit-setup',
  templateUrl: './add-unit-setup.component.html',
  styleUrls: ['./add-unit-setup.component.scss']
})
export class AddUnitSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddUnitSetupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
