import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProjectRetentionComponent } from './add-project-retention/add-project-retention.component';
import { ProjectRetentionDocComponent } from './project-retention-doc/project-retention-doc.component';
import { ProjectRetentionGridcolumnComponent } from './project-retention-gridcolumn/project-retention-gridcolumn.component';
import { ProjectRetentionLedgerComponent } from './project-retention-ledger/project-retention-ledger.component';

@Component({
  selector: 'app-project-retention',
  templateUrl: './project-retention.component.html',
  styleUrls: ['./project-retention.component.scss']
})
export class ProjectRetentionComponent implements OnInit {

  filterToggle: boolean;
  filterState: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
  openGridColumnsDialog() {

    let dialogRef = this.dialog.open(ProjectRetentionGridcolumnComponent, {

      height: 'auto',
      width: '600px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  addRetentionDialog() {

    let dialogRef = this.dialog.open(AddProjectRetentionComponent, {

      height: 'auto',
      width: '600px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  addDocDialog() {

    let dialogRef = this.dialog.open(ProjectRetentionDocComponent, {

      height: 'auto',
      width: '600px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  addLedgerDialog() {

    let dialogRef = this.dialog.open(ProjectRetentionLedgerComponent, {

      height: 'auto',
      width: '900px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

}
