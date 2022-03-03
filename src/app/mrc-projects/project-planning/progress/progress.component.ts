import { AppSettings } from 'src/app/app.settings';
import { Settings } from './../../../app.settings.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Chart } from "angular-highcharts";
import { NoActivityDialogComponent } from './no-activity-dialog/no-activity-dialog.component';
import { AddProgressComponent } from './add-progress/add-progress.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
//   public single: any[];
//   public sizes: any[];
//   public colors: any[];
//   public width: any[];
//   public countries: any[];
//   public singles: any[];
//   public multi: any[];
//   public analytics: any[];
//   public showLegend = true;
//   public showLegends = false;
//   public gradient = true;
//   public showXAxis = true;
//   public showYAxis = true;
//   public showXAxisLabel = false;
//   public xAxisLabel = 'Year';
//   public showYAxisLabel = false;
//   public yAxisLabel = 'Population';
//   public filterToggle:boolean;
//   public filterToggle1:boolean;
//   public colorScheme = {
//     domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
//   }; 
//   public showLabels = true;
//   public explodeSlices = false;
//   public doughnut = false;
//   public settings: Settings;
//   public autoScale = true;
//   constructor(public appSettings:AppSettings) {
//     this.settings = this.appSettings.settings; 
//     const single = [
//       {
//         name: 'Completed Hrs',
//         value: 34
//       },
//       {
//         name: 'Remaining Hrs',
//         value: 66
//       }
     
//     ];
//     const singles = [
//       {
//         name: 'Done',
//         value: 25
//       },
//       {
//         name: 'To Do',
//         value: 75
//       }
     
//     ];
//     Object.assign(this, {single,singles}); 
//    }

//   ngOnInit() {
//     this.hardcodeChart();
//   }
//   tentureOfEmployees;
//   EmployeesOnboardingChart;

//   hardcodeChart() {

//   this.tentureOfEmployees = new Chart({
//     chart: {
//       type: "bar",
//     },
//     title: {
//       text: null,
//       style: {
//         display: "none",
//       },
//     },
//     credits: {
//       enabled: false,
//     },

//     yAxis: {
//       title: {
//         text: "%",
//       },
//     },
//     xAxis: {
//       categories: [
//         "Electrical",
//         "Mechanical",
//         "Plumbing",
//         "Earth Work",
//         "Civil",
//       ],
//     },
//     legend: {
//       enabled: false,
//     },
//     plotOptions: {
//       series: {
//         dataLabels: {
//           enabled: true,
//           format: "{point.y}",
//         },
//         showInLegend: false,
//       },
//     },
//     tooltip: {
//       pointFormat:
//         '<span style="color:{point.color}"></b>',
//     },
//     series: [
//       {
//         type: "bar",
//         color: "rgb(33, 101, 190)",
//         data: [
//           {
//             name: "25%",
//             y: 75,
//           },
//           {
//             name: "15%",
//             y:50,
//           },
//           {
//             name: "20%",
//             y: 60,
//           },
//           {
//             name: "25%",
//             y:75,
//           },
//           {
//             name: "15%",
//             y: 50,
//           },
//         ],
//       },
//     ],
//   });

//   this.EmployeesOnboardingChart = new Chart({
//     chart: {
//       type: "line",
//     },
//     title: {
//       text: null,
//       style: {
//         display: "none",
//       },
//     },
//     credits: {
//       enabled: false,
//     },
//     legend: {
//       enabled: false,
//     },
//     plotOptions: {
//       series: {
//         dataLabels: {
//           enabled: true,
//           format: "{point.y}",
//         },
//         showInLegend: true,
//       },
//     },
//     tooltip: {
//       pointFormat:
//         '<span style="color:{point.color}">{point.name}</b>',
//     },

//     xAxis: {
//       categories: [
//         "2009",
//         "2010",
//         "2011",
//         "2012",
//         "2013",
//         "2014",
//         "2015",
//         "2016",
//         "2017",
//         "2018",
//         "2019",
//         "2020",
//       ],
//     },
//     yAxis: {
//       title: {
//         text: "",
//       },
//     },
//     series: [
//       {
//         type: "line",
//         color: "rgb(33, 101, 190)",
//         data: [2, 3, 4, 2, 1, 3, 5, 1, 2, 5, 2, 4],
//       },
//     ],
//   });
// }

filterToggle:boolean;

  items=[
    {"requestdate":"23-10-2020","items":"2","loggedby":"Hydraulic Excavator","status":"This is for Earth work.","approvedby":"28-10-2020", "reqTitle": 'Earth Work'},
    {"requestdate":"12-11-2020","items":"2","loggedby":"Switch","status":"This is for Mechanical issues.","approvedby":"15-11-2020","reqTitle": 'Mechanical'},
    {"requestdate":"02-09-2020","items":"2","loggedby":"Pipes","status":"This is for Plumbing.","approvedby":"10-09-2020","reqTitle": 'Plumbing'},
    {"requestdate":"19-10-2020","items":"2","loggedby":"Fuse","status":"This is for Electrical","approvedby":"17-10-2020","reqTitle": 'Electrical'},
    
    ]
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public openitemDialog() {
    let dialogRef = this.dialog.open(NoActivityDialogComponent, {
     
        height: 'auto',
        width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public opencontactDialog(item) {
    let dialogRef = this.dialog.open(AddProgressComponent, {
        data: item,
        height: 'auto',
        width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
  
}
