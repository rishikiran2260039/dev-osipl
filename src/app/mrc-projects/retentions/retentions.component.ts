import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddContractRetentionComponent } from './add-contract-retention/add-contract-retention.component';
import { ContractRetentionDocComponent } from './contract-retention-doc/contract-retention-doc.component';
import { ContractRetentionGridcolumnComponent } from './contract-retention-gridcolumn/contract-retention-gridcolumn.component';
import { ContractRetentionLedgerComponent } from './contract-retention-ledger/contract-retention-ledger.component';

@Component({
  selector: 'app-retentions',
  templateUrl: './retentions.component.html',
  styleUrls: ['./retentions.component.scss']
})
export class RetentionsComponent implements OnInit {

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

    let dialogRef = this.dialog.open(ContractRetentionGridcolumnComponent, {

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

    let dialogRef = this.dialog.open(AddContractRetentionComponent, {

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

    let dialogRef = this.dialog.open(ContractRetentionDocComponent, {

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

    let dialogRef = this.dialog.open(ContractRetentionLedgerComponent, {

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
