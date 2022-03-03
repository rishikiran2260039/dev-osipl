import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-approval-pop',
  templateUrl: './approval-pop.component.html',
  styleUrls: ['./approval-pop.component.scss']
})
export class ApprovalPopComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ApprovalPopComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }


  items = [
    {date:"01/09/19 4:40:09 PM", stage:"Requisitions",status:"Submitted",user:"Super Admin",remarks:"Store in charge"},
    {date:"01/09/19 4:41:25 PM", stage:"Requisitions",status:"Approved",user:"Super Admin",remarks:"Technical Engineer Approval"},
    {date:"01/09/19 4:44:29 PM", stage:"Enquiry",status:"Approved",user:"Super Admin",remarks:"Enquiry approval"},
    {date:"01/18/19 4:29:45 PM", stage:"RFQ",status:"	Closed",user:"Super Admin",remarks:"Rfq closing"},
    {date:"01/18/19 5:30:00 PM", stage:"Quotation Review",status:"Reverted",user:"Super Admin",remarks:"TH Revert"},
    {date:"01/18/19 5:33:49 PM", stage:"RFQ",status:"Reverted",user:"Super Admin",remarks:"test"},

  ]

}
