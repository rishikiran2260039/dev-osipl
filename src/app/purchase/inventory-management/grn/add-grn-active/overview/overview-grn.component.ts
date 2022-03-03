import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-overview-grn',
  templateUrl: './overview-grn.component.html',
  styleUrls: ['./overview-grn.component.scss']
})
export class OverviewgrnComponent implements OnInit {

  constructor(private _location : Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
}
