import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-job-codes-dialog-setup',
  templateUrl: './job-codes-dialog-setup.component.html',
  styleUrls: ['./job-codes-dialog-setup.component.scss']
})
export class JobCodesDialogSetupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<JobCodesDialogSetupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
