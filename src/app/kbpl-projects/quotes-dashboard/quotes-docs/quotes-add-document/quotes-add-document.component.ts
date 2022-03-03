import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-quotes-add-document',
  templateUrl: './quotes-add-document.component.html',
  styleUrls: ['./quotes-add-document.component.scss']
})
export class QuotesAddDocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuotesAddDocumentComponent>) { 

  }

 
 ngOnInit() {
   
 }

 close(): void {
   this.dialogRef.close();
 }

 saveStep() {
   this.dialogRef.close();
 }

}