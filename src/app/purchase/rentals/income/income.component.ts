import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})

export class IncomeComponent implements OnInit {

  public single: any[];
  public multi: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Asset Type';
  public showYAxisLabel = true;
  public yAxisLabel = '₹';
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };  
  tableNumber: number = 0;

  tableNumber1: number = 0;

  tableNumber2: number = 0;

 

  constructor(public dialogRef: MatDialogRef<IncomeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    // this.single = [
    //   {
    //     name: 'Heavy Equipment',
    //     value: 4063
    //   },
    //   {
    //     name: 'Hand And Power Tools',
    //     value: 4973
    //   },
    //   {
    //     name: 'Cosumables and Building Materials',
    //     value: 3674
    //   },
    //   {
    //     name: 'Interior Designs',
    //     value: 3624
    //   },
    //   {
    //     name: 'Plumbing',
    //     value: 3300
    //   },
    //   {
    //     name: 'House Wiring',
    //     value: 3580
    //   }
    // ];

    this.multi = [
      {
        name: 'Heavy Equipment',
        series: [
          {
            name: 'Collected Income',
            value: 7163
          },
          {
            name: 'Pending Income',
            value: 4063
          },
          {
            name: 'Uncollected Income',
            value: 7695
          }
        ]
      },
      {
        name: 'Hand And Power Tools',
        series: [
          {
            name: 'Collected Income',
            value: 8263
          },
          {
            name: 'Pending Income',
            value: 4973
          },
          {
            name: 'Uncollected Income',
            value: 5598
          }
        ]
      },
      {
        name: 'Cosumables and Building Materials',
        series: [
          {
            name: 'Collected Income',
            value: 5173
          },
          {
            name: 'Pending Income',
            value: 3674
          },
          {
            name: 'Uncollected Income',
            value: 3477
          }
        ]
      },
      {
        name: 'Plumbing',
        series: [
          {
            name: 'Collected Income',
            value: 9565
          },
          {
            name: 'Pending Income',
            value: 3624
          },
          {
            name: 'Uncollected Income',
            value: 3254
          }
        ]
      }
    ];
  }

  openTable1(value: number) {
    this.tableNumber1 = value;
  }

  openTable2(value: number) {
    this.tableNumber2 = value;
  }

  items = [
    {assetType:"Hand And Power Tools", renter:"Bosch", rentalPeriod: "65 Days", paymentType:"Cheque", term:"65 Days", termDate:"18-Jun-2021", paymentAmount:"65,000", dueDate: "18-Aug-2021"},
    {assetType:"Heavy Equipment", renter:"JCB", rentalPeriod: "38 Days", paymentType:"Cash", term:"40 Days", termDate:"14-Sep-2021", paymentAmount:"40,000", dueDate: "14-Nov-2021"},
  ];

  close(): void {
    this.dialogRef.close();
  }
}


