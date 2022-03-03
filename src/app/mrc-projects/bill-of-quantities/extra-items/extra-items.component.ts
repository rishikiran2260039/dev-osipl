import { AddExtraitemComponent } from './add-extraitem/add-extraitem.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-extra-items',
  templateUrl: './extra-items.component.html',
  styleUrls: ['./extra-items.component.scss']
})
export class ExtraItemsComponent implements OnInit {


  filterToggle: boolean;

  items = [
    { "serial": "3.1", "category": "Electrical", "description": "Air Conditionar Blowner", "unit": "120/173", "qty": "670", "rate": "$60,000", "active": "Yes", "billed": "$50,000", "paid": "$40,500", "process": "12 ", "pending": "$9,500", "vcStatus": true },
    { "serial": "4.1", "category": "Mechanical", "description": "Benches for guests", "unit": "350/456", "qty": "670", "rate": "$6000", "active": "Yes", "billed": "$4000", "paid": "$4000", "process": "12 ", "pending": "$0", "vcStatus": true },
    { "serial": "5.1", "category": "Civil", "description": "Slab Work", "unit": "220/150", "qty": "670", "rate": "$15,000", "active": "Yes", "billed": "$10,000", "paid": "$9000", "process": "12 ", "pending": "$1000", "vcStatus": true },
    { "serial": "6.1", "category": "Plumbing", "description": "Water Pipe", "unit": "198/120", "qty": "670", "rate": "$2000", "active": "Yes", "billed": "$1000", "paid": "$950", "process": "12 ", "pending": "$50", "vcStatus": true },
    { "serial": "3.2", "category": "Electrical", "description": "Cooler", "unit": "150/280", "qty": "670", "rate": "$8000", "active": "Yes", "billed": "$4000", "paid": "$4000", "process": "12 ", "pending": "$0", "vcStatus": false },

  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddExtraitemComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public opencontactDialog1(item) {
    let dialogRef = this.dialog.open(AddExtraitemComponent, {
      data: item,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
