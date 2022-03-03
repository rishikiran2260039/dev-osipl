import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddServiceCatDialogComponent } from '../add-service-cat-dialog/add-service-cat-dialog.component';
import { ServiceSubCatPopupComponent } from './service-sub-cat-popup/service-sub-cat-popup.component';


@Component({
  selector: 'app-service-sub-categories',
  templateUrl: './service-sub-categories.component.html',
  styleUrls: ['./service-sub-categories.component.scss']
})
export class ServiceSubCategoriesComponent implements OnInit {

  items = [
    {name: 'House wiring', code: 'EHW', status: true},
    {name: 'Electric Installations', code: 'ELS', status: true},
    {name: 'Drain Pipline', code: 'DPL', status: true},
    {name: 'Sanitary Fittings', code: 'SFT', status: true},
    {name: 'Supply lines', code: 'SLS', status: true},
    {name: 'Preventive Maintenance', code: 'PVM', status: true},
    {name: 'Welding Works', code: 'WLW', status: true},
    {name: 'Demolistion', code: 'DEM', status: true},
    {name: 'Ducts', code: 'DTS', status: true},
    {name: 'Concrete works', code: 'CON', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(ServiceSubCatPopupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
