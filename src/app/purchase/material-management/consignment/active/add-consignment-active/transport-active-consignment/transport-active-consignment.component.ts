import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-transport-active-consignment',
  templateUrl: './transport-active-consignment.component.html',
  styleUrls: ['./transport-active-consignment.component.scss']
})
export class TransportActiveConsignmentComponent implements OnInit {

 
  constructor(private _location : Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

}
