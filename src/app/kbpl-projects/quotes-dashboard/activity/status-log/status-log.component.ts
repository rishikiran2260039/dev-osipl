import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-log',
  templateUrl: './status-log.component.html',
  styleUrls: ['./status-log.component.scss']
})
export class StatusLogComponent implements OnInit {

  constructor() { }
items=[
  {date:'29-03-2021, 8:05 PM',status:'Prepare Quote	',type:'Quote',refno:'	R-025012',option:'-',remarks:'-',activityDate:'29-03-2021',updatedBy:'Super Admin'}
]
  ngOnInit() {
  }

}
