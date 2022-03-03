import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { AddDeviationComponent } from 'src/app/mrc-projects/bill-of-quantities/deviation-items/add-deviation/add-deviation.component';

@Component({
  selector: 'app-add-item-boq-attd',
  templateUrl: './add-item-boq-attd.component.html',
  styleUrls: ['./add-item-boq-attd.component.scss']
})
export class AddItemBoqAttdComponent implements OnInit {

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
  public settings;
  public autoScale = true;

  items = [
    { "serial": "3.1", "category": "Electrical", "description": "Air Conditionar Blowner", "unit": "120/173", "qty": "67", "rate": "$60,000", "active": "Yes", "billed": "$50,000", "paid": "$40,500", "process": "12 ", "pending": "$9,500", "vcStatus": true },
    { "serial": "4.1", "category": "Electrical", "description": "Benches for guests", "unit": "350/456", "qty": "70", "rate": "$6000", "active": "Yes", "billed": "$4000", "paid": "$4000", "process": "12 ", "pending": "$0", "vcStatus": true },
    { "serial": "5.1", "category": "Electrical", "description": "Slab Work", "unit": "220/150", "qty": "90", "rate": "$15,000", "active": "Yes", "billed": "$10,000", "paid": "$9000", "process": "12 ", "pending": "$1000", "vcStatus": true },
    { "serial": "6.1", "category": "Electrical", "description": "Water Pipe", "unit": "198/120", "qty": "20", "rate": "$2000", "active": "Yes", "billed": "$1000", "paid": "$950", "process": "12 ", "pending": "$50", "vcStatus": true },
    { "serial": "3.2", "category": "Electrical", "description": "Cooler", "unit": "150/280", "qty": "80", "rate": "$8000", "active": "Yes", "billed": "$4000", "paid": "$4000", "process": "12 ", "pending": "$0", "vcStatus": false },

  ]

  constructor(public dialog:MatDialog,public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'Proposed',
        value: 200
      },
      {
        name: 'Approved',
        value: 149
      },
     
    ];
    const singles = [
      {
        name: 'Approved',
        value: 20
      },
      {
        name: 'Pending',
        value: 33
      },
      {
        name: 'Declined',
        value: 21
      }
     
    ];
    // Object.assign(this, {single,singles}); 
  }

  ngOnInit() {
  }

  public onSelect(event) {
    console.log(event);
  }
  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddDeviationComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public opencontactDialog3(item) {
  let dialogRef = this.dialog.open(AddDeviationComponent, {
      data: item,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

// goBack() {
//   this.location.back();
// }

}
