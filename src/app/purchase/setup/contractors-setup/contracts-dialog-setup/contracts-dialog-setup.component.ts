import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contracts-dialog-setup',
  templateUrl: './contracts-dialog-setup.component.html',
  styleUrls: ['./contracts-dialog-setup.component.scss']
})
export class ContractsDialogSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContractsDialogSetupComponent>) { }

  ngOnInit() {
  }

  values = [
    {completion:"90%",contractno:"2478BA",contractname:"MRC",client:"Robert",startDate:"14-09-2020",targetDate:"12-12-2020",status:"In Progress"},
    {completion:"85%",contractno:"3478BA",contractname:"MPK",client:"John",startDate:"14-09-2020",targetDate:"12-12-2020",status:"Pending"},
    {completion:"70%",contractno:"4478BA",contractname:"Beacon",client:"Singh",startDate:"14-09-2020",targetDate:"12-12-2020",status:"Pending"}
  ]

  close(){
    this.dialogRef.close();
  }

}
