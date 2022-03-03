import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddCategoryAttdComponent } from './add-category-attd/add-category-attd.component';
import { UploadBoqAttdComponent } from './upload-boq-attd/upload-boq-attd.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  filterToggle: boolean;

  edit: true;
  excelData = []

  items = [
    {date: '15-07-2020', skill: 'Plumber', present: '432'}, 
    {date: '08-08-2020', skill: 'Electrician', present: '322'}, 
    {date: '12-02-2021', skill: 'Painter', present: '534'}, 
    {date: '16-04-2021', skill: 'Plumber', present: '350'}, 
    {date: '22-05-2022', skill: 'Electrician', present: '610'}, 
  ]

  constructor(
    public dialog: MatDialog,
    private alertService: AlertService,
    public downloadExcelService: DownloadExcelService) { }

  ngOnInit() {
  }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;




  public opencontactDialog() {
    let dialogRef = this.dialog.open(UploadBoqAttdComponent, {
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public opencontactDialog1() {
    let dialogRef = this.dialog.open(UploadBoqAttdComponent, {
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openAddCategory() {
    let dialogRef = this.dialog.open(AddCategoryAttdComponent, {
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openAddCategory2(items) {
    let dialogRef = this.dialog.open(AddCategoryAttdComponent, {
      data: items,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deleteUser() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }

  //template function
  dowloadBulkUploadDataTemplate() {
    this.excelData = []
    this.excelData.push({ 'Reference': "", 'Category': "", 'Level': "", 'Description': "", 'specification': "", 'Make': "", 'MOdel': "", 'Unit': "", "Quantity":"","Unit Rate":"","Labor":"" ,"Hourly Rate":"", "Hours":""});

    console.log(this.excelData);
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'worksheet')
  }

}
