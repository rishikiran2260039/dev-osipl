import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-certificates-form',
  templateUrl: './add-certificates-form.component.html',
  styleUrls: ['./add-certificates-form.component.scss']
})
export class AddCertificatesFormComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddCertificatesFormComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
