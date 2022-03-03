import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-service-challan',
  templateUrl: './add-service-challan.component.html',
  styleUrls: ['./add-service-challan.component.scss']
})
export class AddServiceChallanComponent implements OnInit {

  constructor(public dialog:MatDialogRef<AddServiceChallanComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
