import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import {Location} from '@angular/common';
import { ApprovalbystageUnpublishedpopupComponent } from './approvalbystage-unpublishedpopup/approvalbystage-unpublishedpopup.component';
import { ItemsUnpublishPopupComponent } from './items-unpublish-popup/items-unpublish-popup.component';
import { RequisitionUnpublishPopupComponent } from './requisition-unpublish-popup/requisition-unpublish-popup.component';
// import { TermsPurchaseOrdersPopUpComponent } from './terms-purchase-orders-pop-up/terms-purchase-orders-pop-up.component';

@Component({
  selector: 'app-unpublished-po',
  templateUrl: './unpublished-po.component.html',
  styleUrls: ['./unpublished-po.component.scss']
})
export class UnpublishedPOComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog:MatDialog,private _location: Location) { }

  ngOnInit() {
  }
  filterToggle=false;
  items = [
    {potype:"Asset",gst:"12%",status:"Add",projectcode:"G505KA10012",Terms: "10", Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "2", items: "0",assets:"1",update:"12"},
    {potype:"Supply",gst:"5%", status:"View",projectcode:"H905KA10012",Terms: "12", Amount:"113000", poref: "OM/BHL/OCT/19-20/1078", Name:"HBVC Systems"    , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "11",assets:"0",update:"20"},
    {potype:"Asset",gst:"18%",status:"View",projectcode:"T05K1A10012",Terms: "16", Amount:"78000", poref: "OM/BHL/OCT/19-20/1079", Name:"ABC Contractors" ,podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "2", items: "0",assets:"3",update:"18"},
    {potype:"Supply",gst:"28%",status:"Add",projectcode:"A005KA10012",Terms: "18", Amount:"29000", poref: "OM/BHL/OCT/19-20/1080", Name:"HBVC Systems"    ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "4", items: "7",assets:"0",update:"19"},
    {potype:"Supply",gst:"12%",status:"View",projectcode:"X005KA10012",Terms: "19", Amount:"81000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractors" ,podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "6",assets:"0",update:"24"},
    
  ];
  addrequisition()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }
  openPO(){
    this.dialog.open(ApprovalbystageUnpublishedpopupComponent ,{
      height:'auto',
      width:'700px'
    });
  }  
  requsitionpop(){
    this.dialog.open(RequisitionUnpublishPopupComponent ,{
      height:'auto',
      width:'1000px'
    });
  }  
  backClicked() {
    this._location.back();
  }  
  uploaddoc()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }
  itemspop(){
    this.dialog.open(ItemsUnpublishPopupComponent,{
      height:'auto',
      width:'70%'
    });
  }    









































































  // //////previous code using the accordians/////

  // taskData = [
  //   {
  //     "taskBudgetId": 1259,
  //     "budgetId": 172,
  //     "taskId": 13,
  //     "taskName": "OM/REQ/SPA-JAN-19/1011",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 4,
  //     "totalBudgetHoursSOW": 3,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2101,
  //         "taskBudgetId": 1259,
  //         "jobCodeId": 96,
  //         "plannedHours": 2,
  //         "rate": 60,
  //         "total": 120,
  //         "notes": "Quote Preparation",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //       {
  //         "jobCodeBudgetId": 2102,
  //         "taskBudgetId": 1259,
  //         "jobCodeId": 99,
  //         "plannedHours": 3,
  //         "rate": 100,
  //         "total": 300,
  //         "notes": "Setting Budget & Scope Review",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //       {
  //         "jobCodeBudgetId": 2129,
  //         "taskBudgetId": 1259,
  //         "jobCodeId": 53,
  //         "plannedHours": 10,
  //         "rate": 75,
  //         "total": 750,
  //         "notes": "Enter labor related records",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       }
  //     ],
  //     "taskManageId": null
  //   },
  //   {
  //     "taskBudgetId": 1260,
  //     "budgetId": 172,
  //     "taskId": 1,
  //     "taskName": "OM/REQ/SPA-FEB-19/1055",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 60,
  //     "totalBudgetHoursSOW": 1,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2103,
  //         "taskBudgetId": 1260,
  //         "jobCodeId": 52,
  //         "plannedHours": 1,
  //         "rate": 60,
  //         "total": 60,
  //         "notes": "Client Contact",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       }
  //     ],
  //     "taskManageId": null
  //   },
  //   {
  //     "taskBudgetId": 1261,
  //     "budgetId": 172,
  //     "taskId": 9,
  //     "taskName": "OM/REQ/SPA-FEB-19/1055",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 160,
  //     "totalBudgetHoursSOW": 2,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2104,
  //         "taskBudgetId": 1261,
  //         "jobCodeId": 89,
  //         "plannedHours": 1,
  //         "rate": 60,
  //         "total": 60,
  //         "notes": "Initial items Setup",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //       {
  //         "jobCodeBudgetId": 2105,
  //         "taskBudgetId": 1261,
  //         "jobCodeId": 99,
  //         "plannedHours": 1,
  //         "rate": 100,
  //         "total": 100,
  //         "notes": "File Review",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       }
  //     ],
  //     "taskManageId": null
  //   },
  //   {
  //     "taskBudgetId": 1262,
  //     "budgetId": 172,
  //     "taskId": 10,
  //     "taskName": "OM/REQ/SPA-JAN-19/1012",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 335,
  //     "totalBudgetHoursSOW": 4,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2106,
  //         "taskBudgetId": 1262,
  //         "jobCodeId": 84,
  //         "plannedHours": 1,
  //         "rate": 110,
  //         "total": 110,
  //         "notes": "Initial Fieldwork",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //       {
  //         "jobCodeBudgetId": 2107,
  //         "taskBudgetId": 1262,
  //         "jobCodeId": 56,
  //         "plannedHours": 1,
  //         "rate": 55,
  //         "total": 55,
  //         "notes": "Initial Fieldwork",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //       {
  //         "jobCodeBudgetId": 2108,
  //         "taskBudgetId": 1262,
  //         "jobCodeId": 70,
  //         "plannedHours": 1,
  //         "rate": 85,
  //         "total": 85,
  //         "notes": "Monumentation",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //       {
  //         "jobCodeBudgetId": 2109,
  //         "taskBudgetId": 1262,
  //         "jobCodeId": 72,
  //         "plannedHours": 1,
  //         "rate": 85,
  //         "total": 85,
  //         "notes": "Audit",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       }
  //     ],
  //     "taskManageId": null
  //   },
  // ]

  // addJobCodeCustom(taskId) {
  //   //Pushing the new Job Code to the Task which is taken as parameter
  //   this.taskData.forEach((x) => {
  //     if (x.taskId == taskId) {
  //       x.Data.push({
  //         "jobCodeBudgetId": 2101,
  //         "taskBudgetId": 1259,
  //         "jobCodeId": 96,
  //         "plannedHours": 2,
  //         "rate": 60,
  //         "total": 120,
  //         "notes": "Quote Preparation",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       });
  //     }
  //   })
  // }

  // onTabOpen(e) {
  //   this.taskData[e.index]['selected'] = true;
  // }
  // onTabClose(e) {
  //   this.taskData[e.index]['selected'] = false;
  // }

  

}
