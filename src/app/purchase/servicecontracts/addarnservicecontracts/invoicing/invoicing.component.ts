import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemInvoiceConsignmentComponent } from 'src/app/purchase/material-management/consignment/active/add-consignment-active/invoicing-active-consignment/add-item-invoice-consignment/add-item-invoice-consignment.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { AddinvoicepopupComponent } from '../addinvoicepopup/addinvoicepopup.component';
import { InvoiceaddformComponent } from '../invoiceaddform/invoiceaddform.component';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  
  items=[
    {trans:"2,600",others:"1,000",duedate:"10/01/2022",paid:"17,248",ref:"",partnumber:"B229900003680",invoiced:"16,240",refrence:"OM/BHL/OCT/19-20/1077"},
    {trans:"22,100",others:"4,000",duedate:"13/01/2022",paid:"14,258",ref:"",partnumber:"B229900003681",invoiced:"17,440",refrence:"	OM/BHL/OCT/19-20/1078"},
    {trans:"22,100",others:"6,000",duedate:"13/01/2022",paid:"14,258",ref:"",partnumber:"B229900003682",refrence:"OM/BHL/OCT/19-20/1079",invoiced:"15,520"},
    {trans:"22,100",others:"2,000",duedate:"13/01/2022",paid:"14,258",ref:"",partnumber:"B229900003683",refrence:"OM/BHL/OCT/19-20/1081",invoiced:"18,860"},
    {trans:"2,100",others:"7,000",duedate:"10/01/2022",paid:"17,248",ref:"",partnumber:"B229900003684",refrence:"OM/BHL/OCT/19-20/1082",invoiced:"20,550"},

  ]


  uploaddoc()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }

  
  public addnewitem() {
    let dialogRef = this.dialog.open(AddinvoicepopupComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

 public additem(){
    let dialogRef = this.dialog.open(InvoiceaddformComponent, {
      height: 'auto',
      width: '700px'
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
