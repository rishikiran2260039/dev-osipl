import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-new-rack-setup',
  templateUrl: './add-new-rack-setup.component.html',
  styleUrls: ['./add-new-rack-setup.component.scss']
})
export class AddNewRackSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewRackSetupComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
