import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IssueSlipDialogComponent } from '../issue-slip-dialog/issue-slip-dialog.component';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.scss']
})
export class ViewIssueComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  items = [
    {slNo:1, matIssue:"OM/MI/OCT-19/10005",issueDate:"15-Oct-2019", issuedBy:"NEERAJA AMASA", issuedTo:"MONIKA AMASA", noOfItems:0, fitment:"Update",fitmentStatus:"Delayed"}
  ]

  items2 = [
    {date:"15-Oct-2019, 06:06 PM",stage:"Material Issue Stage 1",reference:"MI: 10005", action:"Added",user:"Super Admin", remarks:"--"},
    {date:"15-Oct-2019, 06:06 PM",stage:"Material Issue Stage 1",reference:"Job Card: 233333", action:"Added",user:"Super Admin", remarks:"--"},
    {date:"06-Feb-2021, 04:30 AM",stage:"Material Issue Stage 1",reference:"	MI: 10005", action:"Updated",user:"Super Admin", remarks:"--"},
    
  ]

  updateIssue(item){
    this.dialog.open(IssueSlipDialogComponent, {
      data:item,
      height:'auto',
      width:'700px'
    });
  }

}
