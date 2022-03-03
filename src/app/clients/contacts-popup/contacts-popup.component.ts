import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contacts-popup',
  templateUrl: './contacts-popup.component.html',
  styleUrls: ['./contacts-popup.component.scss']
})
export class ContactsPopupComponent implements OnInit {

  items=[
    {name:"David", desig:"developer", phone:"9888459875",email:"abhi@gmail.com"},
    {name:"Collin", desig:"team lead", phone:"9882942885",email:"012amit@gmail.com"},
    {name:"Warner", desig:"Architect", phone:"9888736885",email:"rajesh12@gmail.com"},
    {name:"Clive", desig:"developer", phone:"9888459875",email:"	abhi@gmail.com"},
    
  ]
  isedit:boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialogRef: MatDialogRef<ContactsPopupComponent>) { 
    
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
