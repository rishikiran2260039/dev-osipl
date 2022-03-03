import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemInvoiceConsignmentComponent } from './add-item-invoice-consignment/add-item-invoice-consignment.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-invoicing-active-consignment',
  templateUrl: './invoicing-active-consignment.component.html',
  styleUrls: ['./invoicing-active-consignment.component.scss']
})
export class InvoicingActiveConsignmentComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog:MatDialog,private _location : Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
  items=[
    {stage:"Stage",creditperiod:"0",duedate:"10/02/2022",partnumber:"B229900003680",invoiced:"16,240",refrence:"OM/BHL/OCT/19-20/1077"},
    {stage:"Advance",creditperiod:"30",duedate:"15/02/2022",partnumber:"B229900003681",invoiced:"17,440",refrence:"	OM/BHL/OCT/19-20/1078"},
    {stage:"50% Done",creditperiod:"45",duedate:"15/02/2022",partnumber:"B229900003682",refrence:"OM/BHL/OCT/19-20/1079",invoiced:"15,520"},
    {stage:"Advance",creditperiod:"15",duedate:"15/02/2022",partnumber:"B229900003683",refrence:"OM/BHL/OCT/19-20/1081",invoiced:"18,860"},
    {stage:"Done",creditperiod:"30",duedate:"10/01/2022",partnumber:"B229900003684",refrence:"OM/BHL/OCT/19-20/1082",invoiced:"20,550"},

  ]

  public addnewitem(items) {
    let dialogRef = this.dialog.open(AddItemInvoiceConsignmentComponent, {
      data:items,
      height: 'auto',
      width: 'auto'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

   
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}