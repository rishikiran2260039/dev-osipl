import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectsforeclosemodalComponent } from '../projectsforeclosemodal/projectsforeclosemodal.component';
import { ProjectsitemmodalComponent } from '../projectsitemmodal/projectsitemmodal.component';
import { ProjectsreqmodalComponent } from '../projectsreqmodal/projectsreqmodal.component';

@Component({
  selector: 'app-po-published',
  templateUrl: './po-published.component.html',
  styleUrls: ['./po-published.component.scss']
})
export class PoPublishedComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle=false;

  items = [
    {balance:"90000",Paid:"80000",Billed:"98000",InVoice:"#435164034012",Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor" , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "7",update:"Update"},
    {balance:"10000",Paid:"74000",Billed:"199000",InVoice:"#435164089121",Amount:"189000", poref: "OM/BHL/OCT/19-20/1078", Name:"ABS Contractor" , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "8",update:"Update"},
    {balance:"7000",Paid:"23000",Billed:"97000",InVoice:"#435164090345",Amount:"84000", poref: "OM/BHL/OCT/19-20/1079", Name:"DLGV Contractor" , podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "9",update:"Update"},
    {balance:"4000",Paid:"11000",Billed:"69000",InVoice:"#435164077454",Amount:"65000", poref: "OM/BHL/OCT/19-20/1080", Name:"HEMAN Contractor" , podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "5", items: "7",update:"Update"},
    {balance:"24000",Paid:"19823",Billed:"120000",InVoice:"#435164081238",Amount:"98000", poref: "OM/BHL/OCT/19-20/1081", Name:"APT Contractor" , podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "9",update:"Update"},
    
  ];

  requsitionpop(){
    this.dialog.open(ProjectsreqmodalComponent ,{
      height:'auto',
      width:'1000px'
    });
  }    
  itemspop(){
    this.dialog.open(ProjectsitemmodalComponent,{
      height:'auto',
      width:'1000px'
    });
  }    
   foreclose(){
      this.dialog.open(ProjectsforeclosemodalComponent,{
        height:'auto',
        width:'700px'
      });
    }
    reviseresend(){
      // this.dialog.open(ReviseResendDialogComponent,{
      //   height:'auto',
      //   width:'400px'
      // });
    }








































































////////////////////previous data of accordians/////////////////
  // taskData = [
  //   {
  //     "taskBudgetId": 1259,
  //     "budgetId": 172,
  //     "taskId": 13,
  //     "taskName": "OM/REQ/SPA-FEB-19/1057",
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
  //     "taskName": "OM/REQ/SPA/MAR-21/1086",
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
  //         "notes": "Initial Project Setup",
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
  //     "taskName": "OM/REQ/SPA-FEB-19/1041",
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

  // Approvalbystage(){
  //   this.dialog.open(ApprovalByStageDialogComponent ,{
  //     height:'auto',
  //     width:'700px'
  //   });
  // }
  // foreclose(){
  //   this.dialog.open(ForeclosePopupComponent,{
  //     height:'auto',
  //     width:'700px'
  //   });
  // }
  // reviseresend(){
  //   this.dialog.open(ReviseResendDialogComponent,{
  //     height:'auto',
  //     width:'400px'
  //   });
  // }
  // changesmade(){
  //   this.dialog.open(ChangesmadepopPublishedComponent,{
  //     height:'auto',
  //     width:'700px'
  //   });
  // }
}
