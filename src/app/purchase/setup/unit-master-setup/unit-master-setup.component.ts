import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUnitSetupComponent } from './add-unit-setup/add-unit-setup.component';

@Component({
  selector: 'app-unit-master-setup',
  templateUrl: './unit-master-setup.component.html',
  styleUrls: ['./unit-master-setup.component.scss']
})
export class UnitMasterSetupComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  items = [
    {code: 'Amps',des:'Amperes', status: true},
    {code: 'Bag',des:'Bag', status: true},
    {code: 'Box',des:'Box', status: true},
    {code: 'BRL',des:'Barrel', status: true},
    {code: 'Cu.cm',des:'Cubic Centimeter', status: true},
    {code: 'Cu.Ft',des:'Cubic Feet', status: true},
    {code: 'Cu.In',des:'Cubic Inch', status: true},
    {code: 'Cu.m',des:'Cubic Meter', status: true},
    {code: 'Cu.mm',des:'Cubic Millimeter', status: true},

  ]



  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddUnitSetupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}