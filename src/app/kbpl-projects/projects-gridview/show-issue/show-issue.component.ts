import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-issue',
  templateUrl: './show-issue.component.html',
  styleUrls: ['./show-issue.component.scss']
})
export class ShowIssueComponent implements OnInit {
  items=[
    {"name":"SOW"},
    {"name":"BG Details"},
    {"name":"BOCW Details"},
    {"name":"Client Work Order"},
  ]
  isedit:boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialogRef: MatDialogRef<ShowIssueComponent>) { 
    
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
