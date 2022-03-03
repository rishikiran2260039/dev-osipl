import { MatDialog } from '@angular/material';
import { UploadBoqComponent } from './upload-boq/upload-boq.component';
import { Component, OnInit } from '@angular/core';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UpBoqComponent } from '../deviation-items/up-boq/up-boq.component';
import { DownloadExcelService } from 'src/app/download-excel.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  filterToggle: boolean;

  edit: true;
  excelData = []



  items = [
    { potential:"1","serial": "3.1", "category": "Electrical", "description": "Air Conditionar Blowner","qty": "670", "rate": "$60,000", "active": "Yes", "billed": "$50,000", "paid": "$40,500", "process": "12 ", "pending": "$9,500", "vcStatus": true },
    { potential:"2","serial": "4.1", "category": "Mechanical", "description": "Benches for guests","qty": "670", "rate": "$6000", "active": "Yes", "billed": "$4000", "paid": "$4000", "process": "12 ", "pending": "$0", "vcStatus": true },
    { potential:"2","serial": "5.1", "category": "Civil", "description": "Slab Work", "qty": "670", "rate": "$15,000", "active": "Yes", "billed": "$10,000", "paid": "$9000", "process": "12 ", "pending": "$1000", "vcStatus": true },
    { potential:"1","serial": "6.1", "category": "Plumbing", "description": "Water Pipe", "qty": "670", "rate": "$2000", "active": "Yes", "billed": "$1000", "paid": "$950", "process": "12 ", "pending": "$50", "vcStatus": true },
    { potential:"2","serial": "3.2", "category": "Electrical", "description": "Cooler", "qty": "670", "rate": "$8000", "active": "Yes", "billed": "$4000", "paid": "$4000", "process": "12 ", "pending": "$0", "vcStatus": false },

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
    let dialogRef = this.dialog.open(UploadBoqComponent, {
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public opencontactDialog1() {
    let dialogRef = this.dialog.open(UpBoqComponent, {
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openAddCategory() {
    let dialogRef = this.dialog.open(AddCategoryComponent, {
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openAddCategory2(items) {
    let dialogRef = this.dialog.open(AddCategoryComponent, {
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
  updateNewLead(item:any) {
    console.log(item, 'item');
    delete item['meeting_time']
    if (item['potential'] == 0) {
      item['potential'] = 1;
    } else if (item['potential'] == 1) {
      item['potential'] = 2;
    } else if (item['potential'] == 2) {
      item['potential'] = 1;
    }
  }
}
