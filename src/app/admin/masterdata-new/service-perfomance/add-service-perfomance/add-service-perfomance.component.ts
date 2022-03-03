import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-service-perfomance',
  templateUrl: './add-service-perfomance.component.html',
  styleUrls: ['./add-service-perfomance.component.scss']
})
export class AddServicePerfomanceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddServicePerfomanceComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
