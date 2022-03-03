import { Settings } from './../../app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
 
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
 public filterToggle:boolean;
 public filterToggle1:boolean;
 public colorScheme = {
   domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
 }; 
 public showLabels = true;
 public explodeSlices = false;
 public doughnut = false;
 public settings: Settings;
 public autoScale = true; 

  
 constructor(public appSettings:AppSettings) {
  this.settings = this.appSettings.settings; 
  const single = [
    {
      name: 'Paid',
      value: 40
    },
    {
      name: 'Partially Billed',
      value: 25
    },
    {
      name: 'Pending',
      value: 10
    },
    {
      name: 'Process',
      value: 25
    }
   
  ];
  const singles = [
    {
      name: 'Paid',
      value: 50
    },
    {
      name: 'Receivable',
      value: 30
    },
    {
      name: 'Pending',
      value: 20
    }
   
  ];

   
 
  Object.assign(this, {single,singles}); 
}


  ngOnInit() {
    this.hardcodeChart();
  }

  conversationChart;
  conversationChart2;
  conversationChart3;
  aeginganalysis;
  aeginganalysis2;
  contractor;
  hardcodeChart() {
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
          '<span style="color:{point.color}">{point.name} Line Item</span>: <b>{point.y}</b>',
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
          name: 'Completion',
          type: "line",
          color: "black",
          data: [15, 40, 35, 30, 32, 25, 36, 20, 30, 28, 36, 39],
        },
        {
          name: 'Billing',
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [25, 45, 30, 36, 42, 15, 26, 30, 40, 18, 46, 19],
        }
      ],
    });

    this.conversationChart2 = new Chart({
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
          '<span style="color:{point.color}">{point.name} RS. </span>: <b>{point.y}Cr</b>',
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
          name: 'Completion',
          type: "line",
          color: "black",
          data: [3, 4, 1.5, 2, 4.2, 1.5, 3.6, 2, 3, 1.8, 3.6, 2.9],
        },
        {
          name: 'Billing',
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [1, 4, 4.5, 3, 3.2, 2.5, 1.6, 2.6, 3.3, 2.8, 3.6, 3.9],
        }
      ],
    });

    
    this.conversationChart3 = new Chart({
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
          '<span style="color:{point.color}">{point.name} RS. </span>: <b>{point.y}Cr</b>',
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
          name: 'Collection',
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [1, 4, 4.5, 3, 3.2, 2.5],
        }
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

    
    this. aeginganalysis2 = new Chart({
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
              y: 50,
            },
            {
              name: "30-60 Days",
              y: 30,
            },
            {
              name: "60-90 Days",
              y: 80,
            },
            {
              name: "90-180 Days",
              y: 60,
            },
            {
              name: "More than 6 Months",
              y: 39,
            },
          ],
        },
      ],
    });

    
    this. contractor = new Chart({
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
          "Shapoorji Pallonji & Co Ltd",
          "GMR Group",
          "Afcons Infrastructure Limited",
          "JMC Projects",
          "Gammon India Ltd",
         
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
              name: "",
            
              y: 60,
            },
            {
              name: "",
              y: 75,
            },
            {
              name: "",
              y: 50,
            },
            {
              name: "",
              y: 40,
            },
            {
              name: "",
              y: 50,
            },
          ],
        },
      ],
    });




  }




}
