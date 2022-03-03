import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddContractComponent } from '../add-contract/add-contract.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  items = [
    {state: 'Landscaping', status: true},
    {state: 'Club House', status: true},
    {state: 'Parking lot', status: true}
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddContractComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
