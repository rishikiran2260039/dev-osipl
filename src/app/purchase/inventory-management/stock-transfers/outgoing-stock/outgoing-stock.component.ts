import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApprovalComponent } from './approval/approval.component';
import { ForecloseDialogComponent } from './foreclose-dialog/foreclose-dialog.component';

@Component({
  selector: 'app-outgoing-stock',
  templateUrl: './outgoing-stock.component.html',
  styleUrls: ['./outgoing-stock.component.scss']
})
export class OutgoingStockComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle = false;

  taskData = [
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "Singrauli",
      "ref": 1,
      "target_date": 2,
      "totalBudgetCostSOW": 4,
      "totalBudgetHoursSOW": 3,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2101,
          "taskBudgetId": 1259,
          "jobCodeId": 96,
          "plannedHours": 2,
          "rate": 60,
          "total": 120,
          "notes": "Quote Preparation",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2102,
          "taskBudgetId": 1259,
          "jobCodeId": 99,
          "plannedHours": 3,
          "rate": 100,
          "total": 300,
          "notes": "Setting Budget & Scope Review",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2129,
          "taskBudgetId": 1259,
          "jobCodeId": 53,
          "plannedHours": 10,
          "rate": 75,
          "total": 750,
          "notes": "Enter labor related records",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "Relience",
      "ref": 2,
      "target_date": 3,
      "totalBudgetCostSOW": 4,
      "totalBudgetHoursSOW": 3,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2101,
          "taskBudgetId": 1259,
          "jobCodeId": 96,
          "plannedHours": 2,
          "rate": 60,
          "total": 120,
          "notes": "Quote Preparation",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2102,
          "taskBudgetId": 1259,
          "jobCodeId": 99,
          "plannedHours": 3,
          "rate": 100,
          "total": 300,
          "notes": "Setting Budget & Scope Review",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2129,
          "taskBudgetId": 1259,
          "jobCodeId": 53,
          "plannedHours": 10,
          "rate": 75,
          "total": 750,
          "notes": "Enter labor related records",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "IVY CompTech",
      "ref": 3,
      "target_date": 4,
      "totalBudgetCostSOW": 4,
      "totalBudgetHoursSOW": 3,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2101,
          "taskBudgetId": 1259,
          "jobCodeId": 96,
          "plannedHours": 2,
          "rate": 60,
          "total": 120,
          "notes": "Quote Preparation",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2102,
          "taskBudgetId": 1259,
          "jobCodeId": 99,
          "plannedHours": 3,
          "rate": 100,
          "total": 300,
          "notes": "Setting Budget & Scope Review",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2129,
          "taskBudgetId": 1259,
          "jobCodeId": 53,
          "plannedHours": 10,
          "rate": 75,
          "total": 750,
          "notes": "Enter labor related records",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "TCS",
      "ref": 5,
      "target_date": 5,
      "totalBudgetCostSOW": 6,
      "totalBudgetHoursSOW": 3,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2101,
          "taskBudgetId": 1259,
          "jobCodeId": 96,
          "plannedHours": 2,
          "rate": 60,
          "total": 120,
          "notes": "Quote Preparation",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2102,
          "taskBudgetId": 1259,
          "jobCodeId": 99,
          "plannedHours": 3,
          "rate": 100,
          "total": 300,
          "notes": "Setting Budget & Scope Review",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2129,
          "taskBudgetId": 1259,
          "jobCodeId": 53,
          "plannedHours": 10,
          "rate": 75,
          "total": 750,
          "notes": "Enter labor related records",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
  ]

  addJobCodeCustom(taskId) {
    //Pushing the new Job Code to the Task which is taken as parameter
    this.taskData.forEach((x) => {
      if (x.taskId == taskId) {
        x.Data.push({
          "jobCodeBudgetId": 2101,
          "taskBudgetId": 1259,
          "jobCodeId": 96,
          "plannedHours": 2,
          "rate": 60,
          "total": 120,
          "notes": "Quote Preparation",
          "isUserAdded": null,
          "isDeleted": false
        });
      }
    })
  }

  onTabOpen(e) {
    this.taskData[e.index]['selected'] = true;
  }
  onTabClose(e) {
    this.taskData[e.index]['selected'] = false;
  }

  approvalDialog(){
    this.dialog.open(ApprovalComponent, {
      height:'auto',
      width:'700px'
    })
  }

  foreclose(){
    this.dialog.open(ForecloseDialogComponent, {
      height:'auto',
      width:'700px'
    })
  }

}
