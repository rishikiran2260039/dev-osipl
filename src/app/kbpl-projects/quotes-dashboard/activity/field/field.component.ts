import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'-',sow:'001 Default',action:'-',remarks:'New SOW Created',updatedBy:'Super Admin'}
  ]
}
