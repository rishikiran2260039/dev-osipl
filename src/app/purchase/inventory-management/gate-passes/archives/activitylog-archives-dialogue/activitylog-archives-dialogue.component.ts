import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-activitylog-archives-dialogue',
  templateUrl: './activitylog-archives-dialogue.component.html',
  styleUrls: ['./activitylog-archives-dialogue.component.scss']
})
export class ActivitylogArchivesDialogueComponent implements OnInit {
  constructor(public dialog:MatDialogRef<ActivitylogArchivesDialogueComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

  items = [
    {date:"02/15/21 10:13:27 PM", stage:"Consignment",Reference:"	Consignment: 1020",Activity:"Submitted",user:"Ridhima R",remarks:"-"},
    {date:"02/15/21 10:20:16 PM", stage:"Gate Pass",Reference:"GRN: 1013",Activity:"Submitted",user:"Ridhima R",remarks:"-"},
    {date:"02/15/21 10:27:12 PM", stage:"GRN",Reference:"	Consignment: 1020",Activity:"Generated",user:"Ridhima R",remarks:"-"},
    {date:"02/15/21 10:31:30 PM", stage:"Gate Pass",Reference:"Gate Pass: 10010",Activity:"Closed",user:"Ridhima R",remarks:"-"},
    {date:"02/15/21 11:36:07 PM", stage:"GRN Consignment",Reference:"GRN Consignment:",Activity:"Submitted",user:"Ridhima R",remarks:"-"},
    {date:"02/17/21 1:57:14 AM", stage:"GRN",Reference:"GRN: 1013",Activity:"Approved",user:"Super Admin	",remarks:"-"},
    // {date:"02/17/21 1:58:52 AM", stage:"GRN Consignment",Reference:"GRN Consignment:",Activity:"Super Admin	",user:"Ridhima R",remarks:"-"},

  ]

}