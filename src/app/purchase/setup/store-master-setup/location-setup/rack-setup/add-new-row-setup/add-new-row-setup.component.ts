import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-new-row-setup',
  templateUrl: './add-new-row-setup.component.html',
  styleUrls: ['./add-new-row-setup.component.scss']
})
export class AddNewRowSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewRowSetupComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
