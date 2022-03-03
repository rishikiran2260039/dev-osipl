import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddMakeMasterComponent } from './add-make-master/add-make-master.component';

@Component({
  selector: 'app-make-setup',
  templateUrl: './make-setup.component.html',
  styleUrls: ['./make-setup.component.scss']
})
export class MakeSetupComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  items = [
    {name: 'IGL', code: 'ACR', status: true},
    {name: 'Armstrong', code: 'BDR', status: true},
    {name: 'VANGYP', code: 'CLS', status: true},
    {name: 'GYPROC', code: 'GET', status: true},
    {name: 'Armstrong', code: 'OVH', status: true},
    {name: 'Armstrong', code: 'PVM', status: true},
    {name: 'GYPROC', code: 'RFD', status: true},
    {name: 'Acoustical', code: 'RNM', status: true},
    {name: 'Armstrong', code: 'SHM', status: true},
    {name: 'VANGYP', code: 'UCG', status: true},
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
    let dialogRef = this.dialog.open(AddMakeMasterComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
