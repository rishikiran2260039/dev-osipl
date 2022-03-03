import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PayableDocComponent } from './payable-doc/payable-doc.component';
import { PayableGridcolumnComponent } from './payable-gridcolumn/payable-gridcolumn.component';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-payable',
  templateUrl: './payable.component.html',
  styleUrls: ['./payable.component.scss']
})
export class PayableComponent implements OnInit {

  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle: boolean;
  public filterToggle1: boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public autoScale = true;

  items = [
    {vendor: "SFT Ltd", billingFrom: "01-05-2021", billingTo: "05-05-2021", invoice: "WW782", invoiceDate: "06-05-2021", billingType: "Credit", inAmt: "$50,000", gstAmt: "$9,000", totalAmt: "$59,000", dueDate: "09-05-2021", prd: "09-05-2021", prn: "#251562", pm: "Cash", tds: "$3510", remarks: "Credit note adjusted", pending: "$20,000"},
    {vendor: "Amazon", billingFrom: "25-04-2021", billingTo: "30-04-2021", invoice: "WW589", invoiceDate: "01-05-2021", billingType: "Credit", inAmt: "$60,000", gstAmt: "$11,000", totalAmt: "$71,000", dueDate: "04-05-2021", prd: "04-05-2021", prn: "#248577", pm: "NEFT", tds: "$4220", remarks: "Credited", pending: "$25,000"},
    {vendor: "Raheja", billingFrom: "20-04-2021", billingTo: "24-04-2021", invoice: "WW487", invoiceDate: "26-04-2021", billingType: "Credit", inAmt: "$70,000", gstAmt: "$13,000", totalAmt: "$83,000", dueDate: "28-04-2021", prd: "28-04-2021", prn: "#523698", pm: "Net Banking", tds: "$5540", remarks: "Credited", pending: "$30,000"},
    {vendor: "Dr. Reddy's", billingFrom: "16-04-2021", billingTo: "20-04-2021", invoice: "WW558", invoiceDate: "21-04-2021", billingType: "Credit", inAmt: "$80,000", gstAmt: "$14,000", totalAmt: "$94,000", dueDate: "25-04-2021", prd: "25-04-202", prn: "#478254", pm: "NEFT", tds: "$7230", remarks: "Credit note adjusted", pending: "$35,000"},
    {vendor: "Reva", billingFrom: "11-04-2021", billingTo: "15-04-2021", invoice: "WW887", invoiceDate: "16-04-2021", billingType: "Credit", inAmt: "$85,000", gstAmt: "$16,000", totalAmt: "$101,000", dueDate: "19-04-2021", prd: "19-04-2021", prn: "#589421", pm: "NEFT", tds: "$8500", remarks: "Credited", pending: "$40,000"}
  ]

  tentureOfEmployees = new Chart({
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
        text: "",
      },
    },
    xAxis: {
      categories: [
        "Revenue Saved",
        "Dues",
        "Over Dues",
        "Paid"
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
        // color: "rgb(0, 60, 179),rgb(255, 0, 0),rgb(41, 163, 41),rgb(0, 153, 153)",
        data: [
          {
            name: "Revenue Saved",
            y: 40,
          },
          {
            name: "Dues",
            y: 60,
          },
          {
            name: "Over Dues",
            y: 90,
          },
          {
            name: "Paid",
            y: 100,
          }
        ],
      },
    ],
  });

  single = [
    {
      name: 'Amazon',
      value: 20
    },
    {
      name: 'Flipkart',
      value: 30
    },
    {
      name: 'Reliance',
      value: 45
    },
    {
      name: 'Shopkart',
      value: 45
    }

  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addDocDialog() {

    let dialogRef = this.dialog.open(PayableDocComponent, {

      height: 'auto',
      width: '600px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  openGridColumnsDialog() {

    let dialogRef = this.dialog.open(PayableGridcolumnComponent, {

      height: 'auto',
      width: '600px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

}
