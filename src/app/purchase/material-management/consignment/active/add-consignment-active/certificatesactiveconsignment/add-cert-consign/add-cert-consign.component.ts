import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-add-cert-consign',
  templateUrl: './add-cert-consign.component.html',
  styleUrls: ['./add-cert-consign.component.scss']
})
export class AddCertConsignComponent implements OnInit {
  constructor(public dialog : MatDialogRef<AddCertConsignComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
