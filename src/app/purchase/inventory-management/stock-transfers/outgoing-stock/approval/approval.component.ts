import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  constructor(public dialog : MatDialogRef<ApprovalComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

  items = [
    {date:"12-Oct-2019, 09:53 PM",stage:"Enquiry - Stock Transfer Order Requests", status:"STO Submitted : 10003",remarks:"--"},
    {date:"16-Oct-2019, 02:35 PM",stage:"Stock Transfer Order Approvals", status:"Approved : 10003",remarks:"test"},
    {date:"31-Mar-2021, 08:40 PM",stage:"Stock Transfer Outgoing", status:"	STO Items Packing List Pr : 10003",remarks:"--"},
    {date:"12-Oct-2019, 09:53 PM",stage:"Stock Transfer Order Approvals", status:"STO Submitted : 10003",remarks:"test"},
  ]

}
