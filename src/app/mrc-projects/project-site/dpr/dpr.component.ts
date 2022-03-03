
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-dpr',
  templateUrl: './dpr.component.html',
  styleUrls: ['./dpr.component.scss']
})
export class DprComponent implements OnInit {

  items=[
    { "serial": "5.2.1","Category" : "Furniture", "Item" : "Digging", "unit" : "No's","Quantity" : "18","Done":"12","Process": "6","Pending": "1","Last_Updated" : "15-11-2020"},
    { "serial": "5.2.2","Category" : "Electrical", "Item" : "Cleaning", "unit" : "No's","Quantity" : "100","Done":"90","Process": "10","Pending": "3","Last_Updated" : "01-12-2019"},
    { "serial": "5.2.3","Category" : "Plumbing", "Item" : "Plumbing", "unit" : "No's","Quantity" : "50","Done":"35","Process": "15","Pending": "7","Last_Updated" : "24-01-2016"},
    { "serial": "5.2.4","Category" : "Civil", "Item" : "Wiring", "unit" : "No's","Quantity" : "175","Done":"120","Process": "55","Pending": "15","Last_Updated" : "02-09-2027"},
    { "serial": "5.2.5","Category" : "Furniture", "Item" : "Carrying", "unit" : "No's","Quantity" : "40","Done":"25","Process": "15","Pending": "10","Last_Updated" : "9-06-2020"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean;

  public openAddDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent, {
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
