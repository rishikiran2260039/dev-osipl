import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-emails-setup',
  templateUrl: './emails-setup.component.html',
  styleUrls: ['./emails-setup.component.scss']
})
export class EmailsSetupComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  values = [
    {name: 'Anji Vanguri', role: 'Store Incharge'}
  ];

  constructor(public dialog: MatDialog,public dialogRef:MatDialogRef<EmailsSetupComponent>) { }

  ngOnInit() {
  }
  close():void{
    this.dialogRef.close()
  }

}
