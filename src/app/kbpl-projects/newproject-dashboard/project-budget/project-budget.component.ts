import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from "@angular/router"
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { TreeService } from 'src/app/mrc-projects/project-planning/tree.service';
import { ProjectAddSiteComponent } from './project-add-site/project-add-site.component';
import { ProjectAddSowComponent } from './project-add-sow/project-add-sow.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ManaSiteComponent } from './mana-site/mana-site.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { Settings } from 'src/app/app.settings.model';
import { Chart } from 'angular-highcharts';
import { EditProjectBudgetComponent } from './edit-project-budget/edit-project-budget.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.scss']
})
export class ProjectBudgetComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;
  public excelData = [];
  displayDashboard = true;
  close = false;


  editBudget(){
    let dialogRef = this.dialog.open(EditProjectBudgetComponent, {
      height: 'auto',
      width: '1055px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  files = [
    {
      "isDefault": true,
      "siteId": 247,
      "siteName": "Site3",
      "label": "Sector 56",
      "quoteId": 251,
      "quoteNumber": "A-025022",
      "countryId": null,
      "countryName": "United States",
      "muncipalityId": null,
      "addressId": 794,
      "muncipalityName": null,
      "stateId": null,
      "stateName": "Michigan",
      "cityName": "Bay City",
      "zipCode": null,
      "googleDriveFolderId": "1Dn0Rbu-xkCIaRycMMhz1jsAfn7t4jVIo",
      "streetAddress": "2651 Hart Ridge Road",
      "createdBy": null,
      "createdDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "iconClass": "fas fa-map-marker-alt cs-map-icon",
      "isSite": true,
      "selectable": true,
      "totalBudgetAmount": null,
      "totalQuotedAmount": null,
      "totalExpensesAmount": null,
      "totalBudgetHours": null,
      "children": [
        {
          "sowId": 321,
          "sowName": "SOW 3",
          "label": "- Landscaping",
          "sowTypeId": 93,
          "quoteId": 251,
          "isSite": false,
          "siteId": 247,
          "siteName": "Site3",
          "iconClass": "fa fa-briefcase",
          "createdBy": null,
          "modifiedBy": null,
          "googleDriveFolderId": "13hiBHoue4JWeOyXD9Qe-KS207M8B0oft",
          "styleClass": "unAwardedClass",
          "iconStyle": "#8fc0f1",
          "isSavedInBudget": true,
          "isApproved": false,
          "createdDate": "0001-01-01T00:00:00",
          "modifiedDate": "0001-01-01T00:00:00",
          "isDefault": true,
          "sowNumber": "A",
          "sowStatus": 116,
          "statusOptionId": null,
          "remarks": null,
          "sowInvoiceType": 53,
          "sowDescription": null,
          "projectTypeName": "Internal",
          "projectStatusName": "Open",
          "feeStructureName": "Time & Expense",
          "poNumber": "",
          "quoteSpreadSheetId": "1Nby_ZM_x6oJxgxKYth6gcDhxKUiMeyJGNz0mQTa07uM",
          "sowDueDate": "2021-04-29T00:00:00",
          "budgetSowId": 173
        },
        {
          "label": "- Club House"
        }
      ],
      "siteSerialNumber": "001",
      "styleClass": "siteClass",
      "lat": null,
      "lng": null
    },
    {
      "label": "Lansdowne",
      "children": [
        {
          "label": "- Restaurant"
        },
        {
          "label": "- Parking Lot"
        }
      ]
    },
    {
      "label": "Newton",
      "children": [
        {
          "label": "- Tower A"
        },
        {
          "label": "- Tower B"
        },
        {
          "label": "- Tower C"
        },
        {
          "label": "- Common Facilities"
        }
      ]
    }
  ]

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
      "boqRef":"3.2",
      "ref": "1.1",
      "target_date": "21-06-2021",
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
      "boqRef":"1.2",
      "ref": "2.1",
      "target_date": "22-06-2021",
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
      "boqRef":"1.1",
      "ref": "3.1",
      "target_date": "23-06-2021",
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
      "boqRef":"4.6",
      "ref": "4.1",
      "target_date": "24-06-2021",
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
      "boqRef":"1.8",
      "ref": "5.1",
      "target_date": "25-06-2021",
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
      "boqRef":"2.2",
      "ref": "6.1",
      "target_date": "26-06-2021",
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
      "boqRef":"5.3",
      "ref": "7.1",
      "target_date": "27-06-2021",
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
      "boqRef":"3.7",
      "ref": "8.1",
      "target_date": "28-06-2021",
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
  public single: any[];
 public two: any[];
 public three: any[];
 public sizes: any[];
 public colors: any[];
 public width: any[];
 public countries: any[];
 public singles: any[];
 public multi: any[];
 public analytics: any[];
 public showLegend = true;
 public showLegends = false;
 public gradient = true;
 public showXAxis = true;
 public showYAxis = true;
 public showXAxisLabel = false;
 public xAxisLabel = 'Year';
 public showYAxisLabel = false;
 public yAxisLabel = 'Population';
 public filterToggle1:boolean;
 public colorScheme = {
   domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
 }; 
 public showLabels = true;
 public explodeSlices = false;
 public doughnut = false;
 public settings: Settings;
 public autoScale = true; 

  constructor(
    public treeService: TreeService,
    public dialog: MatDialog,
    public appSettings: AppSettings,
    public downloadExcelService: DownloadExcelService,
    private renderer: Renderer2,
    private elem: ElementRef,
    private router: Router,private titleService: Title
  ) {
    // this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'Paid',
        value: 30
      },
      {
        name: 'Due',
        value: 10
      },
      {
        name: 'Overdue',
        value: 5
      },
      {
        name: 'Unbilled',
        value: 55
      }
    ];
    const two = [
      {
        name: 'Manjeera Industries',
        value: 30
      },
      {
        name: 'Orion Group',
        value: 25
      },
      {
        name: 'Mantri Group',
        value: 10
      },
      {
        name: 'Asian Group',
        value: 15
      },
      {
        name: 'MNR Group',
        value: 20
      }
     
    ];
    const three = [
      {
        name: 'Manjeera Industries',
        value: 25
      },
      {
        name: 'Orion Group',
        value: 15
      },
      {
        name: 'Mantri Group',
        value: 9
      },
      {
        name: 'Asian Group',
        value: 30
      },
      {
        name: 'MNR Group',
        value: 21
      }
     
    ];
    Object.assign(this, {single,two,three}); 
   }

   public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

   ngOnInit() {
    this.hardcodeChart();
    this.setTitle("CPM | Budget");
  }
  items = [
    {site: 'Sector 56', contract:'2478BA', contractor: 'MRC', tasks: '12/27', budget: '7000', claimed: '6000', invoiced: '4000', paid: '3500', completion: '12%'}, 
    {site: 'Sector 56', contract:'3278BA', contractor: 'Becon', tasks: '21/42', budget: '10000', claimed: '8000', invoiced: '6000', paid: '4500', completion: '31%'}, 
    {site: 'Landsdowne', contract:'4578BA', contractor: 'Newton', tasks: '14/20', budget: '12000', claimed: '10000', invoiced: '8000', paid: '5000', completion: '44%'}, 
    {site: 'Common Facilitie', contract:'2578BA', contractor: 'Alibaba', tasks: '16/32', budget: '14000', claimed: '12000', invoiced: '10000', paid: '8000', completion: '58%'}, 
    {site: 'Landsdowne', contract:'6578BA', contractor: 'Salim', tasks: '17/35', budget: '16000', claimed: '14000', invoiced: '12000', paid: '11000', completion: '32%'},
    {site: 'Restaurant', contract:'2478BA', contractor: 'MRC', tasks: '12/27', budget: '7000', claimed: '6000', invoiced: '4000', paid: '3500', completion: '12%'}, 
    {site: 'Parking Lot', contract:'3278BA', contractor: 'Becon', tasks: '21/42', budget: '10000', claimed: '8000', invoiced: '6000', paid: '4500', completion: '31%'}, 
    {site: 'Tower A', contract:'4578BA', contractor: 'Newton', tasks: '14/20', budget: '12000', claimed: '10000', invoiced: '8000', paid: '5000', completion: '44%'}, 
    {site: 'Tower B', contract:'2578BA', contractor: 'Alibaba', tasks: '16/32', budget: '14000', claimed: '12000', invoiced: '10000', paid: '8000', completion: '58%'}, 
    {site: 'Tower C', contract:'6578BA', contractor: 'Salim', tasks: '17/35', budget: '16000', claimed: '14000', invoiced: '12000', paid: '11000', completion: '32%'},  
    {site: 'Total', contract:'--', contractor: '--', tasks: '80/156', budget: '59,000', claimed: '50,000', invoiced: '40,000', paid: '32,000', completion: '34%'}, 
  ];

  


  monthyPulseOfEmployees;
  disciplineChartMonthly;
  EmployeesOnboardingChart;
  tentureOfEmployees;
  conversationChart;
  disciplinePercentagePieChart;
  EmployeesOnboardedPieChart;
  hiringMonthly;
  receiveandpay;
  aeginganalysis;
  delaydistribution;
  
  hardcodeChart() {
    this.monthyPulseOfEmployees = new Chart({

      chart: {
        type: 'bar'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['Manjeera Industries/Collection', 'Orion Group/Collection', 'Mantri Group/Collection', 'Asian Group/Collection', 'MNR Group/Collection'],
        title: {
          text: null,
          style: {
            display: "none",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage %',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' %'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
     
      credits: {
        enabled: false
      },
      series: [ {
        name: 'Project',
        data: [70, 60, 80, 30, 50]
      }, {
        name: 'Collection',
        data: [80, 30, 60, 25, 70]
      }]
    
    });

    this. receiveandpay = new Chart({

      chart: {
        type: 'bar'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['Manjeera Industries', 'Orion Group', 'Mantri Group', 'Asian Group', 'MNR Group'],
        title: {
          text: null,
          style: {
            display: "none",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'RS.',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' RS.'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
     
      credits: {
        enabled: false
      },
      series: [ {
        name: 'Receivables',
        data: [7000, 6000, 8000, 3000, 5000]
      }, {
        name: 'Payables',
        data: [8000, 3000, 6000, 2500, 7000]
      }]
    
    });

    this.EmployeesOnboardingChart = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">{point.name} Rs. </span>: <b>{point.y}Cr</b>',
      },

      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        title: {
          text: "Rs",
        },
      },
      
    });
    this.disciplineChartMonthly = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      
      yAxis: {
        categories: [
          0,
          20,
          40,
          60,
          80,
          95
         
        ],
        title: {
          text: "Percentage",
        },
      },

      xAxis: {
        categories: [
         
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
         
        ],
      },
      series: [
        {
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [0, 40, 60, 75, 85, 95],
        },
      ],
    });
    this.hiringMonthly = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">{point.name} Number of hirings </span>: <b>{point.y}</b>',
      },
      yAxis: {
        title: {
          text: "Hirings",
        },
      },

      xAxis: {
        categories: [
         
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
         
        ],
      },
      series: [
        {
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [4, 8, 2, 4, 6, 3],
        },
      ],
    });


    this.tentureOfEmployees = new Chart({
      chart: {
        type: "bar",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: "%",
        },
      },
      xAxis: {
        categories: [
          "Manjeera Industries",
          "Orion Group",
          "Mantri Group",
          "Asian Group",
          "MNR Group",
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Manjeera Industries",
              y: 70,
            },
            {
              name: "Orion Group",
              y: 60,
            },
            {
              name: "Mantri Group",
              y: 30,
            },
            {
              name: "Asian Group",
              y: 80,
            },
            {
              name: "MNR Group",
              y: 50,
            },
          ],
        },
      ],
    });

    
    this. aeginganalysis = new Chart({
      chart: {
        type: "bar",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: "%",
        },
      },
      xAxis: {
        categories: [
          "Less than 30 Days",
          "30-60 Days",
          "60-90 Days",
          "90-180 Days",
          "More than 6 Months",
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Less than 30 Days",
              y: 70,
            },
            {
              name: "30-60 Days",
              y: 60,
            },
            {
              name: "60-90 Days",
              y: 30,
            },
            {
              name: "90-180 Days",
              y: 80,
            },
            {
              name: "More than 6 Months",
              y: 50,
            },
          ],
        },
      ],
    });
    this.delaydistribution = new Chart({
      chart: {
        type: "bar",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: "%",
        },
      },
      xAxis: {
        categories: [
          "Funds",
          "Delay in Procurement",
          "Labour Shortage",
          "Bad Planning",
          "Low Productivity",
          "Others"
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Funds",
              y: 25,
            },
            {
              name: "Delay in Procurement",
              y: 15,
            },
            {
              name: "Labour Shortage",
              y: 20,
            },
            {
              name: "Bad Planning",
              y: 20,
            },
            {
              name: "Low Productivity",
              y: 10,
            },
            {
              name: "Others",
              y: 10,
            },
          ],
        },
      ],
    });




    this.conversationChart = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">{point.name} count </span>: <b>{point.y}</b>',
      },

      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      series: [
        {
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [15, 40, 35, 30, 32, 25, 36, 20, 30, 28, 36, 39],
        },
      ],
    });
    this.disciplinePercentagePieChart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<br>{point.percentage:.1f} %",
            distance: -50,
          },
        },
      },
      series: [
        {
          type: "pie",
          // innerSize:'30%',
          name: "Share",
          data: [
            { name: "0 exceptions", y: 51, color: "rgb(26, 59, 204)" },
            { name: "1-2 exceptions", y: 23, color: "rgb(212, 87, 14)" },
            { name: "3-6 exceptions", y: 12, color: "grey" },
            { name: "6-10 exceptions", y: 7, color: "rgb(197, 185, 13)" },
            { name: "10+ exceptions", y: 7, color: "rgb(74, 120, 189)" },
          ],
        },
      ],
    });

    this.EmployeesOnboardedPieChart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        plotBackgroundImage: null,
        type: "pie",
      },
      credits: {
        enabled: false,
      },
      title: {
        text: null,
      },
      yAxis: {
        title: {
          text: "No of Employees",
        },
      },
      tooltip: {
        pointFormat: "{series.name}:<b>{point.percentage:.1f}%</b>",
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<br>{point.percentage:.1f} %",
            distance: -24,
          },
        },
      },
      series: [
        {
          type: "pie",
          
          name: "Share",
          data: [
            { name: "1st Qtr", y: 62, color: "rgb(26, 59, 204)" },
            { name: "2nd Qtr", y: 15, color: "rgb(212, 87, 14)" },
            { name: "3rd Qtr", y: 13, color: "grey" },
            { name: "4th Qtr", y: 10, color: "rgb(197, 185, 13)" },
          ],
        },
      ],
    });
  } 

  changeDisplay() {
    this.displayDashboard = !this.displayDashboard;
  }

  
  openEditMatDialog() {
    let dialogRef = this.dialog.open(EditCardComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  openAddContractDialog() {
    let dialogRef = this.dialog.open(AddContractComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public openSowDailog() {
    let dialogRef = this.dialog.open(ProjectAddSowComponent, {
      data: false,
      height: 'auto',
      width: '1055px',
      disableClose: true
    });
  }
  public openSiteDailog() {
    let dialogRef = this.dialog.open(ProjectAddSiteComponent, {
      data: false,
      height: 'auto',
      width: '1055px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

  public openTaskDailog() {
    let dialogRef = this.dialog.open(AddTaskComponent, {
      data: false,
      height: 'auto',
      width: '700px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


  public editDailog() {
    let dialogRef = this.dialog.open(EditTaskComponent, {
      data: false,
      height: 'auto',
      width: '400px',
      disableClose: true
    });
  }

  public openEditSite() {
    let dialogRef = this.dialog.open(ManaSiteComponent, {
      height: 'auto',
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  //template function
  dowloadBulkUploadDataTemplate() {
    this.excelData = []
    this.excelData.push({ 'Site': "site1", 'SOW': "4", 'Tasks': "12", 'Actions': "78", 'Job Code': "27", 'Unit Rate': "9", 'Hours': "690", 'Price': "$ 76,450" });
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'worksheet')
  }

  selectedItem(event: Event) {
    const treeElement = (<HTMLElement>event.target).innerHTML;

    const companies = ['Sector 56', 'Lansdowne', 'Newton'];
    const contracts = ['Landscaping', 'Club House', 'Restaurant', 'Parking Lot', 'Tower A', 'Tower B', 'Tower C', 'Common Facilities'];

    const isCompany = companies.filter(company => treeElement.includes(company)).length > 0 ? true : false;
    const isContract = contracts.filter(contract => treeElement.includes(contract)).length > 0 ? true : false;

    if (isCompany) {
      this.router.navigate(['/projects/newproject-dashboard/project-budget/company']);
    } else if (isContract) {
      this.router.navigate(['/projects/newproject-dashboard/project-budget/contract']);
    }
  }

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

}
