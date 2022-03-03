import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-activity-logdialogue',
  templateUrl: './activity-logdialogue.component.html',
  styleUrls: ['./activity-logdialogue.component.scss']
})
export class ActivityLogdialogueComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ActivityLogdialogueComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

  items = [
    {date:"04/16/20 2:01:23 AM", stage:"Consignment",Reference:"Consignment: 1012",Activity:"Submitted",user:"Super Admin",remarks:"-"},
    

  ]

}