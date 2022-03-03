import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-retention-ledger',
  templateUrl: './project-retention-ledger.component.html',
  styleUrls: ['./project-retention-ledger.component.scss']
})
export class ProjectRetentionLedgerComponent implements OnInit {

  items = [
    { "date": "15-May-2021","type": "Deposit", "amount": "$5000", "refrence": "SRF10023"  },
    { "date": "12-May-2021","type": "Recovery", "amount": "$20,000", "refrence": "SRM1021" }

  ]

  constructor(public dialogRef: MatDialogRef<ProjectRetentionLedgerComponent>) {

  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
