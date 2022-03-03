import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddIndustryComponent } from './add-industry/add-industry.component';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  items = [
    {vcStatus:true,name: 'Chemicals', code: 'CHEM', status: true},
    {vcStatus:true,name: 'Logistics and Chain Supply', code: 'LOGI', status: true},
    {vcStatus:true,name: 'Digital Marketing Agencies', code: '-', status: true},
    {vcStatus:true,name: 'Software Product Development', code: 'SOFT', status: true},
    {vcStatus:true,name: 'Import & Export', code: '-', status: true},
    {vcStatus:true,name: 'Financial Services', code: '-', status: true},
    {vcStatus:true,name: 'Ware Housing', code: '-', status: true},
    {vcStatus:true,name: 'Mining', code: '-', status: true},
    {vcStatus:true,name: 'Others', code: '-', status: true},
    {vcStatus:true,name: 'Immigration Consultants', code: '-', status: true},
    {vcStatus:true,name: 'Manuafacturing', code: '-', status: true},
    {vcStatus:true,name: 'Construction', code: 'CONS', status: true},
    {vcStatus:true,name: 'Real Estate', code: '-', status: true},
    {vcStatus:true,name: 'Pharma', code: '-', status: true},
    {vcStatus:true,name: 'Helath Care', code: '-', status: true},
    {vcStatus:true,name: 'Hospitality', code: '-', status: true},
    {vcStatus:true,name: 'Transporatation', code: '-', status: true},
    {vcStatus:true,name: 'Infrastructure', code: '-', status: true}
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
    let dialogRef = this.dialog.open(AddIndustryComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
