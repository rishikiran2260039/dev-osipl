import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contract-add-sow',
  templateUrl: './contract-add-sow.component.html',
  styleUrls: ['./contract-add-sow.component.scss']
})
export class ContractAddSowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContractAddSowComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
