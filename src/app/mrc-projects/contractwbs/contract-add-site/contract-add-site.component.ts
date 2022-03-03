import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contract-add-site',
  templateUrl: './contract-add-site.component.html',
  styleUrls: ['./contract-add-site.component.scss']
})
export class ContractAddSiteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContractAddSiteComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
