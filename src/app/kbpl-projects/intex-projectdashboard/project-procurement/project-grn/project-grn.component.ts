import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-project-grn',
  templateUrl: './project-grn.component.html',
  styleUrls: ['./project-grn.component.scss']
})
export class ProjectGrnComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  /* taskData = [
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "Usha International Ltd",
      "VendorAlias":"Vendor Alias",
      "ref": "1",
      "ConsignmentsArrived":"Consignments Arrived",
      "target_date": "3",
      "NoofPOConsignments":"No. of PO's",
      "totalBudgetCostSOW": 3,
      "NoofInvoicesinConsignments":"No. of Invoices",
      "totalBudgetHoursSOW": 3,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "name": "Backhoe Loader Store",
          "conno": "OM/CON/APR-20/1001",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV7",
          "podate": "05-Apr-2019",
          "povalue": "37,845",
          "poBal": "37,845",
          "log":"5",
          "inv":"1"
        },
        {
          "name": "Bulldozer",
          "conno": "OM/CON/APR-20/1002",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV5",
          "podate": "06-jun-2019",
          "povalue": "40000",
          "poBal": "40000",
          "log":"6",
          "inv":"2"
        },
        {
          "name": "Crane",
          "conno": "OM/CON/APR-20/1003",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV6",
          "podate": "05-Apr-2020",
          "povalue": "45000",
          "poBal": "45000",
          "log":"7",
          "inv":"3"
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1260,
      "budgetId": 172,
      "taskId": 1,
      "taskName": "Rane Holdings Ltd",
      "VendorAlias":"Vendor Alias",
      "ref": "0",
      "ConsignmentsArrived":"Consignments Arrived",
      "target_date": "3",
      "NoofPOConsignments":"No. of PO's",
      "totalBudgetCostSOW": 4,
      "NoofInvoicesinConsignments":"No. of Invoices",
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "name": "Backhoe Loader Store",
          "conno": "OM/CON/APR-20/1001",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV7",
          "podate": "05-Apr-2019",
          "povalue": "37,845",
          "poBal": "37,845",
          "log":"5",
          "inv":"1"
        },
        {
          "name": "Bulldozer",
          "conno": "OM/CON/APR-20/1002",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV5",
          "podate": "06-jun-2019",
          "povalue": "40000",
          "poBal": "40000",
          "log":"6",
          "inv":"2"
        },
        {
          "name": "Crane",
          "conno": "OM/CON/APR-20/1003",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV6",
          "podate": "05-Apr-2020",
          "povalue": "45000",
          "poBal": "45000",
          "log":"7",
          "inv":"3"
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1261,
      "budgetId": 172,
      "taskId": 9,
      "taskName": "Minda Industries Ltd",
      "VendorAlias":"Vendor Alias",
      "ref": "0",
      "ConsignmentsArrived":"Consignments Arrived",
      "target_date": "3",
      "NoofPOConsignments":"No. of PO's",
      "totalBudgetCostSOW": 4,
      "NoofInvoicesinConsignments":"No. of Invoices",
      "totalBudgetHoursSOW": 2,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "name": "Backhoe Loader Store",
          "conno": "OM/CON/APR-20/1001",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV7",
          "podate": "05-Apr-2019",
          "povalue": "37,845",
          "poBal": "37,845",
          "log":"5",
          "inv":"1"
        },
        {
          "name": "Bulldozer",
          "conno": "OM/CON/APR-20/1002",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV5",
          "podate": "06-jun-2019",
          "povalue": "40000",
          "poBal": "40000",
          "log":"6",
          "inv":"2"
        },
        {
          "name": "Crane",
          "conno": "OM/CON/APR-20/1003",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV6",
          "podate": "05-Apr-2020",
          "povalue": "45000",
          "poBal": "45000",
          "log":"7",
          "inv":"3"
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1262,
      "budgetId": 172,
      "taskId": 10,
      "taskName": "Menon Bearings Ltd",
      "VendorAlias":"Vendor Alias",
      "ref": "0",
      "ConsignmentsArrived":"Consignments Arrived",
      "target_date": "2",
      "NoofPOConsignments":"No. of PO's",
      "totalBudgetCostSOW": 2,
      "NoofInvoicesinConsignments":"No. of Invoices",
      "totalBudgetHoursSOW": 4,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "name": "Backhoe Loader Store",
          "conno": "OM/CON/APR-20/1001",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV7",
          "podate": "05-Apr-2019",
          "povalue": "37,845",
          "poBal": "37,845",
          "log":"5",
          "inv":"1"
        },
        {
          "name": "Bulldozer",
          "conno": "OM/CON/APR-20/1002",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV5",
          "podate": "06-jun-2019",
          "povalue": "40000",
          "poBal": "40000",
          "log":"6",
          "inv":"2"
        },
        {
          "name": "Crane",
          "conno": "OM/CON/APR-20/1003",
          "status": "	Consignment In-Transit",
          "pono": "OM/BHL/JAN/18-19/1018/REV6",
          "podate": "05-Apr-2020",
          "povalue": "45000",
          "poBal": "45000",
          "log":"7",
          "inv":"3"
        }
      ],
      "taskManageId": null
    },
  ]

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

  onTabOpen(e) {
    this.taskData[e.index]['selected'] = true;
    
  }
  onTabClose(e) {
    this.taskData[e.index]['selected'] = false;
  }

  changesdialouge(){
    this.dialog.open(ChangesdialougeComponent,{
      height:'auto',
      width:'1100px'
    })
  }

  invoicepop(){
    this.dialog.open(TaxInvoicePopGrnComponent,{
      height:'auto',
      width:'1100px'
    })
  } */
  tableNumber: number = 0;

  openTable(value: number) {
    this.tableNumber = value;
  }




  taskData = [
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "Usha International Ltd",
      "ref": 12,
      "target_date": 166,
      "totalBudgetCostSOW": 4,
      "totalBudgetHoursSOW": "1,68,858.00",
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
        // {
        //   "jobCodeBudgetId": 2102,
        //   "taskBudgetId": 1259,
        //   "jobCodeId": 99,
        //   "plannedHours": 3,
        //   "rate": 100,
        //   "total": 300,
        //   "notes": "Setting Budget & Scope Review",
        //   "isUserAdded": null,
        //   "isDeleted": false
        // },
        // {
        //   "jobCodeBudgetId": 2129,
        //   "taskBudgetId": 1259,
        //   "jobCodeId": 53,
        //   "plannedHours": 10,
        //   "rate": 75,
        //   "total": 750,
        //   "notes": "Enter labor related records",
        //   "isUserAdded": null,
        //   "isDeleted": false
        // }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1260,
      "budgetId": 172,
      "taskId": 1,
      "taskName": "Rane Holdings Ltd",
      "ref": 5,
      "target_date": 20,
      "totalBudgetCostSOW": 60,
      "totalBudgetHoursSOW": "98,23,273.44",
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
      "taskName": "Minda Industries Ltd",
      "ref": 12,
      "target_date": 38,
      "totalBudgetCostSOW": 160,
      "totalBudgetHoursSOW": "1,49,923.72",
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
        // {
        //   "jobCodeBudgetId": 2105,
        //   "taskBudgetId": 1261,
        //   "jobCodeId": 99,
        //   "plannedHours": 1,
        //   "rate": 100,
        //   "total": 100,
        //   "notes": "File Review",
        //   "isUserAdded": null,
        //   "isDeleted": false
        // }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1262,
      "budgetId": 172,
      "taskId": 10,
      "taskName": "Menon Bearings Ltd",
      "ref": 1,
      "target_date": 3,
      "totalBudgetCostSOW": 335,
      "totalBudgetHoursSOW": "30,38,66,834.51",
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
        // {
        //   "jobCodeBudgetId": 2107,
        //   "taskBudgetId": 1262,
        //   "jobCodeId": 56,
        //   "plannedHours": 1,
        //   "rate": 55,
        //   "total": 55,
        //   "notes": "Initial Fieldwork",
        //   "isUserAdded": null,
        //   "isDeleted": false
        // },
        // {
        //   "jobCodeBudgetId": 2108,
        //   "taskBudgetId": 1262,
        //   "jobCodeId": 70,
        //   "plannedHours": 1,
        //   "rate": 85,
        //   "total": 85,
        //   "notes": "Monumentation",
        //   "isUserAdded": null,
        //   "isDeleted": false
        // },
        // {
        //   "jobCodeBudgetId": 2109,
        //   "taskBudgetId": 1262,
        //   "jobCodeId": 72,
        //   "plannedHours": 1,
        //   "rate": 85,
        //   "total": 85,
        //   "notes": "Audit",
        //   "isUserAdded": null,
        //   "isDeleted": false
        // }
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

  

  
  onPopupOpen(e) {
    this.taskData[e.index]['selectedd'] = true;
  }
  onPopupClose(e) {
    this.taskData[e.index]['selectedd'] = false;
  }

  popup(){
  //   this.dialog.open(ApprovalPopComponent,{
  //     height:'auto',
  //     width:'1100px'
  //   })
  
  }
 

  onDelOpen(e) {
    this.taskData[e.index]['selecteddel'] = true;
  }
  onDelClose(e) {
    this.taskData[e.index]['selecteddel'] = false;
  }

   




}

