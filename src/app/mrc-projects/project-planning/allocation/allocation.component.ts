import { AddAllocationComponent } from './add-allocation/add-allocation.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent implements OnInit {
filterToggle:boolean;
  items=[
    {"allocation":"12-09-2020","returnDate":"15-9-2021","issuedBy":"Raj","resourcetype":"Tool","resourcename":"Crane","quantity":"6","issuedto":"MPK","remarks":"Allocated for 1month time period"},
    {"allocation":"21-08-2020","returnDate":"15-9-2021","issuedBy":"Kiran","resourcetype":"Machinary","resourcename":"Screws","quantity":"54","issuedto":"IBW","remarks":"Allocated for 2months time period"},
    {"allocation":"18-07-2020","returnDate":"15-9-2021","issuedBy":"Ramya","resourcetype":"Plant","resourcename":"EarthMover","quantity":"8","issuedto":"SG","remarks":"Allocated for 20days time period"},
    {"allocation":"02-06-2020","returnDate":"15-9-2021","issuedBy":"Goswami","resourcetype":"Tool","resourcename":"Concrete Mixer","quantity":"7","issuedto":"Stone Factory","remarks":"Allocated for 6months time period"},
    {"allocation":"16-05-2020","returnDate":"15-9-2021","issuedBy":"Pratap","resourcetype":"Machinary","resourcename":"Power Crane","quantity":"3","issuedto":"Becon","remarks":"Allocated for 1year time period"}
    ]
    
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddAllocationComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
public opencontactDialog1(item) {
  let dialogRef = this.dialog.open(AddAllocationComponent, {
      data:item,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
