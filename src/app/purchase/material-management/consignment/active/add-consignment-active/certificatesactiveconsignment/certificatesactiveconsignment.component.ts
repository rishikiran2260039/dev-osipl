import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCertConsignComponent } from './add-cert-consign/add-cert-consign.component';

@Component({
  selector: 'app-certificatesactiveconsignment',
  templateUrl: './certificatesactiveconsignment.component.html',
  styleUrls: ['./certificatesactiveconsignment.component.scss']
})
export class CertificatesactiveconsignmentComponent implements OnInit {

  items=[
    {"vendor":"Suresh Reddy","poref":"OM/BHL/OCT/19-20/1067","name":"Test Certificate"},
    {"vendor":"Kiran Reddy","poref":"OM/BHL/DEC/16-20/1177","name":"Warranty Certificate"},
    {"vendor":"Suresh Reddy","poref":"OM/BHL/OCT/19-20/3077","name":"Quality Certificate"},
    {"vendor":"Sunny Yadav","poref":"OM/BHL/OCT/19-20/1577","name":"Test Certificate"},
  ]
  isedit:boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog:MatDialog,) { 
    
  }

  ngOnInit() {
  }
  openProjectDialog()
  {
    this.isedit = !this.isedit;
  }
  public addnewitem(item) {
    let dialogRef = this.dialog.open(AddCertConsignComponent, {
      data:item,
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
