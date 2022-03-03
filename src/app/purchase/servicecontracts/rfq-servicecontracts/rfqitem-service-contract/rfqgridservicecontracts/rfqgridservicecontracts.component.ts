import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rfqgridservicecontracts',
  templateUrl: './rfqgridservicecontracts.component.html',
  styleUrls: ['./rfqgridservicecontracts.component.scss']
})
export class RfqgridservicecontractsComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<RfqgridservicecontractsComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
