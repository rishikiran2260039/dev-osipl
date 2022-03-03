import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRegionComponent } from '../add-region/add-region.component';
import { AddStateComponent } from '../add-state/add-state.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  dialogRef: any;

 
  items = [
    {state: 'Limbourg', city:'0', status: true},
    {state: 'Luxembourg', city:'1', status: true},
    {state: 'Hainut', city:'0', status: true},
    {state: 'Namur', city:'0', status: true},
    {state: 'Brabant Walloon', city:'0', status: true},
   
    {state: 'Liege', city:'0', status: true},

   
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddRegionComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
