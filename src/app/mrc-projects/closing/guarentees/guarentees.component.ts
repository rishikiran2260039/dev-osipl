import { AddGuarenteeComponent } from './add-guarentee/add-guarentee.component';
import { ShowIssueComponent } from './../../project-site/issues/show-issue/show-issue.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowDocsComponent } from 'src/app/shared/show-docs/show-docs.component';
ShowIssueComponent
@Component({
  selector: 'app-guarentees',
  templateUrl: './guarentees.component.html',
  styleUrls: ['./guarentees.component.scss']
})
export class GuarenteesComponent implements OnInit {

  items=[
    {"security":"General Protection","returndate":"01-11-2020","amountdue":"$50,000","amountreceived":"$50,000","balance":"$0","disbursal":"25-11-2020","delay":"25","payment":"15-11-2020","docs":"3"},
    {"security":"Insurance Protection","returndate":"02-11-2020","amountdue":"$150,000","amountreceived":"$100,000","balance":"$50,000","disbursal":"26-11-2020","delay":"26","payment":"16-11-2020","docs":"1"},
    {"security":"Material Protection","returndate":"03-11-2020","amountdue":"$75,000","amountreceived":"$50,000","balance":"$15,000","disbursal":"27-11-2020","delay":"27","payment":"17-11-2020","docs":"2"},
    {"security":"Quality Protection","returndate":"04-11-2020","amountdue":"$145,000","amountreceived":"$130,000","balance":"$15,000","disbursal":"28-11-2020","delay":"28","payment":"18-11-2020","docs":"1"},
    {"security":"Billing Protection","returndate":"05-11-2020","amountdue":"$120,000","amountreceived":"$115,000","balance":"$5,000","disbursal":"29-11-2020","delay":"29","payment":"19-11-2020","docs":"2"},
    ]
    
    
    constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean;

  public opendocs() {
    let dialogRef = this.dialog.open(ShowDocsComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openAdd() {
    let dialogRef = this.dialog.open(AddGuarenteeComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
