import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddActivityComponent } from '../add-activity/add-activity.component';

@Component({
  selector: 'app-contract-summary',
  templateUrl: './contract-summary.component.html',
  styleUrls: ['./contract-summary.component.scss']
})
export class ContractSummaryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  addActivity()
  {
    let dialogRef = this.dialog.open(AddActivityComponent,{
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data =>{})
  }
}
