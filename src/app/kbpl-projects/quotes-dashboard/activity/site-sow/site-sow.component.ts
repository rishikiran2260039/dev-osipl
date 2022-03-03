import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-sow',
  templateUrl: './site-sow.component.html',
  styleUrls: ['./site-sow.component.scss']
})
export class SiteSowComponent implements OnInit {

  constructor() { }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',status:'-',type:'Site',site:'-',refno:'001 Default',remarks:'New Site Created',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',operation:'Created',status:'Open',type:'SOW',site:'001 Default',refno:'A Default',remarks:'New SOW Created',updatedBy:'Super Admin'}
  ]
  ngOnInit() {
  }

}
