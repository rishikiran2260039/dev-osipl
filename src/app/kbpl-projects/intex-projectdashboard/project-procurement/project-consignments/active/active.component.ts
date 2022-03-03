import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddConsignmentsComponent } from '../add-consignments/add-consignments.component';
import { ConsignitemmodalComponent } from '../consignitemmodal/consignitemmodal.component';
import { ConsignpurchasemodalComponent } from '../consignpurchasemodal/consignpurchasemodal.component';
import { GrnpopupProjectComponent } from '../grnpopup-project/grnpopup-project.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  tableNumber: number = 0;
  filterToggle=false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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

  // approvaldialog(){
  //   this.dialog.open(ApprovalPopComponent,{
  //     height:'auto',
  //     width:'1100px'
  //   })
  // }


  
  onPopupOpen(e) {
    this.taskData[e.index]['selectedd'] = true;
  }
  onPopupClose(e) {
    this.taskData[e.index]['selectedd'] = false;
  }

  popup(){
    // this.dialog.open(ApprovalPopComponent,{
    //   height:'auto',
    //   width:'1100px'
    // })
  
  }

Itempop(){
  this.dialog.open(ConsignitemmodalComponent,{
    height:'auto',
    width:'1100px'
  })

}
  
  Purchasepop(){
    this.dialog.open(ConsignpurchasemodalComponent,{
      height:'auto',
      width:'1100px'
    })
  
  }

  onDelOpen(e) {
    this.taskData[e.index]['selecteddel'] = true;
  }
  onDelClose(e) {
    this.taskData[e.index]['selecteddel'] = false;
  }

  del(){
  //   this.dialog.open(ApprovalPopComponent,{
  //     height:'auto',
  //     width:'1100px'
  //   })
  
  }

  openTable(value: number) {
    this.tableNumber = value;
  }

  public addconsignments(item) {
    // let dialogRef = this.dialog.open(AddConsignmentsComponent, {
    //   data:item,
    //   height: 'auto',
    //   width: '800px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }

  grnpopup($event) {
    if ($event.target.checked === true) {
      this.dialog.open(GrnpopupProjectComponent,{
        width:'1100px',
        height:'200px',
      })
      }
      else{
       return false;
      }

}

items = [
  { consignment_reference: "DEL1037272/768", Date_Shipped: "16-07-2021", con_Items: "5",Status: 1,stageColour: '#00ff0040',Purchase_Orders:"3",Delivery_Date:"09-08-2021",Invoice:"1",Con_Details:"view"},
  { consignment_reference: "DEL1037272/786", Date_Shipped: "26-07-2021", con_Items: "2",Status: 2,stageColour: '#C0C0C0',Purchase_Orders:"9",Delivery_Date:"04-08-2021",Invoice:"4",Con_Details:"view"},
  { consignment_reference: "DEL1037272/732", Date_Shipped: "24-07-2021", con_Items: "6",Status: 3,stageColour: '#87CEFA',Purchase_Orders:"7",Delivery_Date:"01-08-2021",Invoice:"3",Con_Details:"view"},
  { consignment_reference: "DEL1037272/616", Date_Shipped: "09-07-2021", con_Items: "8",Status: 4,stageColour: '#FFA50069',Purchase_Orders:"3",Delivery_Date:"02-08-2021",Invoice:"8",Con_Details:"view"},
  { consignment_reference: "DEL1037272/321", Date_Shipped: "10-07-2021", con_Items: "9",Status: 5,stageColour: '#ee420dfb',Purchase_Orders:"2",Delivery_Date:"03-08-2021",Invoice:"4",Con_Details:"view"},
  
  
];
statusOptions = [
  {value:1, name: 'In Transit', colorCode: '#00ff0040'},
  {value:2, name: 'At Destination', colorCode: '#C0C0C0'},
  {value:3, name: 'Out of Deleivery', colorCode: '#87CEFA'},
  {value:4, name: 'Delivered', colorCode: '#FFA50069'},
  {value:5, name: 'Returned', colorCode: '#ee420dfb'},
]
}

