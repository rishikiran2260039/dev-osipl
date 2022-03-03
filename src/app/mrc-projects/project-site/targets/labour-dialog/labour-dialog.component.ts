import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-labour-dialog',
  templateUrl: './labour-dialog.component.html',
  styleUrls: ['./labour-dialog.component.scss']
})
export class LabourDialogComponent implements OnInit {

  items=[
    {"service":"Labour Service","quantity":"20","issued":"18","variance":"2","remarks":"Need extra labour"},
    {"service":"Labour Service","quantity":"18","issued":"15","variance":"3","remarks":"Need extra labour"},
    {"service":"Labour Service","quantity":"20","issued":"16","variance":"4","remarks":"Need extra labour"},
    {"service":"Labour Service","quantity":"19","issued":"14","variance":"5","remarks":"Need extra labour"},
    {"service":"Labour Service","quantity":"20","issued":"18","variance":"2","remarks":"Need extra labour"},
    
    ]
  
     
  constructor(public dialogRef: MatDialogRef<LabourDialogComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}