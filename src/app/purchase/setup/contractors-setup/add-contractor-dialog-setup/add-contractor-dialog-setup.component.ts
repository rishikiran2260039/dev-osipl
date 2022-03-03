import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-contractor-dialog-setup',
  templateUrl: './add-contractor-dialog-setup.component.html',
  styleUrls: ['./add-contractor-dialog-setup.component.scss']
})
export class AddContractorDialogSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddContractorDialogSetupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
