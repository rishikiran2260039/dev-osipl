import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-supply-perfomance',
  templateUrl: './add-supply-perfomance.component.html',
  styleUrls: ['./add-supply-perfomance.component.scss']
})
export class AddSupplyPerfomanceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSupplyPerfomanceComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
