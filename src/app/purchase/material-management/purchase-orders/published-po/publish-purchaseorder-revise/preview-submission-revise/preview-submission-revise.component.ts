import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-preview-submission-revise',
  templateUrl: './preview-submission-revise.component.html',
  styleUrls: ['./preview-submission-revise.component.scss']
})
export class PreviewSubmissionReviseComponent implements OnInit {

  constructor(private _location: Location,) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
}
