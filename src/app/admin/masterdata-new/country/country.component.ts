import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddCountryComponent } from './add-country/add-country.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  items = [
    {vcStatus:true,country: 'Bangladesh', state: '4',status: true},
    {vcStatus:true,country: 'India', state: '3',status: true},
    {vcStatus:true,country: 'Israel', state: '12', status: true},
    {vcStatus:true,country: 'East Africa', state: '10', status: true},
    {vcStatus:true,country: 'West Africa', state: '2',status: true},
    {vcStatus:true,country: 'Algeria', state: '4',status: true},
    {vcStatus:true,country: 'Morocco', state: '5',status: true},
    {vcStatus:true,country: 'Senegal', state: '3',status: true},
    {vcStatus:true,country: 'Nigeria', state: '7',status: true},
    {vcStatus:true,country: 'Egypt', state: '9', status: true},
    {vcStatus:true,country: 'Bahrain', state: '9',status: true},
    {vcStatus:true,country: 'Balkans', state: '8',status: true},
    {vcStatus:true,country: 'Portugal', state: '5',status: true},
    {vcStatus:true,country: 'Brazil', state: '7',status: true},
    {vcStatus:true,country: 'Oman', state: '4', status: true}
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
    let dialogRef = this.dialog.open(AddCountryComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
