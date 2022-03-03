import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-approval-by-stage-dialog',
  templateUrl: './approval-by-stage-dialog.component.html',
  styleUrls: ['./approval-by-stage-dialog.component.scss']
})
export class ApprovalByStageDialogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ApprovalByStageDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }


  items = [
    {date:"01/09/19 4:40:09 PM", stage:"Requisitions",status:"Submitted",user:"Super Admin",remarks:"Formats allowed: .jpg, .jpeg, .png, .doc, .docx & ...",doc:" Requisition Slip"},
    {date:"01/09/19 4:41:25 PM", stage:"Requisitions",status:"Approved",user:"Super Admin",remarks:"Test",doc:"Technical Engineer Approval"},
    {date:"01/09/19 4:44:29 PM", stage:"Enquiry",status:"Approved",user:"Super Admin",remarks:"Test",doc:" Requisition Slip"},
    {date:"01/18/19 4:29:45 PM", stage:"RFQ",status:"	Closed",user:"Super Admin",remarks:"Test",doc:" test"},
    {date:"01/18/19 5:30:00 PM", stage:"Quotation Review",status:"Reverted",user:"Super Admin",remarks:"-"},
    {date:"01/18/19 5:33:49 PM", stage:"RFQ",status:"Reverted",user:"Super Admin",remarks:"-"},

  ]

}
