import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-transport-active-grn',
  templateUrl: './transport-active-grn.component.html',
  styleUrls: ['./transport-active-grn.component.scss']
})
export class TransportActivegrnComponent implements OnInit {

 
  constructor(private _location : Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

}
