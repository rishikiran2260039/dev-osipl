import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddServiceChallanComponent } from '../../../service-challans/add-service-challan/add-service-challan.component';

@Component({
  selector: 'app-terms-pending-pop-up',
  templateUrl: './terms-pending-pop-up.component.html',
  styleUrls: ['./terms-pending-pop-up.component.scss']
})
export class TermsPendingPopUpComponent implements OnInit {

  constructor(public dialog:MatDialogRef<TermsPendingPopUpComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
