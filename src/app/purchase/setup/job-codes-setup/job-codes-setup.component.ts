import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { JobCodesDialogSetupComponent } from './job-codes-dialog-setup/job-codes-dialog-setup.component';

@Component({
  selector: 'app-job-codes-setup',
  templateUrl: './job-codes-setup.component.html',
  styleUrls: ['./job-codes-setup.component.scss']
})
export class JobCodesSetupComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  items = [
    {uom:"SQMTR",code: 'A0101010126', title: 'SUPPLY & INSTALLATION OF AEROCON PANELS', category: 'AC Work', rate: '500', status: true},
    {uom:"CM",code: 'E0202010157', title: 'SUPPLY AND ERRECTION OF PASSENGER ELEVATOR', category: 'Electrical Work', rate: '1000', status: true},
    {uom:"KG",code: 'F0522010218', title: 'SUPPLY, INSTALL, TEST & COMMISSION HVAC WORKS', category: 'Networking', rate: '1500', status: true},
    {uom:"MM",code: 'I0128010168', title: 'SUPPLY, INSTALL, TEST & COMMISSION CASSETTE TYPE SPLIT A/C', category: 'Grouting', rate: '1000', status: true},
    {uom:"NOS",code: 'A0202010171', title: 'SUPPLY, INSTALL, TEST & COMMISSION WINDOW A/C', category: 'AV Works', rate: '500', status: true},
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
    let dialogRef = this.dialog.open(JobCodesDialogSetupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}


}
