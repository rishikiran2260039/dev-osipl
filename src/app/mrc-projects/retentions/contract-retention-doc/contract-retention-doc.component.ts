import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contract-retention-doc',
  templateUrl: './contract-retention-doc.component.html',
  styleUrls: ['./contract-retention-doc.component.scss']
})
export class ContractRetentionDocComponent implements OnInit {
  items = [
    { "name": "Document 1" },
    { "name": "Document 2" },
    { "name": "Document 3" }

  ]

  constructor(public dialogRef: MatDialogRef<ContractRetentionDocComponent>) {

  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
