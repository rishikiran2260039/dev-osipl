import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddSiteComponent } from './add-site/add-site.component';

@Component({
  selector: 'app-site-master',
  templateUrl: './site-master.component.html',
  styleUrls: ['./site-master.component.scss']
})
export class SiteMasterComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  items = [
    {vcStatus:true,site: 'Sector 56', contract: '2',status: true},
    {vcStatus:true,site: 'Lanesdowne', contract: '2',status: true},
    {vcStatus:true,site: 'Newton', contract: '4',status: true}
  ]

  constructor(public dialog: MatDialog, private alertService: AlertService) { }

  ngOnInit() {
  }
  deleteUser(){
    this.alertService.createAlert('Successfully deleted.', 1);
}

saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddSiteComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
