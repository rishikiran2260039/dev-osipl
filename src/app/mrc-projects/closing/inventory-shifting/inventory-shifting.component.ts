import { AddstockComponent } from './addstock/addstock.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-inventory-shifting',
  templateUrl: './inventory-shifting.component.html',
  styleUrls: ['./inventory-shifting.component.scss']
})
export class InventoryShiftingComponent implements OnInit {
  items=[
    { "Date" : "15-11-2020","Type" : "Transfer","Done_By" : "John","Recipient" :"Main store", "Item_Name" : "Oil Filter","Item_Code" : "MRC/54","Quantity" : "12"},
    { "Date" : "02-10-2027","Type" : "DD","Done_By" : "Mark","Recipient" :"Sub Branch", "Item_Name" : "Engine","Item_Code" : "MRC/56","Quantity" : "19"},
    { "Date" : "24-01-2016","Type" : "Cash","Done_By" : "Lucy","Recipient" :"ABC store", "Item_Name" : "Gear Box","Item_Code" : "MRC/59","Quantity" : "20"},
    { "Date" : "01-12-2019","Type" : "Online Transfer","Done_By" : "Jeswin","Recipient" :"Main store", "Item_Name" : "Rods","Item_Code" : "MRC/70","Quantity" : "30"},
    { "Date" : "90-06-2020","Type" : "Transfer","Done_By" : "Sam","Recipient" :"Main store", "Item_Name" : "Oil Filter","Item_Code" : "MRC/38","Quantity" : "10"}
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean;

  public openAdd() {
    let dialogRef = this.dialog.open(AddstockComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
