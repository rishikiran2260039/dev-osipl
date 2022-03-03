
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ShowdocsComponent } from './showdocs/showdocs.component';

@Component({
  selector: 'app-defect-liability',
  templateUrl: './defect-liability.component.html',
  styleUrls: ['./defect-liability.component.scss']
})
export class DefectLiabilityComponent implements OnInit {
  items=[
    { "Date" : "15-11-2020","Subject" : "Wires","Department" : "Electrical", "Sent_By" :"John","Received_By" :"Mark" , "Expected_Completion" : "20-11-2020","Completion_Percent"  :"50%","Total_Expenses" : "$10,000","Docs":"2"},
    { "Date" : "02-09-2019","Subject" : "Tables","Department" : "Furniture", "Sent_By" :"Mark","Received_By" :"Sam" , "Expected_Completion" : "22-10-2020","Completion_Percent"  :"75%","Total_Expenses" : "$23,000","Docs":"5"},
    { "Date" : "24-01-2016","Subject" : "Pipes","Department" : "Plumbing", "Sent_By" :"Jeswin","Received_By" :"Jenni" , "Expected_Completion" : "15-06-2018","Completion_Percent"  :"80%","Total_Expenses" : "$50,000","Docs":"6"},
    { "Date" : "01-12-2019","Subject" : "Cement","Department" : "Civil", "Sent_By" :"Lucy","Received_By" :"Mark" , "Expected_Completion" : "01-01-2020","Completion_Percent"  :"57%","Total_Expenses" : "$45,000","Docs":"4"},
    { "Date" : "09-06-2020","Subject" : "Switches","Department" : "Electrical", "Sent_By" :"Jenni","Received_By" :"Lucy" , "Expected_Completion" : "15-11-2020","Completion_Percent"  :"90%","Total_Expenses" : "$60,000","Docs":"3"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  filterToggle:boolean;
  
  public openAdd() {
    let dialogRef = this.dialog.open(AddDialogComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  public opendocdialog() {
    let dialogRef = this.dialog.open(ShowdocsComponent, {
    
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
