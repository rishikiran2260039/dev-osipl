import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-revise-resend-dialog',
  templateUrl: './revise-resend-dialog.component.html',
  styleUrls: ['./revise-resend-dialog.component.scss']
})
export class ReviseResendDialogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ReviseResendDialogComponent>) { }
  

  ngOnInit() {
  }

  close(){
    this.dialog.close()
  }


}