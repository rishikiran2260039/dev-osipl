import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-no-activity-dialog',
  templateUrl: './no-activity-dialog.component.html',
  styleUrls: ['./no-activity-dialog.component.scss']
})
export class NoActivityDialogComponent implements OnInit {

  // items=[
  //   {"number":"20-01-2021","name":"Brick"},
  //   {"number":"23-01-2021","name":"Steel"},
  //   {"number":"05-02-2021","name":"Cement"},
  //   {"number":"16-02-2021","name":"Stone"},
  //   {"number":"22-02-2021","name":"Concrete"},
  // ]

  items =[
    {"activityNo": "2561A", "activity": "Earth Work", "planHours": "5", "actHours": "5", "expDate": "21-10-2020", "actDate":"23-10-2020"},
    {"activityNo": "4567D", "activity": "Electrical", "planHours": "10", "actHours": "12", "expDate": "20-10-2020", "actDate":"22-10-2020"}
  ];
  constructor(public dialogRef: MatDialogRef<NoActivityDialogComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
