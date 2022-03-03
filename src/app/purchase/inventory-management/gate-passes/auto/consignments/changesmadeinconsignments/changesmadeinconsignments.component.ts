import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-changesmadeinconsignments',
  templateUrl: './changesmadeinconsignments.component.html',
  styleUrls: ['./changesmadeinconsignments.component.scss']
})
export class ChangesmadeinconsignmentsComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ChangesmadeinconsignmentsComponent>) { }

  ngOnInit() {
  }

  // <td class="text-center" >{{item. }}</td>
  //                 <td class="text-center" matTooltip="Download Doc"><i class="fa fa-download" aria-hidden="true"></i></td>
  //                 <td class="text-center">{{item. }}</td>
  //                 <td class="text-center">{{item. }}</td>
  //                 <td class="text-center">{{item.}}</td>
  items = [
    {PON:"BGR/OM/BHL/APR/19-20/1004", JD:"-",MB:"Super Admin",MD:"16-Apr-2019, 06:44 PM"},
    

  ]

  close(){
    this.dialog.close();
  }

  
}
