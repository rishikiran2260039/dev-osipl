import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drafting',
  templateUrl: './drafting.component.html',
  styleUrls: ['./drafting.component.scss']
})
export class DraftingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'A.Default',sow:'-',action:'-',remarks:'New Site Created',updatedBy:'Super Admin'}
  ]
}
