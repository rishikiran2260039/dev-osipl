import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-new-floor-location-setup',
  templateUrl: './add-new-floor-location-setup.component.html',
  styleUrls: ['./add-new-floor-location-setup.component.scss']
})
export class AddNewFloorLocationSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewFloorLocationSetupComponent >) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
  

}
