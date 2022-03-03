import { Settings } from './../../app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})

export class RadarComponent implements OnInit {
  public POWoRentstackchart:any[];
  public POWostackchart:any[];
  public POWomultiple: any[];
  public POWOdata: any[];
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
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#378D3B' ,'#2F3E9E','#D22E2E',  '#0096A6', '#F47B00', '#606060']
  }; 
  public colorScheme1 = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true; 
  public data: any;
   constructor(public appSettings:AppSettings,private titleService: Title) {

    this.data = [
      { Value: 37, Label: "Cooling", Summary: "Cooling 37%" },
      { Value: 25, Label: "Residential", Summary: "Residential 25%" },
      { Value: 12, Label: "Heating", Summary: "Heating 12%" },
      { Value: 11, Label: "Lighting", Summary: "Lighting 11%" },
      { Value: 18, Label: "Other", Summary: "Other 18%" }
  ];
     this.settings = this.appSettings.settings; 

     const POWOdata = [
      {
        "name": "GOOG/KA/BLR/2021/017",
        "series": [
          {
            "name": "PO",
            "value": 50
          },
          {
            "name": "WO",
            "value": 20
          },
          {
            "name": "Rentals",
            "value": 20
          }
        ]
      },
    
      {
        "name": "TCS0/TS/HYD/2021/012",
        "series": [
          {
            "name": "PO",
            "value": 100
          },
          {
            "name": "WO",
            "value": 50
          },
          {
            "name": "Rentals",
            "value": 10
          }
        ]
      },
    
      {
        "name": "WIP/KA/BLR/2021/001",
        "series": [
          {
            "name": "PO",
            "value": 150
          },
          {
            "name": "WO",
            "value": 70
          },
          {
            "name": "Rentals",
            "value": 20
          }
        ]
      },

      {
        "name": "OMG/TS/HYD/2022/312",
        "series": [
          {
            "name": "PO",
            "value": 100
          },
          {
            "name": "WO",
            "value": 50
          },
          {
            "name": "Rentals",
            "value": 40
          }
        ]
      },

      {
        "name": "TCS/TS/HYD/2022/312",
        "series": [
          {
            "name": "PO",
            "value": 300
          },
          {
            "name": "WO",
            "value": 150
          },
          {
            "name": "Rentals",
            "value": 20
          }
        ]
      },
    ];

     const POWomultiple = [
      {
        "name": "April-21",
        "series": [
          {
            "name": "PO",
            "value": 7300000
          },
          {
            "name": "WO",
            "value": 8940000
          }
        ]
      },
    
      {
        "name": "May-21",
        "series": [
          {
            "name": "PO",
            "value": 3300000
          },
          {
            "name": "WO",
            "value": 8940000
          }
        ]
      },
    
      {
        "name": "June-21",
        "series": [
          {
            "name": "PO",
            "value": 5300000
          },
          {
            "name": "WO",
            "value": 6940000
          }
        ]
      },

      {
        "name": "July-21",
        "series": [
          {
            "name": "PO",
            "value": 5300000
          },
          {
            "name": "WO",
            "value": 4940000
          }
        ]
      },

      {
        "name": "August-21",
        "series": [
          {
            "name": "PO",
            "value": 5300000
          },
          {
            "name": "WO",
            "value": 4540000
          }
        ]
      },

      {
        "name": "September-21",
        "series": [
          {
            "name": "PO",
            "value": 3400000
          },
          {
            "name": "WO",
            "value": 3640000
          }
        ]
      },

      {
        "name": "October-21",
        "series": [
          {
            "name": "PO",
            "value": 4300000
          },
          {
            "name": "WO",
            "value": 4940000
          }
        ]
      },

      {
        "name": "November-21",
        "series": [
          {
            "name": "PO",
            "value": 3700000
          },
          {
            "name": "WO",
            "value": 3240000
          }
        ]
      },

      {
        "name": "December-21",
        "series": [
          {
            "name": "PO",
            "value": 7300000
          },
          {
            "name": "WO",
            "value": 8940000
          }
        ]
      },

      {
        "name": "January-22",
        "series": [
          {
            "name": "PO",
            "value": 6300000
          },
          {
            "name": "WO",
            "value": 7940000
          }
        ]
      },

      {
        "name": "February-21",
        "series": [
          {
            "name": "PO",
            "value": 3500000
          },
          {
            "name": "WO",
            "value": 6940000
          }
        ]
      },
      {
        "name": "March-22",
        "series": [
          {
            "name": "PO",
            "value": 3500000
          },
          {
            "name": "WO",
            "value": 6940000
          }
        ]
      },
    ];
    const POWostackchart = [
      {
        "name": "GOOG/KA/BLR/2021/017",
        "series": [
          {
            "name": "Closed Indent",
            "value": 10
          },
          {
            "name": "Open Indent",
            "value": 2
          },
          {
            "name": "Pending Indent",
            "value": 2
          }
        ]
      },
    
      {
        "name": "TCS0/TS/HYD/2021/012",
        "series": [
          {
            "name": "Closed Indent",
            "value": 12
          },
          {
            "name": "Open Indent",
            "value": 5
          },
          {
            "name": "Pending Indent",
            "value": 1
          }
        ]
      },
    
      {
        "name": "WIP/KA/BLR/2021/001",
        "series": [
          {
            "name": "Closed Indent",
            "value": 20
          },
          {
            "name": "Open Indent",
            "value": 7
          },
          {
            "name": "Pending Indent",
            "value": 0
          }
        ]
      },

      {
        "name": "OMG/TS/HYD/2022/312",
        "series": [
          {
            "name": "Closed Indent",
            "value": 10
          },
          {
            "name": "Open Indent",
            "value": 0
          },
          {
            "name": "Pending Indent",
            "value": 1
          }
        ]
      },

      {
        "name": "TCS/TS/HYD/2022/312",
        "series": [
          {
            "name": "Closed Indent",
            "value": 8
          },
          {
            "name": "Open Indent",
            "value": 0
          },
          {
            "name": "Pending Indent",
            "value": 0
          }
        ]
      },
    ];
    
    const POWoRentstackchart = [
      {
        "name": "GOOG/KA/BLR/2021/017",
        "series": [
          {
            "name": "PO Value",
            "value": 10
          },
          {
            "name": "WO Value",
            "value": 2
          },
          {
            "name": "Rental Value",
            "value": 2
          }
        ]
      },
    
      {
        "name": "TCS0/TS/HYD/2021/012",
        "series": [
          {
            "name": "PO Value",
            "value": 5
          },
          {
            "name": "WO Value",
            "value": 3
          },
          {
            "name": "Rental Value",
            "value": 2
          }
        ]
      },
    
      {
        "name": "WIP/KA/BLR/2021/001",
        "series": [
          {
            "name": "PO Value",
            "value": 8
          },
          {
            "name": "WO Value",
            "value": 5
          },
          {
            "name": "Rental Value",
            "value": 3
          }
        ]
      },

      {
        "name": "OMG/TS/HYD/2022/312",
        "series": [
          {
            "name": "PO Value",
            "value": 15
          },
          {
            "name": "WO Value",
            "value": 7
          },
          {
            "name": "Rental Value",
            "value": 8
          }
        ]
      },

      {
        "name": "TCS/TS/HYD/2022/312",
        "series": [
          {
            "name": "PO Value",
            "value": 11
          },
          {
            "name": "WO Value",
            "value": 6
          },
          {
            "name": "Rental Value",
            "value": 5
          }
        ]
      },
    ];
     const single = [
      {
        name: 'Supply (300)',
        value: 300
      },
      {
        name: 'Sub Contract (250)',
        value: 250
      },
      {
        name: 'MEP (100)',
        value: 100
      },
      
     ];
     const two = [
       {
         name: 'Raheja',
         value: 30
       },
       {
         name: 'Dr.Reddys',
         value: 25
       },
       {
         name: 'Revas Group',
         value: 10
       },
       {
         name: 'Dr Reddys',
         value: 15
       },
       {
         name: 'Reva Group',
         value: 20
       }
      
     ];
     const three = [
       {
         name: '1 Star',
         value: 25
       },
       {
         name: '2 Star',
         value: 15
       },
       {
         name: '3 Star',
         value: 9
       },
       {
         name: '4 Star',
         value: 30
       },
       {
         name: '5 Star',
         value: 21
       }
      
     ];
     Object.assign(this, {single,two,three,POWOdata,POWomultiple,POWostackchart,POWoRentstackchart}); 
   }
 
   public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.hardcodeChart();
    this.setTitle("Om Sai Intex | Radar");

  }

  items = [
    {project:"GOOG/KA/BLR/2021/017",totalpo:"14",poclosed:"10",consig:"16",grnclosed:"15"},
    {project:"TCS/TS/HYD/2022/212",totalpo:"12",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"WIP/TS/HYD/2022/272",totalpo:"20",poclosed:"18",consig:"25",grnclosed:"25"},
    {project:"TCS/TS/HYD/2022/112",totalpo:"10",poclosed:"6",consig:"12",grnclosed:"12"},
    {project:"ACE/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"CTS/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"TCS/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"GOOG/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"TCS/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"TCS/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"GOOG/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"TCS/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},
    {project:"ACE/TS/HYD/2022/412",totalpo:"8",poclosed:"8",consig:"10",grnclosed:"9"},

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
          text: null,
        },
      },
      xAxis: {
        categories: [
          "Raheja",
          "Dr.Reddy's",
          "Reva Group",
          "Dr.Reddy's",
          "Reva Group",
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
          '<span style="color:{point.color}"> </span>: <b>{point.y}</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Raheja",
              y: 700000,
            },
            {
              name: "Dr.Reddy's",
              y: 600000,
            },
            {
              name: "Reva Group",
              y: 300000,
            },
            {
              name: "Dr.Reddy's",
              y: 800000,
            },
            {
              name: "Reva Group",
              y: 500000,
            },
          ],
        },
      ],
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
        categories: ['Apr-21', 'May-21', 'June-21', 'July-21', 'August-21','Sept-21','Oct-21','Nov-21','Dec-21','Jan-22','Feb-22','Mar-22'],
         title: {
           text: null,
          //  style: {
          //    display: "none",
          //  },
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
         name: 'PO',
         data: [700000, 600000, 800000, 300000, 500000,700000, 600000, 800000, 300000, 500000]
       }, {
         name: 'Indent',
         data: [800000, 700000, 800000, 400000, 700000,700000, 600000, 800000, 300000, 500000]
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
       series: [
         {
           type: "line",
           color: "rgb(33, 101, 190)",
           data: [2, 3, 4, 2, 1, 3, 5, 1, 2, 5, 2, 4],
         },
       ],
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
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}">{point.name} Purchase Orders </span>: <b>{point.y}</b>',
       },
       yAxis: {
         title: {
           text: "Purchase orders",
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
           data: [2, 3, 4, 7, 6, 3],
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
           '<span style="color:{point.color}">{point.name} Expense </span>: <b>{point.y}</b>',
       },
       yAxis: {
         title: {
           text: "Expense",
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
           data: [400000, 800000, 200000, 400000, 600000, 300000,400000, 800000, 200000, 400000, 600000, 300000],
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
           text: null,
         },
       },
       xAxis: {
         categories: [
           "April-21",
           "May-21",
           "June-21",
           "July-21",
           "August-21",
           "September-21",
           "October-21",
           "November-21",
           "December-21",
           "January-22",
           "February-22",
           "March-22",
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
           '<span style="color:{point.color}"> </span>: <b>{point.y}</b>',
       },
       series: [
         {
           type: "bar",
           color: "rgb(33, 101, 190)",
           data: [
             {
               name: "April-21",
               y: 700000,
             },
             {
               name: "May-21",
               y: 600000,
             },
             {
               name: "June-21",
               y: 300000,
             },
             {
               name: "July-21",
               y: 800000,
             },
             {
               name: "August-21",
               y: 500000,
             },
             {
              name: "September-21",
              y: 500000,
            },
            {
              name: "October-21",
              y: 500000,
            },
            {
              name: "November-21",
              y: 500000,
            },
            {
              name: "December-21",
              y: 500000,
            },
            {
              name: "January-21",
              y: 500000,
            },
            {
              name: "February-21",
              y: 500000,
            },
            {
              name: "March-21",
              y: 500000,
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
           text: null,
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
           '<span style="color:{point.color}"> </span>: <b>{point.y}</b>',
       },
       series: [
         {
           type: "bar",
           color: "rgb(33, 101, 190)",
           data: [
             {
               name: "Less than 30 Days",
               y: 700000,
             },
             {
               name: "30-60 Days",
               y: 600000,
             },
             {
               name: "60-90 Days",
               y: 300000,
             },
             {
               name: "90-180 Days",
               y: 800000,
             },
             {
               name: "More than 6 Months",
               y: 500000,
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
 
 }
