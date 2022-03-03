import { AddWorkComponent } from './add-work/add-work.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit {
filterToggle:boolean;
  items=[
    {"serial":"1.1","vendor":"M/s Power Solutions","item":"Electrical Switches","description":"Laying and Fixing of all wiring","unit":"Pcs","rate":"526","date":"12/09/2020","status":"Approved","remarks":"The MD will Approve WO."},
    {"serial":"2.1","vendor":"Bharath Powers","item":"Benches","description":"For Laying and to sit","unit":"Pcs","rate":"1000","date":"22/07/2020","status":"Approved","remarks":"The MD will Approve WO."},
    {"serial":"3.1","vendor":"Tata Steels","item":"Pipes","description":"Fixing water problems","unit":"Pcs","rate":"600","date":"18/09/2020","status":"Declined","remarks":"The MD will Decline the WO."},
    {"serial":"4.1","vendor":"First Choice Pvt Ltd","item":"Bricks","description":"To Build the walls","unit":"Pcs","rate":"300","date":"02/08/2020","status":"Approved","remarks":"The MD will Approve the WO."},
    {"serial":"5.1","vendor":"Relience Steel","item":"Cement","description":"For Slab Construction","unit":"Bags","rate":"700","date":"27/09/2020","status":"Approved","remarks":"The MD will Approve the WO."},
    ]
    
    
    


  
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddWorkComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

}
