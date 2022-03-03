import { ItemsdialogComponent } from './itemsdialog/itemsdialog.component';
import { AddRequisitionComponent } from './add-requisition/add-requisition.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss']
})
export class ProcurementComponent implements OnInit {
  filterToggle: boolean;

  items = [
    { "requestdate": "23-10-2020", "items": "5", "loggedby": "Robert", "status": "Approved", "approvedby": "Anna", "reqTitle": 'Brick' },
    { "requestdate": "12-11-2020", "items": "5", "loggedby": "Jasveer", "status": "Approved", "approvedby": "Singh", "reqTitle": 'Cement' },
    { "requestdate": "02-09-2020", "items": "5", "loggedby": "Parmeet", "status": "Pending", "approvedby": "Jerry", "reqTitle": 'Steel' },
    { "requestdate": "19-10-2020", "items": "5", "loggedby": "Harbajan", "status": "Issued", "approvedby": "Pratap", "reqTitle": 'Stone' },
    { "approved": true, "requestdate": "08-09-2020", "items": "5", "loggedby": "John", "status": "Indent", "approvedby": "Sachin", "reqTitle": 'Concrete' },
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddRequisitionComponent, {

      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openProjectDialog(item) {
    let dialogRef = this.dialog.open(AddRequisitionComponent, {
      data: item,
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openitemDialog() {
    let dialogRef = this.dialog.open(ItemsdialogComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


}
