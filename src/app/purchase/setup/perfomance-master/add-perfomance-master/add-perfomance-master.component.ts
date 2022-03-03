import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-perfomance-master',
  templateUrl: './add-perfomance-master.component.html',
  styleUrls: ['./add-perfomance-master.component.scss']
})
export class AddPerfomanceMasterComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddPerfomanceMasterComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
