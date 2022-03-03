import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-prod-setup',
  templateUrl: './add-prod-setup.component.html',
  styleUrls: ['./add-prod-setup.component.scss']
})
export class AddProdSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProdSetupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
