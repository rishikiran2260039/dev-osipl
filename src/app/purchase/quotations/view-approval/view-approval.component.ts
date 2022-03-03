import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-approval',
  templateUrl: './view-approval.component.html',
  styleUrls: ['./view-approval.component.scss']
})
export class ViewApprovalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ViewApprovalComponent>) { }

  ngOnInit() {
  }

  filterToggle : boolean = false;

  items = [
    {date:"03/11/19 7:36:11 PM", stage:"Requisitions", status:"Submitted", user:"Super Admin", remarks:"Test Store"},
    {date:"03/03/21 2:07:33 AM", stage:"Enquiry", status:"Reverted", user:"Super Admin", remarks:"Rejecting as the item is available at other pro..."},
    {date:"03/11/19 7:36:11 PM", stage:"Requisitions", status:"Submitted", user:"Super Admin", remarks:"Test Store"},
  ]

  close(){
    this.dialog.close();
  }

}
