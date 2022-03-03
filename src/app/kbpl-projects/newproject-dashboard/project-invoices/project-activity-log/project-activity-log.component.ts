import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-activity-log',
  templateUrl: './project-activity-log.component.html',
  styleUrls: ['./project-activity-log.component.scss']
})
export class ProjectActivityLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items=[
  {referenceNumber:'A-025011-Inv001',dateTime:'2021-02-25, 04:15 AM',status:'New',option:'Option 1',remarks:'Reviewed',activityDate:'10-02-2021',updatedBy:'Super Admin'},
  {referenceNumber:'A-025011-Inv002',dateTime:'2021-01-23, 04:15 AM',status:'New',option:'Option 2',remarks:'Submitted',activityDate:'11-02-2021',updatedBy:'Super Admin'},
  {referenceNumber:'A-025011-Inv003',dateTime:'2021-06-10, 04:15 AM',status:'New',option:'Option 3',remarks:'Submitted',activityDate:'12-02-2021',updatedBy:'Super Admin'},
  {referenceNumber:'A-025011-Inv004',dateTime:'2021-07-12, 04:15 AM',status:'New',option:'Option 4',remarks:'Reviewed',activityDate:'13-02-2021',updatedBy:'Super Admin'},
  {referenceNumber:'A-025011-Inv005',dateTime:'2021-02-21, 04:15 AM',status:'New',option:'Option 5',remarks:'Reviewed',activityDate:'16-02-2021',updatedBy:'Super Admin'}
]
}
