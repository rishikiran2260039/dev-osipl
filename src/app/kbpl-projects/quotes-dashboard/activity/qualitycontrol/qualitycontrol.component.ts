import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualitycontrol',
  templateUrl: './qualitycontrol.component.html',
  styleUrls: ['./qualitycontrol.component.scss']
})
export class QualitycontrolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'-',sow:'001 Default',action:'-',remarks:'New SOW Created',updatedBy:'Super Admin'}
  ]
}
