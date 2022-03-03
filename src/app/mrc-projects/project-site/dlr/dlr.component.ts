import { AddupdateDialogComponent } from './addupdate-dialog/addupdate-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dlr',
  templateUrl: './dlr.component.html',
  styleUrls: ['./dlr.component.scss']
})
export class DlrComponent implements OnInit {

  items=[
    { "serial": "5.2.1","Category" : "Furniture", "Item" : "Labour Prod", "unit" : "No's","Quantity" : "18","Done":"12","Process": "6","Pending": "1","Last_Updated" : "15-Nov-2020"},
    { "serial": "5.2.2","Category" : "Electrical", "Item" : "Bandhani(Scaffolder)", "unit" : "No's","Quantity" : "100","Done":"90","Process": "10","Pending": "3","Last_Updated" : "1-Dec-2019"},
    { "serial": "5.2.3","Category" : "Plumbing", "Item" : "Barbender", "unit" : "No's","Quantity" : "50","Done":"35","Process": "15","Pending": "7","Last_Updated" : "24-Jan-2016"},
    { "serial": "5.2.4","Category" : "Civil", "Item" : "Welder(Shuttering)", "unit" : "No's","Quantity" : "175","Done":"120","Process": "55","Pending": "15","Last_Updated" : "2-Sep-2027"},
    { "serial": "5.2.5","Category" : "Furniture", "Item" : "House Keeping", "unit" : "No's","Quantity" : "40","Done":"25","Process": "15","Pending": "10","Last_Updated" : "9-Jun-2020"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openAddUpdate() {
    let dialogRef = this.dialog.open(AddupdateDialogComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
