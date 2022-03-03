import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddSubSetupComponent } from './add-sub-setup/add-sub-setup.component';

@Component({
  selector: 'app-product-subcategories-setup',
  templateUrl: './product-subcategories-setup.component.html',
  styleUrls: ['./product-subcategories-setup.component.scss']
})
export class ProductSubcategoriesSetupComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  items = [
    {name: 'Commercial', code: 'ACR', status: true},
    {name: 'BWP', code: 'BDR', status: true},
    {name: 'Marine', code: 'CLS', status: true},
    {name: 'FLEXIPLY', code: 'GET', status: true},
    {name: 'BWR', code: 'OVH', status: true},
    {name: 'FLEXIPLY', code: 'PVM', status: true},
    {name: 'Painted', code: 'RFD', status: true},
    {name: 'Commercial', code: 'RNM', status: true},
    {name: 'BWP', code: 'SHM', status: true},
    {name: 'Commercial', code: 'UCG', status: true},
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
    let dialogRef = this.dialog.open(AddSubSetupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
