import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { TreeService } from 'src/app/mrc-projects/project-planning/tree.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddInvoicesComponent } from './add-invoices/add-invoices.component';

@Component({
  selector: 'app-add-payables',
  templateUrl: './add-payables.component.html',
  styleUrls: ['./add-payables.component.scss']
})
export class AddPayablesComponent implements OnInit {

  category: boolean = true;
  filterToggle: boolean = false;
  currentPage = 0;
  pageSize = 10;
  totalSize = 10;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  displayDashboard = true;

  filterState: string;
  public excelData = [];

  close = false;



  items = [ 
  {amount:'1270000',mode:'UPI',ref:'#OM/INV/1235-98',remarks:'Amount Debited',date:'	14-09-2019',time:'12:45'},
  {amount:'2391000',mode:'CARD TRANSACTION',ref:'#OM/INV/1235-97',remarks:'Amount Debited',date:'	13-09-2019',time:'19:20'},
  {amount:'3134000',mode:'UPI',ref:'#OM/INV/1235-96',remarks:'Account transfer may take maximum  2days',date:'	11-09-2019',time:'21:30'},
  {amount:'4683000',mode:'NEFT',ref:'#OM/INV/1235-99',remarks:'Amount Debited',date:'	16-09-2019',time:'23:20'},
  {amount:'9731000',mode:'RTGS',ref:'#OM/INV/1235-93',remarks:'Amount Debited',date:'	24-09-2019',time:'04:50'},
  {amount:'3652000',mode:'CARD TRANSACTION',ref:'#OM/INV/1235-92',remarks:'Account transfer may take maximum  2days',date:'	30-09-2019',time:'18:15'},
  ];



 public filterToggle1:boolean;
 public colorScheme = {
   domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
 }; 
 public showLabels = true;
 public explodeSlices = false;
 public doughnut = false;
//  public settings: Settings;
 public autoScale = true; 

  constructor(
    public treeService: TreeService,
    public dialog: MatDialog,
    public appSettings: AppSettings,
    public downloadExcelService: DownloadExcelService,
    private router: Router,
    private alertService: AlertService
  ) { 
  }
  
  ngOnInit() {
  }
  back(){
    window.history.back();
    }


  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

  // public openAddCategory() {
  //   let dialogRef = this.dialog.open(ProvisionsComponent, {
  //     height: 'auto',
  //     width: '600px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  public openpayments(user){
    let dialogRef = this.dialog.open(AddInvoicesComponent, {
      data:user,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }




  deleteUser(newsId){
    this.alertService.createAlert('News Deleted successfully', 1);
}

saveStatus(data) {
    this.alertService.createAlert('Successfully saved.', 1);
}
}

