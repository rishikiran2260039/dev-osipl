import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-item-master-setup',
  templateUrl: './add-item-master-setup.component.html',
  styleUrls: ['./add-item-master-setup.component.scss']
})
export class AddItemMasterSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddItemMasterSetupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
