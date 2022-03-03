import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.scss']
})
export class TaskLogComponent implements OnInit {

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',status:'End-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Active',type:'Project',refno:'A-025011',option:'-',remarks:'-',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'End-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Pre-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Active',type:'Project',refno:'A-025011',option:'-',remarks:'-',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'End-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Pre-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Active',type:'Project',refno:'A-025011',option:'-',remarks:'-',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'End-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Pre-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Active',type:'Project',refno:'A-025011',option:'-',remarks:'-',activityDate:'29-03-2021',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',status:'Pre-Pay',type:'Project',refno:'A-025011',option:'-',remarks:'NA',activityDate:'29-03-2021',updatedBy:'Super Admin'},
  ]
}
