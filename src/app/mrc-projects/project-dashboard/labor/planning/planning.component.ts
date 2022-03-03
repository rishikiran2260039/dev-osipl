import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MonthlyRecordDialogComponent } from '../monthly-record-dialog/monthly-record-dialog.component';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  items=[
    {num: 1, month: 'July', year: '2022', skill: 'Plumber', requirement: 250, remarks: 'Remarks'},
    {num: 2, month: 'August', year: '2021', skill: 'Electrician', requirement: 320, remarks: 'Remarks'},
    {num: 3, month: 'December', year: '2020', skill: 'Painter', requirement: 370, remarks: 'Remarks'},
    {num: 4, month: 'November', year: '2020', skill: 'Plumber', requirement: 420, remarks: 'Remarks'},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddCategory(value) {
    let dialogRef = this.dialog.open(MonthlyRecordDialogComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
}
