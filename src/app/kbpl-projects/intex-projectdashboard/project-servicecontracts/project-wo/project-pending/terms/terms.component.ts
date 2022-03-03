import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  constructor(public dialog:MatDialogRef<TermsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit() {
  }
  
  close(){
    this.dialog.close();
  }
  
  }
