import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-purchase-order-details-popup',
  templateUrl: './purchase-order-details-popup.component.html',
  styleUrls: ['./purchase-order-details-popup.component.scss']
})
export class PurchaseOrderDetailsPopupComponent implements OnInit {

  items=[
    {"name":"WOMAN OWNED BUSINESS"},
    {"name":"SPECIALLY ABLED OWNED BUSINESS"},
    {"name":"GOVT SUBSIDY OWNED BUSINESS "}
   
  ]
  isedit:boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<PurchaseOrderDetailsPopupComponent>) { 
    
  }

  ngOnInit() {
  }
  openProjectDialog()
  {
    this.isedit = !this.isedit;
  }
  close(): void {
    this.dialogRef.close();
  }

}
