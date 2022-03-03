import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-store-incharge-setup',
  templateUrl: './store-incharge-setup.component.html',
  styleUrls: ['./store-incharge-setup.component.scss']
})
export class StoreInchargeSetupComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  values = [
    {name: 'John', email: 'John@yopmail.com', phone:'605-123-8497'}
  ];

  constructor(public dialog: MatDialog,public dialogRef:MatDialogRef<StoreInchargeSetupComponent>) { }

  ngOnInit() {
  }
  close():void{
    this.dialogRef.close()
  }

}
