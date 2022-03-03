import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addvendordocs',
  templateUrl: './addvendordocs.component.html',
  styleUrls: ['./addvendordocs.component.scss']
})
export class AddvendordocsComponent implements OnInit {

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
  constructor(public dialogRef: MatDialogRef<AddvendordocsComponent>) { 
    
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
