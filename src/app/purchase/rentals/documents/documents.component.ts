import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddWorksHoursComponent } from '../add-works-hours/add-works-hours.component';
import { ViewInvoicesComponent } from '../view-invoices/view-invoices.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  items = [
    {balance:"50000",paid:"52000",billed:"250000",SOW:"Add",stnref: "STO/OTP-OM/OCT-19/10001",type:"Heavy Equipments", category: "Other", docType:"Insurence Document", description:"-", addedDate:"11-Nov-2021"},
    {balance:"58500",paid:"51000",billed:"250050",SOW:"View",stnref: "STO/OTP-OM/OCT-19/10001",type:"Hand and Power tools", category: "Other", docType:"Maintenance Report", description:"-", addedDate:"23-Jul-2021",},
    {balance:"85800",paid:"12000",billed:"258500",SOW:"View",stnref: "STO/OTP-OM/OCT-19/10001",type:"Consumables and Building Materials", category: "Other", docType:"Rental Contract", description:"-", addedDate:"31-Sep-2021",}
  ]


  openEditDialog(status) {
    let dialogRef = this.dialog.open(AddWorksHoursComponent, {
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

  openEditDialog1(status) {
    let dialogRef = this.dialog.open(ViewInvoicesComponent, {
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
