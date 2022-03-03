import { MrcGridcolumsComponent } from './mrc-gridcolums/mrc-gridcolums.component';
import { Settings } from './../../app.settings.model';
import { Component, OnInit } from '@angular/core';
import { MrcAddProjectDialogComponent } from './mrc-add-project-dialog/mrc-add-project-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog, PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AppSettings } from 'src/app/app.settings';
import { ProjectStatusDialogComponent } from './project-status-dialog/project-status-dialog.component';
import { AddProjectsNotesComponent } from './add-projects-notes/add-projects-notes.component';
import { Chart } from 'angular-highcharts';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {

  public single: any[];
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
  public filterToggle: boolean;
  public filterToggle1: boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true;


  items = [
    { site: "Sector 56", sow: "Lanscaping", type: "External", category: 'Underground', stageColour: '#00ff0040', invoices: "3/7", "project_code": "2478BA", "project_name": "MRC", "client": "Robert ", "consultant": "FastTrack ", "BOQ_Items": "120/210", "la": " 244", "la_date": "12/02/2020 ", "agreement": "343", "agreement_date": "01-03-2020", "start_date": "14-04-2020", "target_date": "16-06-2020 ", "total_cost": "$7,000", "billed": "$6,000", "paid": "$2,000", "margin": "$4,000 ", "Status": 1, "Completion": "90%", "project": "Amazon" },
    { site: "Sector 56", sow: "Club House", type: "Internal", category: 'Surface', stageColour: '#00ff0040', invoices: "4/7", "project_code": "3478BA", "project_name": "Default", "client": "John ", "consultant": "Design ", "BOQ_Items": "350/420", "la": " 245", "la_date": " 3/02/2020", "agreement": " 323", "agreement_date": "14-03-2020", "start_date": "15-04-2020", "target_date": "17-06-2020 ", "total_cost": "$7,100", "billed": "$6,100", "paid": "$2,000", "margin": "$3,900 ", "Status": 1, "Completion": "20%", "project": "Raheja" },
    { site: "Lansdowne", sow: "Restaurant", type: "External", category: 'Civil Site', stageColour: '#FFA50069', invoices: "5/7", "project_code": "4478BA", "project_name": "Becon", "client": "Singh ", "consultant": " Stone Factory", "BOQ_Items": "220/280", "la": "246 ", "la_date": "13/02/2020 ", "agreement": "265", "agreement_date": "15-03-2020", "start_date": "16-04-2020", "target_date": "18-06-2020 ", "total_cost": "$7,200", "billed": "$6,100", "paid": "$2,000", "margin": "$3,800 ", "Status": 4, "Completion": "30%", "project": "Dr.Reddy's" },
    { site: "Lansdowne", sow: "Parking Lot", type: "Internal", category: 'Underground', stageColour: '#87CEFA', invoices: "2/7", "project_code": "5478BA", "project_name": "Default", "client": " Anna", "consultant": "Instant ", "BOQ_Items": "98/120", "la": "247 ", "la_date": " 14/02/2020", "agreement": "376 ", "agreement_date": "16-03-2020", "start_date": "17-04-2020", "target_date": "19-06-2020 ", "total_cost": "$7,300", "billed": "$6,100", "paid": "$2,000", "margin": "$3,700 ", "Status": 3, "Completion": "40%", "project": "Reva Group" },
    { site: "Newton", sow: "Tower A", type: "External", category: 'Surface', stageColour: '#87CEFA', invoices: "3/7", "project_code": "6478BA", "project_name": "Sales Global", "client": "Mike ", "consultant": "IBW ", "BOQ_Items": "128/198", "la": "248 ", "la_date": "15/02/2020 ", "agreement": "312 ", "agreement_date": "17-03-2020", "start_date": "18-04-2020", "target_date": "11-06-2020 ", "total_cost": "$7,400", "billed": "$6,200", "paid": "$2,000", "margin": "$3,600 ", "Status": 3, "Completion": "90%", "project": "Instant" },
    { site: "Newton", sow: "Tower B", type: "External", category: 'Underground', stageColour: '#C0C0C0', invoices: "3/7", "project_code": "7478BA", "project_name": "Instant", "client": "Jonny ", "consultant": "Sales Global ", "BOQ_Items": "127/180", "la": "249 ", "la_date": "16/02/2020 ", "agreement": "367 ", "agreement_date": "18-03-2020", "start_date": "19-04-2020", "target_date": "06-06-2020 ", "total_cost": "$7,500", "billed": "$6,300", "paid": "$2,000", "margin": "$3,500 ", "Status": 2, "Completion": "20%", "project": "OFO" },
    { site: "Newton", sow: "Tower C", type: "Internal", category: 'Underground', stageColour: '#87CEFA', invoices: "5/7", "project_code": "8478BA", "project_name": "Default", "client": " Randy", "consultant": "becon", "BOQ_Items": "198/250", "la": "250 ", "la_date": "17/02/2020 ", "agreement": "276", "agreement_date": "19-03-2020", "start_date": "04-04-2020", "target_date": "07-06-2020 ", "total_cost": "$7,600", "billed": "$6,400", "paid": "$2,000 ", "margin": "$3,400 ", "Status": 3, "Completion": "10%", "project": "Green Park" },
    { site: "Newton", sow: "Tower D", type: "Internal", category: 'Civil Site', stageColour: '#00ff0040', invoices: "3/7", "project_code": "9478BA", "project_name": "Default", "client": " Rock", "consultant": " MPK", "BOQ_Items": "127/289", "la": "261 ", "la_date": " 18/02/2020", "agreement": "288", "agreement_date": "01-03-2020", "start_date": "03-04-2020", "target_date": "08-06-2020 ", "total_cost": "$7,700", "billed": "$6,500", "paid": "$2,000", "margin": "$3,300 ", "Status": 1, "Completion": "55%", "project": "XP" },
    { site: "Newton", sow: "Common Facilities", type: "External", category: 'Underground', stageColour: '#00ff0040', invoices: "2/7", "project_code": "1478BA", "project_name": "FastTrack", "client": "Jack ", "consultant": "MRC", "BOQ_Items": "281/328", "la": "233 ", "la_date": "19/02/2020 ", "agreement": "289", "agreement_date": "02-03-2020", "start_date": "05-04-2020", "target_date": "10-06-2020 ", "total_cost": "$7,800", "billed": "$6,600", "paid": "$2,000", "margin": "$3,200 ", "Status": 1, "Completion": "35%", "project": "XP" },
  ]
  constructor(public dialog: MatDialog, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
    const single = [
      {
        name: 'Completed',
        value: 20
      },
      {
        name: 'Process',
        value: 70
      },
      {
        name: 'Pending',
        value: 10
      },
      {
        name: 'On Hold',
        value: 10
      },

    ];
    const singles = [
      {
        name: 'Billed',
        value: 249
      },
      {
        name: 'Paid',
        value: 200
      },
      {
        name: 'Pending',
        value: 49
      }

    ];
    Object.assign(this, { single, singles });
  }

  ngOnInit() {
    this.hardcodeChart();
  }
  chart;

  downloadPdf() {
    const pdfUrl = './assets/data/charter.pdf';
    const pdfName = 'Project Charter';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  
  hardcodeChart() {
    this.chart = new Chart({
      chart: {
        type: 'column'
      },
      xAxis: {
        gridLineWidth: 0.5
      },
      yAxis: {
        title: {
          text: "%",
        },
        gridLineWidth: 0.5
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Product Profit',
          data: [1, 2, 3, 4, 5, 6]
        }
      ]
    });
  }

  openProject(stat) {
    let dialogRef = this.dialog.open(ProjectStatusDialogComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });
  }

  AddProjectNotes() {
    const dialogRef = this.dialog.open(AddProjectsNotesComponent, {

      autoFocus: false,
      height: 'auto',
      width: '600px',

    });
  }

  AddContract() {
    const dialogRef = this.dialog.open(MrcAddProjectDialogComponent, {

      autoFocus: false,
      height: 'auto',
      width: '600px',

    });
  }

  AddContract1(item) {
    const dialogRef = this.dialog.open(MrcAddProjectDialogComponent, {
      data: item,
      autoFocus: false,
      height: 'auto',
      width: '600px',

    });
  }

  openGridColumnsDialog() {

    let dialogRef = this.dialog.open(MrcGridcolumsComponent, {

      height: 'auto',
      width: '600px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  statusOptions = [
    { value: 1, name: 'Completed', colorCode: '#00ff0040' },
    { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
    { value: 3, name: 'In Process', colorCode: '#87CEFA' },
    { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  ]

  changeStatus(event) {
    console.log(event)
  }

}
function AddProjectNotes(projectId: any, projectNumber: any, isProject: any) {
  throw new Error('Function not implemented.');
}

function projectId(projectId: any, projectNumber: any, isProject: any) {
  throw new Error('Function not implemented.');
}

function projectNumber(projectId: any, projectNumber: any, isProject: any) {
  throw new Error('Function not implemented.');
}

function isProject(projectId: any, projectNumber: any, isProject: any) {
  throw new Error('Function not implemented.');
}

function AddProjectNotesComponent(AddProjectNotesComponent: any, arg1: { data: { projectId: any; projectNumber: any; isProject: any; }; autoFocus: false; height: string; width: string; disableClose: true; }) {
  throw new Error('Function not implemented.');
}


