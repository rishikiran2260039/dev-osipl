import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit {

  items=[
    {"service":"Material Service","quantity":"20","issued":"18","variance":"2","remarks":"Need extra material"},
    {"service":"Material Service","quantity":"18","issued":"15","variance":"3","remarks":"Need extra material"},
    {"service":"Material Service","quantity":"20","issued":"16","variance":"4","remarks":"Need extra material"},
    {"service":"Material Service","quantity":"19","issued":"14","variance":"5","remarks":"Need extra material"},
    {"service":"Material Service","quantity":"20","issued":"18","variance":"2","remarks":"Need extra material"},
    
    ]
  
     
  constructor(public dialogRef: MatDialogRef<MaterialDialogComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}