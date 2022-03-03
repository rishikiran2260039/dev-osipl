import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddWarrantyComponent } from './add-warranty/add-warranty.component';

@Component({
  selector: 'app-asset-warranty',
  templateUrl: './asset-warranty.component.html',
  styleUrls: ['./asset-warranty.component.scss']
})
export class AssetWarrantyComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  items = [
    {assetclass:"Machinary",asset:"Drilling Machine",contype:"AMC",doc:"3",strtdate:"12-Jan-2022",expdate:"23-Feb-2022",provider:"TATA",history:"3",name: 'IGL', code: 'ACR', status: true},
    {assetclass:"Machinary",asset:"Crusher",contype:"Warranty",doc:"2",strtdate:"12-Jan-2022",expdate:"23-Feb-2022",provider:"Volvo",history:"3",name: 'Armstrong', code: 'BDR', status: true},
    {assetclass:"Vehicles",asset:"Mixer",contype:"Warranty",doc:"5",strtdate:"16-Jan-2022",expdate:"28-Feb-2022",provider:"TATA",history:"3",name: 'VANGYP', code: 'CLS', status: true},
    {assetclass:"Machinary",asset:"Loaders",contype:"Warranty",doc:"1",strtdate:"16-Jan-2022",expdate:"28-Feb-2022",provider:"Volvo",history:"3",name: 'GYPROC', code: 'GET', status: true},
    {assetclass:"Machinary",asset:"Scrapers",contype:"Warranty",doc:"3",strtdate:"16-Jan-2022",expdate:"28-Feb-2022",provider:"TATA",history:"3",name: 'Armstrong', code: 'OVH', status: true},
    {assetclass:"Machinary",asset:"Crusher",contype:"Warranty",doc:"5",strtdate:"16-Jan-2022",expdate:"28-Feb-2022",provider:"TATA",history:"3",name: 'Armstrong', code: 'PVM', status: true},
    {assetclass:"Machinary",asset:"Loaders",contype:"AMC",doc:"6",strtdate:"16-Jan-2022",expdate:"28-Feb-2022",provider:"TATA",history:"3",name: 'GYPROC', code: 'RFD', status: true},
    {assetclass:"Vehicles",asset:"Mixer",contype:"AMC",doc:"7",strtdate:"16-Jan-2022",expdate:"28-Feb-2022",provider:"TCS",history:"3",name: 'Acoustical', code: 'RNM', status: true},
    {assetclass:"Machinary",asset:"Scrapers",contype:"AMC",doc:"2",strtdate:"12-Jan-2022",expdate:"23-Feb-2022",provider:"TATA",history:"3",name: 'Armstrong', code: 'SHM', status: true},
    {assetclass:"Machinary",asset:"Drilling Machine",contype:"AMC",doc:"1",strtdate:"12-Jan-2022",expdate:"23-Feb-2022",provider:"TATA",history:"3",name: 'VANGYP', code: 'UCG', status: true},
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
    let dialogRef = this.dialog.open(AddWarrantyComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}
