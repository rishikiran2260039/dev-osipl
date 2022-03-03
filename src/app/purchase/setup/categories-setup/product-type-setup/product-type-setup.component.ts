import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddProductTypeMasterComponent } from './add-product-type-master/add-product-type-master.component';


@Component({
  selector: 'app-product-type-setup',
  templateUrl: './product-type-setup.component.html',
  styleUrls: ['./product-type-setup.component.scss']
})
export class ProductTypeSetupComponent implements OnInit {

  items = [
    {name: 'Plain', code: 'ACR', status: true},
    {name: 'Duraline Board', code: 'BDR', status: true},
    {name: 'MR Board', code: 'CLS', status: true},
    {name: 'Acoustical', code: 'GET', status: true},
    {name: 'Plain', code: 'OVH', status: true},
    {name: 'Duraline Board', code: 'PVM', status: true},
    {name: 'Plain', code: 'RFD', status: true},
    {name: 'Acoustical', code: 'RNM', status: true},
    {name: 'Duraline Board', code: 'SHM', status: true},
    {name: 'Acoustical', code: 'UCG', status: true},
  ]

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddProductTypeMasterComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
