import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddupdateDialogComponent } from '../addupdate-dialog/addupdate-dialog.component';

@Component({
  selector: 'app-boq-line-item',
  templateUrl: './boq-line-item.component.html',
  styleUrls: ['./boq-line-item.component.scss']
})
export class BoqLineItemComponent implements OnInit {

  items=[
    { "serial": "5.2.1","Category" : "Earth Work", "Item" : "Slab", "unit" : "Nos","Quantity" : "18","Done":"12","Process": "5","Pending": "1","Last_Updated" : "15-11-2020"},
    { "serial": "5.2.2","Category" : "Electrical", "Item" : "Wires", "unit" : "Nos","Quantity" : "100","Done":"90","Process": "7","Pending": "3","Last_Updated" : "01-12-2019"},
    { "serial": "5.2.3","Category" : "Mechanical", "Item" : "Pipes", "unit" : "Nos","Quantity" : "50","Done":"35","Process": "8","Pending": "7","Last_Updated" : "24-01-2016"},
    { "serial": "5.2.4","Category" : "Civil", "Item" : "Tiles", "unit" : "Nos","Quantity" : "175","Done":"120","Process": "40","Pending": "15","Last_Updated" : "2-10-2027"},
    { "serial": "5.2.5","Category" : "Furniture", "Item" : "Benches", "unit" : "Nos","Quantity" : "40","Done":"25","Process": "5","Pending": "10","Last_Updated" : "09-06-2020"},
    ]

    filterToggle:boolean;
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
