import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }
filterFunction() {
  this.filterToggle = !this.filterToggle;
  this.filterState = this.filterToggle === true ? 'initial' : 'final';
}

}
