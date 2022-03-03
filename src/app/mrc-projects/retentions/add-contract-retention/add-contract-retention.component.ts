import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-contract-retention',
  templateUrl: './add-contract-retention.component.html',
  styleUrls: ['./add-contract-retention.component.scss']
})
export class AddContractRetentionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddContractRetentionComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
