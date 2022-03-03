import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { NewActionComponent } from './new-action/new-action.component';
import { UpdateSowComponent } from './update-sow/update-sow.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;
  jobcode = [
    { jobcode: "LPC1", rate: 55, status: true },
    { jobcode: "LPC2 Keeper", rate: 75, status: true },
    { jobcode: "EPC1", rate: 82, status: true },
    { jobcode: "EPC2", rate: 65, status: true },
    { jobcode: "CPC1", rate: 70, status: true },
    { jobcode: "CPC2", rate: 90, status: false },
    { jobcode: "OLS", rate: 50, status: true }

  ];
  taskData = [
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "Quote",
      "totalBudgetCostSOW": 1170,
      "totalBudgetHoursSOW": 15,
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
      "taskBudgetId": 1260,
      "budgetId": 172,
      "taskId": 1,
      "taskName": "Administration",
      "totalBudgetCostSOW": 60,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2103,
          "taskBudgetId": 1260,
          "jobCodeId": 52,
          "plannedHours": 1,
          "rate": 60,
          "total": 60,
          "notes": "Client Contact",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1261,
      "budgetId": 172,
      "taskId": 9,
      "taskName": "Research",
      "totalBudgetCostSOW": 160,
      "totalBudgetHoursSOW": 2,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2104,
          "taskBudgetId": 1261,
          "jobCodeId": 89,
          "plannedHours": 1,
          "rate": 60,
          "total": 60,
          "notes": "Initial Project Setup",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2105,
          "taskBudgetId": 1261,
          "jobCodeId": 99,
          "plannedHours": 1,
          "rate": 100,
          "total": 100,
          "notes": "File Review",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1262,
      "budgetId": 172,
      "taskId": 10,
      "taskName": "Field",
      "totalBudgetCostSOW": 335,
      "totalBudgetHoursSOW": 4,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2106,
          "taskBudgetId": 1262,
          "jobCodeId": 84,
          "plannedHours": 1,
          "rate": 110,
          "total": 110,
          "notes": "Initial Fieldwork",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2107,
          "taskBudgetId": 1262,
          "jobCodeId": 56,
          "plannedHours": 1,
          "rate": 55,
          "total": 55,
          "notes": "Initial Fieldwork",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2108,
          "taskBudgetId": 1262,
          "jobCodeId": 70,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Monumentation",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2109,
          "taskBudgetId": 1262,
          "jobCodeId": 72,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Audit",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1263,
      "budgetId": 172,
      "taskId": 15,
      "taskName": "Drafting",
      "totalBudgetCostSOW": 160,
      "totalBudgetHoursSOW": 2,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2110,
          "taskBudgetId": 1263,
          "jobCodeId": 70,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Drafting",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2111,
          "taskBudgetId": 1263,
          "jobCodeId": 55,
          "plannedHours": 1,
          "rate": 75,
          "total": 75,
          "notes": "Corrections",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1264,
      "budgetId": 172,
      "taskId": 12,
      "taskName": "Quality Control",
      "totalBudgetCostSOW": 175,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2112,
          "taskBudgetId": 1264,
          "jobCodeId": 100,
          "plannedHours": 1,
          "rate": 175,
          "total": 175,
          "notes": "Plan Check",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1265,
      "budgetId": 172,
      "taskId": 16,
      "taskName": "Management",
      "totalBudgetCostSOW": 100,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2113,
          "taskBudgetId": 1265,
          "jobCodeId": 99,
          "plannedHours": 1,
          "rate": 100,
          "total": 100,
          "notes": "Project Oversight & Scheduling",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1266,
      "budgetId": 172,
      "taskId": 14,
      "taskName": "Calculations",
      "totalBudgetCostSOW": 85,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2114,
          "taskBudgetId": 1266,
          "jobCodeId": 70,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Calculations",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    }
  ]

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }

  items=[
    {task:'Quote',action:'Prepare Quotation',jobCode:'QA',rate:'$60.00',planned:'0.50',dueDate:'2021-03-30',assignedTo:'James Smith',assigned:'0.50',actual:'	0.00',cost:'	0.00',worked:'	0.00',rem:'	0.00',Scheduled:'2021-02-04',date:'-',status:'Scheduled',submitted:'-',manage:''}
    
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
  public openSowDailog() {
    let dialogRef = this.dialog.open(UpdateSowComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }

  public openSowwDailog() {
    let dialogRef = this.dialog.open(NewActionComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }
}
