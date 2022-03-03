import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-technical-setup',
  templateUrl: './technical-setup.component.html',
  styleUrls: ['./technical-setup.component.scss']
})
export class TechnicalSetupComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  values = [
    
  ];

  constructor(public dialog: MatDialog,public dialogRef:MatDialogRef<TechnicalSetupComponent>) { }

  ngOnInit() {
  }
  close():void{
    this.dialogRef.close()
  }

}
