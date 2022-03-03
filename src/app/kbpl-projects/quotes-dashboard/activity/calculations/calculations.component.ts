import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'A.Default',sow:'-',action:'-',remarks:'New Site Created',updatedBy:'Super Admin'}
  ]
}
