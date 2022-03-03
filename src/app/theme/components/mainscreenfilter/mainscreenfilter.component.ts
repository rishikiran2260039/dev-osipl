import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../../logins/login.service';
import { AlertService } from '../../../shared/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainscreenfilter',
  templateUrl: './mainscreenfilter.component.html',
  styleUrls: ['./mainscreenfilter.component.scss']
})
export class MainscreenfilterComponent implements OnInit {

 
  public userImage = '../../../../assets/img/users/default-user.jpg';
  customers = [{id:"Raheja" , value:"ABC Pvt Ltd"} , {id:"Dr.Reddys" , value:"Serene Logistics"} , {id:"Amazon" , value:"Option Matrix Pvt Ltd"} ,  ]
  origins = [{id:1 , value:"North-1"} , {id:2 , value:"North-2"} , {id:3 , value:"East-1"} , {id:4 , value:"South-1"} , {id:5 , value:"South-2"} , ]
  constructor(public dialog: MatDialog) { }
//   public openUserDialog(id) {
//     let dialogRef = this.dialog.open(PasswordDialogComponent, {
//         data: id,
//         height: 'auto',
//         width: '600px',
//         autoFocus:false
//     });
//     dialogRef.afterClosed().subscribe(data => {
//     });
// }
// public openUserDialogs(id) {
//   let dialogRef = this.dialog.open(ProfileDialogComponent, {
//       data: id,
//       height: 'auto',
//       width: '600px',
//       autoFocus:false
//   });
//   dialogRef.afterClosed().subscribe(data => {
//   });
// }
  ngOnInit() {
  }

  // logoutUser() {
  //   this.alertService.createAlert("Logged out Successfully",1);
  // }
}