import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemComponent } from './add-item/add-item.component';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.scss']
})
export class ItemMasterComponent implements OnInit {

  items = [
    {vcStatus:true, item: 'Wires', status: true},
    {vcStatus:true, item: 'Pipes', status: true},
    {vcStatus:true, item: 'Tables', status: true},
    {vcStatus:true, item: 'Cement', status: true},
    {vcStatus:true, item: 'Reinforcement Steel', status: true},
    {vcStatus:true, item: 'Electric wire(14-Gauge)', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddItemComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }


}
