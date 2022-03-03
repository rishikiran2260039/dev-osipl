import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddEditRentalsComponent } from '../add-edit-rentals/add-edit-rentals.component';
import { IncomeComponent } from '../income/income.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  items = [
    {detail:"Heavy Eqipment",type:"Machinery",stnref: "STO/OTP-OM/OCT-19/10001",qty:"10"},
    {detail:"Hand and Power tools		",type:"Machinery",  stnref: "STO/OTP-OM/OCT-19/10004",qty:"10"},
    {detail:"Consumables and Building Materials			",type:"Scafolding",   stnref: "STO/OTP-OM/OCT-19/10005",qty:"10"},
    {detail:"Hand and Power tools		",type:"Machinery", stnref: "STO/OTP-OM/OCT-19/10007",qty:"10"}
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openEditDialog(status) {
    let dialogRef = this.dialog.open(IncomeComponent, {
      data: status,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

}

